# Prompt para Gemini: reorganizar el distrito "Laboratorios de IA y empresas"

> Creado el 2026-11-11. Se usa con Gemini sobre el proyecto 3D de la escena que corre en localhost.
> Plano de referencia: https://claude.ai/artifact/CoPBZsyDSfE3ncs7Sr1KAH (propuesta D, "Plano con las fábricas por fuera de los hangares"). El artefacto es privado.

## Cómo usarlo
1. Abre Gemini dentro del proyecto de la escena 3D (no en este repositorio).
2. Pega el bloque de abajo tal cual.
3. Gemini primero investiga y te muestra un plan; no edita nada hasta que lo confirmes.

## Ajustes posibles
- **Separación:** el prompt ya incluye un 15 % más de distancia entre estructuras. Para cambiarla, pídele a Gemini "aumenta la separación al 25 %" o "bájala al 10 %". Las medidas se escalan desde el centro.
- **Orientación:** si la escena usa la entrada hacia Z negativo, Gemini lo detecta en el paso 1; solo hay que invertir el signo de Z.
- **Lote vacío:** está para mantener la simetría tres y tres. Para quitarlo, pídele que la columna derecha tenga solo dos laboratorios.

## Prompt

```text
Necesito reorganizar las edificaciones del distrito "Laboratorios de IA y empresas" en la escena 3D de este proyecto, que corre en localhost. La referencia es un plano visto desde arriba que te describo abajo. No cambies nada fuera de este distrito.

## Paso 1: antes de modificar, investiga y repórtame
1. Encuentra en el código dónde se crean y posicionan los edificios del distrito: la sede de DevMinus, los hangares, los laboratorios (Google, OpenAI, Anthropic, SpaceX, Binance), sus robots (Gemini, ChatGPT, Claude, Grok), la plaza, el bulevar y el letrero "DEVMINUS" de la entrada.
2. Dime qué motor o librería usa la escena, en qué archivos están esas posiciones y qué ejes usa (cuál es el ancho, cuál la profundidad y cuál la altura).
3. Mide el ancho actual de un hangar en unidades de la escena. Esa medida es la unidad U que uso abajo.
4. Muéstrame tu plan de cambios y espera mi confirmación antes de editar.

## Paso 2: la distribución que quiero
Hay un eje central que va desde el letrero de entrada hasta la sede. Todo es simétrico respecto a ese eje. De adentro hacia afuera, a cada lado:

1. Centro: plaza circular con la sede de DevMinus en el medio y el bulevar que baja hasta el letrero de entrada.
2. Hangares: una columna de 6 hangares a cada lado, pegada a la plaza y al bulevar.
3. Franja verde con árboles y una cerca a ambos lados, que separa los hangares de los laboratorios.
4. Laboratorios: en el borde exterior del distrito, 3 por lado.
   - Lado izquierdo, desde el fondo hacia la entrada: Google, OpenAI, Anthropic.
   - Lado derecho, desde el fondo hacia la entrada: SpaceX, Binance y un lote vacío (no pongas ningún edificio ahí).

## Paso 3: posiciones (origen = centro de la sede)
X = distancia lateral desde el eje central (izquierda negativa, derecha positiva).
Z = profundidad (negativo = hacia el fondo, positivo = hacia la entrada).
Todas las distancias ya incluyen un 15% más de separación que la versión anterior. Los tamaños de los edificios no cambian, solo la distancia entre ellos.

| Elemento | X | Z |
|---|---|---|
| Sede DevMinus | 0 | 0 |
| Radio de la plaza | 1.25 U | — |
| Hangares, columna izquierda / derecha | −2.08 U / +2.08 U | −0.93, −0.03, 0.85, 1.75, 2.65, 3.54 (U) |
| Franja verde y cerca, izquierda / derecha | −3.07 U / +3.07 U | de −1.3 U a 3.9 U |
| Laboratorios, columna izquierda / derecha | −4.53 U / +4.53 U | −0.35, 1.45, 3.23 (U) |
| Letrero de entrada "DEVMINUS" | 0 | 4.09 U |

Orden de los laboratorios por fila, de Z menor a mayor:
- Izquierda: Google (−0.35), OpenAI (1.45), Anthropic (3.23).
- Derecha: SpaceX (−0.35), Binance (1.45), lote vacío (3.23).

Tamaños de referencia en planta (si ya son parecidos, conserva los actuales):
- Hangar: 1.0 U de ancho × 0.62 U de fondo.
- Laboratorio: 1.9 U de ancho × 1.07 U de fondo.
- Sede: 1.22 U × 1.22 U.

## Paso 4: reglas de forma y altura
- Los laboratorios NO son rascacielos: son fábricas. Techo en diente de sierra, chimenea con el color de cada empresa y una franja de ese color en la fachada.
- Altura de cada laboratorio = el doble de la altura de un hangar (si el hangar mide h, el laboratorio mide 2h).
- La sede de DevMinus es la única torre del distrito y la más alta.
- Colores de marca: Google #3f7fe0, OpenAI #139a80, Anthropic #c97350, SpaceX #a7b1c2, Binance #e0ae27. La sede usa el azul de DevMinus #4b8dff con brillo propio, distinto del azul de Google para que no se confundan.
- Cada robot va junto a su laboratorio, del lado que mira hacia el centro: Gemini con Google, ChatGPT con OpenAI, Claude con Anthropic, Grok con SpaceX. Binance no tiene robot.

## Paso 5: verificación
- Desde la cámara de entrada (mirando por el bulevar hacia la sede), ningún edificio debe tapar a DevMinus.
- Los laboratorios deben distinguirse claramente de los hangares por forma, altura y por la franja verde que los separa.
- Revisa que nada quede encima de otra cosa ni se salga del distrito, y que la separación se vea un poco más amplia, no exagerada.
- Al terminar, dime qué archivos cambiaste y las coordenadas finales de cada edificio.
```
