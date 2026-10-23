import type { Puerta } from '../lib/contenido';

export interface MensajeContacto {
  nombre: string;
  empresa: string;
  correo: string;
  puerta: Puerta | '';
  mensaje: string;
  /** Campo trampa: siempre viaja. El Worker debe responder 200 sin guardar nada si trae texto. */
  website: string;
}

export type ResultadoEnvio = { modo: 'enviado' } | { modo: 'prototipo' };

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT?.trim() ?? '';
const DEMORA_PROTOTIPO_MS = 800;
const TIEMPO_MAXIMO_MS = 15_000;

/**
 * Envía el formulario al Worker de Cloudflare.
 * El modo prototipo (simula el envío) solo existe en desarrollo. En producción, si falta
 * VITE_CONTACT_ENDPOINT el envío falla y el usuario ve el error, en lugar de perder el lead
 * mientras la página dice que todo salió bien.
 */
export async function enviarContacto(datos: MensajeContacto): Promise<ResultadoEnvio> {
  if (!ENDPOINT) {
    if (!import.meta.env.DEV) {
      throw new Error('VITE_CONTACT_ENDPOINT no está configurada');
    }
    await new Promise((resolve) => setTimeout(resolve, DEMORA_PROTOTIPO_MS));
    return { modo: 'prototipo' };
  }

  const respuesta = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
    signal: AbortSignal.timeout(TIEMPO_MAXIMO_MS),
  });
  if (!respuesta.ok) {
    throw new Error(`El servidor respondió ${respuesta.status}`);
  }
  return { modo: 'enviado' };
}
