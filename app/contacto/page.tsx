import { SiteFooter, SiteHeader, facebookUrl, instagramUrl, mapsUrl, whatsappUrl } from "../site-components";
import { withBasePath } from "../base-path";

export const metadata = {
  title: "Contacto | Carnicería Don Pedro",
  description: "Dirección, horarios y canales de contacto de Carnicería Don Pedro en Pan de Azúcar.",
  alternates: { canonical: "/contacto" },
};

const hours = [
  ["Lunes", "7:30–13:00 · 16:00–20:30"],
  ["Martes", "Cerrado"],
  ["Miércoles a sábado", "7:30–13:00 · 16:00–20:30"],
  ["Domingo", "7:30–13:00"],
];

export default function ContactoPage() {
  return (
    <main>
      <SiteHeader active="contacto" />
      <section className="page-hero page-hero-light">
        <div><p className="breadcrumb"><a href={withBasePath("/")}>Inicio</a><span>/</span>Contacto</p><p className="section-kicker">Contacto</p><h1>Estamos cerca,<br /><em>cuando nos necesitás.</em></h1><p>Hacé tu pedido, consultanos por un producto o vení a visitarnos en Pan de Azúcar.</p><a className="button" href={whatsappUrl}>Escribir por WhatsApp <span aria-hidden="true">↗</span></a></div>
        <div className="page-hero-side special-side"><span>Don Pedro</span><strong>Sarandí 669<br />Pan de Azúcar</strong><p>Te esperamos con atención cercana y mercadería fresca.</p></div>
      </section>

      <section className="visit">
        <div className="visit-copy"><p className="section-kicker">Encontranos</p><h2>Te esperamos en<br /><em>Pan de Azúcar</em></h2><div className="address"><span aria-hidden="true">⌖</span><div><strong>Sarandí 669</strong><p>Pan de Azúcar, Maldonado</p></div></div><a className="button" href={mapsUrl} target="_blank" rel="noreferrer">Cómo llegar en Google Maps <span>↗</span></a></div>
        <div className="hours-card"><p className="section-kicker light">Horarios</p><h3>Cuando quieras,<br />acá estamos.</h3><div className="hours-list">{hours.map(([day,time]) => <div className={day === "Martes" ? "closed" : ""} key={day}><span>{day}</span><strong>{time}</strong></div>)}</div><a className="phone-link" href="tel:+59899398189">099 398 189</a></div>
      </section>

      <section className="contact-strip">
        <div className="contact-intro"><p className="section-kicker">Hablemos</p><h2>Elegí cómo<br /><em>contactarnos.</em></h2></div>
        <div className="contact-links">
          <a href={whatsappUrl}>
            <span className="social-mark whatsapp-mark" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" /><path d="M8.2 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.9c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.7 1.2 1.8 2.2 3.1 2.8.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.5 0 .4-.2 1.4-.8 1.9-.6.5-1.4.8-2.4.6-1.2-.3-2.8-.9-4.4-2.3-1.3-1.2-2.3-2.7-2.8-4-.5-1.3-.1-2.4.3-3Z" /></svg></span>
            <div><small>Pedidos y consultas</small><strong>WhatsApp</strong></div><b>↗</b>
          </a>
          <a href={facebookUrl} target="_blank" rel="noreferrer">
            <span className="social-mark facebook-mark" aria-hidden="true"><svg viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91V127.2c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg></span>
            <div><small>Novedades y ofertas</small><strong>Facebook</strong></div><b>↗</b>
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            <span className="social-mark instagram-mark" aria-hidden="true"><svg viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1S3.3 127.5 1.5 163.4c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></span>
            <div><small>Novedades y productos</small><strong>Instagram</strong></div><b>↗</b>
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
