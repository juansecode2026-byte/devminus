# Prompt para Gemini: separar el distrito y ordenar los hangares por flujo de proyecto

> Creado el 2026-11-10. Tercera ronda sobre la escena `concept4` del proyecto `Repositorios NO comerciales/OFICINA AGENTICA DEVMINUS DUBAI/1-gemini/visual/app/`.
> Viene después de `gemini-distrito-ia.md` y `gemini-distrito-ia-decisiones.md`. Corrige lo que se vio en la primera versión de `concept4`: todo muy pegado, parqueaderos atrás, hangares sin un orden de flujo y etiquetas que se montan.

## Prompt

```text
Vi la primera versión de concept4 y va bien. Ahora necesito ajustes de distribución. Trabaja solo en concept4.

## Paso 1: antes de editar
1. Haz un commit del estado actual.
2. Dame la lista de todos los hangares con su número, su nombre y qué función cumplen hoy en la escena.
3. Propón el nuevo orden de los hangares según el flujo de un proyecto (paso 4) y el plano con las nuevas coordenadas. Espera mi confirmación.

## Paso 2: más separación entre todas las piezas
Las estructuras están demasiado pegadas. Amplía los espacios, sin exagerar:
- Crea una sola constante de separación (por ejemplo SPACING = 1.3) que multiplique las distancias desde el eje central y entre filas, para poder ajustarla después sin tocar cada coordenada.
- Distancia desde el eje central: columna de hangares a ±2,6 U, franja verde a ±3,8 U y laboratorios a ±5,6 U (U = 132 m).
- Entre hangares de una misma columna, deja un pasillo libre de al menos 60 m.
- Entre laboratorios de una misma columna, al menos 80 m.
- Amplía el recinto del distrito para que todo quepa con margen.
- Los tamaños de los edificios no cambian, solo la distancia entre ellos.

## Paso 3: parqueaderos al frente
Los parqueaderos (las filas de vehículos que hoy están detrás) se mueven al frente, más allá del letrero de entrada "DEVMINUS", a ambos lados del bulevar, simétricos. Que no tapen el letrero ni la vista desde la cámara de entrada hacia la sede.

## Paso 4: centro de control, archivador y flujo de proyecto
- El hangar de recepción del repositorio desaparece como hangar: su función pasa al Centro de Operaciones, que es el centro de control del distrito.
- Al entrar por el letrero y avanzar por el bulevar, lo primero que se ve en el centro es el Centro de Operaciones, sobre el eje central, y justo detrás de él el Archivador. Ambos quedan entre la entrada y la plaza de la sede. El bulevar se abre en dos carriles que los rodean y se vuelven a unir antes de la plaza. Como miden 46 m, la sede de 770 m se sigue viendo por encima.
- Los demás hangares se ordenan según el flujo real de un proyecto, como un recorrido en U:
  - Columna izquierda, desde la entrada hacia el fondo: las primeras etapas (análisis y diagnóstico, diseño y arquitectura, construcción).
  - Columna derecha, desde el fondo hacia la entrada: las etapas finales (pruebas y calidad, seguridad y revisión, despliegue), de modo que el despliegue quede cerca de la salida.
  - Asigna cada hangar existente a la etapa que mejor corresponda según su función actual. Si sobra o falta alguno, dímelo en el paso 1 en vez de inventar.
- Dibuja el flujo de forma sutil en el suelo: una línea o flechas tenues que recorren los hangares en orden, desde el Centro de Operaciones.

## Paso 5: que los hangares no pierdan importancia
Cada hangar debe identificarse de un vistazo, pero de forma sutil:
- Su nombre y número de etapa pintados en el techo (por ejemplo "02 · DISEÑO"), legibles desde la vista aérea, en un tono que contraste suave con el techo.
- Una franja de color fina en la fachada según la etapa, con una paleta discreta y coherente.
- Un letrero pequeño junto a la puerta con el mismo nombre.
Nada de etiquetas flotantes grandes para los hangares; esas quedan para los laboratorios y la sede.

## Paso 6: etiquetas que no se monten
Hoy algunas etiquetas flotantes se superponen (por ejemplo OpenAI sobre Google, y SpaceX sobre Binance). Ajusta su altura o desplázalas para que nunca se tapen entre sí desde la cámara de entrada ni desde la vista aérea.

## Paso 7: verificación
- Corre el build y revisa que la consola esté limpia.
- Muéstrame la vista desde la cámara de entrada y la vista aérea.
- Confirma que nada tapa la sede desde la entrada, que los parqueaderos quedan al frente, que el Centro de Operaciones y el Archivador están sobre el eje en ese orden y que el flujo de los hangares se lee.
- Dame la lista final de hangares con su etapa y sus coordenadas, y los archivos cambiados.
```

