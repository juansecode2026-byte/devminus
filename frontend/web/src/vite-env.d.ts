/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL pública del Worker que recibe el formulario. Vacía = modo prototipo. */
  readonly VITE_CONTACT_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
