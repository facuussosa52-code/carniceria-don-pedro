import { SiteFooter, SiteHeader, glutenFreeUrl, saltFreeUrl } from "../site-components";
import { withBasePath } from "../base-path";

export const metadata = {
  title: "Opciones y pedidos especiales | Carnicería Don Pedro",
  description: "Preparaciones sin gluten y sin sal por encargo en Carnicería Don Pedro.",
  alternates: { canonical: "/especiales" },
};

export default function EspecialesPage() {
  return (
    <main>
      <SiteHeader active="especiales" />
      <section className="page-hero page-hero-light">
        <div>
          <p className="breadcrumb"><a href={withBasePath("/")}>Inicio</a><span>/</span>Opciones</p>
          <p className="section-kicker">Pedidos especiales</p>
          <h1>Preparaciones hechas<br /><em>para tu necesidad.</em></h1>
          <p>Realizamos opciones sin gluten y sin sal por pedido. Escribinos para consultar disponibilidad y coordinar una preparación pensada para vos.</p>
        </div>
        <div className="page-hero-side special-side"><span>Por encargo</span><strong>Decinos qué<br />necesitás</strong><p>Te asesoramos y coordinamos cada detalle de tu preparación.</p></div>
      </section>


      <section className="special-orders special-orders-page">
        <div className="special-orders-grid">
          <article className="diet-card gluten-card">
            <div className="diet-card-top"><span className="diet-symbol">SG</span><span className="order-badge">Por encargo</span></div>
            <p className="diet-kicker">Opciones especiales</p><h3>Preparaciones sin gluten</h3>
            <p className="diet-copy">Podés encargar elaboraciones sin ingredientes con gluten, preparadas especialmente según tu pedido.</p>
            <div className="diet-items"><span>Pollos rellenos</span><span>Bondiolas</span><span>Chorizos</span><span>Y más opciones</span></div>
            <p className="diet-notice"><strong>Importante:</strong> si es por celiaquía, avisanos al hacer el pedido para confirmar ingredientes y condiciones de elaboración.</p>
            <a className="button" href={glutenFreeUrl}>Consultar sin gluten <span aria-hidden="true">↗</span></a>
          </article>
          <article className="diet-card salt-card">
            <div className="diet-card-top"><span className="diet-symbol">SS</span><span className="order-badge">Por encargo</span></div>
            <p className="diet-kicker">Opciones especiales</p><h3>Preparaciones sin sal</h3>
            <p className="diet-copy">Elaboramos productos sin sal agregada para que puedas disfrutar preparaciones pensadas especialmente para vos.</p>
            <div className="diet-items"><span>Pollos rellenos</span><span>Bondiolas</span><span>Chorizos</span><span>Y más opciones</span></div>
            <p className="diet-notice"><strong>Recordá:</strong> estas preparaciones se realizan por encargo y están sujetas a disponibilidad.</p>
            <a className="button" href={saltFreeUrl}>Consultar sin sal <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>

      <section className="order-reminder"><span aria-hidden="true">✦</span><div><p className="section-kicker">Cómo encargar</p><h2>Decinos qué preparación necesitás</h2><p>Contanos para cuántas personas y cuándo la necesitás. Te confirmamos las opciones disponibles y coordinamos tu pedido.</p></div></section>
      <SiteFooter />
    </main>
  );
}
