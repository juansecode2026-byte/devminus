# Revisión UX/UI — landing DevMinus, variante Cobalto v2

> 2026-10-23 · Revisa `devminus-cobalto.html` y define la versión nueva.
> Fuente de contenido: `MARCA.md`. Stack de destino: React 18 + Vite + TS + Tailwind (`STACK.md`).
> Todos los contrastes de este documento están calculados con la fórmula de luminancia relativa de WCAG 2.x sobre el fondo `#060a13` salvo que se indique otro.

---

## 0. Posicionamiento (el ancla de todas las decisiones)

**Para quién:** quien decide en una empresa (gerente, líder de área, director de tecnología) que está evaluando gastar dinero en IA y desconfía del humo. No decide en tres segundos: compara, vuelve, comparte el enlace con alguien más.
**Qué tiene que sentir al llegar:** "esta gente sabe más que yo de esto y no me va a vender humo". Precisión antes que espectáculo.

Consecuencia directa: la página gana credibilidad **mostrando cómo piensa DevMinus** (el informe de viabilidad, el método, los compromisos de la auditoría), no acumulando adornos. Cada elemento que no aporte prueba se quita.

---

## 1. Diagnóstico priorizado

### Críticos (bloquean la publicación)

| # | Problema | Dónde | Por qué importa |
|---|---|---|---|
| C1 | **El menú desaparece por debajo de 980px** (`.nav ul{display:none}`) y no hay botón de menú. En tablet y celular solo quedan el logo y "Hablemos". | nav, media 980 | La mayoría del tráfico de enlaces compartidos (WhatsApp, LinkedIn) llega en móvil. Sin navegación, el visitante no puede saltar a Auditoría, que es la puerta estratégica. |
| C2 | **El extremo oscuro del degradado no pasa AA con texto oscuro.** `#030c1c` sobre `#2f6fe6` = **4,23:1** (mínimo 4,5:1 para texto de 14–15px). Afecta al CTA y a la píldora activa del menú. | `--accent-grad` | El texto de los dos elementos más importantes de la barra queda por debajo de AA en su borde derecho. |
| C3 | **Bordes de los campos del formulario casi invisibles.** `--line` (`rgba(215,232,255,.09)`) da ~**1,3:1** contra el fondo; WCAG 1.4.11 pide 3:1 para límites de componentes. | `input, select, textarea` | Quien tiene baja visión no ve dónde escribir. Es el único punto de conversión de la página. |
| C4 | **El estado del informe se comunica solo con color.** Los puntos verde/amarillo/rojo son `<span>` vacíos; un lector de pantalla oye "Latencia p95 1,9 s" sin saber si está bien o mal. El anillo "71" está en `aria-hidden` y su número no existe para tecnologías asistivas. | consola del hero | WCAG 1.4.1 y 1.1.1. Además, en escala de grises el informe pierde todo el significado. |
| C5 | **El foco cambia la forma de los botones.** `:focus-visible{border-radius:6px}` se aplica al elemento: al tabular, una píldora se vuelve un rectángulo redondeado. El anillo de foco azul sobre un botón azul tampoco se distingue. | regla global de foco | Navegar con teclado se ve roto, justo en los CTA. |
| C6 | **El equipo se muestra como tres "?" punteados.** MARCA dice "mientras no haya clientes, la prueba son las personas". Tres perfiles vacíos dicen lo contrario: "todavía no hay nadie". | `#equipo` | Es la sección que debería dar más confianza y hoy resta. |
| C7 | **El formulario no tiene ningún estado real**: `novalidate` desactiva la validación nativa sin reemplazarla, no hay errores por campo, ni estado de envío, ni error de red; el mensaje de confirmación no se anuncia (`role="status"` ausente). Tampoco hay aviso de tratamiento de datos (Ley 1581). | `#contacto` | Ver sección 4. El aviso de datos es un requisito legal, no un detalle. |
| C8 | **Faltan lo básico del documento:** `<html lang="es">`, `<meta charset>`, `<meta name="viewport">`, enlace "Saltar al contenido". | `<head>` | Sin `viewport` el responsive real no funciona fuera del visor de artefactos. Sin `lang`, el lector de pantalla pronuncia el español con reglas de inglés. |

### Importantes (bajan la calidad de forma visible)

