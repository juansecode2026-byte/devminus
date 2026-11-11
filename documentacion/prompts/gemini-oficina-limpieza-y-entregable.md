# Prompt para Gemini: oficina más limpia y pantalla que muestra el entregable

> Creado el 2026-11-10 y ajustado el mismo día. Segunda ronda sobre la escena `oficina-ai` del proyecto `Repositorios NO comerciales/OFICINA AGENTICA DEVMINUS DUBAI/1-gemini/visual/app/`.
> Viene después de `gemini-oficina-ai-engineering-v1-construccion.md`.

## Qué se quiere
1. La oficina se ve recargada (etiquetas encimadas, pantallas ilegibles, demasiado color). Debe leerse de un vistazo.
2. La pantalla gigante **muestra cómo va quedando el trabajo** del departamento mientras se construye (por ejemplo, la landing de Frontend tomando forma).
3. Cuando el trabajo **termina**, la pantalla pasa sola a mostrar de forma gráfica **cómo fue construido**: sus componentes y todos los detalles. Ejemplo: un arnés de orquestación terminado.
4. Al hacer **clic en la pantalla se abre una página web real en Chrome** (una pestaña nueva): la página que se está creando, o una página de informe con el flujo del loop y los detalles. La dirección se configura después; ahora se construye el mecanismo.
5. El mismo patrón se replica en cada departamento, con su propio entregable.

## Prompt

