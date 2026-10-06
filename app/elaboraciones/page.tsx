import { SiteFooter, SiteHeader, whatsappUrl } from "../site-components";
import { withBasePath } from "../base-path";

export const metadata = {
  title: "Elaboraciones de la casa | Carnicería Don Pedro",
  description: "Chorizos caseros, milanesas, arrollados y rellenos elaborados en Carnicería Don Pedro.",
  alternates: { canonical: "/elaboraciones" },
};

const elaboraciones = [
  {
    title: "Chorizos caseros",
    copy: "Elaborados en el local: de mezcla, con morrón y queso, o puro cerdo al vino blanco.",
    image: "/images/especiales-chorizos-nuevo.webp",
    alt: "Elaboración artesanal de chorizos frescos en Carnicería Don Pedro",
  },
  {
    title: "Milanesas artesanales",
    copy: "Preparadas y empanadas con dedicación para que las lleves listas para cocinar.",
    image: "/images/especiales-milanesas.webp",
    alt: "Milanesas artesanales empanadas y listas para cocinar",
  },
  {
    title: "Arrollados de pollo",
    copy: "Pollos rellenos y condimentados, preparados en el local para cocinar y compartir.",
    image: "/images/arrollados-de-pollo.webp",
    alt: "Arrollados de pollo rellenos y condimentados preparados en Carnicería Don Pedro",
  },
  {
    title: "Rellenos y preparaciones",
    copy: "Opciones condimentadas y rellenas, elaboradas con cuidado para cada pedido.",
    image: "/images/especiales-rellenos.webp",
    alt: "Preparaciones rellenas y condimentadas elaboradas en Carnicería Don Pedro",
  },
];

export default function ElaboracionesPage() {
  return (
    <main>
      <SiteHeader active="elaboraciones" />
      <section className="page-hero page-hero-light">
        <div>
          <p className="breadcrumb"><a href={withBasePath("/")}>Inicio</a><span>/</span>Elaboraciones</p>
          <p className="section-kicker">Hecho en Don Pedro</p>
          <h1>Elaboraciones de<br /><em>nuestra casa.</em></h1>
          <p>Preparamos productos caseros con dedicación, buscando que te lleves opciones prácticas, sabrosas y listas para cocinar.</p>
          <a className="button" href={whatsappUrl}>Consultar disponibilidad <span aria-hidden="true">↗</span></a>
        </div>
        <div className="page-hero-side special-side"><span>Elaboración propia</span><strong>Hecho con<br />dedicación</strong><p>Chorizos, milanesas, arrollados, rellenos y otras preparaciones disponibles en el local.</p></div>
      </section>

      <section className="house-catalog">
        <div className="house-heading">
          <div><p className="section-kicker">Nuestras preparaciones</p><h2>Listas para cocinar<br /><em>y compartir.</em></h2></div>
          <p>La disponibilidad puede variar. Escribinos y te contamos qué elaboraciones tenemos prontas o cuáles podés encargar.</p>
        </div>
        <div className="house-grid">
          {elaboraciones.map((item) => (
            <article className="house-card" key={item.title}>
              <figure><img src={withBasePath(item.image)} alt={item.alt} loading="lazy" /></figure>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-cta"><p>Consultá por las opciones del día</p><h2>Elegí tu elaboración favorita</h2><a className="button" href={whatsappUrl}>Escribir por WhatsApp <span aria-hidden="true">↗</span></a></section>
      <SiteFooter />
    </main>
  );
}