| # | Problema | Propuesta resumida |
|---|---|---|
| I1 | **Dos píldoras brillantes compiten en la barra.** Al cargar, "Inicio" (activo) y "Hablemos" (CTA) tienen el mismo degradado: "dónde estás" y "qué hacer" se ven idénticos. | Quitar "Inicio" del menú (el logo ya lleva arriba). En el hero no hay ítem activo y solo brilla el CTA; el ítem activo aparece al bajar. Diferenciar por tamaño y flecha (anatomía en 3.2). |
| I2 | **El acento aparece ~9 veces arriba del pliegue**: "Minus" del logo, cuadro del logo, píldora activa, CTA de la barra, punto con brillo del eyebrow, `<em>` del h1, CTA del hero, anillo y barras de la consola. Cuando todo es azul, nada es azul. | Presupuesto de acento (3.1): queda en CTA, píldora activa, anillo del informe y números del método. Se quitan los otros. |
| I3 | **El vidrio perdió significado**: hay ~20 paneles con `backdrop-filter` (nav, consola, 4 puertas, método, auditoría, 4 reglas, 5 tarjetas de "para quién", 2 productos, 3 miembros, contacto). Todo es tarjeta, así que nada se destaca; y 20 desenfoques sobre un fondo fijo hacen lento el scroll en celulares de gama media. | Tres niveles de superficie (3.1). `backdrop-filter` solo en nav, menú móvil, consola y contacto, que son los que realmente flotan sobre contenido. |
| I4 | **"Para quién" repite las puertas.** "Software a la medida", "Equipos que aprenden" y "Antes de implementar" dicen lo mismo que Construcción, Capacitación y Auditoría. El título "Desde un equipo de 15 hasta una corporación" confunde: el 15 es el tamaño de los grupos de capacitación, no de empresa. | Quitar las cuatro tarjetas chicas. Conservar solo el bloque de grandes empresas como sección propia (MARCA lo pide: "otro mensaje y otro nivel de formalidad"). |
| I5 | **Las puertas suben al pasar el mouse pero no llevan a ningún lado.** Affordance falsa: parece clicable y no lo es. Y el producto de entrada de cada puerta ("Diagnóstico en 2 semanas") es un chip apagado, cuando es justamente el primer paso. | Cada puerta es un enlace completo a `#contacto` con la opción del formulario preseleccionada, y termina en "Empieza con: …". |
| I6 | **El primer paso no se ve.** Los dos CTA del hero piden compromisos altos ("Agenda un diagnóstico" suena al diagnóstico de 2 semanas, que es pago) y no hay una línea que diga qué pasa después del clic. Los competidores revisados resuelven esto con un primer paso barato muy visible. | Microcopy bajo los CTA + primer paso en cada puerta + auditoría con precio fijo destacado (sección 2.3). |
| I7 | **Las barras de "precisión por iteración de prompts" no pertenecen al informe.** Un informe que audita la propuesta de *otro* proveedor no tendría las iteraciones de prompts de DevMinus. Es decoración que contradice la historia. | Quitarlas (es el "accesorio" de la regla de Chanel, ver 2.5). |
| I8 | **El lema aparece en el pie**. MARCA (§3) dice que solo se escribe en el subtítulo de la portada, la bio de redes y la primera diapositiva de una propuesta. | Quitarlo del pie. |
| I9 | **Ritmo plano.** Todas las secciones tienen el mismo `padding-block:72px` y el mismo encabezado a dos columnas; la página es una secuencia de grillas de tarjetas sin pausas. Los valores de espaciado están fuera de cualquier escala (9, 11, 14, 18, 22, 26, 36, 52). | Escala de 8 y dos ritmos de sección (estándar y destacada), ver 3.3. |
| I10 | **Áreas táctiles por debajo de 44px**: botones de ~38px de alto, ítems del menú de ~32px. | `min-height:44px` en todo lo interactivo; 48px en el menú móvil. |
| I11 | **Texto auxiliar demasiado chico**: `.tag-ej` 10px, chips 11px, mono con `letter-spacing` amplio. | Mínimo absoluto 12px y solo para etiquetas en mono; todo texto que se lee, desde 14px. |
| I12 | **`--muted` (`#8d9ab2`) queda justo en el límite sobre la zona del brillo ambiental**: 7,0:1 sobre el fondo puro, pero **~4,5:1** donde pega el halo superior derecho, que es exactamente detrás de la consola. | Subir a `#9aa6bd` (8,1:1 sobre fondo, ~5,2:1 en el pico del halo). |
| I13 | **Semántica de landmarks y encabezados**: `<section>` sin nombre accesible en Servicios, Auditoría, Productos, Equipo y Contacto; íconos SVG de las puertas sin `aria-hidden`; `aria-current="true"`/`"false"` en lugar de `aria-current="location"` y quitar el atributo. | Detalle en 3.6. |

### Pulido

- **P1.** Se carga Sora 700 y no se usa; Geist Mono se usa en 700 (cuadro del logo) pero solo se cargan 400/500, así que el navegador sintetiza una negrita falsa. Cargar solo lo que se usa (3.2).
- **P2.** Google Fonts en producción: mejor autoalojar con `@fontsource` (compatible con Vite), con fallback ajustado (`size-adjust`) para evitar saltos de layout al cargar la fuente.
- **P3.** Sin estado `:active` en botones ni tarjetas; el clic no tiene respuesta táctil.
- **P4.** El scroll-spy recalcula `getBoundingClientRect` en cada evento de scroll; usar `IntersectionObserver`.
- **P5.** "Variante Cobalto · 2026" en el pie es texto de prototipo.
- **P6.** El `<em>` del h1 pinta "funcionando" de azul; con el acento ya presente en CTA y consola, compite (ver I2).
- **P7.** El select del formulario arranca en "Consultoría" preseleccionado: sesga la respuesta y oculta la opción "Aún no lo sé".
- **P8.** `.lema` usa `opacity:.9`; la opacidad hace que el contraste dependa de lo que haya detrás. Usar colores de token, nunca opacidad sobre texto.

### Evaluación puntual de la barra estilo intezia

La intención funcionó: la cápsula centrada da presencia, el ítem activo relleno orienta mejor que un subrayado y el CTA se encuentra sin buscarlo. Lo que no quedó bien son cuatro cosas, todas corregibles sin cambiar el estilo que eligió el usuario:

1. Dos píldoras idénticas en el estado inicial (I1).
2. Contraste del extremo oscuro del degradado (C2).
3. No existe en móvil ni en tablet (C1).
4. El foco de teclado deforma las píldoras (C5).

---

## 2. Propuesta de contenido y estructura

### 2.1 Orden nuevo de secciones

| # | Sección | Cambio frente a v2 |
|---|---|---|
| 0 | Saltar al contenido + barra | Sin "Inicio". Menú: Servicios · Auditoría · Empresas · Productos (+ Equipo cuando existan perfiles). Menú móvil nuevo. |
| 1 | Hero con informe de viabilidad | Lead más corto, microcopy del primer paso, informe sin barras y accesible. |
| 2 | Franja "Construimos con" | **Nueva.** Reemplaza la prueba social de logos de clientes sin inventar nada. |
| 3 | Servicios (cuatro puertas) | Cada puerta es un enlace con su primer paso. |
| 4 | Método | Cada paso dice qué servicio lo cubre; se elimina el párrafo del encabezado que lo explicaba. |
| 5 | Auditoría | Se vuelve la sección destacada: compromisos como lista de verificación, no cuatro tarjetas. |
| 6 | Grandes empresas | Sale del bloque grande de "Para quién". Las otras cuatro tarjetas se eliminan. |
| 7 | Productos | candyCRM como caso demostrable; se quita la tarjeta punteada "Más productos". |
| 8 | Equipo | **Oculta** hasta tener al menos dos perfiles reales (ver 4). |
| 9 | Contacto | Formulario con todos sus estados y aviso de datos. |
| 10 | Pie | Sin lema, sin texto de prototipo; con navegación, correo y política de datos. |

