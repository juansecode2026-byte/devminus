# Prompt para Gemini: campus de Frameworks de IA y torre DevMinus con vidrio y agentes

> Creado el 2026-11-10. Cuarta ronda sobre `concept4` (`Repositorios NO comerciales/OFICINA AGENTICA DEVMINUS DUBAI/1-gemini/visual/app/`).
> Viene después de `gemini-distrito-ia-flujo-y-separacion.md`.

## Qué cambia
1. En el lote vacío junto a Binance nace un campus de Frameworks de IA: un hangar mayor llamado "Frameworks IA" y cuatro hangares normales (LangSmith, LangChain, LangGraph, Langfuse), con un letrero que lo separa de las bodegas y edificios vecinos.
2. Se elimina el hangar "Frameworks de agentes de IA" de la columna izquierda. Con eso las dos columnas quedan 4 y 4.
3. La torre DevMinus deja de angostarse hacia arriba, gana vidrio transparente con los pisos y departamentos a la vista, y agentes trabajando adentro.

## Prompt

```text
Seguimos en concept4. Tres cambios: un campus nuevo de Frameworks de IA, quitar un hangar y rehacer la piel y la forma de la torre DevMinus. Trabaja solo en concept4.

## Paso 1: antes de editar
1. Haz un commit del estado actual (incluye los ajustes de distribución que ya aplicaste).
2. Dime qué contiene hoy el hangar "Frameworks de agentes de IA" de la columna izquierda y sus naves de herramientas, para saber qué se traslada.
3. Revisa si el proyecto ya tiene datos de los pisos o departamentos de la Torre DevMinus (por ejemplo una lista de pisos por familia o por departamento). Si existen, úsalos; no inventes departamentos.
4. Propón dónde van exactamente los cinco edificios del campus nuevo, cómo queda la torre (medidas y materiales) y cómo resuelves el rendimiento. Espera mi confirmación.

## Paso 2: campus de Frameworks de IA junto a Binance
- Ubicación: en el lote vacío que está junto a Binance (columna derecha de laboratorios, hoy en +739,2, +490). Amplía ese lote y el recinto del distrito lo necesario para que el campus quepa con holgura, sin invadir los parqueaderos, la franja verde ni los pasillos.
- Hangar principal "Frameworks IA": más grande que un hangar normal, para que se distinga de inmediato. Huella de unas 1,4 veces la de un hangar normal y altura de unos 60 m (más alto que un hangar de 46 m, pero por debajo de los laboratorios de 92 m). Techo distinto al de los hangares normales (por ejemplo doble bóveda o una cumbrera de vidrio) y una franja de acento propia. Nombre "FRAMEWORKS IA" pintado en el techo.
- Al lado del hangar principal, cuatro hangares del tamaño normal (132 × 81,8 × 46 m) agrupados de forma compacta y ordenada: "LangSmith", "LangChain", "LangGraph" y "Langfuse". Cada uno con su nombre en el techo y un letrero pequeño en la puerta, igual que los demás hangares.
- Usa solo texto para los nombres: no uses logos oficiales de esas herramientas.
- Separación visual del campus:
  - Un letrero monumento a la entrada del campus que diga "FRAMEWORKS DE IA".
  - Un piso o losa de un tono propio y un borde bajo (seto o cerca baja) que encierre los cinco edificios.
  - Que se lea como un campus aparte, distinto de las bodegas y de los edificios de al lado.
- Traslado: lo que tenía el hangar viejo de frameworks pasa al campus. LangChain, LangGraph y LangSmith ahora son hangares propios. Cualquier otro contenido (por ejemplo RAG u observabilidad) queda dentro del hangar principal "Frameworks IA" como parte de su ficha. No dupliques naves: las naves de herramientas que ahora son hangares se eliminan.

## Paso 3: quitar el hangar viejo y rebalancear las columnas
- Elimina el hangar "Frameworks de agentes de IA" de la columna izquierda.
- Las columnas quedan simétricas, 4 y 4:
  - Izquierda, de la entrada hacia el fondo: Frontend, Backend, Bases de datos, Arnés + agente.
  - Derecha, del fondo hacia la entrada: Pruebas, Seguridad, Deploy y monitoreo, Análisis de resultados.
- Redistribuye los cuatro hangares de cada columna con la misma separación entre ellos, alineados fila a fila con la otra columna. La plaza pequeña que tapaba el hueco de la columna derecha ya no hace falta.
- Actualiza la línea tenue del flujo en el suelo para que siga el nuevo orden.
- La Catedral del Arnés y el Robot Gigante siguen junto al hangar Arnés + agente.

## Paso 4: torre DevMinus más amplia y sin angostarse
- Hoy la torre empieza ancha y se va estrechando hacia arriba. Quiero que mantenga el ancho de forma simétrica hasta arriba: el mismo perímetro en toda la altura, con solo un remate discreto en la corona.
- Hazla un poco más amplia que ahora (por ejemplo, de 92 × 92 m a unos 120 × 120 m de huella), conservando los 770 m de altura, el helipuerto y el helicóptero.

## Paso 5: fachada de vidrio con pisos, departamentos y agentes
Quiero que se vea muy real:
- Muro cortina de vidrio transparente con montantes metálicos finos. Desde afuera se ven las losas de cada piso, de modo que la separación entre pisos se distingue.
- Los pisos se agrupan por departamento, con datos del proyecto si existen. Cada departamento tiene un tono de luz interior propio y sutil, y un rótulo discreto en la fachada en su primer piso.
- Adentro se ven agentes de IA trabajando y moviéndose: caminando, sentados en escritorios, frente a pantallas. Su movimiento debe ser visible a través del vidrio.
- Reflejos del cielo en el vidrio con un mapa de entorno, sin perder la transparencia.

## Paso 6: rendimiento de la torre (reglas de construcción, no optimización fina)
La torre es lo más pesado de la escena. Aprovecha la RTX 3050 sin que la escena se vuelva lenta:
- Losas, montantes y escritorios con InstancedMesh.
- Vidrio con MeshStandardMaterial transparente y mapa de entorno. Si usas MeshPhysicalMaterial con transmisión, que sea solo en calidad alta.
- Agentes interiores por nivel de detalle:
  - Lejos: franjas de ventana con una textura animada de siluetas de agentes en movimiento.
  - Cerca (por ejemplo a menos de 400 m de la cámara): agentes 3D instanciados, solo en los pisos que están a la vista.
- Anima a los agentes interiores en la GPU (en el shader o actualizando solo las instancias visibles), no uno por uno en la CPU.

## Paso 7: verificación
- Corre el build y revisa que la consola esté limpia.
- Muéstrame la vista desde la cámara de entrada, la vista aérea y un acercamiento a la torre donde se vean los pisos y los agentes a través del vidrio.
- Confirma que el campus de Frameworks de IA se distingue de los hangares normales y de las bodegas, que las columnas quedan 4 y 4 y que nada tapa la sede.
- Dame las coordenadas finales del campus y de los hangares, y los archivos cambiados.
```

