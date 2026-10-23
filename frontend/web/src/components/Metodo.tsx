import { METODO } from '../lib/contenido';
import { EncabezadoSeccion } from './EncabezadoSeccion';

export function Metodo() {
  return (
    <section aria-labelledby="t-metodo" className="pb-16 lg:pb-24">
      <div className="wrap">
        <EncabezadoSeccion id="t-metodo" etiqueta="Método" titulo="Un solo proceso detrás de todo." />
        <ol className="surface-1 m-0 grid list-none p-2 sm:grid-cols-2 lg:grid-cols-4">
          {METODO.map((paso, i) => (
            <li
              key={paso.numero}
              className={`flex flex-col gap-2 p-6 ${i > 0 ? 'border-t border-line' : ''} ${
                i < 2 ? 'sm:border-t-0' : ''
              } ${i % 2 === 1 ? 'sm:border-l sm:border-line' : ''} lg:border-t-0 ${i > 0 ? 'lg:border-l lg:border-line' : ''}`}
            >
              <span className="font-mono text-sm font-medium text-accent">{paso.numero}</span>
              <h3 className="m-0 font-display text-lg font-semibold">{paso.titulo}</h3>
              <p className="m-0 text-body-sm text-muted">{paso.descripcion}</p>
              <span className="label mt-auto pt-4">{paso.servicio}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
