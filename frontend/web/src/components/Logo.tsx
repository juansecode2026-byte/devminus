interface Props {
  /** Se usa para cerrar el menú móvil cuando se elige el logo. */
  alElegir?: () => void;
}

export function Logo({ alElegir }: Props) {
  return (
    <a
      href="#inicio"
      onClick={alElegir}
      aria-label="DevMinus, inicio"
      className="flex min-h-11 items-center gap-2 font-display text-lg font-semibold tracking-tight text-text no-underline"
    >
      <span aria-hidden="true" className="grid h-7 w-7 place-items-center rounded-sm bg-accent font-mono text-base font-medium text-accent-ink">
        −
      </span>
      DevMinus
    </a>
  );
}
