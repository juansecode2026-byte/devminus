interface Props {
  id: string;
  etiqueta: string;
  titulo: string;
  descripcion?: string;
}

export function EncabezadoSeccion({ id, etiqueta, titulo, descripcion }: Props) {
  return (
    <div className="mb-10 grid gap-4 lg:mb-12 lg:grid-cols-2 lg:items-end">
      <div>
        <p className="label m-0">{etiqueta}</p>
        <h2 id={id} className="m-0 mt-4 max-w-h2 font-display text-2xl font-semibold">
          {titulo}
        </h2>
      </div>
      {descripcion && <p className="m-0 max-w-[44ch] text-muted">{descripcion}</p>}
    </div>
  );
}
