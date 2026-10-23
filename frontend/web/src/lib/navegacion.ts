import type { MouseEvent } from 'react';
import { SLUGS_PUERTA, type Puerta } from './contenido';
import { useContactoStore } from '../stores/contactoStore';

/** Dirección compartible de una puerta: abre la página con el formulario ya preseleccionado. */
export function hrefContacto(puerta?: Puerta): string {
  return puerta ? `/?puerta=${SLUGS_PUERTA[puerta]}#contacto` : '#contacto';
}

/**
 * Clic en una puerta o en un llamado a la acción: preselecciona la opción del formulario,
 * actualiza la dirección y baja a Contacto sin recargar. Con Ctrl, Cmd, Mayús o clic medio
 * deja actuar al navegador, que abre el enlace con la preselección en otra pestaña.
 */
export function irAContacto(e: MouseEvent<HTMLAnchorElement>, puerta?: Puerta) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  e.preventDefault();
  useContactoStore.getState().setPuerta(puerta ?? '');
  history.pushState(null, '', hrefContacto(puerta));
  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
}