---

## Resultado del paso 1 y decisiones (2026-11-10)

Gemini hizo el commit `3074e59` en la rama `gemini/concept4-laboratorios-ia` y no editó código. Reportó lo siguiente.

**Hangares actuales (12):** 01 Repositorio, 02 Frontend, 03 Backend, 04 Bases de datos, 05 Frameworks de agentes de IA, 06 Arnés + agente (con la Catedral y el Robot Gigante), 07 Pruebas, 08 Seguridad, 09 Deploy y monitoreo, 10 Análisis de resultados, H18 Centro de Operaciones, H19 Archivador General.

**Hallazgo:** los "parqueaderos" de atrás no son parqueaderos. Son 34 naves menores de herramientas de los hangares 01 a 10, que desde arriba parecen bahías de vehículos. En `concept4` no hay vehículos modelados.

**Propuesta de Gemini:** al salir el hangar 01 (lo absorbe el Centro de Operaciones) y pasar el Centro de Operaciones y el Archivador al eje, quedan 9 hangares. Ofreció tres opciones: A (los 9 existentes), B (agregar una etapa para 5 y 5) y C (unir los dos de IA para 4 y 4). `SPACING = 1.25`, columnas de hangares a ±343,2 m, franja verde a ±501,6 m y laboratorios a ±739,2 m.

**Decisiones:**
- Opción A, con 9 hangares. Orden del proyecto: izquierda Frontend, Backend, Bases de datos, Frameworks de IA, Arnés + agente; derecha Pruebas, Seguridad, Deploy y monitoreo, Análisis de resultados. Gemini había puesto Bases de datos primero y Análisis antes de Deploy; se vuelve al orden original del proyecto.
- Las 34 naves de herramientas no se retiran: tienen contenido. Las del hangar 01 pasan al Centro de Operaciones.
- Se agregan parqueaderos reales con vehículos al frente, hechos con instancias.
- La Catedral del Arnés y el Robot Gigante van junto al hangar Arnés + agente, del mismo lado, sin tapar la sede.

## Bloque para pegar en Gemini

```text
Decisiones:

1. Hangares: Opción A, con los 9 existentes. No unas los de IA (el Arnés + agente es un hangar propio y no pierde importancia) y no agregues hangares nuevos. Usa el orden original del proyecto, no el que propusiste, porque lo cambiaste sin motivo (pusiste Bases de datos primero y Análisis de resultados antes de Deploy):
   - Columna izquierda, de la entrada hacia el fondo (5): Frontend, Backend, Bases de datos, Frameworks de agentes de IA, Arnés + agente.
   - Columna derecha, del fondo hacia la entrada (4): Pruebas, Seguridad, Deploy y monitoreo, Análisis de resultados.
   - El recorrido en U empieza y termina en el Centro de Operaciones: el último hangar (Análisis de resultados) queda cerca de él, para cerrar el ciclo de mejora continua.
   - En la columna derecha, que queda con un hangar menos, deja el espacio libre como plaza pequeña con árboles, sin edificio.
   Si ves que Análisis de resultados es en realidad una etapa previa al Deploy, dímelo antes de mover nada.

2. Las 34 naves menores de herramientas NO se retiran: tienen contenido. Agrúpalas junto a su hangar, en el lado exterior (entre el hangar y la franja verde), respetando los pasillos y sin tapar el flujo. Si no caben, propón una alternativa y espera mi confirmación. Las de herramientas del hangar 01 Repositorio (GitHub, GitLab, Bitbucket) pasan al Centro de Operaciones, alrededor de él.

3. Parqueaderos: crea parqueaderos reales con filas de vehículos al frente, más allá del letrero de entrada, simétricos a ambos lados del bulevar. Los vehículos con InstancedMesh y sencillos, sin tapar el letrero ni la vista hacia la sede. Son nuevos y no reemplazan a las naves.

4. Catedral del Arnés y Robot Gigante: no los pongas en el lado opuesto al hangar Arnés + agente. Colócalos junto a ese hangar, del mismo lado (la izquierda), hacia el fondo, sin tapar la sede desde la cámara de entrada.

5. Todo lo demás de tu plano de coordenadas lo apruebo (SPACING = 1.25, posiciones del eje, laboratorios, franjas verdes, lote vacío y el bulevar bifurcado). Aplica los pasos 2 al 7 en concept4 y dame las coordenadas finales de cada hangar.
```