### 2.2 Cómo resolver la prueba social sin inventar clientes

La regla de MARCA es clara: mientras no haya clientes, la prueba son las personas y lo que han construido. Se proponen cuatro capas, **todas verdaderas hoy**:

1. **"Construimos con"** bajo el hero: React · Supabase · Cloudflare · Claude (Anthropic). Es lo que MARCA §5b ya aprueba contar a clientes. Logos monocromos en `--text-muted`, altura 20px, con la etiqueta explícita **"Construimos con"**, nunca "Confían en nosotros" ni nada que sugiera que son clientes. *Pendiente para quien construya:* revisar las guías de uso de marca de cada proveedor.
2. **El informe de viabilidad como prueba de criterio.** El hero ya muestra un informe de ejemplo; es la pieza más convincente de la página porque enseña cómo piensa el equipo. Rotularlo como "Informe de ejemplo · escenario ficticio" lo hace honesto. *Fuera de este alcance:* un PDF descargable con un informe de ejemplo completo sería la mejor prueba posible antes del primer cliente, pero requiere redactar el contenido; queda como recomendación.
3. **candyCRM como caso**: "Producto propio, construido de punta a punta por DevMinus". No decir que tiene clientes (MARCA: hoy no los tiene).
4. **Compromisos públicos de la auditoría** (precio fijo, decimos la verdad, sin conflicto oculto, confidencial): una política escrita es prueba de seriedad.

Y un espacio reservado, **no visible**, para "Casos": el componente se construye pero no se renderiza hasta que existan las primeras entregas documentadas (MARCA §9). Nunca se muestra vacío.

### 2.3 Cómo hacer visible el primer paso

- **Microcopy bajo los CTA del hero** (14px, `--text-muted`):
  - **Opción A, ya aprobada:** "Te respondemos con una propuesta de por dónde empezar." (sale del texto de contacto actual).
  - **Opción B, requiere decisión del usuario:** "Primera conversación de 30 minutos, sin costo." Es el patrón que comparten los cuatro competidores revisados. No está en MARCA, así que **no se publica sin aprobación**; si se aprueba, se agrega a MARCA §4 "Entradas pequeñas".
- **CTA primario del hero:** "Agenda una conversación" en lugar de "Agenda un diagnóstico". El diagnóstico de 2 semanas es un producto pago (precio PENDIENTE); pedirlo como primer clic es demasiado compromiso. El CTA secundario se mantiene: "Pide una segunda opinión" (conecta con el informe que se ve a la derecha).
- **Cada puerta termina en su entrada pequeña** como enlace: "Empieza con: Diagnóstico en 2 semanas →". Lleva a `#contacto` con la opción del select preseleccionada (`?puerta=consultoria`).
- **Auditoría con "Precio fijo" visible** junto al CTA, con el monto como `[PENDIENTE]` hasta que se defina.

### 2.4 Redacción de titulares (solo donde mejora claridad)

| Sección | v2 | Propuesta | Motivo |
|---|---|---|---|
| Hero h1 | De la idea al sistema de IA *funcionando*. | Se mantiene, sin color en "funcionando". | Ya es claro y es el mensaje de MARCA §2. |
| Hero lead | 37 palabras | "Decidimos contigo qué hacer con IA, lo construimos de punta a punta, auditamos lo que otros te proponen y capacitamos a tu equipo." (24 palabras) | Mismo contenido, más fácil de leer. Hoy hay tres bloques de texto entre el h1 y el CTA. |
| Para quién | Desde un equipo de 15 hasta una corporación. | Sección **Grandes empresas**: "Tu propio equipo de AI engineering." | Elimina la ambigüedad del "15" y le da a grandes empresas su propio mensaje, como pide MARCA. |
| Auditoría | Antes de pagarle a otro, pregúntanos. | Se mantiene. | Es el mejor titular de la página. |
| Productos | Software propio, listo para usar. | Se mantiene. | |

### 2.5 Qué se quita (regla de Chanel)

El accesorio principal que se quita son **las barras de la consola**: decoran, no informan, y cuentan una historia que contradice el informe (I7). Con ellas se van también:

- el color del `<em>` del h1,
- "Minus" en azul dentro del logo (el cuadro con el signo menos ya es la marca),
- el brillo del punto del eyebrow,
- las cuatro tarjetas chicas de "Para quién",
- la tarjeta punteada "Más productos",
- los tres perfiles "?",
- el lema del pie,
- el fondo azul de los íconos de las puertas.

**La audacia se concentra en un solo lugar: el informe de viabilidad del hero.** Es la firma visual de DevMinus (ver 3.5) y es lo único que lleva vidrio elevado, anillo de acento y semáforo de estados a la vez.

---

## 3. Sistema para la versión nueva

### 3.1 Tokens de color

Nombres por rol. Los valores marcados con ✱ cambian respecto de v2.

```css
:root{
  /* superficies */
  --color-bg:            #060a13;
  --color-surface-1-top: rgba(220,235,255,.06);    /* ✱ tarjetas, sin blur */
  --color-surface-1-bot: rgba(220,235,255,.025);   /* ✱ */
  --color-surface-2-top: rgba(220,235,255,.08);    /* ✱ vidrio elevado, con blur */
  --color-surface-2-bot: rgba(220,235,255,.035);
  --color-surface-nav:   rgba(10,18,36,.82);
  --color-surface-menu:  rgba(6,10,19,.70);
  --color-surface-field: rgba(3,6,12,.55);         /* ✱ campos: más oscuros que el panel, para que se lean como hueco */

  /* líneas */
  --color-line:          rgba(215,232,255,.09);    /* decorativa: divisores, bordes de tarjeta */
  --color-line-strong:   rgba(215,232,255,.18);    /* ✱ borde de tarjeta en hover */
  --color-line-field:    rgba(200,220,255,.45);    /* ✱ borde de campos: ~3,2:1 (pasa 1.4.11) */
  --color-line-nav:      rgba(150,190,255,.20);

  /* texto */
  --color-text:          #edf2fb;                  /* 17,6:1 */
  --color-text-muted:    #9aa6bd;                  /* ✱ 8,1:1 sobre fondo, ~5,2:1 en el pico del halo */
  --color-text-placeholder: #7d8aa3;               /* ✱ ~5,4:1 sobre --color-surface-field */

  /* acento */
  --color-accent:        #4b8dff;                  /* texto/ícono sobre fondo: 6,2:1 */
  --color-accent-ink:    #030c1c;                  /* texto sobre el degradado */
  --color-accent-soft:   rgba(75,141,255,.15);
  --gradient-accent:     linear-gradient(135deg,#a9c9ff 0%,#5b97ff 55%,#3f80f7 100%); /* ✱ */
  --color-focus-ring:    #a9c9ff;                  /* ✱ distinto del acento, se ve sobre botones azules */

  /* estados del informe y del formulario */
  --color-ok:            #34d399;
  --color-warn:          #fbbf24;
  --color-bad:           #f87171;

  /* ambiente */
  --color-glow-1:        rgba(75,141,255,.30);
  --color-glow-2:        rgba(20,190,220,.14);
}
```

