import type { FontDef, Logo } from "./logos";

type OTFont = { getPath: (t: string, x: number, y: number, s: number) => { toPathData: (d: number) => string }; charToGlyph: (c: string) => { advanceWidth?: number; getMetrics: () => { xMin: number; xMax: number; yMin: number; yMax: number } }; unitsPerEm: number };

const cache = new Map<string, Promise<OTFont>>();

function loadFont(f: FontDef): Promise<OTFont> {
  if (!cache.has(f.id)) {
    cache.set(
      f.id,
      (async () => {
        const { parse } = await import("opentype.js");
        const buf = await (await fetch(f.url)).arrayBuffer();
        return parse(buf) as unknown as OTFont;
      })(),
    );
  }
  return cache.get(f.id)!;
}

export interface Wordmark { d: string; viewBox: string; }

/** Converts "SHOLOK" into vector outlines with tracking applied. */
export async function buildWordmark(font: FontDef): Promise<Wordmark> {
  const ot = await loadFont(font);
  const size = 100;
  const scale = size / ot.unitsPerEm;
  const track = font.tracking * size;
  let x = 0;
  const parts: string[] = [];
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const ch of "SHOLOK") {
    const p = ot.getPath(ch, x, 0, size);
    const g = ot.charToGlyph(ch);
    const m = g.getMetrics();
    minX = Math.min(minX, x + m.xMin * scale); maxX = Math.max(maxX, x + m.xMax * scale);
    minY = Math.min(minY, -m.yMax * scale); maxY = Math.max(maxY, -m.yMin * scale);
    parts.push(p.toPathData(2));
    x += (g.advanceWidth ?? 0) * scale + track;
  }
  const pad = 16;
  const w = maxX - minX + pad * 2;
  const h = maxY - minY + pad * 2;
  return { d: parts.join(""), viewBox: `${(minX - pad).toFixed(2)} ${(minY - pad).toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)}` };
}

export function svgMarkup(wm: Wordmark, hex: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="${wm.viewBox}" role="img" aria-label="SHOLOK"><path fill="${hex}" d="${wm.d}"/></svg>\n`;
}

export async function downloadLogo(logo: Logo, filename: string) {
  const wm = await buildWordmark(logo.font);
  const blob = new Blob([svgMarkup(wm, logo.hex)], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30_000);
}
