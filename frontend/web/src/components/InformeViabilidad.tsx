import { ETIQUETA_ESTADO, INFORME_EJEMPLO } from '../lib/contenido';
import { IconoEstado } from './Iconos';

const CIRCUNFERENCIA = 2 * Math.PI * 26;

const colorValor = {
  ok: 'text-muted',
  warn: 'text-warn',
  bad: 'text-bad',
} as const;

/** Informe de ejemplo del hero: la firma visual de DevMinus. */
export function InformeViabilidad() {
  const informe = INFORME_EJEMPLO;
  const desplazamiento = CIRCUNFERENCIA * (1 - informe.puntaje / 100);

  return (
    <div className="min-w-0">
      <aside aria-labelledby="informe-titulo" className="surface-2 p-6">
        <h2 className="sr-only">Ejemplo de informe de viabilidad</h2>

        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p id="informe-titulo" className="m-0 font-display text-base font-semibold">
              {informe.titulo}
            </p>
            <p className="m-0 mt-1 font-mono text-label normal-case tracking-normal text-muted">{informe.propuesta}</p>
          </div>
          <span className="chip">Ejemplo</span>
        </div>

        <div className="mb-4 flex items-center gap-4 rounded-md border border-line bg-surface-1 p-4">
          <svg viewBox="0 0 64 64" className="h-16 w-16 shrink-0" aria-hidden="true" focusable="false">
            <circle cx="32" cy="32" r="26" fill="none" stroke="var(--color-line-strong)" strokeWidth="6" />
            <circle
              cx="32"
              cy="32"
              r="26"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={CIRCUNFERENCIA}
              strokeDashoffset={desplazamiento}
              transform="rotate(-90 32 32)"
            />
            <text x="32" y="35" textAnchor="middle" fill="var(--color-text)" fontFamily="var(--font-mono)" fontSize="16" fontWeight="500">
              {informe.puntaje}
            </text>
            <text x="32" y="49" textAnchor="middle" fill="var(--color-text-muted)" fontFamily="var(--font-mono)" fontSize="11">
              /100
            </text>
          </svg>
          <div>
            <span className="sr-only">Puntaje de viabilidad: {informe.puntaje} de 100.</span>
            <b className="block font-display text-md font-semibold">{informe.veredicto}</b>
            <span className="text-sm text-muted">{informe.resumen}</span>
          </div>
        </div>

        <ul className="m-0 grid list-none gap-2 p-0">
          {informe.filas.map((fila) => (
            <li key={fila.criterio} className="report-row">
              <IconoEstado estado={fila.estado} />
              <span>{fila.criterio}</span>
              <span className={`text-right font-mono font-medium tabular-nums ${colorValor[fila.estado]}`}>
                <span className="sr-only">{ETIQUETA_ESTADO[fila.estado]}. </span>
                {fila.valor}
              </span>
            </li>
          ))}
        </ul>

        <p className="m-0 mt-4 border-t border-line pt-4 text-sm">
          <strong>Recomendación:</strong> {informe.recomendacion}
        </p>
      </aside>
      <p className="label m-0 mt-2 text-center">Informe de ejemplo · escenario ficticio</p>
    </div>
  );
}