**Contraste verificado del degradado nuevo con `--color-accent-ink`:**

| Punto | v2 | Nuevo |
|---|---|---|
| inicio | `#8fbaff` ~10:1 | `#a9c9ff` ~11:1 |
| medio | `#4b8dff` 6,1:1 | `#5b97ff` 6,8:1 |
| final | `#2f6fe6` **4,23:1 ✗** | `#3f80f7` **5,26:1 ✓** |

El cambio de tono es casi imperceptible: sigue siendo cobalto, solo un punto más luminoso en el final.

Los colores de estado (`ok`, `warn`, `bad`) superan 7:1 sobre el fondo y se pueden usar como texto.

**Presupuesto de acento.** Solo estos usos:

1. Degradado: CTA primarios y píldora activa del menú.
2. `--color-accent` sólido: anillo del informe, números `01–04` del método, chip "Precio fijo" de la auditoría, enlaces dentro de texto.
3. `--color-accent-soft`: fondo del panel principal de auditoría (único panel teñido de la página).
4. `--color-focus-ring`: anillo de foco.

Cualquier otro uso necesita justificarse contra esta lista.

**Tres niveles de superficie** (resuelven I3):

| Nivel | Fondo | Borde | Blur | Sombra | Dónde |
|---|---|---|---|---|---|
| 0 | ninguno | ninguno | no | no | encabezados de sección, franja "Construimos con", texto de grandes empresas |
| 1 · tarjeta | `linear-gradient(180deg, surface-1-top, surface-1-bot)` | `1px --color-line` | **no** | `inset 0 1px 0 rgba(255,255,255,.05)` | puertas, método, compromisos, producto |
| 2 · vidrio | `linear-gradient(180deg, surface-2-top, surface-2-bot)` | `1px --color-line` | `blur(16px) saturate(140%)` | `inset 0 1px 0 rgba(255,255,255,.06), 0 20px 50px -24px rgba(0,0,0,.6)` | barra, menú móvil, consola del hero, panel de contacto |

El vidrio de verdad (con blur) queda para lo que flota sobre otra cosa. Visualmente las tarjetas de nivel 1 se ven casi iguales porque el fondo detrás es un degradado suave, pero el scroll en móvil deja de pagar 20 desenfoques.

### 3.2 Tipografía

El par se mantiene: **Sora** (display, geométrica con carácter, da el lado "tech") + **Geist** (cuerpo, neutra y muy legible) + **Geist Mono** (cifras, etiquetas, la voz del informe). Es una decisión con personalidad, no el default de Tailwind.

Pesos que se cargan: Sora 500/600 · Geist 400/500/600 · Geist Mono 400/500. El cuadro del logo pasa de mono 700 a **Geist Mono 500**. Autoalojar con `@fontsource/sora`, `@fontsource/geist-sans` y `@fontsource/geist-mono`, con `font-display: swap`.

**Escala** (base 16, relación ~1,25; los tamaños grandes son fluidos):

| Token | Tamaño / interlineado | Fuente y peso | Tracking | Uso |
|---|---|---|---|---|
| `--text-label` | 12 / 16 | Mono 500, mayúsculas | +0.12em | eyebrows, etiquetas del informe. **Mínimo absoluto.** |
| `--text-sm` | 14 / 20 | Geist 400–500 | 0 | chips, microcopy, labels del formulario, menú |
| `--text-base` | 16 / 26 | Geist 400 | 0 | cuerpo, campos (16px evita el zoom automático de iOS) |
| `--text-md` | 18 / 28 | Geist 400 · Sora 500 en el lema | 0 | lead del hero, lema |
| `--text-lg` | 20 / 28 | Sora 600 | -0.015em | h3 de tarjetas |
| `--text-xl` | 24 / 32 | Sora 600 | -0.02em | h3 destacados (candyCRM, panel de auditoría) |
| `--text-2xl` | `clamp(30px, 1.2rem + 2vw, 44px)` / 1.1 | Sora 600 | -0.025em | h2 |
| `--text-hero` | `clamp(40px, 1.5rem + 3.6vw, 72px)` / 1.04 | Sora 600 | -0.035em | h1 |
| `--text-metric` | 14 / 20 | Mono 500, `tabular-nums` | 0 | valores del informe |

`h2` con `max-width:18ch`; párrafos con `max-width:60ch`; lead con `max-width:52ch`; `text-wrap:balance` en h1 y h2.

### 3.3 Espaciado, radios y ritmo

```css
:root{
  --space-1: 8px;  --space-2: 16px; --space-3: 24px; --space-4: 32px;
  --space-5: 40px; --space-6: 48px; --space-8: 64px; --space-10: 80px; --space-12: 96px;
  --space-half: 4px;   /* solo para separaciones internas de la cápsula del menú */

  --radius-sm: 12px;   /* campos, filas del informe */
  --radius-md: 16px;   /* bloques internos */
  --radius-lg: 24px;   /* tarjetas y paneles */
  --radius-pill: 999px;

  --container: 1200px;
  --gutter: 16px;      /* 24px desde 640px */
}
```

**Dos ritmos de sección** (resuelven I9):

