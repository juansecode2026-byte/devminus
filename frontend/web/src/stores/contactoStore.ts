import { create } from 'zustand';
import type { Puerta } from '../lib/contenido';

interface ContactoState {
  /** Puerta elegida en el formulario; las tarjetas y los CTA la preseleccionan. */
  puerta: Puerta | '';
  setPuerta: (puerta: Puerta | '') => void;
}

export const useContactoStore = create<ContactoState>((set) => ({
  puerta: '',
  setPuerta: (puerta) => set({ puerta }),
}));
