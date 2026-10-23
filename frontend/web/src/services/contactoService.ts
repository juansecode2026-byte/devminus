import type { Puerta } from '../lib/contenido';

export interface MensajeContacto {
  nombre: string;
  empresa: string;
  correo: string;
  puerta: Puerta | '';
  mensaje: string;
}

export type ResultadoEnvio = { modo: 'enviado' } | { modo: 'prototipo' };

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT?.trim() ?? '';
const DEMORA_PROTOTIPO_MS = 800;

/**
 * Envía el formulario al Worker de Cloudflare.
 * Sin VITE_CONTACT_ENDPOINT configurada, simula el envío (modo prototipo)
 * para poder revisar los estados de la interfaz sin backend.
 */
export async function enviarContacto(datos: MensajeContacto): Promise<ResultadoEnvio> {
  if (!ENDPOINT) {
    await new Promise((resolve) => setTimeout(resolve, DEMORA_PROTOTIPO_MS));
    return { modo: 'prototipo' };
  }

  const respuesta = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  });
  if (!respuesta.ok) {
    throw new Error(`El servidor respondió ${respuesta.status}`);
  }
  return { modo: 'enviado' };
}
