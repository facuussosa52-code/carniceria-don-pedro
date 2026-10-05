import { SiteFooter, SiteHeader, mapsUrl, whatsappUrl } from "./site-components";
import { withBasePath } from "./base-path";

export const metadata = {
  alternates: { canonical: "/" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Carnicería Don Pedro",
  url: "https://carniceriadonpedro.com.uy",
  image: "https://carniceriadonpedro.com.uy/images/local-don-pedro-clean.png",
  telephone: "+59899398189",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sarandí 669",
    addressLocality: "Pan de Azúcar",
    addressRegion: "Maldonado",
    addressCountry: "UY",
  },
  sameAs: [
    "https://www.facebook.com/carniceria.don.pedro.2024/",
    "https://www.instagram.com/ddonpedroo/",
  ],
};

const reviews = [
  { text: "Excelente lugar y muy rica carne.", detail: "Cliente de Don Pedro" },
  { text: "Excelente calidad y servicio.", detail: "Cliente de Don Pedro" },
  { text: "Muy buena carne.", detail: "Cliente de Don Pedro" },
];

const products = [
  { number: "01", title: "Asado y cortes con hueso", description: "Cortes frescos seleccionados para la parrilla, el horno o una comida especial.", items: "Asado · Costilla · Cortes especiales", image: "/images/asado-nuevo.jpg", alt: "Asado fresco preparado en el mostrador de Carnicería Don Pedro" },
  { number: "02", title: "Cortes seleccionados", description: "Cortes elegidos por su calidad, sabor y presentación para una comida especial.", items: "Pulpas · Cortes con hueso · Consultá disponibilidad", image: "/images/corte-seleccionado-premium.webp", alt: "Corte vacuno seleccionado con hueso en Carnicería Don Pedro" },
];

