# Prompt v2 para Gemini: optimizar el rendimiento de la oficina de AI Engineering

> Creado el 2026-11-10. **Usar solo cuando la oficina de la v1 ya esté construida y funcionando.**
> Proyecto: `Repositorios NO comerciales/OFICINA AGENTICA DEVMINUS DUBAI/1-gemini/visual/app/`.
> Hardware objetivo, medido el 2026-11-10: ASUS TUF A15, Ryzen 7 7445HS, 16 GB RAM, NVIDIA RTX 3050 Laptop 4 GB + AMD Radeon 740M integrada, pantalla 1920×1080 a 60 Hz.

## Antes de pegarlo (para ti, no para Gemini)
- Confirma que Chrome usa la NVIDIA (`chrome://gpu`, línea GL_RENDERER). Si mide con la integrada, los números no sirven.
- Cargador conectado y plan de energía en Rendimiento.

## Prompt

```text
La oficina virtual de AI Engineering ya está construida. Ahora quiero optimizar su rendimiento sin perder calidad visual. No cambies la distribución, los agentes, las pantallas ni la lógica: solo cómo se dibuja.

Hardware objetivo: ASUS TUF A15, Ryzen 7 7445HS (6 núcleos), 16 GB de RAM, NVIDIA GeForce RTX 3050 Laptop con 4 GB de VRAM y GPU integrada AMD Radeon 740M. Pantalla de 1920×1080 a 60 Hz.

## Paso 1: mide antes de tocar
1. Haz un commit del estado actual.
2. Agrega un contador de depuración (activado con ?debug en la URL) que muestre FPS, draw calls, triángulos, geometrías, texturas y el nombre de la GPU (WEBGL_debug_renderer_info).
3. Mide la vista general, la pantalla gigante en cada modo, el centro de juegos y la secuencia del creador. Repórtame los números y los tres mayores costos que encuentres, con tu plan para cada uno. Espera mi confirmación antes de optimizar.

## Paso 2: optimizaciones a aplicar
- Tres niveles de calidad (Bajo, Medio y Alto), elegidos automáticamente según los FPS de los primeros segundos y cambiables desde un botón.
- Objetivo: 60 FPS en Medio a 1080p con la RTX 3050.
- Pixel ratio máximo de 1.5 en Alto, 1.25 en Medio y 1.0 en Bajo. Debe bajar solo si los FPS caen de 50 durante varios segundos.
- Presupuesto en Medio: menos de 250 draw calls y menos de 400 000 triángulos. Texturas de máximo 1024 px.
- Sombras: una sola luz direccional con sombras (mapa de 2048 en Alto, 1024 en Medio, sin sombras en Bajo). Para los agentes, sombras de contacto (un disco suave) en vez de sombras dinámicas.
- Revisa que todo lo repetido use instancias y materiales compartidos. Corrige lo que no.
- Pantallas en canvas: confirma que se redibujan entre 8 y 10 veces por segundo y que una pantalla que no se ve no se redibuja.
- Etiquetas de nombres en una sola capa HTML, actualizadas una vez por cuadro y ocultas si quedan detrás de la cámara o fuera de vista.
- Post-procesado solo en Alto (un bloom suave en pantallas y neones). En Medio y Bajo, sin post-procesado.
- Detener el render cuando la pestaña no está visible.
- Si la GPU detectada es la Radeon integrada, mostrar un aviso discreto: "Estás usando la gráfica integrada; asigna el navegador a la NVIDIA para mejor rendimiento".
- Libera geometrías, materiales y texturas al cambiar de escena para que no se acumule memoria.

## Paso 3: verificación
- Corre el build y revisa que la consola esté limpia.
- Repórtame una tabla con FPS, draw calls y triángulos en Bajo, Medio y Alto, antes y después, en las mismas vistas del paso 1.
- Confirma que no hay cambios visuales en Alto respecto a la versión anterior, salvo las mejoras pedidas.
- Dime qué archivos cambiaste.
```
