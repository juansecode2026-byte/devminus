# Prompt v1 para Gemini: construir la oficina virtual de AI Engineering

> Creado el 2026-11-10. Se usa con Gemini sobre el proyecto 3D `Repositorios NO comerciales/OFICINA AGENTICA DEVMINUS DUBAI/1-gemini/visual/app/` (Three.js + Vite).
> Es la oficina piloto: si queda bien, el concepto se replica a los demás departamentos de la edificación DevMinus, cada uno con su propio estilo.
> Esta versión es **solo para construir**. La optimización de rendimiento va después, con `gemini-oficina-ai-engineering-v2-optimizacion.md`, cuando la oficina ya funcione y se pueda medir.
> Referencia visual: `documentacion/bocetos-oficina-interna/oficina-ai-engineering-3d.html` (adjúntalo a Gemini o cópialo a su proyecto).

## Antes de pegarlo (para ti, no para Gemini)
Asigna Chrome a la tarjeta NVIDIA: Configuración de Windows → Sistema → Pantalla → Gráficos → agregar `C:\Program Files\Google\Chrome\Application\chrome.exe` → Opciones → Alto rendimiento. Reinicia Chrome y comprueba en `chrome://gpu` que GL_RENDERER diga NVIDIA. Trabaja con el cargador conectado.

## Prompt

