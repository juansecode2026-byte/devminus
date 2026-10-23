import { SERVICIOS } from '../lib/contenido';
import { useContactoStore } from '../stores/contactoStore';
import { EncabezadoSeccion } from './EncabezadoSeccion';
import { IconoFlecha, IconoServicio } from './Iconos';

export function Servicios() {
  const setPuerta = useContactoStore((s) => s.setPuerta);

  return (
    <section id="servicios" aria-labelledby="t-servicios" className="py-16 lg:py-24">
      <div className="wrap">
        <EncabezadoSeccion
          id="t-servicios"
          etiqueta="Cuatro puertas, un mismo equipo"
          titulo="Entra por donde lo necesites."
          descripcion="Cada servicio se puede contratar solo, y cada uno lleva naturalmente a los otros."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {SERVICIOS.map((s) => (
            <a
              key={s.puerta}
              href="#contacto"
              onClick={() => setPuerta(s.puerta)}
              className="surface-1 group flex flex-col gap-4 p-6 text-text no-underline transition-[transform,border-color] duration-200 ease-brand hover:-translate-y-1 hover:border-line-strong active:-translate-y-0.5 motion-reduce:hover:translate-y-0"
            >
              <span className="grid h-10 w-10 place-items-center rounded-sm border border-line bg-surface-2">
                <IconoServicio icono={s.icono} />
              </span>
              <h3 className="m-0 font-display text-lg font-semibold">{s.puerta}</h3>
              <p className="m-0 font-medium">{s.frase}</p>
              <p className="m-0 text-body-sm text-muted">{s.descripcion}</p>
              <span className="mt-auto grid grid-cols-[1fr_auto] items-end gap-x-2 gap-y-1 border-t border-line pt-4">
                <span className="label col-span-2">Empieza con</span>
                <span className="text-sm font-medium">{s.entrada}</span>
                <span className="transition-[transform,color] duration-200 ease-brand group-hover:translate-x-1 group-hover:text-accent">
                  <IconoFlecha />
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
