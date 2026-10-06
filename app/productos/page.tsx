import { SiteFooter, SiteHeader, whatsappUrl } from "../site-components";
import { withBasePath } from "../base-path";

export const metadata = {
  title: "Productos | Carnicería Don Pedro",
  description: "Conocé los cortes, elaboraciones caseras y acompañamientos de Carnicería Don Pedro.",
  alternates: { canonical: "/productos" },
};

// Product categories are kept in display order for the catalog grid.
const categories = [
  { number: "01", title: "Cortes para la parrilla", copy: "Todo para preparar un buen asado y compartir en familia o con amigos.", items: "Asado · Vacío · Colita de cuadril", image: "/images/asado-nuevo.jpg", alt: "Asado fresco preparado en Carnicería Don Pedro" },
  { number: "02", title: "Cortes seleccionados", copy: "Opciones con hueso y pulpas para horno, plancha, olla o una comida especial.", items: "Pulpas · Cortes con hueso · Y más", image: "/images/cortes-seleccionados-nuevos.jpg", alt: "Cortes vacunos seleccionados en el mostrador de Don Pedro" },
  { number: "03", title: "Achuras frescas", copy: "Los clásicos que completan cualquier parrillada, siempre frescos.", items: "Mollejas · Chinchulines · Riñones · Chotos · Morcillas y más", image: "/images/variedad-mostrador.jpg", alt: "Variedad de achuras frescas en el mostrador" },
  { number: "04", title: "Cortes de cerdo", copy: "Cortes frescos y seleccionados para preparar al horno, a la parrilla o en la olla.", items: "Consultá cortes y disponibilidad", image: "/images/cortes-de-cerdo.webp", alt: "Cortes frescos de cerdo en el mostrador de Carnicería Don Pedro" },
  { number: "05", title: "Cortes especiales por encargo", copy: "Si buscás un corte especial, escribinos con anticipación. Podemos conseguirlo y tenerlo pronto para vos.", items: "Pedido anticipado · Consultá disponibilidad", image: "/images/cortes-especiales-encargo.jpg", alt: "Corte vacuno especial disponible por encargo en Don Pedro" },
  { number: "06", title: "Vacío, entraña y más", copy: "Cortes sabrosos y versátiles, ideales para disfrutar a la parrilla o preparar como más te guste.", items: "Vacío · Entraña · Consultá disponibilidad", image: "/images/vacio-entrana-y-mas.webp", alt: "Vacío, entraña y otros cortes vacunos frescos en Carnicería Don Pedro" },
];

export default function ProductosPage() {
  return (
    <main>
      <SiteHeader active="productos" />
      <section className="page-hero">
        <div>
          <p className="breadcrumb"><a href={withBasePath("/")}>Inicio</a><span>/</span>Productos</p>
          <p className="section-kicker light">Nuestros productos</p>
          <h1>Todo lo que necesitás<br /><em>para comer bien.</em></h1>
          <p>Cortes frescos, preparaciones de la casa y buenos acompañamientos. Consultanos por precios, ofertas y disponibilidad del día.</p>
          <a className="button page-hero-button" href={whatsappUrl}>Consultar por WhatsApp <span aria-hidden="true">↗</span></a>
        </div>
        <div className="page-hero-side"><span>Selección</span><strong>Frescura<br />y variedad</strong><p>Te asesoramos para que lleves el corte y la cantidad ideal para cada ocasión.</p></div>
      </section>

      <section className="catalog">
        <div className="catalog-heading"><p className="section-kicker">Elegí tu categoría</p><h2>Productos para todos los días<br /><em>y para ocasiones especiales.</em></h2></div>
        <div className="catalog-grid">
          {categories.map((category) => (
            <article className="catalog-card" key={category.number}>
              <figure className="catalog-photo"><img src={withBasePath(category.image)} alt={category.alt} loading="lazy" /></figure>
              <span>{category.number}</span><h3>{category.title}</h3><p>{category.copy}</p><strong>{category.items}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="page-cta"><p>¿Estás organizando un asado?</p><h2>Calculá las cantidades<br /><em>para tus invitados.</em></h2><a className="button" href={withBasePath("/calculadora")}>Usar la calculadora <span aria-hidden="true">→</span></a></section>
      <SiteFooter />
    </main>
  );
}
