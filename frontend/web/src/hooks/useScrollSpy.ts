import { useEffect, useState } from 'react';

/**
 * Devuelve el id de la sección que ocupa la franja central de la pantalla,
 * o null cuando ninguna lo hace (por ejemplo, en el hero).
 */
export function useScrollSpy(ids: readonly string[]): string | null {
  const [activa, setActiva] = useState<string | null>(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const visibles = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => visibles.set(e.target.id, e.isIntersecting));
        const actual = [...ids].reverse().find((id) => visibles.get(id)) ?? null;
        setActiva(actual);
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return activa;
}
