import { SiteFooter, SiteHeader, glutenFreeUrl, saltFreeUrl, veganOptionsUrl } from "../site-components";
import { withBasePath } from "../base-path";

export const metadata = {
  title: "Opciones y pedidos especiales | Carnicería Don Pedro",
  description: "Preparaciones sin gluten y sin sal por encargo, y productos veganos disponibles en Carnicería Don Pedro.",
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
          <p>Realizamos opciones sin gluten y sin sal por pedido. Además, ya contamos con hamburguesas, medallones, salchichas y carne picada vegetal. Escribinos para consultar disponibilidad.</p>
        </div>
        <div className="page-hero-side special-side"><span>Por encargo</span><strong>Decinos qué<br />necesitás</strong><p>Te asesoramos y coordinamos cada detalle de tu preparación.</p></div>
      </section>

      <section className="special-gallery">
        <div className="special-gallery-heading">
          <p className="section-kicker">Elaboración propia</p>
          <h2>Preparados con dedicación,<br /><em>listos para tu mesa.</em></h2>
        </div>
        <div className="special-gallery-grid" aria-label="Elaboraciones propias de Carnicería Don Pedro">
          <figure><img src={withBasePath("/images/especiales-rellenos.webp")} alt="Preparaciones de carne condimentadas y decoradas con morrón" loading="lazy" /></figure>
          <figure><img src={withBasePath("/images/especiales-chorizos.webp")} alt="Elaboración de chorizos frescos en Carnicería Don Pedro" loading="lazy" /></figure>
        </div>
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
          <article className="diet-card vegan-card">
            <div className="vegan-card-copy">
              <div className="diet-card-top"><span className="diet-symbol">V</span><span className="order-badge">Disponible</span></div>
              <p className="diet-kicker">Nueva propuesta</p><h3>Opciones veganas</h3>
              <p className="diet-copy">Ya contamos con productos veganos de buena calidad para ofrecerte nuevas alternativas en Don Pedro.</p>
              <div className="diet-items"><span>Hamburguesas veganas</span><span>Medallones vegetales</span><span>Salchichas veganas</span><span>Carne picada vegetal</span></div>
              <a className="button" href={veganOptionsUrl}>Pedir por WhatsApp <span aria-hidden="true">↗</span></a>
            </div>
            <div className="vegan-products" aria-label="Productos veganos disponibles">
              <figure className="vegan-product">
                <div className="vegan-product-image"><img src={withBasePath("/images/beyond-burger.webp")} alt="Paquete de hamburguesa vegetal Beyond Burger Original" loading="lazy" /></div>
                <figcaption><strong>Beyond Burger Original</strong><span>Hamburguesa vegetal</span></figcaption>
              </figure>
              <figure className="vegan-product">
                <div className="vegan-product-image"><img src={withBasePath("/images/medallones-veggies-artico.webp")} alt="Paquete de Medallones Veggies Ártico de morrón, zanahoria y cebolla" loading="lazy" /></div>
                <figcaption><strong>Medallones Veggies Ártico</strong><span>Morrón, zanahoria y cebolla</span></figcaption>
              </figure>
              <figure className="vegan-product">
                <div className="vegan-product-image"><img src={withBasePath("/images/beyond-sausage.png")} alt="Paquete de salchichas veganas Beyond Sausage Original Brat" loading="lazy" /></div>
                <figcaption><strong>Beyond Sausage Original</strong><span>Salchichas vegetales</span></figcaption>
              </figure>
              <figure className="vegan-product">
                <div className="vegan-product-image"><img src={withBasePath("/images/beyond-mince.png")} alt="Paquete de carne picada vegetal Beyond Mince Original" loading="lazy" /></div>
                <figcaption><strong>Beyond Mince Original</strong><span>Carne picada vegetal</span></figcaption>
              </figure>
            </div>
          </article>
        </div>
      </section>

      <section className="order-reminder"><span aria-hidden="true">✦</span><div><p className="section-kicker">Cómo encargar</p><h2>Decinos qué preparación necesitás</h2><p>Contanos para cuántas personas y cuándo la necesitás. Te confirmamos las opciones disponibles y coordinamos tu pedido.</p></div></section>
      <SiteFooter />
    </main>
  );
}