```text
Seguimos en la escena oficina-ai. Dos objetivos: que la oficina se vea limpia y fácil de entender, y que la pantalla gigante cuente lo que el departamento está construyendo. La oficina es la forma visual de ver el proceso; la información completa vive en páginas web reales. Trabaja solo en la oficina y su interfaz; no toques concept3 ni concept4.

## Paso 1: antes de editar
1. Haz un commit del estado actual.
2. Dime qué etiquetas flotantes, anillos de piso, rótulos y elementos de interfaz de la ciudad (barra izquierda de hangares, "Vistas: General", dirección ?concept=concept4) siguen apareciendo hoy dentro de la oficina.
3. Dime cómo está montada la fuente de datos (OfficeDataSource, SimulatedHarnessDataSource, TraceJsonlDataSource) y dónde conviene agregar el contrato del entregable (paso 5).
4. Propón el diseño y espera mi confirmación.

## Paso 2: limpieza visual
- Etiquetas de agentes: sobre cada agente solo un chip pequeño con nombre y rol (por ejemplo "Nova · Pruebas"). La tarea completa aparece solo al pasar el ratón o al seleccionarlo. El líder conserva su distintivo y su etiqueta "Líder".
- Quita los anillos de colores del piso bajo cada agente. El estado se ve en la luz del pecho del robot (trabajando, caminando, en pausa, recibiendo tarea) y en un punto de estado en el chip.
- Paleta sobria: sala en tonos neutros, azul cobalto (#4b8dff) como único acento, el color de cada agente solo como detalle pequeño, y verde, ámbar y rojo reservados para estados. Neón solo en el letrero "AI ENGINEERING" y en el centro de juegos.
- Zonas claras: piso o tapete distinto para la sala de trabajo, el puesto de mando y el centro de juegos, con un rótulo bajo en cada una y más espacio entre ellas. Nada de cables o cajas sueltas que no signifiquen algo.
- Monitores de los agentes: una cifra y un ícono grandes, no tablas.
- Interfaz propia de la oficina, sin restos de la ciudad: barra izquierda con los agentes (Orion y el equipo) en lugar de los hangares, selector arriba con "Vistas: Oficina", dirección ?concept=oficina-ai, y el puesto de mando plegable para que no tape la escena.

## Paso 3: la pantalla gigante cuenta lo que se construye
El entregable tiene un estado: "en construcción" o "terminado". La pantalla gigante, sin tocar ningún botón, cambia según ese estado:
- En construcción: muestra cómo va quedando el trabajo, en una sola composición ordenada:
  - Título del proyecto y etapa actual.
  - Una vista previa grande del resultado a medida que se construye. En la simulación, dibújala en canvas como una maqueta que se va completando con el avance (por ejemplo, una landing que pasa de estructura a color y contenido; o, para el arnés, un diagrama que va sumando piezas). En la integración real, la vista previa es la última captura del entregable que entrega la fuente de datos (una URL de imagen que se actualiza en cada iteración).
  - Barra de avance, iteración actual y chips de los agentes que están trabajando en eso.
- Terminado: la pantalla pasa sola a una vista gráfica de cómo fue construido. Para un arnés de orquestación terminado, un diagrama limpio con todos sus componentes y cómo se conectan: el líder y el orquestador, los agentes y sus roles, las herramientas y servidores MCP, los permisos y guardrails, la memoria, el ciclo del loop (pensar, actuar, observar, verificar), las aprobaciones humanas y las trazas. Cada componente con su nombre y una cifra o dato clave (por ejemplo cuántas herramientas, qué permisos, cuántas iteraciones).
- Los cinco botones del puesto de mando se conservan (Arnés, Orquestación, Bucle, Repositorio, Métricas) y fuerzan temporalmente otra vista en la pantalla. Un sexto botón, "Entregable", vuelve al comportamiento automático.
- La pantalla muestra siempre vistas resumidas: pocos bloques grandes, texto grande, legible desde la sala. El detalle completo va a la página web del paso 4.

## Paso 4: clic en la pantalla abre una página web en Chrome
- Al hacer clic en la pantalla gigante se abre una pestaña nueva del navegador con una dirección configurada (window.open con _blank y noopener; es un clic del usuario, así que no lo bloquea el navegador). No uses un panel superpuesto dentro de la escena.
- La dirección sale de la configuración del departamento y depende del modo que se estaba viendo. Casos que debe permitir:
  - La página del entregable que se está creando (por ejemplo la landing de Frontend corriendo en local).
  - Una página de informe del proyecto, con el flujo del loop y el detalle de lo construido.
  - Una página con la anatomía completa del arnés terminado: componentes, relaciones, permisos y trazas.
- La configuración permite una dirección distinta por modo (Entregable, Arnés, Orquestación, Bucle, Repositorio, Métricas). Si un modo no tiene dirección, el clic no hace nada y la pantalla muestra una pista discreta: "Sin página configurada".
- Solo se abren direcciones http o https. Deja una lista de orígenes permitidos en la configuración.
- La configuración real de las direcciones la haré yo después. Ahora entrega:
  - El mecanismo completo de clic y apertura.
  - Dos páginas de ejemplo servidas desde public/informes/, para poder probar: un informe del proyecto (resultado, flujo del loop, cambios, verificación) y una anatomía del arnés (componentes y relaciones), con datos simulados, rotuladas así, en el mismo estilo cobalto de DevMinus y en español.
- Además, el cursor cambia a mano cuando está sobre la pantalla gigante y aparece un indicador pequeño "Clic para abrir el informe".

## Paso 5: contrato del entregable, para replicar a cada departamento
- En el archivo de datos del departamento agrega una sección "deliverable" con: tipo (por ejemplo web-preview, harness, api-report, test-report, schema, security-report o repo), título, estado, fuente de la vista previa (imagen), datos de la anatomía (para el tipo harness: componentes, relaciones y datos clave) y las direcciones por modo.
- La fuente de datos expone el entregable: estado (en construcción o terminado), avance, iteración actual, última captura, anatomía y cambios por iteración (con agente y hora). La implementación simulada genera datos coherentes y hace que el entregable pase de construcción a terminado en un ciclo de demostración; la de trazas lee los reales.
- Crear la oficina de otro departamento sigue siendo escribir un archivo de tema y uno de datos. Deja comentados estos ejemplos para después, no los construyas ahora:
  - Frontend: la landing en construcción y, al terminar, el resumen de componentes y puntaje de calidad; el clic abre la landing.
  - Backend: contrato de la API, endpoints y latencia.
  - Datos: esquema y consultas.
  - QA: informe de pruebas.
  - Seguridad: hallazgos y estado.
  - AI Engineering: construcción y anatomía del arnés, repositorio y evaluaciones.
  - Dirección: resumen ejecutivo.

## Paso 6: rendimiento
- Hoy la oficina marca unos 46 FPS y unas 272 llamadas de dibujo. La limpieza debe subir los FPS, no bajarlos.
- Las pantallas siguen redibujándose entre 8 y 10 veces por segundo; la pantalla gigante no redibuja si no se ve.

## Paso 7: verificación
- Corre el build y revisa que la consola esté limpia.
- Muéstrame la vista general de la oficina limpia, la pantalla gigante en construcción, la pantalla gigante con el arnés terminado, y las dos páginas de ejemplo abiertas desde el clic.
- Confirma que no quedan restos de la ciudad en la interfaz de la oficina y dame los FPS antes y después.
- Dime qué archivos cambiaste y cómo queda el contrato del entregable.
```