| Ritmo | Móvil | ≥1024px | Secciones |
|---|---|---|---|
| Estándar | `--space-8` (64px) arriba y abajo | `--space-12` (96px) | Servicios, Método, Empresas, Productos, Contacto |
| Comprimido | `--space-4` (32px) | `--space-6` (48px) | franja "Construimos con" (es una pausa, no una sección) |

La sección de Auditoría usa el ritmo estándar, pero su panel ocupa todo el ancho del contenedor: el cambio de forma, y no el tamaño de letra, es lo que la marca como la sección importante.

- Encabezado de sección a h2 → contenido: `--space-6` (48px); en móvil, `--space-5` (40px).
- Eyebrow → h2: `--space-2`.
- Separación entre tarjetas de una grilla: `--space-2` (16px) en móvil, `--space-3` (24px) desde 1024px.
- Relleno de tarjeta: `--space-3` (24px). Paneles grandes (auditoría, contacto): `--space-4` en móvil, `--space-6` desde 1024px.

### 3.4 Breakpoints

Se diseña desde 360px. Coinciden con los valores por defecto de Tailwind, así no hay que configurar pantallas propias:

| Nombre | Desde | Qué cambia |
|---|---|---|
| base | 360 | una columna; menú en botón |
| `sm` | 640 | puertas a 2 columnas; Nombre y Empresa en una fila; gutter de 24px |
| `lg` | 1024 | menú en cápsula visible; hero a 2 columnas; puertas y método a 4 columnas; auditoría y contacto a 2 columnas |

No hace falta un breakpoint intermedio: entre 640 y 1023 la grilla de 2 columnas funciona para todo.

### 3.5 Firma visual: la fila del informe

El elemento reconocible de DevMinus es la **fila del informe**: indicador de estado + criterio + valor en mono, en una fila con borde fino. Aparece en el hero y **se repite** en los compromisos de la auditoría y en los criterios de "qué revisamos". La página entera habla como un informe técnico, que es exactamente lo que se le vende al cliente.

---

## 4. Especificación sección por sección (hand-off)

Todas las medidas salen de los tokens de la sección 3.

### 4.0 Documento

- `<html lang="es">`, `<meta charset="utf-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`.
- Primer elemento enfocable: enlace "Saltar al contenido" → `#contenido`. Oculto hasta recibir foco; al recibirlo aparece arriba a la izquierda como píldora de nivel 2.
- Foco global:
  ```css
  :focus-visible{ outline:2px solid var(--color-focus-ring); outline-offset:3px; }
  ```
  Sin tocar el `border-radius` (el outline ya sigue el radio del elemento).
- Fondo ambiental: igual que v2 (es parte de la dirección aprobada), con los tokens de glow.

### 4.1 Barra (nivel 2)

**Anatomía desde 1024px**

- Banda sticky, `top: env(safe-area-inset-top)`, relleno vertical `--space-2`.
- Cápsula de 64px de alto, `--radius-pill`, fondo `--color-surface-nav`, borde `--color-line-nav`, relleno `8px 8px 8px 24px`.
- Logo: cuadro 28×28, `--radius-sm`, fondo `--color-accent`, signo "−" en Geist Mono 500 16px color `--color-accent-ink`; texto "DevMinus" en Sora 600 20px, todo `--color-text`. Separación de `--space-1`.
- Menú: cápsula interna centrada (`margin-inline:auto`), fondo `--color-surface-menu`, borde `--color-line-nav`, relleno 4px, separación 4px.
  - Ítems de 40px de alto, `padding-inline:16px`, Geist 500 14px, `--color-text-muted`.
  - **Activo:** `--gradient-accent`, `--color-accent-ink`, peso 600, sombra `0 6px 22px -6px var(--color-glow-1), inset 0 1px 0 rgba(255,255,255,.35)`.
  - Ítems: Servicios · Auditoría · Empresas · Productos (+ Equipo cuando exista). **Sin "Inicio".**
- CTA "Hablemos →": 48px de alto, `padding-inline:24px`, Geist 600 15px, `--gradient-accent`, flecha de 16px.
  - Lo que lo distingue del ítem activo: 8px más alto, flecha y separación de `--space-1` respecto de la cápsula del menú.

**Anatomía por debajo de 1024px**

- Logo + CTA "Hablemos" (44px) + botón de menú de 44×44 (ícono de tres líneas que pasa a ×) con `aria-expanded` y `aria-controls="menu-movil"`.
- Panel desplegable de nivel 2, 8px debajo de la cápsula, `--radius-lg`, relleno `--space-1`.
- Ítems de 48px de alto en una columna, Geist 500 16px. El activo usa el mismo degradado que en escritorio.

**Estados**

| Estado | Ítem del menú | CTA |
|---|---|---|
| reposo | texto `--color-text-muted` | degradado |
| hover | texto `--color-text`, fondo `--color-surface-2-top` | sube 1px, sombra más amplia |
| active (presionado) | igual que hover | `translateY(0)` y `filter:brightness(.95)` |
| focus-visible | anillo `--color-focus-ring` | anillo `--color-focus-ring` |
| actual | degradado + `aria-current="location"` | en `#contacto` también recibe `aria-current="location"` |

**Comportamiento**

- *Scroll-spy* con `IntersectionObserver` (`rootMargin: "-40% 0px -55% 0px"`). En el hero no hay ítem activo.
- Menú móvil: se cierra con Esc (y el foco vuelve al botón), al elegir un ítem y al hacer clic fuera. Es un *disclosure*, no un modal: no atrapa el foco.

### 4.2 Hero

**Layout**

- Por debajo de 1024px: una columna (texto, luego informe), relleno `--space-4` arriba y `--space-8` abajo.
- Desde 1024px: grilla `1.05fr .95fr`, separación `--space-6`, relleno `--space-8` arriba y `--space-12` abajo.

**Columna de texto, en este orden**

