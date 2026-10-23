import { COMPROMISOS, PENDIENTES, QUE_REVISAMOS } from '../lib/contenido';
import { useContactoStore } from '../stores/contactoStore';
import { IconoEstado } from './Iconos';

export function Auditoria() {
  const setPuerta = useContactoStore((s) => s.setPuerta);
  const precio = PENDIENTES.precioAuditoria ?? 'monto por definir';

  const cta = (extra = '') => (
    <a href="#contacto" className={`btn btn-primary ${extra}`} onClick={() => setPuerta('Auditoría')}>
      Solicitar auditoría
    </a>
  );

  return (
    <section id="auditoria" aria-labelledby="t-auditoria" className="pb-16 lg:pb-24">
      <div className="wrap">
        <div className="surface-1 surface-audit grid gap-8 p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:p-12">
          <div>
            <p className="label m-0">Auditoría de IA</p>
            <h2 id="t-auditoria" className="m-0 mt-4 max-w-h2 font-display text-2xl font-semibold">
              Antes de pagarle a otro, pregúntanos.
            </h2>
            <p className="m-0 my-6 max-w-prose text-muted">
              Si un proveedor te propone implementar un modelo de IA, lo analizamos desde AI engineering y recibes un informe independiente para decidir con datos.
            </p>
            <p className="label m-0 mb-2">Qué revisamos</p>
            <ul className="m-0 mb-6 grid list-none gap-2 p-0">
              {QUE_REVISAMOS.map((item) => (
                <li key={item} className="report-row grid-cols-[auto_1fr]">
                  <IconoEstado estado="neutral" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              {cta()}
              <span className="chip chip-accent">Precio fijo · {precio}</span>
            </div>
          </div>

          <div>
            <h3 className="label m-0 mb-4">Nuestros compromisos</h3>
            <ul className="m-0 grid list-none gap-2 p-0">
              {COMPROMISOS.map((c) => (
                <li key={c.titulo} className="report-row grid-cols-[auto_1fr] items-start p-4">
                  <span className="mt-1">
                    <IconoEstado estado="ok" />
                  </span>
                  <span>
                    <b className="block text-base font-semibold">{c.titulo}</b>
                    <span className="block text-sm text-muted">{c.detalle}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:hidden">{cta('w-full')}</div>
        </div>
      </div>
    </section>
  );
}
