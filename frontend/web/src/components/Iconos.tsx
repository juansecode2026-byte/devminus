import type { ReactNode } from 'react';
import type { Estado, IconoPuerta } from '../lib/contenido';

const decorativo = { 'aria-hidden': true, focusable: false } as const;

export function IconoEstado({ estado, className = 'h-4 w-4 shrink-0' }: { estado: Estado | 'neutral'; className?: string }) {
  if (estado === 'ok') {
    return (
      <svg viewBox="0 0 16 16" className={className} {...decorativo}>
        <circle cx="8" cy="8" r="7" fill="var(--color-ok)" />
        <path d="m4.6 8.2 2.3 2.3 4.5-4.8" fill="none" stroke="var(--color-ok-ink)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (estado === 'warn') {
    return (
      <svg viewBox="0 0 16 16" className={className} {...decorativo}>
        <path d="M8 1.6 15 14H1z" fill="var(--color-warn)" stroke="var(--color-warn)" strokeLinejoin="round" />
        <path d="M8 6v3.6M8 11.6v.4" stroke="var(--color-warn-ink)" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (estado === 'bad') {
    return (
      <svg viewBox="0 0 16 16" className={className} {...decorativo}>
        <rect x="1.5" y="1.5" width="13" height="13" rx="2.5" fill="var(--color-bad)" />
        <path d="m5.5 5.5 5 5m0-5-5 5" stroke="var(--color-bad-ink)" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" className={`${className} text-muted`} {...decorativo}>
      <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="8" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function IconoFlecha({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...decorativo}>
      <path d="M3 8h10m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const TRAZOS_PUERTA: Record<IconoPuerta, ReactNode> = {
  lupa: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  codigo: (
    <>
      <path d="m8 7-5 5 5 5" />
      <path d="m16 7 5 5-5 5" />
      <path d="m13.5 4-3 16" />
    </>
  ),
  birrete: (
    <>
      <path d="M3 8.5 12 4l9 4.5-9 4.5z" />
      <path d="M7 10.5V15c0 1.7 2.2 3 5 3s5-1.3 5-3v-4.5" />
    </>
  ),
  escudo: (
    <>
      <path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};

export function IconoServicio({ icono }: { icono: IconoPuerta }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...decorativo}>
      {TRAZOS_PUERTA[icono]}
    </svg>
  );
}

export function IconoMenu({ abierto }: { abierto: boolean }) {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...decorativo}>
      {abierto ? <path d="m5 5 10 10m0-10L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
    </svg>
  );
}
