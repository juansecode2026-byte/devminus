export function Logo() {
  return (
    <a href="#inicio" aria-label="DevMinus, inicio" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-text no-underline">
      <span aria-hidden="true" className="grid h-7 w-7 place-items-center rounded-sm bg-accent font-mono text-base font-medium text-accent-ink">
        −
      </span>
      DevMinus
    </a>
  );
}
