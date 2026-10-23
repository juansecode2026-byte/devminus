# Prototipos de frontend — landing de DevMinus

Prototipos de la landing, hechos el 2026-10-23 a partir de un dashboard de vidrio ("Glassy Dashboard") como referencia visual. Los cuatro comparten estructura y tipografía; cambia solo la paleta. Son maquetas: el formulario no envía datos y el equipo y los productos tienen marcadores.

## Favoritos

| # | Paleta | Artefacto | Archivo |
|---|---|---|---|
| 1 (va ganando) | **Cobalto** (azul eléctrico) | https://claude.ai/artifact/SfQWgKNZeH1tZzjn9osfc5 | `devminus-cobalto.html` |
| 2 | **Ámbar** (naranja, el más cercano al dashboard de referencia) | https://claude.ai/artifact/QK4ASfhZJfJRYAbvYVt6Sx | `devminus-ambar.html` |

Los artefactos son privados. Los archivos HTML de esta carpeta son la copia local de cada uno.

## Versión 3 de Cobalto (2026-10-23)
Construida a partir de la revisión del diseñador UX (`REVISION-UX.md`).
- Artefacto: https://claude.ai/artifact/VuSMaV3HyUwx1yfC3ebTpg
- Archivo: `devminus-cobalto-v3.html`
- La versión 2 (`devminus-cobalto.html`) se conserva para comparar.

## Descartados por ahora
- Índigo: https://claude.ai/artifact/6sQdZU9Dq5YUUkgLKN2Cet
- Platino: https://claude.ai/artifact/XTVJx7vAAt8uc7J12H9bVz

## Qué se tomó del dashboard de referencia
- Paneles de vidrio translúcido con desenfoque y borde fino.
- Fondo oscuro con luz ambiental de color.
- Un solo color de acento; verde para lo que está bien, amarillo y rojo para advertencias y fallos.
- Etiquetas pequeñas en tono apagado y cifras en letra monoespaciada.
- Tarjetas que suben un poco al pasar el mouse.

## Estructura de la landing
Barra superior, hero (con un informe de auditoría de ejemplo), las cuatro puertas, método, auditoría, para quién, productos (candyCRM), equipo y contacto.

## Pendiente para el frontend real
- Elegir la paleta definitiva (hoy gana cobalto).
- Equipo: perfiles reales.
- Productos: fichas del resto del catálogo.
- Formulario: conectarlo a un Worker de Cloudflare y a Supabase.
- Pasar el prototipo a `frontend/web/` (React + Vite + TypeScript + Tailwind).
