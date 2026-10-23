@documentacion/STACK.md

# DevMinus

Marca de tecnología en IA: consultoría, desarrollo de software de punta a punta, soluciones con agentes y capacitación para empresas. Lema: **Soluciones inteligentes con firma humana.**

Nombre oficial: **DevMinus** (D y M mayúsculas). En minúscula (devminus) o mayúscula (DEVMINUS) es el mismo nombre; la forma de referencia es DevMinus.

## Contexto de marca

Todo el contexto de marca (posicionamiento, oferta, catálogo, tono, hoja de ruta, pendientes) está en [MARCA.md](documentacion/MARCA.md) y es la **fuente de verdad**. [MARCA.html](documentacion/MARCA.html) es solo la vista visual; si difieren, manda el `.md`. Al cambiar la marca, editar primero el `.md` y luego reflejarlo en el HTML.

## Alcance

DevMinus es la **marca principal**: todos los proyectos del repositorio le pertenecen y forman su catálogo, **excepto las academias**, que son solo de aprendizaje personal y quedan fuera. Cada proyecto sigue siendo una carpeta independiente por una regla técnica del laboratorio; DevMinus los presenta (portafolio, fichas, landing) sin contenerlos físicamente.

Lo que se construye acá es el **sitio de marca**: portada, servicios, equipo y contacto. Frontend con el peso principal; backend y base de datos mínimos (formulario de contacto, leads).

## Convenciones

- Interfaz y textos en español.
- Commits en español, en modo imperativo.
- La estructura de carpetas la maneja `scripts/estructura.py` (`crear` / `revisar`); `ESTRUCTURA.md` es generado, no se edita a mano.

## Frontend (`frontend/web/`)

- React 18 + Vite + TypeScript + Tailwind 3 + Zustand + React Router. Comandos: `npm run dev`, `npm run build`, `npm run lint`, `npm run typecheck`.
- **Excepción declarada al estándar del laboratorio:** el skill `revisor-full-stack` pide CSS Modules; este proyecto usa **Tailwind** porque así lo fija `STACK.md` (mismo stack de hellominus.com). La regla de "cero valores sueltos" se mantiene: todos los valores viven en `src/lib/tokens.css` y `tailwind.config.ts` solo los referencia.
- El diseño sale de `documentacion/prototipos-frontend/REVISION-UX.md` (prototipo `devminus-cobalto-v3.html`).
- El contenido de la página vive en `src/lib/contenido.ts` y debe coincidir con `MARCA.md`. Los valores `null` son pendientes de decisión y se muestran como "por definir".
- La sección de Equipo no se renderiza hasta tener al menos dos perfiles reales.
- Variables de entorno (ver `frontend/web/.env.example`):
  - `VITE_CONTACT_ENDPOINT`: URL del Worker que recibe el formulario. Vacía = modo prototipo (valida y muestra estados, no envía). Es pública: nunca poner secretos en variables `VITE_`.
- **Supabase:** el proyecto se llama `Devminus`, ref `kobxxqgstzsdlznyrgrc`, región `ca-central-1`. Está vinculado por variables en `frontend/web/.env.local` (ignorado por Git). Hoy no tiene tablas ni se usa desde la app: las migraciones se harán cuando el formulario deba guardar leads. Cuando existan, RLS desde el primer día y las políticas en archivos SQL aparte (`db/policies/`).
- Despliegue previsto en Cloudflare Pages; `public/_redirects` hace el fallback de la SPA.

## Agentes

No hay ninguno todavía, a propósito. `backend/agent/` y `agentes-sdk/` están vacías. Un proceso que se repite se anota en `DECISIONES.md` como candidato aplazado, no se convierte en agente sobre la marcha. Si algún día un agente termina fuera de `agentes-sdk/` por ser un endpoint, este archivo dice dónde quedó y por qué.