---

## Corrección v2: torre sin agentes y con pisos y departamentos reales (2026-11-10)

Reemplaza a la corrección anterior ("quitar los agentes"). El usuario vio que la torre se lee como un bloque sólido: no se distinguen los departamentos ni las oficinas.

**Diagnóstico (leído en `concept4_builder.js`, commit `359d910`, sin ejecutar la escena):**
- El "interior lejano" es una sola caja de 106 × 586 × 106 m con un shader que pinta ventanas falsas con opacidad 0,84. Visto de lejos casi no deja ver nada: se lee como una torre maciza.
- El interior 3D de verdad (escritorios y agentes) solo existe a menos de 400 m de la cámara y solo en los pisos cercanos a un foco (unos ±155 m de altura). La cámara de entrada está mucho más lejos, así que nunca lo muestra.
- El vidrio exterior tiene opacidad 0,26 y metalicidad 0,88: refleja mucho y deja ver poco.
- Las losas miden 0,38 m de espesor: de lejos no se distinguen como pisos.
- Los 13 departamentos oficiales existen en los datos (`TORRE_DEPARTMENTS_4`, con `pMin` y `pMax`), pero visualmente no se diferencian.

```text
Corrección de la torre DevMinus en concept4. Hoy se ve como una torre maciza: desde la cámara de entrada no se distinguen los pisos, los departamentos ni las oficinas. Quiero verla como un rascacielos de oficinas real, con los 140 pisos y los 13 departamentos visibles a través del vidrio desde cualquier distancia, y sin agentes ni nada que se mueva adentro. Trabaja solo en concept4.

## Paso 1: antes de editar
1. Haz un commit del estado actual.
2. Confirma este diagnóstico y corrígelo si estoy equivocado: (a) el interior lejano es una caja única con un shader de ventanas pintadas de opacidad 0,84; (b) el interior 3D real solo existe a menos de 400 m de la cámara y solo en la ventana de pisos cercanos al foco; (c) el vidrio exterior tiene opacidad 0,26 y metalicidad 0,88.
3. Dime qué nombre tiene cada uno de los 13 departamentos oficiales (TORRE_DEPARTMENTS_4) y su rango de pisos.
4. Propón el diseño de interior (paso 3) y el presupuesto de draw calls y triángulos. Espera mi confirmación.

## Paso 2: eliminar
Quita por completo, y borra el código, los shaders, los recursos y las constantes que queden sin uso:
- Los agentes del interior, animados en la GPU.
- La caja de fondo con el shader de ventanas pintadas.
- El sistema de nivel de detalle por distancia y la ventana de foco (uFocusY, uFocusHalfSpan, uCloseActive, closeInteriorGroup y su actualización por cuadro).
Dime exactamente qué archivos y funciones quitaste.

## Paso 3: interior real y estático, visible desde lejos
Construye los 140 pisos con geometría real, todo estático y con InstancedMesh, para que se vea igual de cerca y de lejos:
- Núcleo central opaco y oscuro (ascensores y escaleras, de unos 36 × 36 m) que se ve a través del vidrio. Alrededor, la planta libre de oficinas.
- En cada piso: la losa con un espesor mayor al actual (alrededor de 0,6 a 0,8 m, con un canto claro) y un cielo raso con paneles de luz emisivos de luz cálida de oficina. Varía la intensidad por piso: algunos muy iluminados, otros tenues, unos pocos casi apagados.
- Divisiones y escritorios simples, en bloques de baja altura y bajo contraste, distribuidos de forma distinta según el departamento (por ejemplo filas abiertas, isletas, oficinas perimetrales). Que cada departamento se lea como una banda con su propio carácter.
- Cada uno de los 13 departamentos tiene un tono de luz interior propio y sutil, y esa diferencia debe notarse como bandas de color desde la cámara de entrada.
- Separación entre departamentos: en el límite entre dos departamentos, un piso de transición más alto (doble altura) o un piso técnico retranqueado con una banda de persianas, como en los rascacielos reales. Debe verse desde lejos como una marca clara.
- Nombre de cada departamento en la fachada, en su primer piso, con letras discretas pero legibles desde la cámara de entrada, en las caras visibles. Sin rótulos recargados.
- Nada en el interior se mueve ni se anima.

## Paso 4: vidrio
- Bajo la opacidad del muro cortina a un valor entre 0,10 y 0,14 y reduce la metalicidad, manteniendo el reflejo del cielo y los montantes finos, de modo que se vean las losas, las luces y los escritorios a través del vidrio.
- Ordena el render para que el interior se dibuje antes que el vidrio transparente y no se oculte.

## Paso 5: rendimiento
- Todo el interior con InstancedMesh y materiales compartidos, sin actualizaciones por cuadro en la CPU.
- Marca los objetos estáticos con matrixAutoUpdate = false.
- Presupuesto del interior de la torre: menos de 25 draw calls y menos de 150 000 triángulos.

## Paso 6: conservar
La huella de 120 × 120 m, la forma recta sin angostarse, los 770 m de altura, el helipuerto, el helicóptero, la corona y el resto de la escena. La torre sigue siendo la única de más de 92 m del distrito.

## Paso 7: verificación
- Corre el build y revisa que la consola esté limpia.
- Muéstrame la vista desde la cámara de entrada y confirma que desde ahí se distinguen los pisos, las bandas de departamentos y los pisos de transición.
- Muéstrame acercamientos a la torre en tres alturas (baja, media y alta).
- Dame el número de draw calls y de triángulos del interior, y los archivos que cambiaste.
```

