import { SiteFooter, SiteHeader, whatsappUrl } from "../site-components";
import { withBasePath } from "../base-path";

export const metadata = {
  title: "Nosotros | Carnicería Don Pedro",
  description: "Conocé la historia, misión, visión y forma de trabajar de Carnicería Don Pedro.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <main>
      <SiteHeader active="nosotros" />
      <section className="page-hero">
        <div><p className="breadcrumb"><a href={withBasePath("/")}>Inicio</a><span>/</span>Nosotros</p><p className="section-kicker light">Quiénes somos</p><h1>Una carnicería cercana,<br /><em>hecha para nuestra gente.</em></h1><p>Somos un comercio local de Pan de Azúcar comprometido con la frescura, la elaboración propia y una atención en la que podés confiar.</p></div>
        <figure className="page-photo-side"><img src={withBasePath("/images/trabajo-artesanal.jpg")} alt="Carnicería Don Pedro preparando productos en el local" loading="lazy" /><figcaption><span>Nuestra forma de trabajar</span><strong>Cuidado en cada preparación</strong></figcaption></figure>
      </section>

      <section className="about">
        <div className="about-heading"><p className="section-kicker">Nuestra forma de trabajar</p><h2>Lo de siempre,<br /><em>hecho como se debe.</em></h2></div>
        <div className="about-content"><div className="about-copy"><p className="lead">Nos gusta conocer a nuestros clientes, escuchar qué necesitan y ayudarlos a elegir el producto ideal para cada comida.</p><p>Elegimos la mercadería con atención y elaboramos nuestros productos con dedicación. Queremos que cada persona encuentre calidad, honestidad y un trato cercano.</p><a className="text-link dark" href={whatsappUrl}>Escribinos y te asesoramos <span>↗</span></a></div><div className="about-points"><div><strong>01</strong><span>Atención cercana y personalizada</span></div><div><strong>02</strong><span>Mercadería fresca y seleccionada</span></div><div><strong>03</strong><span>Elaboraciones hechas en el local</span></div></div></div>
      </section>

      <section className="value-proposition">
        <div><p className="section-kicker light">Nuestra propuesta de valor</p><span>Lo que nos diferencia</span></div>
        <div><h2>Calidad y soluciones pensadas<br /><em>para cada mesa.</em></h2><p>En Don Pedro combinamos carnes seleccionadas, elaboraciones propias y atención cercana para que cada cliente encuentre confianza, variedad y una respuesta a su medida.</p></div>
      </section>

      <section className="identity">
        <div className="identity-heading"><p className="section-kicker">Lo que nos guía</p><h2>Nuestra esencia,<br /><em>todos los días.</em></h2></div>
        <div className="identity-grid"><article className="identity-card purpose-card"><span>01</span><h3 className="identity-title">Misión</h3><p>Ofrecer carnes seleccionadas y elaboraciones caseras, con atención personalizada, honestidad y cuidado.</p></article><article className="identity-card"><span>02</span><h3 className="identity-title">Visión</h3><p>Ser una carnicería referente en la zona por la calidad de sus productos, sus elaboraciones propias y una atención cercana.</p></article><article className="identity-card"><span>03</span><h3 className="identity-title">Valores</h3><p>Trabajamos con respeto, orden y compromiso para construir relaciones duraderas con quienes nos eligen.</p></article></div>
      </section>

      <section className="history"><div className="history-panel"><p className="section-kicker light">Nuestra historia</p><h2>Un proyecto que crece<br /><em>junto a Pan de Azúcar.</em></h2><p>Don Pedro nació con una meta: brindar productos de excelente calidad y una atención cercana, de esas que hacen que el cliente quiera volver. Dentro de nuestro equipo contamos con más de 35 años de experiencia en el rubro.</p><p>Seguimos avanzando con compromiso y orden, cerca de cada cliente y buscando la excelencia en todo lo que hacemos.</p></div><div className="history-steps"><article><span>Origen</span><h3>Una idea cercana</h3><p>Crear un comercio local basado en la confianza y la buena atención.</p></article><article><span>Presente</span><h3>Más variedad</h3><p>Cortes frescos, especialidades caseras y opciones para distintas necesidades.</p></article><article><span>Futuro</span><h3>Seguir creciendo</h3><p>Mejorar cada día sin perder el trato cercano que nos identifica.</p></article></div></section>
      <SiteFooter />
    </main>
  );
}
