import { SiteFooter, SiteHeader, veganOptionsUrl } from "../site-components";
import { withBasePath } from "../base-path";

export const metadata = {
  title: "Línea vegana | Carnicería Don Pedro",
  description: "Hamburguesas, medallones, salchichas y carne picada vegetal disponibles en la línea vegana de Carnicería Don Pedro.",
  alternates: { canonical: "/vegano" },
};

export default function VeganoPage() {
  return (
    <main>
      <SiteHeader active="vegano" />
      <section className="page-hero page-hero-light">
        <div>
          <p className="breadcrumb"><a href={withBasePath("/")}>Inicio</a><span>/</span>Vegano</p>
          <p className="section-kicker">Alternativas vegetales</p>
          <h1>Nuestra línea<br /><em>vegana.</em></h1>
          <p>Una selección de productos vegetales de calidad para sumar nuevas opciones a tu mesa. Consultanos por disponibilidad y te ayudamos con tu pedido.</p>
        </div>
        <div className="page-hero-side special-side"><span>Disponible</span><strong>Nuevas opciones,<br />el mismo cuidado</strong><p>Hamburguesas, medallones, salchichas y carne picada vegetal.</p></div>
      </section>

      <section className="special-orders special-orders-page">
        <div className="special-orders-grid">
          <article className="diet-card vegan-card">
            <div className="vegan-card-copy">
              <div className="diet-card-top"><span className="diet-symbol">V</span><span className="order-badge">Disponible</span></div>
              <p className="diet-kicker">Línea vegana</p><h3>Opciones para todos los gustos</h3>
              <p className="diet-copy">Productos vegetales seleccionados para ofrecerte alternativas prácticas, sabrosas y fáciles de preparar.</p>
              <div className="diet-items"><span>Hamburguesas veganas</span><span>Medallones vegetales</span><span>Salchichas veganas</span><span>Carne picada vegetal</span></div>
              <a className="button" href={veganOptionsUrl}>Consultar por WhatsApp <span aria-hidden="true">↗</span></a>
            </div>
            <div className="vegan-products" aria-label="Productos veganos disponibles">
              <figure className="vegan-product">
                <div className="vegan-product-image"><img src={withBasePath("/images/beyond-burger.webp")} alt="Paquete de hamburguesa vegetal Beyond Burger Original" /></div>
                <figcaption><strong>Beyond Burger Original</strong><span>Hamburguesa vegetal</span></figcaption>
              </figure>
              <figure className="vegan-product">
                <div className="vegan-product-image"><img src={withBasePath("/images/medallones-veggies-artico.webp")} alt="Paquete de Medallones Veggies Ártico de morrón, zanahoria y cebolla" /></div>
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

      <section className="order-reminder"><span aria-hidden="true">✦</span><div><p className="section-kicker">Consultá disponibilidad</p><h2>Elegí tu opción vegana</h2><p>Escribinos por WhatsApp y te contamos cuáles productos tenemos disponibles para tu próximo pedido.</p></div></section>
      <SiteFooter />
    </main>
  );
}