---

## Resultado del paso 1 de la corrección v2 y decisiones (2026-11-10)

Gemini confirmó el diagnóstico (a, b y c) y encontró un error adicional que terminaba de ocultar los departamentos: en `TORRE_DEPARTMENTS_4` los campos se llaman `pStart`, `pEnd`, `pisos` y `nombre`, pero `buildDevMinusHeadquarters()` leía `pMin`, `pMax`, `range` y `label`. Por eso todas las losas caían en el primer departamento y las 13 bandas y placas de fachada tenían posición NaN. (Mi diagnóstico había supuesto los nombres `pMin` y `pMax`, que son los que leía el código, no los de los datos.)

**Los 13 departamentos:** P1–P5 Podio · entrada; P6–P10 Recepción y triaje; P11–P23 Frontend; P24–P31 Datos; P32–P44 Backend; P45–P50 QA y pruebas; P51–P56 Ciberseguridad; P57–P83 Pisos de reserva; P84–P91 Costos y eficiencia; P92–P104 Producción (DevOps y LLMOps); P105–P125 AI Engineering; P126–P131 Sala de resultados; P132–P140 Dirección y suite presidencial.

**Propuesta de Gemini:** quitar agentes, caja pintada y sistema de nivel de detalle; 12 pisos de transición de 7,10 m con persianas y 128 pisos de 3,94 m (total 590 m); núcleo opaco de 36 × 36 m; losas de 0,70 m con canto claro; 560 paneles de luz con 45 % de pisos muy iluminados, 40 % tenues y 15 % casi apagados; escritorios y divisiones por tipo de departamento; atlas de nombres en tres caras; vidrio con opacidad 0,12. Presupuesto: 8 a 9 draw calls y unos 42 000 triángulos.

