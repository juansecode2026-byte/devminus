# Mensaje para la sesión de Claude del proyecto de Dubái: replantear el piso AI Engineering

> Creado el 2026-11-10. Destino: la sesión de Claude que trabaja en `Repositorios NO comerciales/OFICINA AGENTICA DEVMINUS DUBAI/` (zona `3-claude/`). No se pega en Gemini: la parte visual (`1-gemini/`) solo lee los datos cuando cambien.
> Decisiones confirmadas por Juanse en esta conversación: (1) AI Engineering construye la captura de trazas y el Loop 4 de cada repositorio, y Producción (LLMOps) los opera en producción; (2) la base de datos de las trazas de este repositorio es SQLite.
> Lo demás (equipo de 12 agentes, regla de los loops, fábrica de evals) va como propuesta por aprobar.

## Mensaje para pegar

```text
Quiero replantear el piso AI Engineering. Este mensaje reemplaza el enfoque de la decisión A31. Siguiendo las reglas del proyecto: primero propón, espera mi visto bueno y solo entonces edita; registra cada cambio en DECISIONES.md antes de reescribir fichas, grafo o arnés; y no toques 1-gemini/.

## Lo que debes leer primero
- Documentación/Loop y trazas/ (la guía de loops; la copia que hay es la v1.16: si existe una versión más nueva, te la daré yo).
- Documentación/AI Engineer/checklist-ingenieria-agentica-teoria.md (los 31 puntos M1 a S5, en cinco capas).
- Documentación/Evals/ (LEEME.md y evals-teoria.md).
- 3-claude/departamentos/ai-engineering/ completo, 3-claude/arnes/ y 3-claude/memoria/LEEME.md.
- DECISIONES.md: A10, A14, A31, A33, A34, A37, P14, P16, P20 y P24.

## El nuevo enfoque: dos objetivos

Objetivo 1, hacia adentro: aplicar AI engineering a nuestra propia oficina. La orquestación, los loops, el arnés y la lista de verificación del checklist de cada agente de cada piso deben quedar óptimos. Las trazas de los agentes de este repositorio se guardan en este repositorio y en su base de datos.

Objetivo 2, hacia afuera: cuando llegue un repositorio, escanearlo y analizarlo para decidir:
- Qué procesos necesitan agentes y orquestación, y cuáles no.
- Qué agentes llevan los cuatro loops y cuáles solo tres o menos.
- Cómo se construye el arnés de cada agente según los objetivos del proyecto.
- Si necesita una arquitectura RAG: en qué proceso es fundamental y por qué; y si no la necesita, decirlo por escrito con la razón y la alternativa. El resultado es un documento decision-rag.md. Si es sí, se construye y se explica por qué es importante y en qué se usa cada parte. Esto aplica también a nuestra propia oficina.
Las trazas de repositorios externos se guardan en esos repositorios y en sus propias bases de datos, no en el nuestro (coherente con la regla de que los repositorios de clientes no se tratan como propios).

## Los cuatro loops: usa los de la guía, no otros
1. Loop 1, el agente: el modelo piensa, usa una herramienta, observa y repite; se frena cuando responde sin pedir herramientas, con tope de vueltas.
2. Loop 2, verificación: un revisor califica con una rúbrica y manda reintentar con notas; se frena cuando aprueba o se acaban los reintentos.
3. Loop 3, eventos: una hora, un aviso, un mensaje o un trabajo en segundo plano despierta al agente y el resultado se aplica en el sistema real; se acota con guardrails de costo, duplicados y ciclos.
4. Loop 4, mejora automática (hill climbing): lee las trazas por lotes, detecta fallos repetidos y mejora el arnés (prompts, herramientas, revisor), con regresión, canary, aprobación humana y vuelta atrás.
Las trazas no son un loop: son la medición que alimenta el Loop 4, y son obligatorias para todos (A37).

Regla para decidir cuántos loops lleva cada agente:
- Loop 1: todos.
- Loop 2: si su resultado se puede verificar con una rúbrica antes de entregarlo.
- Loop 3: solo si lo despierta un evento y aplica su resultado en un sistema real.
- Loop 4: solo si hay trazas de producción suficientes y fallos repetidos que medir; mientras tanto queda en espera, con las trazas ya encendidas.

## Decisiones ya tomadas
1. Frontera con LLMOps: AI Engineering construye la captura de trazas y el Loop 4 de cada repositorio; el piso Producción (LLMOps) los opera en producción. Actualiza la decisión A14 y las fichas del Ingeniero de observabilidad de IA y del piso Producción (LLMOps) para que consuman lo que entrega AI Engineering.
2. Base de datos de las trazas de este repositorio: SQLite. Los archivos JSONL de la capa cruda siguen siendo la fuente de verdad, de solo lectura; el SQLite es el índice derivado (hoy ya lo usa publicar.py). Propón el esquema (corridas, eventos, anotaciones, casos y, si hace falta, evals) y dónde vive el archivo; no va a Git. Para los repositorios externos, el Ingeniero de trazas y mejora adapta la captura a la base de datos de ese repositorio.

## Propuesta por aprobar: el equipo, de 13 a 12 agentes
Cada punto del checklist debe tener un responsable. Todos los especialistas siguen siendo opcionales, como en A31: el Líder activa solo los que el trabajo necesita.

| Agente | Modelo | Puntos que cubre | Loop |
|---|---|---|---|
| Líder AI Engineering | Opus | Objetivo, activa especialistas, aprobación | — |
| Analista de IA | Sonnet | Escanea el repositorio o la oficina contra los 31 puntos y dice cuáles faltan | — |
| Arquitecto de soluciones de IA | Opus | O1 descomposición (¿se necesitan todos los agentes?), O2 contratos, O5 puntos humanos, decisión de RAG, y qué loops lleva cada agente | Diseña los cuatro |
| Ingeniero de modelo y costo | Sonnet | M1, M3, L4 | — |
| Ingeniero de prompts | Sonnet | M2 | — |
| Ingeniero de arnés (antes «de agentes») | Sonnet | A1 loop y parada, A2 contexto, A4 salida estructurada, A7 alucinaciones, A8 tiempos, S2 topes | Loop 1 |
| Ingeniero de herramientas MCP | Sonnet | A3, S1 | — |
| Ingeniero de memoria y RAG (reemplaza a ingesta y a búsqueda) | Sonnet | A5 memoria, A6 RAG solo si la decisión es sí | — |
| Ingeniero de orquestación (nuevo) | Sonnet | O3 estado, O4 rutas, O6 persistencia, O7 fallos, O8 idempotencia, O9 concurrencia, S4 | Loop 3 |
| Evaluador de IA | Sonnet | L2 datasets, L3 regresión, línea base, rúbricas y revisores, dueño de la fábrica de evals | Loop 2 |
| Ingeniero de trazas y mejora (nuevo) | Sonnet | L1 trazas, L5 monitoreo, L6 versionado, S5 auditoría | Loop 4 |
| Revisor de seguridad y costos de IA | Opus | S1 a S5 y verificación de L4 | — |

Salen del piso: ingesta y troceado y búsqueda y citas (se fusionan en memoria y RAG), y automatización y documentos y multimodal (no son ingeniería de agentes; pasan a candidatos aplazados). El tope por trabajo (760.000 tokens) habrá que recalcularlo con el equipo nuevo.

## Propuesta por aprobar: lista de verificación del agente óptimo
Usa los 31 puntos M, A, O, L y S como lista de verificación única, que usa el Analista para diagnosticar y el Evaluador para verificar. Agrega: ¿necesita conocimiento externo? Decisión de RAG justificada, sí o no.

## Propuesta por aprobar: el loop del piso
1 escaneo con la lista, 2 preguntas, 3 plan, 4 diseño de la orquestación y decisión de RAG, 5 línea base, 6 primera ola (modelo y costo, herramientas MCP, memoria y trazas), 7 segunda ola (prompts, arnés), 8 tercera ola (orquestación, que necesita los agentes y sus arneses ya listos), 9 revisión en paralelo (Evaluador y Revisor), 10 resumen y aprobación mía. Los cuatro loops de corrección (calidad, costo, seguridad y diseño) se mantienen, con un máximo de 3 vueltas.

Primera misión del objetivo 1: pasar este loop por los agentes de nuestra propia oficina. Hoy las carpetas arnes/perfiles, arnes/topes y arnes/versiones están vacías, y permisos-por-rol solo existe para Frontend.

## Propuesta por aprobar: fábrica de evals
Las evals salen de lo que el piso ya produce: trazas, mis anotaciones («bien» o «mal» y por qué), las fallas convertidas en casos, los criterios de medición del Arquitecto, la línea base, las fichas y los permisos. Flujo: capturar (trazas), curar (mis anotaciones y casos) y generar (datasets, evaluadores y experimentos). Propón dónde viven los resultados por oficina (por ejemplo evals/<oficina>/ con datasets, evaluadores, experimentos e informe) y cómo se conecta con el hangar Evals y con el Loop 4. Los repositorios externos guardan sus evals en su propio repositorio. Empieza con evaluadores en código (formato, costo, trayectoria, permisos) y un dataset inicial de 20 a 30 casos con datos inventados, ya que las trazas actuales son simuladas.

Dónde vive Evals en el edificio (propuesta): como hangar propio (el hangar Evals de A20 y A21, con su piso General y su piso Independiente), no dentro del piso Producción (LLMOps). Las evals se reparten en tres sitios, tal como separa la teoría: (1) las evals inline son el revisor del Loop 2 dentro de cada agente; (2) las evals offline (datasets, regresión, calibración del juez) viven en el hangar Evals; (3) el monitoreo y las evals en línea sobre lo ya publicado las opera el piso Producción (LLMOps), que consume los evaluadores que construye AI Engineering. Confirma si encuentras una contradicción con A14, A20 o A21. En el mapa visual, los hangares Memoria y Evals no existen hoy en concept4: propón cómo pasarlos a los datos para que Gemini los dibuje cerca del Archivador, después de la oficina.

## Qué quiero que hagas ahora, en este orden
1. Lee los documentos.
2. No edites nada todavía. Dame una propuesta que incluya: el texto de las nuevas decisiones para DECISIONES.md (qué reemplaza a A31 y a A14, y qué queda como candidato aplazado), la lista de archivos que cambiarían (fichas, orquestación, grafo, arnés, memoria), el esquema SQLite propuesto, el tope de tokens recalculado y cualquier contradicción que encuentres entre estos documentos y lo que te pido.
3. Espera mi visto bueno. Después registra las decisiones, reescribe las fichas en borrador y avísame para que la parte visual lea los datos nuevos.
```
