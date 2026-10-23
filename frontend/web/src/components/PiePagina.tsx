import { NAV, PENDIENTES } from '../lib/contenido';
import { Logo } from './Logo';

export function PiePagina() {
  return (
    <footer className="mt-8 border-t border-line pb-16 pt-12">
      <div className="wrap grid gap-8 text-sm text-muted sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-12">
        <Logo />
        <nav aria-label="Pie" className="flex flex-wrap gap-x-6 gap-y-1 sm:justify-center">
          {[...NAV, { id: 'contacto', texto: 'Contacto' }].map((item) => (
            <a key={item.id} href={`#${item.id}`} className="inline-flex min-h-11 items-center no-underline hover:text-text">
              {item.texto}
            </a>
          ))}
        </nav>
        <div>
          © {new Date().getFullYear()} DevMinus
          <br />
          {PENDIENTES.correo ?? 'Correo por definir'} · Política de datos{PENDIENTES.politicaDatos ? '' : ' por definir'}
        </div>
      </div>
    </footer>
  );
}
