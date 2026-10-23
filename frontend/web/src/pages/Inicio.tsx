import { Auditoria } from '../components/Auditoria';
import { BarraNavegacion } from '../components/BarraNavegacion';
import { ConstruimosCon } from '../components/ConstruimosCon';
import { Contacto } from '../components/Contacto';
import { GrandesEmpresas } from '../components/GrandesEmpresas';
import { Hero } from '../components/Hero';
import { Metodo } from '../components/Metodo';
import { PiePagina } from '../components/PiePagina';
import { Productos } from '../components/Productos';
import { Servicios } from '../components/Servicios';

// Equipo: oculto hasta tener al menos dos perfiles reales (REVISION-UX.md §4.9).
export function Inicio() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <BarraNavegacion />
      <main id="contenido">
        <Hero />
        <ConstruimosCon />
        <Servicios />
        <Metodo />
        <Auditoria />
        <GrandesEmpresas />
        <Productos />
        <Contacto />
      </main>
      <PiePagina />
    </>
  );
}
