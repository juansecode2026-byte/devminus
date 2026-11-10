# Respuesta para Gemini: decisiones tras el Paso 1 del distrito

> Creado el 2026-11-10. Es la segunda parte de `gemini-distrito-ia.md`: Gemini investigó la escena (Three.js, `1-gemini/visual/app/`, escena `concept3`) y pidió confirmar cinco decisiones antes de editar. Este bloque las responde.

## Contexto que reportó Gemini
- Escena activa: `concept3`. Archivos: `concept3_data.js`, `concept3_builder.js`, `registry.js`, `main.js`, `index.html`.
- Ejes: X lateral (−X oeste, hacia el mar), Y altura, Z profundidad (−Z fondo, +Z entrada). 1 unidad = 1 m.
- Hoy: sede DevMinus en (0, 0, −560), 770 m; 10 hangares en herradura más H18 y H19 en la plaza; laboratorios como rascacielos de 385 m en Z = −920; MINUS BLOCKCHAIN y MINUS MARKETING en (±160, 640); robot gigante de 340 m en (+330, −400).

## Decisiones tomadas
- Escena nueva `concept4`; `concept3` no se toca.
- U = 132 m.
- Hangares: los 10 existentes más H18 y H19, seis por lado.
- Sede: se mueve a (0, 0) con su modelo actual.
- MINUS BLOCKCHAIN y MINUS MARKETING: portal de entrada, máximo 92 m.
- Robot gigante y catedral del arnés: al fondo, sin tapar la sede.
- El laboratorio de la derecha se llama SpaceX; su robot es Grok.

## Bloque para pegar en Gemini

```text
Gracias, el reporte está muy claro. Estas son mis decisiones:

0. Antes de editar, haz un commit del estado actual. No modifiques concept3: crea una escena nueva, concept4, a partir de concept3, regístrala en registry.js y en el menú de Vistas. No cambies la escena por defecto en main.js hasta que yo la apruebe.

1. Alcance: en concept4 reemplaza la herradura por el trazado simétrico centrado en la sede. Conserva intactos el mar al oeste, el terreno y las dunas, y los vecinos lejanos (Burj Khalifa y Burj Al Arab).

2. Unidad: U = 132 m. Hangares de 132 m (X) × 81,8 m (Z) y altura h = 46 m. Laboratorios de altura 2h = 92 m.

3. Hangares: usa los 10 existentes más H18 Centro de Operaciones y H19 Archivador, para tener 6 por lado. Izquierda: 01 a 06. Derecha: 07 a 10, H18 y H19. Quita H18 y H19 del centro (0, 0). Las filas traseras de naves menores: si tienen ficha o contenido, muévelas al fondo, detrás de la sede; si son solo decorativas, retíralas. Nada debe invadir la franja verde.

4. Sede y entrada:
- Mueve la sede DevMinus a (0, 0) conservando su modelo actual (huella 92 × 92 m, 770 m, helipuerto y helicóptero). No la reconstruyas.
- Letrero "DEVMINUS" en (0, 0, +4,09 U) y bulevar desde la plaza hasta el letrero.
- Cámara inicial al sur, mirando por el bulevar hacia la sede, sin obstáculos.
- Conserva MINUS BLOCKCHAIN y MINUS MARKETING a ambos lados del letrero de entrada, como portal, con altura máxima de 92 m para que la sede siga siendo la única torre.
- Conserva el robot gigante y la catedral del arnés, pero muévelos al fondo, detrás de la sede y desplazados a un lado, de modo que no tapen la sede desde la cámara de entrada.

5. Laboratorios y robots: aplica tu propuesta. Además, los globos flotantes de Anthropic, Google y OpenAI se mueven con su fábrica, encima de ella. El laboratorio de la derecha en la primera fila se llama SpaceX (cambia la etiqueta "xAI/SpaceX" por "SpaceX"); su robot sigue siendo Grok.

Al terminar: corre el build, revisa la consola, muéstrame la vista desde la cámara de entrada y la vista desde arriba, y dame la lista de archivos cambiados con las coordenadas finales de cada edificio.
```
