import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://carniceriadonpedro.com.uy";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/productos", "/elaboraciones", "/especiales", "/vegano", "/calculadora", "/nosotros", "/contacto"];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
