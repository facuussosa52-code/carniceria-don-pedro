"use client";

import { useMemo, useState } from "react";

type Appetite = "poco" | "normal" | "buen_comer";
type ExtraId = "chorizos" | "morcillas" | "mollejas" | "chinchulines" | "rinones" | "chotos";
type MeatStyle = "con_hueso" | "mixto" | "sin_hueso";

const appetiteOptions: { id: Appetite; label: string; detail: string; grams: number }[] = [
  { id: "poco", label: "Comen poco", detail: "350 g por adulto", grams: 350 },
  { id: "normal", label: "Comen normal", detail: "500 g por adulto", grams: 500 },
  { id: "buen_comer", label: "Buen comer", detail: "650 g por adulto", grams: 650 },
];

const extras: { id: ExtraId; label: string; share: number }[] = [
  { id: "chorizos", label: "Chorizos", share: 20 },
  { id: "morcillas", label: "Morcillas", share: 8 },
  { id: "mollejas", label: "Mollejas", share: 5 },
  { id: "chinchulines", label: "Chinchulines", share: 5 },
  { id: "rinones", label: "Riñones", share: 2 },
  { id: "chotos", label: "Chotos", share: 5 },
];

const meatStyleOptions: { id: MeatStyle; label: string; detail: string }[] = [
  { id: "con_hueso", label: "Con hueso", detail: "Asado, costilla y cortes similares" },
  { id: "mixto", label: "Combinado", detail: "60% con hueso y 40% pulpa" },
  { id: "sin_hueso", label: "Sin hueso", detail: "Pulpa y cortes sin hueso" },
];

const roundUpToHundred = (grams: number) => Math.ceil(grams / 100) * 100;
const formatKg = (grams: number) => `${(grams / 1000).toLocaleString("es-UY", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} kg`;

