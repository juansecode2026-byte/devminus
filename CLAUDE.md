@documentacion/STACK.md

# DevMinus

Marca de tecnología en IA: consultoría, desarrollo de software de punta a punta, soluciones con agentes y capacitación para empresas. Lema: **Soluciones inteligentes con firma humana.**

Nombre oficial: **DevMinus** (D y M mayúsculas). En minúscula (devminus) o mayúscula (DEVMINUS) es el mismo nombre; la forma de referencia es DevMinus.

## Contexto de marca

Todo el contexto de marca (posicionamiento, oferta, catálogo, tono, hoja de ruta, pendientes) está en [MARCA.md](documentacion/MARCA.md) y es la **fuente de verdad**. [MARCA.html](documentacion/MARCA.html) es solo la vista visual; si difieren, manda el `.md`. Al cambiar la marca, editar primero el `.md` y luego reflejarlo en el HTML.

## Alcance

DevMinus es la **marca y el índice**, no el contenedor de otros proyectos. Cada proyecto del laboratorio sigue siendo una carpeta independiente; DevMinus los referencia (portafolio, fichas, landing), no los contiene. Las academias quedan fuera de esta marca.

Lo que se construye acá es el **sitio de marca**: portada, servicios, equipo y contacto. Frontend con el peso principal; backend y base de datos mínimos (formulario de contacto, leads).

## Convenciones

- Interfaz y textos en español.
- Commits en español, en modo imperativo.
- La estructura de carpetas la maneja `scripts/estructura.py` (`crear` / `revisar`); `ESTRUCTURA.md` es generado, no se edita a mano.

## Agentes

No hay ninguno todavía, a propósito. `backend/agent/` y `agentes-sdk/` están vacías. Un proceso que se repite se anota en `DECISIONES.md` como candidato aplazado, no se convierte en agente sobre la marcha. Si algún día un agente termina fuera de `agentes-sdk/` por ser un endpoint, este archivo dice dónde quedó y por qué.
