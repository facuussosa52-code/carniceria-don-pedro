import { SiteFooter, SiteHeader } from "../site-components";
import { AsadoCalculator } from "./asado-calculator";
import { withBasePath } from "../base-path";

export const metadata = {
  title: "Calculadora de asado | Carnicería Don Pedro",
  description: "Calculá cuánta carne, chorizos y achuras necesitás según la cantidad de invitados.",
  alternates: { canonical: "/calculadora" },
};

export default function CalculadoraPage() {
  return (
    <main>
      <SiteHeader active="calculadora" />
      <section className="calculator-page">
        <div className="calculator-intro">
          <p className="breadcrumb"><a href={withBasePath("/")}>Inicio</a><span>/</span>Calculadora</p>
          <p className="section-kicker">Organizá tu asado</p>
          <h1>La cantidad justa,<br /><em>sin complicarte.</em></h1>
          <p>Indicá cuántos comen, el apetito del grupo y qué productos querés incluir. Te damos una recomendación para consultar tu pedido.</p>
          <div className="portion-guide" aria-label="Porciones de referencia por adulto">
            <span><strong>350 g</strong>Come poco</span>
            <span><strong>500 g</strong>Come normal</span>
            <span><strong>650 g</strong>Buen comer</span>
          </div>
        </div>
        <AsadoCalculator />
      </section>
      <SiteFooter />
    </main>
  );
}
