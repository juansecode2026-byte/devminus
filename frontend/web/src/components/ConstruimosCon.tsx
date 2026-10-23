import { CONSTRUIMOS_CON } from '../lib/contenido';

/** Franja de tecnologías. Solo nombres en texto hasta revisar las guías de marca de cada proveedor. */
export function ConstruimosCon() {
  return (
    <div className="wrap py-8 lg:py-12">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-12">
        <p className="label m-0">Construimos con</p>
        <ul className="m-0 grid list-none grid-cols-2 gap-x-12 gap-y-6 p-0 font-display text-md font-medium text-muted sm:flex sm:flex-wrap">
          {CONSTRUIMOS_CON.map((nombre) => (
            <li key={nombre}>{nombre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