---

## Resultado del paso 1 y decisiones (2026-11-10)

Gemini auditó la oficina y propuso el diseño sin editar nada. Estado de su repositorio: commit `b1181e2` ("Interior estático 140 pisos y 13 departamentos en Torre DevMinus de concept4").

**Hallazgos:** anillos de color bajo los 13 robots (líder y 12 especialistas), sprites permanentes sobre cada cabeza, robots pintados con 12 colores saturados, zonas sin tapete ni rótulo, monitores con mucho texto, URL que sigue en `?concept=concept4`, menú "Vistas: General" con cámaras de la ciudad, botón X-Ray y riel de hangares con emojis, y puesto de mando que no se pliega.

**Propuesta:** quitar anillos, chips pequeños por agente, cuerpos neutros con acento cobalto, tres zonas con tapete y rótulo, monitores con una cifra y un ícono, URL sincronizada, "Vistas: Oficina", lista lateral de los 13 miembros con punto de estado, puesto de mando plegable; modo "Entregable" por defecto y seis botones; entregable con cuatro bloques (Router de modelos, Orquestador por olas, Memoria de 4 capas y herramientas, Evaluador y bucle de corrección) que se enciende en construcción y pasa a "terminado" con tres datos clave; dos páginas en `public/informes/` (entregable y métricas) y mapa de clics por modo; contrato `deliverable` en `ai_engineering_data.js` y bloque `snapshot.deliverable` en la fuente de datos.

**Decisión:** aprobada con seis ajustes.

```text
Apruebo tu diseño. Procede con los pasos 2 al 7, con estos ajustes:

1. Vista previa y anatomía, por separado: en el contrato deliverable, no mezcles la vista previa con la anatomía. Usa dos campos distintos: previewImage (una URL de imagen con la última captura del entregable en construcción, para tipos como una landing en Frontend; en la simulación puede ser una maqueta dibujada en canvas) y anatomy (bloques, relaciones y datos clave, para tipos como un arnés). El estado "en construcción" usa la vista previa o los bloques encendiéndose según el tipo; "terminado" usa la anatomía.

2. Anatomía completa: los cuatro bloques están bien como estructura, pero cada uno debe mostrar debajo sus subcomponentes como chips pequeños, y entre todos deben aparecer sí o sí: el líder y el orquestador, los agentes y sus roles, las herramientas y servidores MCP, los permisos y guardrails, la memoria, el ciclo del loop (planear, ejecutar, evaluar, corregir), las aprobaciones humanas y las trazas. La pantalla muestra solo el resumen; el detalle completo va en el informe.

3. Clic en Repositorio: por defecto abre la sección #repositorio del informe local. La dirección de GitHub queda como un campo de configuración vacío; solo se usa si se configura una URL real. No abras github.com sin un repositorio concreto.

4. Rotulado: las dos páginas de informe y la pantalla deben decir claramente "datos simulados" mientras la fuente sea la simulada, y mostrar el nombre de la fuente de datos activa.

5. No romper la ciudad: index.html y main.js son compartidos con concept3 y concept4. Todo lo que ocultes o cambies (menú Vistas, botones X-Ray y Ocultar letras, riel de hangares, sincronización de la URL) debe aplicarse solo cuando la escena activa es una oficina. La sincronización de la URL debe funcionar para todas las escenas, también al volver a concept4. Al terminar, confirma que concept3 y concept4 cargan sin errores en consola y que su menú, sus cámaras y sus botones siguen igual.

6. Ficha de agente: al hacer clic en un agente de la lista lateral o en la escena, que la ficha sea una tarjeta lateral pequeña (tarea actual, estado e historial breve), no un panel grande que tape la escena.

Cuando termines: corre el build, revisa la consola, muéstrame las vistas que pedí, dame los FPS antes y después (hoy la oficina marca unos 46 FPS y unas 272 llamadas de dibujo; debe subir a 55 o más) y los archivos cambiados.
```