```text
Necesito construir una oficina virtual en 3D, en este mismo proyecto, para el departamento de AI Engineering de la edificación DevMinus. Es la oficina piloto: después voy a replicar el concepto para otros departamentos (backend, frontend, diseño y branding, etc.), cada uno con su propio estilo, así que la arquitectura debe permitir crear una oficina nueva cambiando solo una configuración de tema y de datos.

Te adjunto como referencia de calidad visual el archivo oficina-ai-engineering-3d.html: una oficina en Three.js con ingenieros robot, monitores con contenido vivo, pantalla de pared, zona de pausa y panel lateral. Quiero esa calidad o mejor.

En esta etapa el objetivo es construir la oficina completa y que funcione. La optimización fina de rendimiento (niveles de calidad, medición de FPS, presupuestos) la haremos en una etapa posterior; no la hagas ahora.

## Paso 1: investiga y propón antes de editar
1. Haz un commit del estado actual.
2. Revisa cómo están organizadas las escenas (registry.js, main.js) y propón cómo agregar esta oficina como una escena nueva e independiente, sin tocar concept3 ni concept4.
3. Muéstrame el plan (archivos nuevos y estructura de la configuración) y espera mi confirmación.

## Paso 2: reglas de construcción (obligatorias desde el inicio)
No son optimización: son la forma de construir, porque cambiarlas después obliga a rehacer la escena.
1. Usa InstancedMesh para todo lo que se repite (escritorios, sillas, plantas, luminarias, cables, consolas).
2. Comparte materiales y geometrías; no crees uno nuevo por cada objeto.
3. Las pantallas (monitores, pantalla gigante, pantalla del creador) se dibujan en canvas y se redibujan entre 8 y 10 veces por segundo, no en cada cuadro.
4. Separa en módulos: estructura de la sala, tema visual (paleta, materiales, decoración, estilo de pantallas), datos del equipo (agentes, líder, roles) y botones del puesto de mando. Crear la oficina de otro departamento debe ser escribir un archivo de tema y uno de datos.
Además, crea el WebGLRenderer con powerPreference: 'high-performance'.

## Paso 3: espacios de la oficina
La oficina tiene tres zonas conectadas en un mismo piso:

1. Sala de trabajo de AI Engineering.
   - Un escritorio por agente, cada uno con su monitor mostrando su trabajo (pruebas, tokens, índice RAG, servidores MCP, latencia, SQL, como en la referencia).
   - El escritorio del líder se distingue claramente: en una plataforma un poco elevada, con tres monitores, un color propio y un distintivo visible sobre su cabeza (por ejemplo un aro o una estrella). Su etiqueta dice "Líder".
   - Un puesto de mando y control con botones físicos en un pupitre (y su equivalente en la interfaz HTML).

2. Pantalla gigante, en la pared principal, controlada desde el puesto de mando. Cada botón cambia lo que muestra:
   - "Arnés": el arnés de los agentes funcionando. Cada agente con su ciclo pensar → actuar → observar → verificar, la herramienta que usa en ese momento, sus permisos y su consumo.
   - "Orquestación": el líder en el centro y los agentes alrededor, con las tareas viajando del líder a cada agente y los resultados volviendo.
   - "Bucle": el loop de trabajo activo, con la iteración actual, qué cambió y si las pruebas pasaron.
   - "Repositorio": el repositorio que se está mejorando o construyendo: ramas, últimos commits, archivos tocados y pull requests.
   - "Métricas": tareas del día, pruebas verdes, tokens y costo.
   Los botones deben salir de una lista de configuración (id, etiqueta, ícono, modo de pantalla), porque los voy a parametrizar después con datos reales. Por ahora, todos los datos son simulados y deben rotularse así.

3. Centro de juegos, una sala grande aparte, conectada a la oficina. Hay varias consolas tipo Nintendo Switch 2 con sus mandos y pantallas grandes donde se juega un juego de mundo abierto estilo GTA 6 (ciudad al atardecer, autos, calles). Los agentes que no tienen tarea caminan hasta allí, se sientan y juegan; cuando el líder les asigna trabajo, se levantan y vuelven a su escritorio. Puedes rotular los textos "Nintendo Switch 2" y "GTA 6", pero no uses logos, carátulas, capturas ni ningún material oficial: las consolas y el juego deben ser una recreación propia y estilizada.

## Paso 4: el creador y la orquestación
- Una segunda pantalla, cerca del líder, muestra al creador, Juan, dándole órdenes. Al principio el creador aparece solo como una silueta en sombra, sin rostro.
- Cuando el creador da una instrucción, el texto aparece en esa pantalla en español, escribiéndose letra por letra como un prompt. Ejemplo: "Líder, revisa el pull request del formulario de contacto y asigna las pruebas a Nova".
- El líder se gira hacia la pantalla del creador mientras recibe la instrucción, luego se vuelve hacia su equipo y reparte las tareas: se ven líneas o partículas que salen de él hacia cada agente asignado, y el agente cambia de estado (si estaba jugando, vuelve del centro de juegos).
- Deja preparada una lista de instrucciones de ejemplo que se reproducen en ciclo, y una función para inyectar una instrucción nueva desde la interfaz (un campo de texto en el puesto de mando).

## Paso 5: agentes
- Cada agente tiene nombre visible siempre (etiqueta flotante), rol y color propio. Configuración inicial del equipo de AI Engineering:
  - Líder: "Orion", Líder de AI Engineering.
  - "Nova", pruebas; "Lumen", LLMs y prompts; "Atlas", RAG; "Orbit", agentes y MCP; "Forge", backend y APIs; "Delta", datos y SQL.
- Estados: trabajando, caminando, en pausa (centro de juegos), recibiendo tarea. El estado se nota en el agente (luz del pecho, postura) y en su monitor.
- Los agentes son robots estilizados, como en la referencia, con animaciones simples (caminar, sentarse, teclear, jugar con un mando).

## Paso 6: decoración de oficina de AI Engineering
Que se note que es una oficina de AI engineers: pizarras con diagramas (RAG, evals, arquitectura de agentes), un rack de servidores con luces, un clúster de GPUs con ventiladores y LEDs, un letrero de neón "AI ENGINEERING", cables ordenados en bandejas, plantas, una máquina de café y cuadros con diagramas de redes neuronales genéricos. Todo coherente con la paleta de la oficina y sin saturar.

Ejemplos de estilo para otros departamentos, para que la arquitectura los permita (no los construyas ahora): backend sobrio y técnico, con racks y consolas; frontend con estética de código y componentes en pantalla; diseño y branding muy visual, con color y tableros de inspiración.

## Paso 7: verificación
- Corre el build y revisa que la consola esté limpia.
- Muéstrame capturas o describe: la vista general, la pantalla gigante en cada modo, el centro de juegos y la secuencia del creador dando una orden al líder.
- Dime qué archivos creaste o cambiaste y cómo está organizada la configuración de tema y de datos.
```
