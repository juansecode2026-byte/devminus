# Prompt para Gemini: rendimiento de la escena y uso de la GPU

> Creado el 2026-11-10. Versión de `gemini-oficina-ai-engineering-v2-optimizacion.md` ajustada al código real del proyecto `Repositorios NO comerciales/OFICINA AGENTICA DEVMINUS DUBAI/1-gemini/visual/app/` (Three.js + Vite), después de leer `main.js`.
> Hardware objetivo: ASUS TUF A15, Ryzen 7 7445HS, 16 GB RAM, NVIDIA RTX 3050 Laptop 4 GB + AMD Radeon 740M integrada, pantalla 1920×1080 a 60 Hz.

## Lo que ya está bien en el código (no rehacer)
- `WebGLRenderer` con `powerPreference: 'high-performance'` (`main.js`, línea 169).
- Sombras estáticas: `shadowMap.autoUpdate = false`, se recalculan solo cuando hace falta. Es una buena decisión.
- Sin post-procesado en `concept4`. Se detiene el render con la pestaña oculta (`visibilitychange`).
- Existe un modo `?debug` con un cuadro de datos.

## Puntos sospechosos
- `setPixelRatio(Math.min(devicePixelRatio, 2))` y `antialias: true` fijos: con escalado de Windows, el render puede ir a una resolución mucho mayor que 1080p.
- Sombras de 2048 con muchísimos objetos que proyectan sombra.
- Vidrio, cajas y campos grandes y transparentes (mucho sobredibujo), sobre todo en la torre.
- No hay niveles de calidad ni aviso cuando el navegador usa la gráfica integrada.

## Antes de pegarlo (para ti)
1. Confirma en `chrome://gpu` que la línea GL_RENDERER dice NVIDIA, no AMD Radeon.
2. Abre el Administrador de tareas → Rendimiento y mira cuál GPU sube al 100 % cuando corre la escena.
3. Cargador conectado.

## Prompt

```text
Quiero mejorar el rendimiento de la escena y asegurar que use la GPU NVIDIA. Hardware objetivo: ASUS TUF A15, Ryzen 7 7445HS, 16 GB de RAM, NVIDIA GeForce RTX 3050 Laptop con 4 GB de VRAM y GPU integrada AMD Radeon 740M, pantalla de 1920×1080 a 60 Hz. No cambies la distribución, los edificios ni la lógica: solo cómo se dibuja. Ya sé que el renderer usa powerPreference 'high-performance' y que las sombras son estáticas (autoUpdate = false); eso se queda.

## Paso 1: mide antes de tocar
1. Haz un commit del estado actual.
2. Amplía el modo ?debug para que muestre: FPS, tiempo de cuadro, draw calls, triángulos, geometrías, texturas, el pixel ratio efectivo, el tamaño real del canvas y el nombre de la GPU (WEBGL_debug_renderer_info).
3. Si la GPU detectada contiene "Radeon", "AMD" o "Intel", muestra un aviso discreto y descartable: "Estás usando la gráfica integrada; asigna el navegador a la NVIDIA para mejor rendimiento".
4. Mide estas vistas y repórtame los números: concept4 desde la cámara de entrada, concept4 con acercamiento a la torre, concept4 en vista aérea y la escena oficina-ai.
5. Dime cuáles son los tres mayores costos que encuentras (por ejemplo sobredibujo de transparencias, sombras, resolución, geometría) con tu plan para cada uno. Espera mi confirmación antes de optimizar.

## Paso 2: optimizaciones a aplicar
- Tres niveles de calidad (Bajo, Medio y Alto), elegidos automáticamente según los FPS de los primeros segundos y cambiables desde un botón en el menú. Guarda la elección en localStorage. Como antialias no se puede cambiar con el renderer ya creado, aplícalo al arrancar según el nivel guardado, y si el usuario cambia de nivel, pide recargar la página.
- Objetivo: 60 FPS en Medio a 1080p con la RTX 3050.
- Pixel ratio máximo: 1.5 en Alto, 1.25 en Medio, 1.0 en Bajo. Debe bajar solo si los FPS caen de 50 durante varios segundos, y subir con cuidado si se estabilizan sobre 58.
- Sombras: mapa de 2048 en Alto, 1024 en Medio y sin sombras en Bajo. En la oficina, donde los agentes se mueven, usa sombras de contacto (un disco suave bajo cada agente) en lugar de sombras dinámicas. Mantén autoUpdate = false en concept4.
- Transparencias: reduce el sobredibujo. Revisa el vidrio de la torre, las cajas grandes transparentes y los halos: usa depthWrite adecuado, evita superficies transparentes apiladas innecesarias y, en calidad Baja, sustituye el vidrio por un material opaco con textura.
- Revisa que todo lo repetido use InstancedMesh y materiales compartidos, y corrige lo que no. Revisa objetos con frustumCulled = false que no lo necesiten.
- Etiquetas flotantes: una sola capa HTML, actualizada una vez por cuadro, ocultas si están fuera de vista o detrás de la cámara, y limitadas a las más cercanas.
- Pantallas dibujadas en canvas (oficina): comprueba que se redibujan entre 8 y 10 veces por segundo y que una pantalla que no se ve no se redibuja.
- Libera geometrías, materiales y texturas al cambiar de escena, y confirma que la memoria no crece al alternar entre escenas varias veces.
- Texturas de máximo 1024 px donde no se necesite más; usa mipmaps y anisotropía moderada (4) en Alto.
- Si renderer.info indica más de unos 400 draw calls en Medio o unos 800 000 triángulos, dime cuáles son las piezas responsables y propón cómo reducirlas antes de cambiar nada.

## Paso 3: verificación
- Corre el build y revisa que la consola esté limpia.
- Repórtame una tabla con FPS, draw calls y triángulos en Bajo, Medio y Alto, antes y después, en las mismas vistas del paso 1.
- Confirma que en Alto no hay cambios visuales apreciables respecto a la versión anterior, salvo el pixel ratio y las sombras si se justificó.
- Dime qué archivos cambiaste.
```