---

## Ajuste 7: alinear la simulación con la documentación real del piso (2026-11-10)

La documentación del piso (`3-claude/departamentos/ai-engineering/`: `LEEME.md`, `proceso.md` y `orquestaciones/ai-engineering.md`) dice que el objetivo del piso es que la IA de un repositorio funcione mejor, cueste menos y sea segura, demostrándolo con números (la misma prueba antes y después). La simulación del entregable propuesta por Gemini (un "Arnés Multi-Agente" con Router de Modelos, Orquestador por Olas, Memoria de 4 capas y 5 olas) no coincide con ese loop real. Este bloque se envía junto con los seis ajustes anteriores.

```text
Ajuste 7: alinea la simulación con la documentación real del piso. Lee en 3-claude/departamentos/ai-engineering/ los archivos LEEME.md, proceso.md y orquestaciones/ai-engineering.md, y úsalos como fuente de verdad para los datos simulados de la oficina. Resumen de lo que dicen:

- Objetivo del piso: que la IA de un repositorio funcione mejor, cueste menos y sea segura, demostrándolo con números: la misma prueba antes y después.
- El entregable es la mejora de la IA de un repositorio concreto, no un arnés propio del edificio. El arnés del edificio vive en 3-claude/arnes y es el motor que hace funcionar a los agentes; los agentes que construye este piso son parte del código de cada repositorio. Por eso:
  - El modo "Entregable" en construcción muestra la mejora de un repositorio de ejemplo: línea base, avance por paso y por ola.
  - El estado "terminado" muestra el antes y el después medidos con la misma prueba, el costo por llamada, los hallazgos de seguridad y el sello "Esperando aprobación de Juanse". La anatomía de un sistema de agentes se muestra solo si el repositorio de ejemplo necesitó agentes, y como un bloque más, no como el entregable completo.
- El loop real tiene nueve pasos: 1 diagnóstico, 2 preguntas, 3 plan, 4 diseño, 5 línea base, 6 primera ola de construcción en paralelo (modelo y costo, ingesta, herramientas MCP, y opcionalmente automatización y documentos), 7 segunda ola en paralelo (prompts, búsqueda y citas, agentes), 8 revisión en paralelo (Evaluador y Revisor de seguridad y costos), 9 resumen y aprobación de Juanse. Usa estos nueve pasos en el modo Bucle, en lugar de planear, ejecutar, evaluar y corregir.
- Los loops de corrección son cuatro (calidad, costo, seguridad y diseño), con un máximo de 3 vueltas cada uno; si no se resuelve, el Líder escala a Juanse.
- El equipo son 13 agentes: el Líder AI Engineering, el Analista de IA, el Arquitecto de soluciones de IA, el Evaluador de IA, el Revisor de seguridad y costos de IA, y ocho ingenieros (modelo y costo, prompts, ingesta y troceado, búsqueda y citas, herramientas MCP, agentes, automatización, y documentos y multimodal). Tres corren en Opus y diez en Sonnet. Todos los especialistas son opcionales: el Líder activa solo los que el trabajo necesita. Respeta estos roles y nombres funcionales en las fichas y en la orquestación; los nombres propios de los agentes son solo la etiqueta visible.
- Tope por trabajo: 760.000 tokens.
- Qué no hace este piso: la vigilancia en producción (LLMOps) y las pruebas de código normal (QA).

Revisa también los datos clave que propusiste ("12 especialistas / 5 olas" y los cuatro bloques de la anatomía) y corrígelos para que coincidan con esto: son dos olas de construcción más la revisión, no cinco olas. Si algún dato de tu propuesta viene de otro documento del repositorio, dime de cuál.
```
