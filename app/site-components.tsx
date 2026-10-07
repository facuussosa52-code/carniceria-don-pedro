import { withBasePath } from "./base-path";

const whatsappBaseUrl = "https://wa.me/59899398189";
const createWhatsappUrl = (message: string) => `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;

export const whatsappUrl = createWhatsappUrl(
  "Buenos días, espero que se encuentren bien. Estoy interesado en: ",
);
export const glutenFreeUrl = createWhatsappUrl(
  "Buenos días, espero que se encuentren bien. Estoy interesado en opciones sin gluten. Quisiera consultar por las preparaciones disponibles.",
);
export const saltFreeUrl = createWhatsappUrl(
  "Buenos días, espero que se encuentren bien. Estoy interesado en opciones sin sal. Quisiera consultar por las preparaciones disponibles.",
);
export const veganOptionsUrl = createWhatsappUrl(
  "Buenos días, espero que se encuentren bien. Estoy interesado en los productos veganos. Quisiera consultar por las hamburguesas Beyond Burger, los medallones Veggies Ártico, las salchichas Beyond Sausage y la carne picada Beyond Mince.",
);
export const mapsUrl = "https://maps.app.goo.gl/PDBjZ9HrrVPdx9uJ8";
export const facebookUrl = "https://www.facebook.com/carniceria.don.pedro.2024/";
export const instagramUrl = "https://www.instagram.com/ddonpedroo/";

type PageName = "inicio" | "productos" | "elaboraciones" | "calculadora" | "especiales" | "vegano" | "nosotros" | "contacto";

const navigation: { key: PageName; label: string; href: string }[] = [
  { key: "inicio", label: "Inicio", href: "/" },
  { key: "productos", label: "Productos", href: "/productos" },
  { key: "elaboraciones", label: "Elaboraciones", href: "/elaboraciones" },
  { key: "especiales", label: "Opciones", href: "/especiales" },
  { key: "vegano", label: "Línea veggie", href: "/vegano" },
  { key: "calculadora", label: "Calculadora", href: "/calculadora" },
  { key: "nosotros", label: "Nosotros", href: "/nosotros" },
  { key: "contacto", label: "Contacto", href: "/contacto" },
];

export function SiteHeader({ active }: { active: PageName }) {
  return (
    <>
      <div className="info-bar">
        <span>Sarandí 669 · Pan de Azúcar</span>
        <a href="tel:+59899398189">Pedidos y consultas: 099 398 189</a>
      </div>
      <header className="topbar">
        <a className="brand" href={withBasePath("/")} aria-label="Ir al inicio">
          <img src={withBasePath("/logo-don-pedro.png")} alt="Carnicería Don Pedro" />
          <span>Don Pedro</span>
        </a>
        <nav aria-label="Navegación principal">
          {navigation.map((item) => <a className={active === item.key ? "active" : ""} href={withBasePath(item.href)} key={item.key}>{item.label}</a>)}
        </nav>
        <a className="button button-small" href={whatsappUrl}>Hacer un pedido</a>
      </header>
      <nav className="mobile-nav" aria-label="Navegación móvil">
        {navigation.map((item) => <a className={active === item.key ? "active" : ""} href={withBasePath(item.href)} key={item.key}>{item.label}</a>)}
      </nav>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand"><img src={withBasePath("/logo-don-pedro.png")} alt="Carnicería Don Pedro" /><p>Frescura, calidad y atención de confianza.</p></div>
      <div className="footer-links">
        <div><strong>Contacto</strong><a href="tel:+59899398189">099 398 189</a><a href={whatsappUrl}>WhatsApp</a></div>
        <div><strong>Seguinos</strong><a href={facebookUrl} target="_blank" rel="noreferrer">Facebook</a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a></div>
        <div><strong>Dirección</strong><a href={mapsUrl} target="_blank" rel="noreferrer">Sarandí 669<br />Pan de Azúcar</a></div>
      </div>
      <p className="copyright">© 2026 Carnicería Don Pedro</p>
    </footer>
  );
}

export function WhatsappFloat() {
  return (
    <a className="whatsapp-float" href={whatsappUrl} aria-label="Consultar por WhatsApp" title="Consultar por WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
        <path d="M8.2 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.9c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.7 1.2 1.8 2.2 3.1 2.8.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.5 0 .4-.2 1.4-.8 1.9-.6.5-1.4.8-2.4.6-1.2-.3-2.8-.9-4.4-2.3-1.3-1.2-2.3-2.7-2.8-4-.5-1.3-.1-2.4.3-3Z" />
      </svg>
    </a>
  );
}
