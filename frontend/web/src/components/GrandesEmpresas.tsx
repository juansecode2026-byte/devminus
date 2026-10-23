import { EMPRESAS_PASOS } from '../lib/contenido';
import { hrefContacto, irAContacto } from '../lib/navegacion';

export function GrandesEmpresas() {
  return (
    <section id="empresas" aria-labelledby="t-empresas" className="py-16 lg:py-24">
      <div className="wrap grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
        <div>
          <p className="label m-0">Grandes empresas</p>
          <h2 id="t-empresas" className="m-0 mt-4 max-w-h2 font-display text-2xl font-semibold">
            Tu propio equipo de AI engineering.
          </h2>
          <p className="m-0 my-6 max-w-prose text-muted">
            Te ayudamos a definir roles, stack, procesos de evaluación y gobierno de modelos, y acompañamos los primeros proyectos hasta que el equipo camina solo.
          </p>
          <a href={hrefContacto('Consultoría')} className="btn btn-ghost" onClick={(e) => irAContacto(e, 'Consultoría')}>
            Conversemos sobre tu área de IA
          </a>
        </div>
        <ol className="m-0 list-none p-0">
          {EMPRESAS_PASOS.map((paso, i) => (
            <li key={paso} className="grid grid-cols-[var(--space-5)_1fr] border-t border-line py-6 font-display text-md font-medium last:border-b">
              <span className="font-mono text-sm font-medium leading-7 text-accent">{String(i + 1).padStart(2, '0')}</span>
              {paso}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