const hours = [
  ["Lunes", "7:30–13:00 · 16:00–20:30"],
  ["Martes", "Cerrado"],
  ["Miércoles a sábado", "7:30–13:00 · 16:00–20:30"],
  ["Domingo", "7:30–13:00"],
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <main>
      <SiteHeader active="inicio" />

      <section className="hero" id="inicio">
        <div className="hero-content">
          <p className="eyebrow"><span /> Carnicería de confianza</p>
          <h1>Calidad que se nota.<br /><em>Sabor que se comparte.</em></h1>
          <p className="hero-copy">Cortes frescos, elaboraciones caseras y atención cercana para que en tu mesa nunca falte lo mejor.</p>
          <div className="hero-actions">
            <a className="button" href={whatsappUrl}>Pedir por WhatsApp <span aria-hidden="true">↗</span></a>
            <a className="text-link" href={withBasePath("/productos")}>Conocé nuestros productos <span>→</span></a>
          </div>
          <div className="hero-notes" aria-label="Características">
            <span>Mercadería fresca</span><span>Elaboración propia</span><span>Atención personalizada</span>
          </div>
        </div>
        <div className="hero-mark">
          <img className="hero-main-photo" src={withBasePath("/images/local-don-pedro-clean.png")} alt="Frente de Carnicería Don Pedro en Sarandí 669, Pan de Azúcar" />
        </div>
      </section>

      <nav className="quick-nav" aria-label="Accesos rápidos">
        <a href={withBasePath("/productos")}><span>01</span><div><strong>Carnes y cortes</strong><small>Frescos para cada ocasión</small></div><b aria-hidden="true">→</b></a>
        <a href={withBasePath("/elaboraciones")}><span>02</span><div><strong>Elaboraciones de la casa</strong><small>Chorizos, milanesas y rellenos</small></div><b aria-hidden="true">→</b></a>
        <a href="#opiniones"><span>03</span><div><strong>Opiniones</strong><small>La experiencia de nuestros clientes</small></div><b aria-hidden="true">↘</b></a>
        <a href={withBasePath("/contacto")}><span>04</span><div><strong>Visitanos</strong><small>Dirección, horarios y contacto</small></div><b aria-hidden="true">→</b></a>
      </nav>

      <section className="products" id="productos">
        <div className="section-heading">
          <div><p className="section-kicker light">Elegí lo mejor para tu mesa</p><h2>Todo lo que necesitás, en un solo lugar</h2></div>
          <p>Cortes frescos, elaboraciones de la casa y buenos acompañamientos. Consultanos por disponibilidad, precios y ofertas del día.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.number}>
              <figure className="product-photo"><img src={withBasePath(product.image)} alt={product.alt} loading="lazy" /></figure>
              <span className="product-number">{product.number}</span><div className="product-line" />
              <h3>{product.title}</h3><p>{product.description}</p><strong>{product.items}</strong>
            </article>
          ))}
        </div>
        <div className="special-note">
          <span className="special-icon" aria-hidden="true">✦</span>
          <div><strong>También pensamos en vos</strong><p>Preparamos opciones sin gluten y sin sal por encargo, y ya contamos con hamburguesas y medallones veganos.</p></div>
          <a href={withBasePath("/especiales")}>Ver opciones <span>→</span></a>
        </div>
      </section>

      <section className="home-story" id="nosotros">
        <figure className="home-story-photo"><img src={withBasePath("/images/trabajo-artesanal.jpg")} alt="Equipo de Carnicería Don Pedro preparando un pedido en el local" loading="lazy" /></figure>
        <div className="home-story-copy">
          <p className="section-kicker">Nuestro trabajo</p>
          <h2>Conocemos el oficio.<br /><em>Cuidamos cada pedido.</em></h2>
          <p>Seleccionamos la mercadería, elaboramos en el local y preparamos cada compra con la atención cercana de una carnicería de barrio.</p>
          <ul><li>Productos frescos y bien presentados</li><li>Elaboraciones propias</li><li>Asesoramiento para elegir cortes y cantidades</li></ul>
          <a className="text-link dark" href={withBasePath("/nosotros")}>Conocé más sobre Don Pedro <span>→</span></a>
        </div>
      </section>

      <section className="service-flow" id="como-pedir">
        <div className="service-flow-copy">
          <p className="section-kicker light">Atención completa</p>
          <h2>De la consulta al pedido,<br /><em>todo más simple.</em></h2>
          <p>En Don Pedro te acompañamos desde que nos escribís hasta que retirás tu compra. Te asesoramos, preparamos cada producto y coordinamos el pedido sin vueltas.</p>
        </div>
        <div className="service-steps" aria-label="Cómo hacer un pedido">
          <article><span>01</span><div><h3>Contanos qué necesitás</h3><p>Escribinos por WhatsApp o consultanos directamente en el local.</p></div></article>
          <article><span>02</span><div><h3>Te asesoramos</h3><p>Te ayudamos a elegir cortes, cantidades y elaboraciones según la ocasión.</p></div></article>
          <article><span>03</span><div><h3>Preparamos tu pedido</h3><p>Dejamos todo pronto con la atención y el cuidado de siempre.</p></div></article>
          <article><span>04</span><div><h3>Pasás a retirarlo</h3><p>Coordinamos para que tu compra te espere lista en Don Pedro.</p></div></article>
        </div>
      </section>

      <section className="trust" id="habilitacion">
        <div className="trust-copy">
          <p className="section-kicker">Confianza y transparencia</p>
          <h2>Tu compra,<br /><em>con tranquilidad.</em></h2>
          <p>Queremos que conozcas no solo nuestros productos, sino también la responsabilidad con la que trabajamos. Podés comprobar nuestra habilitación escaneando el QR oficial del Instituto Nacional de Carnes.</p>
          <span className="permit-status">Habilitación INAC · Código 69513F</span>
        </div>
        <div className="trust-cards">
          <article><span aria-hidden="true">✓</span><div><h3>Comercio responsable</h3><p>Compromiso con el orden, el cuidado y una atención clara.</p></div></article>
          <article><span aria-hidden="true">✓</span><div><h3>Cuidado e higiene</h3><p>Buenas prácticas en la preparación y conservación de los productos.</p></div></article>
          <figure className="permit-qr-card">
            <img src={withBasePath("/images/habilitacion-inac-69513f.png")} alt="Código QR oficial de la habilitación INAC 69513F de Carnicería Don Pedro" loading="lazy" />
            <figcaption><h3>Habilitación de INAC</h3><p>Escaneá este QR con la cámara de tu celular para comprobarla directamente. No necesitás usuario ni contraseña.</p><strong>Código 69513F</strong></figcaption>
          </figure>
        </div>
      </section>

      <section className="reviews" id="opiniones">
        <div className="reviews-heading">
          <div>
            <p className="section-kicker light">Valoraciones de Google</p>
            <h2>La confianza también<br /><em>se comparte.</em></h2>
          </div>
          <div className="rating-summary" aria-label="Valoración de cinco estrellas">
            <span className="google-mark" aria-hidden="true">G</span>
            <div><strong>5,0</strong><span className="rating-stars" aria-hidden="true">★★★★★</span><small>Valoración destacada</small></div>
          </div>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.text}>
              <div className="review-stars" aria-label="Cinco estrellas">★★★★★</div>
              <blockquote>“{review.text}”</blockquote>
              <div className="review-author"><span aria-hidden="true">✓</span><div><strong>{review.detail}</strong><small>Reseña pública</small></div></div>
            </article>
          ))}
        </div>
        <div className="reviews-footer">
          <p>¿Querés conocer más experiencias o dejarnos tu opinión?</p>
          <a className="button reviews-button" href={mapsUrl} target="_blank" rel="noreferrer">Ver reseñas en Google <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="visit" id="contacto">
        <div className="visit-copy">
          <p className="section-kicker">Encontranos</p><h2>Te esperamos en<br /><em>Pan de Azúcar</em></h2>
          <div className="address"><span aria-hidden="true">⌖</span><div><strong>Sarandí 669</strong><p>Pan de Azúcar, Maldonado</p></div></div>
          <a className="button" href={mapsUrl} target="_blank" rel="noreferrer">Cómo llegar en Google Maps <span>↗</span></a>
        </div>
        <div className="hours-card">
          <p className="section-kicker light">Horarios</p><h3>Cuando quieras,<br />acá estamos.</h3>
          <div className="hours-list">
            {hours.map(([day, time]) => <div className={day === "Martes" ? "closed" : ""} key={day}><span>{day}</span><strong>{time}</strong></div>)}
          </div>
          <a className="phone-link" href="tel:+59899398189">099 398 189</a>
        </div>
      </section>

      <section className="cta">
        <p>¿Ya sabés qué vas a cocinar?</p><h2>Mandanos tu pedido<br />y lo dejamos <em>pronto.</em></h2>
        <a className="button button-light" href={whatsappUrl}>Hacer mi pedido <span>↗</span></a>
      </section>

        <SiteFooter />
      </main>
    </>
  );
}
