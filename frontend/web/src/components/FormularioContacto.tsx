import { useEffect, useRef, useState, type FormEvent, type Ref } from 'react';
import { PENDIENTES, PUERTAS, type Puerta } from '../lib/contenido';
import { enviarContacto } from '../services/contactoService';
import { useContactoStore } from '../stores/contactoStore';
import { IconoEstado } from './Iconos';

type Estado = 'reposo' | 'enviando' | 'exito' | 'error';
type Campo = 'nombre' | 'correo';

const CORREO_VALIDO = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const MENSAJES_ERROR: Record<Campo, string> = {
  nombre: 'Escribe tu nombre.',
  correo: 'Revisa el correo: falta la @ o el dominio.',
};

function validar(campo: Campo, valor: string): boolean {
  return campo === 'nombre' ? valor.trim().length > 0 : CORREO_VALIDO.test(valor.trim());
}

export function FormularioContacto() {
  const puerta = useContactoStore((s) => s.puerta);
  const setPuerta = useContactoStore((s) => s.setPuerta);

  const [nombre, setNombre] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [trampa, setTrampa] = useState('');
  const [errores, setErrores] = useState<Record<Campo, boolean>>({ nombre: false, correo: false });
  const [estado, setEstado] = useState<Estado>('reposo');
  const [modoPrototipo, setModoPrototipo] = useState(false);

  const nombreRef = useRef<HTMLInputElement>(null);
  const correoRef = useRef<HTMLInputElement>(null);
  const exitoRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (estado === 'exito') exitoRef.current?.focus();
  }, [estado]);

  function revisar(campo: Campo, valor: string) {
    setErrores((prev) => ({ ...prev, [campo]: !validar(campo, valor) }));
  }

  async function alEnviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nombreOk = validar('nombre', nombre);
    const correoOk = validar('correo', correo);
    setErrores({ nombre: !nombreOk, correo: !correoOk });
    if (!nombreOk) return nombreRef.current?.focus();
    if (!correoOk) return correoRef.current?.focus();
    if (trampa) return; // envío de un bot: se ignora en silencio

    setEstado('enviando');
    try {
      const resultado = await enviarContacto({ nombre, empresa, correo, puerta, mensaje });
      setModoPrototipo(resultado.modo === 'prototipo');
      setEstado('exito');
    } catch {
      setEstado('error'); // los datos escritos se conservan
    }
  }

  if (estado === 'exito') {
    return (
      <div role="status" className="surface-1 p-8">
        <IconoEstado estado="ok" className="h-8 w-8" />
        <h3 ref={exitoRef} tabIndex={-1} className="m-0 mb-2 mt-4 font-display text-xl font-semibold focus:outline-none">
          Recibimos tu mensaje.
        </h3>
        <p className="m-0 text-muted">
          Te escribimos a {correo.trim()} con una propuesta de por dónde empezar.
          {modoPrototipo && ' (Modo prototipo: no se envió ningún dato.)'}
        </p>
      </div>
    );
  }

  const enviando = estado === 'enviando';
  const correoContacto = PENDIENTES.correo ?? 'el correo de contacto (por definir)';

  return (
    <form noValidate onSubmit={alEnviar} aria-busy={enviando} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <CampoTexto
          id="f-nombre"
          etiqueta="Nombre"
          obligatorio
          autoComplete="name"
          valor={nombre}
          alCambiar={setNombre}
          alSalir={() => revisar('nombre', nombre)}
          error={errores.nombre ? MENSAJES_ERROR.nombre : null}
          soloLectura={enviando}
          refInput={nombreRef}
        />
        <CampoTexto id="f-empresa" etiqueta="Empresa" autoComplete="organization" valor={empresa} alCambiar={setEmpresa} soloLectura={enviando} />
      </div>
      <CampoTexto
        id="f-correo"
        etiqueta="Correo"
        tipo="email"
        obligatorio
        autoComplete="email"
        valor={correo}
        alCambiar={setCorreo}
        alSalir={() => revisar('correo', correo)}
        error={errores.correo ? MENSAJES_ERROR.correo : null}
        soloLectura={enviando}
        refInput={correoRef}
      />

      <div className="grid gap-1.5">
        <label htmlFor="f-puerta" className="text-sm font-medium">
          Qué necesitas
        </label>
        <select
          id="f-puerta"
          className="field-input"
          value={puerta}
          disabled={enviando}
          onChange={(e) => setPuerta(e.target.value as Puerta | '')}
        >
          <option value="" disabled>
            Elige una opción
          </option>
          {PUERTAS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="f-mensaje" className="text-sm font-medium">
          Mensaje
        </label>
        <textarea
          id="f-mensaje"
          className="field-input min-h-[120px] resize-y"
          placeholder="Ej.: un proveedor nos propone un agente de soporte y queremos saber si es viable."
          value={mensaje}
          readOnly={enviando}
          onChange={(e) => setMensaje(e.target.value)}
        />
      </div>

      {/* Campo trampa contra spam: invisible y fuera del orden de tabulación. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="f-web">Sitio web</label>
        <input id="f-web" name="website" tabIndex={-1} autoComplete="off" value={trampa} onChange={(e) => setTrampa(e.target.value)} />
      </div>

      {estado === 'error' && (
        <p role="alert" className="m-0 rounded-sm border border-bad p-4 text-sm">
          No pudimos enviar tu mensaje. Revisa tu conexión e inténtalo de nuevo, o escríbenos a {correoContacto}.
        </p>
      )}

      <div className="grid sm:flex">
        <button type="submit" className="btn btn-primary" disabled={enviando}>
          {enviando && (
            <span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-accent-ink border-t-transparent motion-reduce:animate-none" />
          )}
          {enviando ? 'Enviando…' : 'Enviar mensaje'}
        </button>
      </div>
      <p className="m-0 text-sm text-muted">
        Al enviar aceptas el tratamiento de tus datos según nuestra política de datos
        {PENDIENTES.politicaDatos ? '' : ' (por definir)'}.
      </p>
    </form>
  );
}

interface CampoTextoProps {
  id: string;
  etiqueta: string;
  valor: string;
  alCambiar: (valor: string) => void;
  alSalir?: () => void;
  tipo?: 'text' | 'email';
  obligatorio?: boolean;
  autoComplete?: string;
  error?: string | null;
  soloLectura?: boolean;
  refInput?: Ref<HTMLInputElement>;
}

function CampoTexto({ id, etiqueta, valor, alCambiar, alSalir, tipo = 'text', obligatorio, autoComplete, error, soloLectura, refInput }: CampoTextoProps) {
  const idError = `${id}-error`;
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {etiqueta}
        {obligatorio && ' *'}
      </label>
      <input
        ref={refInput}
        id={id}
        type={tipo}
        className="field-input"
        autoComplete={autoComplete}
        value={valor}
        readOnly={soloLectura}
        aria-required={obligatorio || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? idError : undefined}
        onChange={(e) => alCambiar(e.target.value)}
        onBlur={alSalir}
      />
      {error && (
        <p id={idError} className="m-0 flex items-start gap-1.5 text-sm text-bad">
          <span className="mt-0.5">
            <IconoEstado estado="bad" />
          </span>
          {error}
        </p>
      )}
    </div>
  );
}