export function AsadoCalculator() {
  const [adults, setAdults] = useState(6);
  const [children, setChildren] = useState(0);
  const [appetite, setAppetite] = useState<Appetite>("normal");
  const [withSides, setWithSides] = useState(true);
  const [meatStyle, setMeatStyle] = useState<MeatStyle>("con_hueso");
  const [selectedExtras, setSelectedExtras] = useState<ExtraId[]>(["chorizos"]);

  const result = useMemo(() => {
    const adultRate = appetiteOptions.find((option) => option.id === appetite)?.grams ?? 500;
    const guests = Math.max(0, adults) + Math.max(0, children);
    if (guests === 0) return { rows: [], total: 0, baseTotal: 0 };

    const sidesFactor = withSides ? 0.9 : 1;
    const baseTotal = (Math.max(0, adults) * adultRate + Math.max(0, children) * 225) * sidesFactor;
    const chosen = extras.filter((extra) => selectedExtras.includes(extra.id));
    const totalShare = 60 + chosen.reduce((sum, extra) => sum + extra.share, 0);

    const beefBase = baseTotal * 60 / totalShare;
    const meatRows = meatStyle === "mixto"
      ? [
          { id: "carne_hueso", label: "Cortes con hueso", grams: roundUpToHundred(beefBase * 0.6 * 1.15) },
          { id: "carne_pulpa", label: "Pulpa o cortes sin hueso", grams: roundUpToHundred(beefBase * 0.4) },
        ]
      : [{
          id: "carne",
          label: meatStyle === "con_hueso" ? "Cortes con hueso" : "Pulpa o cortes sin hueso",
          grams: roundUpToHundred(beefBase * (meatStyle === "con_hueso" ? 1.15 : 1)),
        }];
    const rows = [
      ...meatRows,
      ...chosen.map((extra) => ({ id: extra.id, label: extra.label, grams: roundUpToHundred(baseTotal * extra.share / totalShare) })),
    ];

    return { rows, total: rows.reduce((sum, row) => sum + row.grams, 0), baseTotal };
  }, [adults, children, appetite, withSides, meatStyle, selectedExtras]);

  const toggleExtra = (id: ExtraId) => {
    setSelectedExtras((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  };

  const appetiteLabel = appetiteOptions.find((option) => option.id === appetite)?.label ?? "Comen normal";
  const meatStyleLabel = meatStyleOptions.find((option) => option.id === meatStyle)?.label ?? "Con hueso";
  const message = [
    "Buenos días, espero que se encuentren bien.",
    "",
    "*CONSULTA PARA UN ASADO*",
    "",
    "*Personas*",
    `• Adultos: ${adults}`,
    `• Niños: ${children}`,
    "",
    "*Preferencias*",
    `• Apetito: ${appetiteLabel}`,
    `• Tipo de carne: ${meatStyleLabel}`,
    `• Acompañamientos: ${withSides ? "sí" : "no"}`,
    "",
    "*Cantidades estimadas*",
    ...result.rows.map((row) => `• ${row.label}: ${formatKg(row.grams)}`),
    "",
    `*Total aproximado: ${formatKg(result.total)}*`,
    "",
    "¿Podrían confirmarme la disponibilidad y decirme si recomiendan ajustar alguna cantidad?",
  ].join("\n");
  const whatsappUrl = `https://wa.me/59899398189?text=${encodeURIComponent(message)}`;

  return (
    <div className="calculator-shell">
      <form className="calculator-form" onSubmit={(event) => event.preventDefault()}>
        <fieldset>
          <legend>1. ¿Cuántas personas son?</legend>
          <div className="guest-grid">
            <label><span>Adultos</span><input type="number" min="0" max="100" inputMode="numeric" value={adults} onChange={(event) => setAdults(Number(event.target.value))} /></label>
            <label><span>Niños</span><small>Hasta 12 años</small><input type="number" min="0" max="100" inputMode="numeric" value={children} onChange={(event) => setChildren(Number(event.target.value))} /></label>
          </div>
        </fieldset>

        <fieldset>
          <legend>2. ¿Cuánto comen?</legend>
          <div className="appetite-options">
            {appetiteOptions.map((option) => (
              <label className={appetite === option.id ? "selected" : ""} key={option.id}>
                <input type="radio" name="appetite" value={option.id} checked={appetite === option.id} onChange={() => setAppetite(option.id)} />
                <strong>{option.label}</strong><small>{option.detail}</small>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>3. Ajustá el tipo de asado</legend>
          <div className="appetite-options">
            {meatStyleOptions.map((option) => (
              <label className={meatStyle === option.id ? "selected" : ""} key={option.id}>
                <input type="radio" name="meat-style" value={option.id} checked={meatStyle === option.id} onChange={() => setMeatStyle(option.id)} />
                <strong>{option.label}</strong><small>{option.detail}</small>
              </label>
            ))}
          </div>
          <div className="calculator-checks sides-option">
            <label className={withSides ? "selected" : ""}><input type="checkbox" checked={withSides} onChange={(event) => setWithSides(event.target.checked)} /><span><strong>Habrá acompañamientos</strong><small>Pan, ensaladas u otras entradas</small></span></label>
          </div>
        </fieldset>

        <fieldset>
          <legend>4. ¿Qué más querés incluir?</legend>
          <div className="calculator-checks extras-grid">
            {extras.map((extra) => (
              <label className={selectedExtras.includes(extra.id) ? "selected" : ""} key={extra.id}>
                <input type="checkbox" checked={selectedExtras.includes(extra.id)} onChange={() => toggleExtra(extra.id)} />
                <span>{extra.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </form>

      <aside className="calculator-result" aria-live="polite">
        <p className="section-kicker light">Tu cálculo</p>
        <h2>{result.total > 0 ? formatKg(result.total) : "—"}</h2>
        <p className="result-subtitle">Cantidad total aproximada</p>
        <div className="result-list">
          {result.rows.length > 0 ? result.rows.map((row) => <div key={row.id}><span>{row.label}</span><strong>{formatKg(row.grams)}</strong></div>) : <p>Agregá al menos una persona para ver el cálculo.</p>}
        </div>
        <p className="calculator-note">Es una estimación orientativa. En Don Pedro podemos ayudarte a ajustarla según los cortes, la ocasión y los gustos del grupo.</p>
        <a className={`button button-light calculator-whatsapp${result.total === 0 ? " disabled" : ""}`} href={result.total > 0 ? whatsappUrl : undefined} aria-disabled={result.total === 0}>Consultar por WhatsApp <span aria-hidden="true">↗</span></a>
      </aside>
    </div>
  );
}
