import { PENDIENTES } from '../lib/contenido';
import { FormularioContacto } from './FormularioContacto';

const PASOS = [
  'Escribes.',
  `Te respondemos con una propuesta de por dónde empezar${PENDIENTES.plazoRespuesta ? ` en ${PENDIENTES.plazoRespuesta}` : ''}.`,
  'Decides.',
];

export function Contacto() {
  return (
    <section id="contacto" aria-labelledby="t-contacto" className="pb-16 lg:pb-24">
      <div className="wrap">
        <div className="surface-2 grid gap-8 p-8 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-12 lg:p-12">
          <div>
            <p className="label m-0">Contacto</p>
            <h2 id="t-contacto" className="m-0 mt-4 max-w-h2 font-display text-2xl font-semibold">
              Cuéntanos qué quieres resolver.
            </h2>
            <p className="m-0 my-6 text-muted">
              Respondemos con una propuesta de por dónde empezar: diagnóstico, construcción, capacitación o auditoría.
            </p>
            <p className="label m-0 mb-4">Qué pasa después</p>
            <ol className="m-0 mb-6 grid list-none gap-4 p-0 text-sm">
              {PASOS.map((paso, i) => (
                <li key={paso} className="grid grid-cols-[var(--space-4)_1fr]">
                  <span className="font-mono font-medium text-accent">{String(i + 1).padStart(2, '0')}</span>
                  {paso}
                </li>
              ))}
            </ol>
            {PENDIENTES.correo && <p className="m-0 text-sm text-muted">Correo directo: {PENDIENTES.correo}.</p>}
          </div>
          <FormularioContacto />
        </div>
      </div>
    </section>
  );
}