**Decisión:** aprobada con cinco ajustes (letras grandes, pisos de reserva no totalmente apagados, buscar el mismo error de nombres en el resto del código, una vista de cámara "Torre" y conservar la altura total de 590 m).

```text
Apruebo tu propuesta y el hallazgo del error de nombres (pStart, pEnd, pisos y nombre contra pMin, pMax, range y label). Procede con los pasos 2 al 7, con estos ajustes:

1. Letras de los departamentos: que midan al menos 8 m de alto y estén en un tono que contraste con el vidrio, para que se lean desde unos 800 m. Desde la cámara inicial, que está mucho más lejos, no hace falta que se lean; ahí deben verse las bandas de color y los pisos de transición.

2. Pisos de reserva (P57 a P83): no los dejes casi apagados. Mantén al menos una cuarta parte de ellos con luz tenue, para que la mitad de la torre no parezca un hueco ni una obra sin terminar. En general, ningún departamento debe quedar con menos del 20 % de sus pisos encendidos.

3. Busca el mismo error de nombres de propiedades (pMin, pMax, range, label contra pStart, pEnd, pisos, nombre) en todo concept4 y en main.js, el minimapa y las tarjetas laterales, y corrígelo donde aparezca. Dime dónde lo encontraste.

4. Agrega una vista de cámara "Torre" en el menú Vistas, a unos 700 a 900 m de la torre y a media altura, para ver las bandas de departamentos y los pisos de transición sin tener que acercarte a mano.

5. Conserva exactamente los 590 m de cuerpo (12 pisos de transición de 7,10 m y 128 pisos de 3,94 m), la corona, la aguja, el helipuerto a 547 m y el clic en AI Engineering que abre la oficina.

Cuando termines: corre el build, revisa la consola, muéstrame la vista de entrada, la vista "Torre" y acercamientos en tres alturas, y dame los draw calls, los triángulos y los archivos cambiados.
```
