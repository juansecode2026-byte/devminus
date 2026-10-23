import { PRODUCTO_CANDY } from '../lib/contenido';
import { EncabezadoSeccion } from './EncabezadoSeccion';
import { IconoFlecha } from './Iconos';

export function Productos() {
  const p = PRODUCTO_CANDY;

  return (
    <section id="productos" aria-labelledby="t-productos" className="pb-16 lg:pb-24">
      <div className="wrap">
        <EncabezadoSeccion
          id="t-productos"
          etiqueta="Productos"
          titulo="Software propio, listo para usar."
          descripcion="Productos de DevMinus que se alquilan por suscripción o se adaptan a tu empresa."
        />
        <article className="surface-1 p-6 lg:p-8">
          <span className="chip chip-accent">{p.modalidad}</span>
          <h3 className="m-0 mb-1 mt-4 font-display text-xl font-semibold">{p.nombre}</h3>
          <p className="m-0 mb-4 text-sm text-muted">{p.autoria}</p>
          <p className="m-0 mb-4 max-w-prose text-muted">{p.descripcion}</p>
          <div className="mb-6 flex flex-wrap gap-2">
            {p.etiquetas.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
          {p.enlace ? (
            <a href={p.enlace} className="inline-flex min-h-11 items-center gap-2 font-medium text-accent no-underline hover:underline">
              Conoce {p.nombre} <IconoFlecha />
            </a>
          ) : null}
        </article>
        <p className="m-0 mt-4 text-sm text-muted">Más productos del catálogo, pronto.</p>
      </div>
    </section>
  );
}
