import { useEffect, useRef, useState } from 'react';
import { NAV } from '../lib/contenido';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { IconoFlecha, IconoMenu } from './Iconos';
import { Logo } from './Logo';

const IDS_ESPIADOS = [...NAV.map((item) => item.id), 'contacto'];

const claseItemEscritorio =
  'flex min-h-10 items-center rounded-pill px-4 text-sm font-medium text-muted no-underline transition-colors duration-200 hover:bg-surface-2 hover:text-text aria-[current=location]:bg-[image:var(--gradient-accent)] aria-[current=location]:font-semibold aria-[current=location]:text-accent-ink aria-[current=location]:shadow-nav-active';

const claseItemMovil =
  'flex min-h-12 items-center rounded-md px-4 text-base font-medium text-muted no-underline hover:bg-surface-2 hover:text-text aria-[current=location]:bg-[image:var(--gradient-accent)] aria-[current=location]:font-semibold aria-[current=location]:text-accent-ink';

export function BarraNavegacion() {
  const activa = useScrollSpy(IDS_ESPIADOS);
  const [abierto, setAbierto] = useState(false);
  const contenedorRef = useRef<HTMLDivElement>(null);
  const botonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!abierto) return;
    function alTeclear(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setAbierto(false);
        botonRef.current?.focus();
      }
    }
    // pointerdown y no click: iOS Safari no propaga click desde elementos no interactivos.
    function alTocarFuera(e: PointerEvent) {
      if (!contenedorRef.current?.contains(e.target as Node)) setAbierto(false);
    }
    document.addEventListener('keydown', alTeclear);
    document.addEventListener('pointerdown', alTocarFuera);
    return () => {
      document.removeEventListener('keydown', alTeclear);
      document.removeEventListener('pointerdown', alTocarFuera);
    };
  }, [abierto]);

  const cerrar = () => setAbierto(false);
  const actual = (id: string) => (activa === id ? ('location' as const) : undefined);

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-40 py-4">
      <div ref={contenedorRef} className="wrap relative">
        <nav aria-label="Principal">
          <div className="flex min-h-16 items-center gap-2 rounded-pill border border-line-nav bg-nav py-2 pl-4 pr-2 backdrop-blur-[var(--blur-glass)] backdrop-saturate-[1.4] sm:gap-4 sm:pl-6">
            <Logo alElegir={cerrar} />

            <ul className="m-0 mx-auto hidden list-none gap-1 rounded-pill border border-line-nav bg-menu p-1 lg:flex">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} aria-current={actual(item.id)} className={claseItemEscritorio}>
                    {item.texto}
                  </a>
                </li>
              ))}
            </ul>

            <div className="ml-auto flex items-center gap-2 lg:ml-0">
              <a
                href="#contacto"
                aria-current={actual('contacto')}
                onClick={cerrar}
                className="btn btn-primary min-h-11 px-4 sm:px-5 lg:min-h-12 lg:px-6"
              >
                Hablemos
                <span className="hidden sm:inline-flex">
                  <IconoFlecha />
                </span>
              </a>
              <button
                ref={botonRef}
                type="button"
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-pill border border-line-nav bg-menu text-text transition-colors duration-200 hover:bg-surface-2 active:brightness-95 lg:hidden"
                aria-expanded={abierto}
                aria-controls="menu-movil"
                aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
                onClick={() => setAbierto((v) => !v)}
              >
                <IconoMenu abierto={abierto} />
              </button>
            </div>
          </div>

          <ul
            id="menu-movil"
            className={`absolute left-[max(var(--gutter),env(safe-area-inset-left,0px))] right-[max(var(--gutter),env(safe-area-inset-right,0px))] top-[calc(100%+var(--space-1))] m-0 grid list-none gap-1 rounded-lg border border-line-nav bg-nav p-2 backdrop-blur-[var(--blur-glass)] transition-[opacity,transform,visibility] duration-fast lg:hidden ${
              abierto ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
            }`}
          >
            {NAV.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} aria-current={actual(item.id)} className={claseItemMovil} onClick={cerrar}>
                  {item.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
