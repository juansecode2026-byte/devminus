import { useContactoStore } from '../stores/contactoStore';
import { InformeViabilidad } from './InformeViabilidad';

export function Hero() {
  const setPuerta = useContactoStore((s) => s.setPuerta);

  return (
    <div id="inicio" className="wrap grid gap-12 pb-16 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24 lg:pt-16">
      <div className="min-w-0">
        <p className="label m-0 flex items-center gap-2 before:h-2 before:w-2 before:rounded-full before:bg-accent before:content-['']">
          AI engineering para empresas
        </p>
        <h1 className="m-0 my-6 font-display text-hero font-semibold">De la idea al sistema de IA funcionando.</h1>
        <p className="m-0 mb-4 font-display text-md font-medium">Soluciones inteligentes con firma humana.</p>
        <p className="m-0 mb-8 max-w-lead text-md text-muted">
          Decidimos contigo qué hacer con IA, lo construimos de punta a punta, auditamos lo que otros te proponen y capacitamos a tu equipo.
        </p>
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a href="#contacto" className="btn btn-primary" onClick={() => setPuerta('')}>
            Agenda una conversación
          </a>
          <a href="#auditoria" className="btn btn-ghost">
            Pide una segunda opinión
          </a>
        </div>
        <p className="m-0 text-sm text-muted">Te respondemos con una propuesta de por dónde empezar.</p>
      </div>

      <InformeViabilidad />
    </div>
  );
}
