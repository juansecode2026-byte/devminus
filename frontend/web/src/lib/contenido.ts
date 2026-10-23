/*
 * Contenido de la landing. La fuente de verdad es documentacion/MARCA.md:
 * si algo cambia allí, se refleja aquí. Lo marcado como `null` está pendiente
 * de decisión y la interfaz lo muestra como "por definir".
 */

export type Puerta = 'Consultoría' | 'Construcción' | 'Capacitación' | 'Auditoría' | 'Aún no lo sé';

export const PUERTAS: readonly Puerta[] = [
  'Consultoría',
  'Construcción',
  'Capacitación',
  'Auditoría',
  'Aún no lo sé',
];

export type IconoPuerta = 'lupa' | 'codigo' | 'birrete' | 'escudo';

export interface Servicio {
  puerta: Exclude<Puerta, 'Aún no lo sé'>;
  icono: IconoPuerta;
  frase: string;
  descripcion: string;
  entrada: string;
}

export const SERVICIOS: readonly Servicio[] = [
  {
    puerta: 'Consultoría',
    icono: 'lupa',
    frase: 'No sé por dónde empezar con IA.',
    descripcion: 'Diagnóstico de procesos y una hoja de ruta con lo que conviene automatizar primero.',
    entrada: 'Diagnóstico en 2 semanas',
  },
  {
    puerta: 'Construcción',
    icono: 'codigo',
    frase: 'Necesito esto hecho.',
    descripcion:
      'Software a la medida de punta a punta: CRM de ventas, agentes y automatizaciones. Para comprar o alquilar.',
    entrada: 'Prototipo en 30 días',
  },
  {
    puerta: 'Capacitación',
    icono: 'birrete',
    frase: 'Quiero que mi equipo la sepa usar.',
    descripcion: 'Programas para compañías y talleres para grupos de 15 a 20 personas. Nunca uno a uno.',
    entrada: 'Taller de un día',
  },
  {
    puerta: 'Auditoría',
    icono: 'escudo',
    frase: '¿Es viable lo que me están proponiendo?',
    descripcion: 'Segunda opinión independiente sobre el modelo que otro proveedor va a implementar.',
    entrada: 'Informe a precio fijo',
  },
];

export interface PasoMetodo {
  numero: string;
  titulo: string;
  descripcion: string;
  servicio: string;
}

export const METODO: readonly PasoMetodo[] = [
  { numero: '01', titulo: 'Entender', descripcion: 'Cómo trabaja hoy tu equipo y dónde se pierde tiempo o dinero.', servicio: 'Consultoría' },
  { numero: '02', titulo: 'Diseñar', descripcion: 'Qué conviene construir, con qué modelos y cuánto va a costar operarlo.', servicio: 'Consultoría' },
  { numero: '03', titulo: 'Construir', descripcion: 'Software en producción, medido con evals y con datos reales.', servicio: 'Construcción' },
  { numero: '04', titulo: 'Transferir', descripcion: 'Tu gente aprende a usarlo y a mantenerlo sin depender de nosotros.', servicio: 'Capacitación' },
];

export type Estado = 'ok' | 'warn' | 'bad';

export interface FilaInforme {
  criterio: string;
  valor: string;
  estado: Estado;
}

/** Informe de ejemplo del hero. Escenario ficticio, rotulado así en la interfaz. */
export const INFORME_EJEMPLO = {
  titulo: 'Informe de viabilidad',
  propuesta: 'Propuesta externa · Agente de soporte con RAG',
  puntaje: 71,
  veredicto: 'Viable con ajustes',
  resumen: '3 de 5 criterios cumplen. El costo proyectado no cuadra con el volumen real.',
  filas: [
    { criterio: 'Arquitectura y recuperación de contexto', valor: 'OK', estado: 'ok' },
    { criterio: 'Latencia p95', valor: '1,9 s', estado: 'ok' },
    { criterio: 'Costo por 1.000 consultas', valor: 'US$ 4,20', estado: 'warn' },
    { criterio: 'Fallos en evals de alucinación', valor: '6 / 40', estado: 'bad' },
    { criterio: 'Manejo de datos personales', valor: 'OK', estado: 'ok' },
  ] satisfies FilaInforme[],
  recomendacion: 'renegociar el costo por consulta antes de firmar.',
} as const;

export const ETIQUETA_ESTADO: Record<Estado, string> = {
  ok: 'Cumple',
  warn: 'Advertencia',
  bad: 'No cumple',
};

export const QUE_REVISAMOS: readonly string[] = [
  'Arquitectura',
  'Costo real de operación',
  'Riesgos',
  'Funcionamiento con tu volumen',
];

export const COMPROMISOS: readonly { titulo: string; detalle: string }[] = [
  { titulo: 'Precio fijo', detalle: 'Se cobra el informe, contrates después o no.' },
  { titulo: 'Decimos la verdad', detalle: 'Si la propuesta es viable, el informe lo dice.' },
  {
    titulo: 'Sin conflicto oculto',
    detalle: 'Declaramos que también construimos. El informe nunca ofrece reemplazar al proveedor.',
  },
  { titulo: 'Confidencial', detalle: 'Lo que compartes sobre la otra propuesta no se usa ni se difunde.' },
];

export const EMPRESAS_PASOS: readonly string[] = [
  'Diseño del área y perfiles',
  'Plataforma y estándares de evaluación',
  'Primeros casos en producción',
];

export const CONSTRUIMOS_CON: readonly string[] = ['React', 'Supabase', 'Cloudflare', 'Claude'];

export const PRODUCTO_CANDY = {
  nombre: 'candyCRM',
  modalidad: 'Suscripción',
  autoria: 'Producto de DevMinus, construido de punta a punta.',
  descripcion:
    'CRM multicanal con Kanban de oportunidades, bandeja unificada de WhatsApp, Instagram, Messenger y chat web, y un copiloto con IA. Autoservicio o adaptado por nuestro equipo.',
  etiquetas: ['Multi-tenant', 'Bandeja unificada', 'Copiloto IA'],
  /** Pendiente: dominio propio de candyCRM. */
  enlace: null as string | null,
};

/** Datos de contacto y legales pendientes de decisión (ver DECISIONES.md). */
export const PENDIENTES = {
  correo: null as string | null,
  plazoRespuesta: null as string | null,
  precioAuditoria: null as string | null,
  politicaDatos: null as string | null,
};

export interface ItemNav {
  id: string;
  texto: string;
}

export const NAV: readonly ItemNav[] = [
  { id: 'servicios', texto: 'Servicios' },
  { id: 'auditoria', texto: 'Auditoría' },
  { id: 'empresas', texto: 'Empresas' },
  { id: 'productos', texto: 'Productos' },
];