| Elemento | Estilo | Separación posterior |
|---|---|---|
| Eyebrow "AI engineering para empresas" | `--text-label`, `--color-text-muted`, punto de 8px `--color-accent` sin brillo | `--space-3` |
| h1 | `--text-hero`, todo `--color-text` | `--space-3` |
| Lema "Soluciones inteligentes con firma humana." | Sora 500 `--text-md`, `--color-text` | `--space-2` |
| Lead (24 palabras, ver 2.4) | `--text-md`, `--color-text-muted`, `max-width:52ch` | `--space-4` |
| CTA | primario "Agenda una conversación" + secundario "Pide una segunda opinión" | `--space-2` |
| Microcopy (opción A o B de 2.3) | `--text-sm`, `--color-text-muted` | — |

- CTA: 48px de alto, `padding-inline:24px`, separación `--space-2`. En 360–639px se apilan a ancho completo (Fitts: blancos grandes al alcance del pulgar).
- Botón secundario: fondo `--color-surface-1-top`, borde `--color-line-strong`, texto `--color-text`.

**Informe de viabilidad (nivel 2, la firma)**

- Relleno `--space-3`.
- **Encabezado:**
  - "Informe de viabilidad" (Sora 600 16px).
  - "Propuesta externa · Agente de soporte con RAG" (Mono 400 12px, muted).
  - A la derecha, la etiqueta "Ejemplo" (`--text-label`, borde `--color-line`).
- **Veredicto:** bloque de `--radius-md` con relleno `--space-2` y separación `--space-2`.
  - Anillo de 64px con "71" en mono 16 y "/100" en mono 11 debajo.
  - "Viable con ajustes" (Sora 600 18).
  - "3 de 5 criterios cumplen. El costo proyectado no cuadra con el volumen real." (14, muted).
  - Accesible: el SVG va con `aria-hidden`, y a su lado un texto oculto visualmente: "Puntaje de viabilidad: 71 de 100".
- **Filas del informe:** separación de 8px; cada una de 44px de alto mínimo, `--radius-sm`, relleno `12px 16px`, grilla `auto 1fr auto`.
  - Indicador de 16px **con forma además de color**:
    - ok = círculo relleno con ✓,
    - advertencia = triángulo con !,
    - falla = cuadrado con ×.
  - Las tres formas en SVG; así la fila se lee también en escala de grises.
  - Texto oculto visualmente con el estado: "Cumple", "Advertencia", "No cumple".
  - Valor en `--text-metric`. Si el estado es advertencia o falla, el valor toma `--color-warn` o `--color-bad`; si cumple, `--color-text-muted`.
- **Sin barras.** En su lugar, una última línea opcional, separada por un borde superior `--color-line` y `--space-2` de relleno: "Recomendación: renegociar el costo por consulta antes de firmar." (14, `--color-text`). Cierra la historia del informe con una acción, que es lo que el cliente compra.
- Bajo la consola, fuera del panel: "Informe de ejemplo · escenario ficticio" (`--text-label`, muted).

### 4.3 Franja "Construimos con" (nivel 0, nueva)

- Ritmo comprimido.
- Una fila con la etiqueta "Construimos con" (`--text-label`, muted) y cuatro logos monocromos en `--color-text-muted`, de 20px de alto, separados `--space-6`.
- En móvil: etiqueta arriba y logos en grilla de 2×2 con separación `--space-3`.
- Sin bordes ni panel: es una pausa visual entre el hero y la primera grilla.
- Los logos llevan `alt` con el nombre ("React", "Supabase", "Cloudflare", "Claude de Anthropic").

### 4.4 Servicios — cuatro puertas (nivel 1)

**Encabezado**

- Eyebrow "Cuatro puertas, un mismo equipo".
- h2 "Entra por donde lo necesites."
- El párrafo de la derecha se mantiene desde 1024px; debajo de 1024 va bajo el h2.

**Grilla:** 1 columna (base), 2 (`sm`), 4 (`lg`).

**Anatomía de la puerta.** Todo el `<article>` es un `<a href="#contacto?puerta=…">`, en columna, relleno `--space-3`, separación `--space-2`.

| Orden | Elemento | Estilo |
|---|---|---|
| 1 | Ícono | 40×40, `--radius-sm`, fondo `--color-surface-2-top`, borde `--color-line`, trazo `--color-text` 1.8 (el azul de fondo se quita), `aria-hidden` |
| 2 | h3 con el nombre del servicio | `--text-lg` |
| 3 | La frase del cliente ("No sé por dónde empezar con IA.") | Geist 500 16/24, `--color-text`. Es lo que conecta con el visitante: el contenido parte del problema real (MARCA §8) |
| 4 | Descripción | 15/24, muted |
| 5 | Pie, empujado abajo con `margin-top:auto` y separado por un borde superior `--color-line` + `--space-2` de relleno | "Empieza con" (`--text-label`, muted) y debajo la entrada pequeña ("Diagnóstico en 2 semanas") en Geist 500 14 `--color-text`, con flecha a la derecha |

En la puerta de Auditoría, el pie dice "Empieza con · Informe a precio fijo".

**Estados**

| Estado | Comportamiento |
|---|---|
| hover | sube 4px, borde `--color-line-strong`, flecha se desplaza 4px y toma `--color-accent`; 200ms |
| active | `translateY(-2px)` |
| focus-visible | anillo en toda la tarjeta |

**Destino del enlace:** el parámetro preselecciona el select del formulario; hay que leerlo del hash/query al llegar.

### 4.5 Método (nivel 1, un solo panel)

- Panel con relleno `--space-1`; cada paso con relleno `--space-3`.
- 1 columna (base), 2 (`sm`), 4 (`lg`), con divisores `--color-line` como en v2.
- Cada paso, en este orden:
  - número en mono `--color-accent`,
  - h3 `--text-lg`,
  - descripción muted 15,
  - **etiqueta del servicio que lo cubre**: "Consultoría" en los pasos 01 y 02, "Construcción" en 03, "Capacitación" en 04, en `--text-label` muted y empujada abajo.
- El párrafo del encabezado ("La consultoría cubre…") se elimina porque las etiquetas ya lo dicen, y en el lugar donde se necesita.
- En móvil, los cuatro pasos quedan como línea de tiempo vertical: el número a la izquierda en una columna de 40px y una línea `--color-line` que los une.

### 4.6 Auditoría (la sección destacada)

- Panel único de ancho completo, nivel 1, con fondo `linear-gradient(135deg, var(--color-accent-soft), var(--color-surface-1-bot) 60%)`. Es el único panel teñido de la página.
- Relleno `--space-4` en móvil y `--space-6` desde 1024px.
- Grilla de 2 columnas desde 1024px (`1.1fr 1fr`, separación `--space-6`).

**Izquierda**

- Eyebrow "Auditoría de IA".
- h2 "Antes de pagarle a otro, pregúntanos."
- Párrafo actual.
- **"Qué revisamos"** como 4 filas del informe sin estado (indicador neutro), con el texto del párrafo partido en criterios: Arquitectura · Costo real de operación · Riesgos · Funcionamiento con tu volumen.
- Fila final con el CTA "Solicitar auditoría" (degradado, 48px) y a su lado el chip "Precio fijo" (`--color-accent` sobre `--color-accent-soft`, 14px), con el monto `[PENDIENTE]`.

**Derecha: "Nuestros compromisos"**

- 4 filas del informe con el indicador ✓ en `--color-ok`.
- Título en Geist 600 16 y descripción muted 14 en dos líneas.
- Reemplaza las cuatro tarjetas de vidrio: misma información, una sola superficie, y refuerza la firma.

**Comportamiento:** en móvil, primero el bloque izquierdo completo, después los compromisos, y el CTA se repite al final del panel para no obligar a volver arriba.

### 4.7 Grandes empresas (nivel 0)

- Grilla de 2 columnas desde 1024px.
- **Izquierda:**
  - eyebrow "Grandes empresas",
  - h2 "Tu propio equipo de AI engineering.",
  - párrafo actual de la tarjeta grande.
- **Derecha:** las tres viñetas actuales (diseño del área y perfiles, plataforma y estándares de evaluación, primeros casos en producción) como lista numerada en mono, con divisores `--color-line` y filas de `--space-3` de relleno vertical.
- CTA secundario "Conversemos sobre tu área de IA" → `#contacto?puerta=consultoria`.
- Sin tarjeta: el tono más sobrio y con más aire es la diferencia de formalidad que pide MARCA.

### 4.8 Productos (nivel 1)

- Una sola tarjeta de candyCRM, a ancho completo. Desde 1024px, grilla interna `1fr 1fr`:
  - **Texto:**
    - chip "Suscripción",
    - h3 `--text-xl` "candyCRM",
    - línea "Producto de DevMinus, construido de punta a punta" (muted 14),
    - descripción actual,
    - tags,
    - enlace "Conoce candyCRM →" (destino PENDIENTE: el dominio propio de candyCRM).
  - **Visual:** captura real de la interfaz de candyCRM dentro de un marco de `--radius-md` con borde `--color-line`. Si no hay captura lista al construir, se omite la columna y la tarjeta queda de una columna; **no** se pone un rectángulo vacío.
- La tarjeta "Más productos" se elimina. Si se quiere dejar rastro, basta una línea de texto bajo la tarjeta: "Más productos del catálogo, pronto." (14, muted).
- candyCRM conserva su identidad propia (MARCA §5): en la captura se ve con sus colores; la tarjeta usa los de DevMinus.

### 4.9 Equipo

- **Regla de visibilidad:** la sección y su ítem del menú solo se renderizan con **dos o más perfiles completos**. Antes de eso, no existen en la página. Es el estado vacío correcto: un "?" público es peor que ninguna sección.
- **Anatomía del perfil**, cuando exista: tarjeta de nivel 1 con relleno `--space-3`:
  - foto 64×64 circular,
  - nombre (Sora 600 18),
  - especialidad (muted 14),
  - **"Ha construido"** (`--text-label`) con 2–3 filas del informe que enlazan a proyectos.
  - Así se cumple "cada perfil se presenta con lo que ha construido, no con su cargo".
- Grilla: 1, 2 (`sm`), 3 (`lg`) columnas.

### 4.10 Contacto (nivel 2)

**Layout:** grilla de 2 columnas desde 1024px (`1fr 1.1fr`, separación `--space-6`) y relleno `--space-6`; en móvil, `--space-4`.

**Izquierda**

- Eyebrow, h2 "Cuéntanos qué quieres resolver.", párrafo actual.
- Bloque "Qué pasa después" con 3 pasos numerados en mono 14: escribes → te respondemos con una propuesta de por dónde empezar → decides.
  - Baja la incertidumbre justo antes del envío.
  - El plazo de respuesta queda `[PENDIENTE]` hasta que el usuario lo defina.
- Correo directo como alternativa `[PENDIENTE: dirección]`.

**Formulario**

- Separación de `--space-2` entre campos.
- Label arriba (14/20, `--color-text`, peso 500). Los obligatorios llevan " *" y además `aria-required="true"`.
- Campos de 48px de alto, `--text-base`, fondo `--color-surface-field`, borde `1px --color-line-field`, `--radius-sm`, relleno `12px 16px`.
- Campos: Nombre* · Empresa · Correo* · Qué necesitas (select con primera opción deshabilitada "Elige una opción", o preseleccionada por la puerta de origen) · Mensaje (textarea de 120px de mínimo).
- Campo trampa oculto contra spam (honeypot), fuera del orden de tabulación.
- Aviso bajo el botón: "Al enviar aceptas el tratamiento de tus datos según nuestra [política de datos]." (14, muted). El enlace a la política queda `[PENDIENTE legal: Ley 1581]`.
- Botón "Enviar mensaje": degradado, 48px. A ancho completo en móvil; alineado a la izquierda desde `sm`.

**Estados que hay que implementar (no opcionales)**

| Estado | Qué se ve | Markup |
|---|---|---|
| reposo | borde `--color-line-field` | — |
| hover | borde `--color-line-strong` mezclado: usar `rgba(200,220,255,.6)` | — |
| foco | borde `--color-accent` + `box-shadow:0 0 0 3px var(--color-accent-soft)` + anillo de foco global | — |
| inválido (al salir del campo o al enviar) | borde `--color-bad`; mensaje bajo el campo en 14px `--color-bad` con ícono ×: "Escribe tu nombre." / "Revisa el correo: falta la @ o el dominio." | `aria-invalid="true"`, `aria-describedby` al mensaje; al enviar con errores, el foco va al primer campo inválido |
| enviando | botón deshabilitado con texto "Enviando…" y spinner de 16px; campos `readonly` | `aria-busy="true"` en el form |
| éxito | el formulario se reemplaza por un panel con ✓ `--color-ok`, "Recibimos tu mensaje." y "Te escribimos a {correo} con una propuesta de por dónde empezar." | `role="status"`; el foco se mueve al título del panel |
| error de red o servidor | banda sobre el botón, borde `--color-bad`: "No pudimos enviar tu mensaje. Revisa tu conexión e inténtalo de nuevo, o escríbenos a [correo]." **Los datos escritos se conservan.** | `role="alert"` |
| deshabilitado | opacidad de fondo reducida, cursor `not-allowed`, texto con contraste igual o mayor a 4,5:1 (no bajar el texto con opacidad) | `disabled` |

El texto "Maqueta de diseño: este formulario todavía no envía datos" desaparece en la versión real.

### 4.11 Pie

- Borde superior `--color-line`, relleno `--space-6` arriba y `--space-8` abajo.
- **Desde 640px, tres columnas:**
  1. logo,
  2. enlaces de navegación (mismos del menú + Contacto),
  3. correo `[PENDIENTE]`, "Política de datos" `[PENDIENTE]` y "© 2026 DevMinus".
- **En móvil:** apiladas, con separación `--space-4`.
- Sin lema (MARCA §3) y sin "Variante Cobalto".

### 4.12 Movimiento

| Qué se mueve | Duración / curva | Qué comunica |
|---|---|---|
| Hover de botones y tarjetas (`translateY`, borde, sombra) | 200ms `cubic-bezier(.2,.8,.2,1)` | "esto se puede tocar" |
| Píldora activa del menú al cambiar de sección | 200ms en `background-color` y `color` | dónde estás ahora |
| Apertura del menú móvil (opacidad + `translateY(-8px → 0)`) | 180ms | de dónde salió el panel |
| Cambio de formulario a panel de éxito (fundido) | 250ms | que el envío terminó |

- **No hay** animaciones de entrada al hacer scroll ni contadores animados: no comunican nada y retrasan la lectura.
- Con `prefers-reduced-motion: reduce`: sin transformaciones ni `scroll-behavior:smooth`; los cambios de color se mantienen, porque no producen mareo.

### 4.13 Accesibilidad del markup (lista para quien construya)

- Landmarks: `header > nav[aria-label="Principal"]`, `main#contenido`, `footer`.
- Cada `<section>` lleva `aria-labelledby` apuntando a su h2.
- Jerarquía de encabezados: un h1; un h2 por sección; h3 en tarjetas. El informe del hero usa un h2 visualmente oculto ("Ejemplo de informe de viabilidad") y su título visible como `<p>`, para no romper el orden.
- Íconos decorativos: `aria-hidden="true" focusable="false"`.
- `aria-current="location"` solo en el ítem activo; en los demás el atributo se quita (no `"false"`).
- Comprobar que la página entera se puede recorrer solo con Tab en orden visual, que todo foco es visible y que ningún objetivo táctil mide menos de 44×44 en móvil.
- Verificar en escala de grises: el informe tiene que seguir leyéndose (por eso las formas en los indicadores).

---

## 5. Métrica de éxito

El diseño funciona si convierte visitas en conversaciones y si la auditoría actúa como puerta de entrada (su función estratégica según MARCA §6).

| Métrica | Cómo se mide | Qué se espera |
|---|---|---|
| **Tasa de conversión a lead** (principal) | envíos exitosos / sesiones | Tomar línea base las primeras 4 semanas; referencia sectorial para servicios B2B: 2–5 % |
| Clic en CTA del hero | clics en "Agenda una conversación" + "Pide una segunda opinión" / sesiones | El primario debería superar al secundario; si el secundario gana, la auditoría está funcionando como gancho y conviene invertir el orden |
| Clic en puertas | clics por puerta / sesiones que ven Servicios | Saber qué puerta atrae más; alimenta qué entrada pequeña definir primero (MARCA §4, PENDIENTE) |
| Envíos por tipo | distribución del campo "Qué necesitas" | Que "Auditoría" aparezca de forma consistente valida la estrategia de captar clientes de la competencia |
| Abandono del formulario | foco en el primer campo sin envío posterior | Si supera ~60 %, revisar campos obligatorios o el aviso de datos |
| Profundidad de scroll hasta Auditoría | evento al entrar la sección al viewport | Si menos del 40 % llega, subir Auditoría por encima de Método |
| Uso del menú móvil | aperturas / sesiones móviles | Confirma si C1 era un bloqueo real |

**Instrumentación:** un atributo `data-evento="..."` en cada CTA, puerta y envío, para no acoplar el marcado a una herramienta. **La herramienta de analítica no está definida en STACK.md:** es una decisión pendiente (por ejemplo Cloudflare Zaraz, que no agrega proveedor nuevo, o Plausible); conviene anotarla en `DECISIONES.md`.

---

## 6. Fuera de mi alcance o pendiente de decisión

**Pendiente de decisión del usuario**

- **Primer paso gratuito (opción B de 2.3)**: es una decisión comercial. Si se aprueba, va primero a MARCA §4.
- **Montos y plazos**: precio fijo de la auditoría, plazo de respuesta y correo de contacto. Quedan como `[PENDIENTE]` en el diseño; no se inventan.

**Pendiente de otras personas o insumos**

- **Política de datos (Ley 1581)**: el diseño reserva el lugar; el texto lo escribe o revisa un abogado.
- **Captura de candyCRM y PDF de informe de ejemplo**: son contenidos por producir, no diseño.
- **Logos de la franja "Construimos con"**: revisar las guías de marca de React, Supabase, Cloudflare y Anthropic antes de publicarlos.

**Para quien construya** (comportamientos con lógica que este documento describe pero no implementa)

- Scroll-spy con `IntersectionObserver`.
- Preselección del select desde la puerta de origen.
- Validación del formulario y envío al Worker de Cloudflare + Supabase.
- Gestión del foco en el éxito y en los errores.
- Cierre del menú móvil con Esc o con clic fuera.
