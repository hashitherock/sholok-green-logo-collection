import montserrat from "@fontsource/montserrat/files/montserrat-latin-600-normal.woff?url";
import manrope from "@fontsource/manrope/files/manrope-latin-700-normal.woff?url";
import sora from "@fontsource/sora/files/sora-latin-600-normal.woff?url";
import outfit from "@fontsource/outfit/files/outfit-latin-500-normal.woff?url";
import urbanist from "@fontsource/urbanist/files/urbanist-latin-800-normal.woff?url";
import spaceGrotesk from "@fontsource/space-grotesk/files/space-grotesk-latin-500-normal.woff?url";
import archivo from "@fontsource/archivo/files/archivo-latin-800-normal.woff?url";
import dmSans from "@fontsource/dm-sans/files/dm-sans-latin-300-normal.woff?url";
import workSans from "@fontsource/work-sans/files/work-sans-latin-700-normal.woff?url";
import jakarta from "@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-800-normal.woff?url";
import nunito from "@fontsource/nunito-sans/files/nunito-sans-latin-600-normal.woff?url";
import franklin from "@fontsource/libre-franklin/files/libre-franklin-latin-700-normal.woff?url";

export type FontStyle = "Geometric" | "Luxury" | "Bold" | "Minimal" | "Editorial" | "Rounded";
export type Family = "Luxury Dark Greens" | "Emerald Greens" | "Botanical Greens" | "Teal Greens" | "Exclusive Greens";

export interface FontDef {
  id: string;
  family: string;
  weightName: string;
  url: string;
  style: FontStyle;
  tracking: number; // in em
}

export const FONTS: FontDef[] = [
  { id: "montserrat", family: "Montserrat", weightName: "SemiBold", url: montserrat, style: "Geometric", tracking: 0.08 },
  { id: "dmsans", family: "DM Sans", weightName: "Light", url: dmSans, style: "Luxury", tracking: 0.32 },
  { id: "archivo", family: "Archivo", weightName: "ExtraBold", url: archivo, style: "Bold", tracking: 0.02 },
  { id: "spacegrotesk", family: "Space Grotesk", weightName: "Medium", url: spaceGrotesk, style: "Minimal", tracking: 0.18 },
  { id: "franklin", family: "Libre Franklin", weightName: "Bold", url: franklin, style: "Editorial", tracking: 0.12 },
  { id: "nunito", family: "Nunito Sans", weightName: "SemiBold", url: nunito, style: "Rounded", tracking: 0.1 },
  { id: "manrope", family: "Manrope", weightName: "Bold", url: manrope, style: "Luxury", tracking: 0.22 },
  { id: "jakarta", family: "Plus Jakarta Sans", weightName: "ExtraBold", url: jakarta, style: "Bold", tracking: 0.04 },
  { id: "sora", family: "Sora", weightName: "SemiBold", url: sora, style: "Geometric", tracking: 0.14 },
  { id: "outfit", family: "Outfit", weightName: "Medium", url: outfit, style: "Minimal", tracking: 0.26 },
  { id: "urbanist", family: "Urbanist", weightName: "ExtraBold", url: urbanist, style: "Rounded", tracking: 0.06 },
  { id: "worksans", family: "Work Sans", weightName: "Bold", url: workSans, style: "Editorial", tracking: 0.16 },
];

const RAW: [string, string, Family][] = [
  ["Midnight Emerald", "#004225", "Luxury Dark Greens"],
  ["British Racing Green", "#004225", "Luxury Dark Greens"],
  ["Deep Forest Green", "#014421", "Luxury Dark Greens"],
  ["Dark Emerald", "#005B46", "Luxury Dark Greens"],
  ["Imperial Green", "#005A3C", "Luxury Dark Greens"],
  ["Black Forest Green", "#013220", "Luxury Dark Greens"],
  ["Evergreen", "#05472A", "Luxury Dark Greens"],
  ["Pine Green", "#01796F", "Luxury Dark Greens"],
  ["Hunter Green", "#355E3B", "Luxury Dark Greens"],
  ["Deep Jade", "#006B54", "Luxury Dark Greens"],
  ["Classic Emerald", "#046307", "Emerald Greens"],
  ["Royal Emerald", "#008F69", "Emerald Greens"],
  ["Jewel Green", "#007F5F", "Emerald Greens"],
  ["Rich Emerald", "#009B77", "Emerald Greens"],
  ["Vivid Emerald", "#00A86B", "Emerald Greens"],
  ["Luxury Jade", "#00A572", "Emerald Greens"],
  ["Malachite Green", "#0BDA51", "Emerald Greens"],
  ["Deep Kelly Green", "#087830", "Emerald Greens"],
  ["Gemstone Green", "#008C45", "Emerald Greens"],
  ["Vibrant Forest", "#228B22", "Emerald Greens"],
  ["Botanical Green", "#3F704D", "Botanical Greens"],
  ["Laurel Green", "#A9BA9D", "Botanical Greens"],
  ["Olive Green", "#708238", "Botanical Greens"],
  ["Moss Green", "#8A9A5B", "Botanical Greens"],
  ["Sage Green", "#9CAF88", "Botanical Greens"],
  ["Eucalyptus Green", "#5F8575", "Botanical Greens"],
  ["Fern Green", "#4F7942", "Botanical Greens"],
  ["Thyme Green", "#667C4A", "Botanical Greens"],
  ["Basil Green", "#32612D", "Botanical Greens"],
  ["Celadon Green", "#ACE1AF", "Botanical Greens"],
  ["Deep Teal", "#005F56", "Teal Greens"],
  ["Ocean Green", "#48BF91", "Teal Greens"],
  ["Peacock Green", "#006D5B", "Teal Greens"],
  ["Teal Emerald", "#008C8C", "Teal Greens"],
  ["Viridian Green", "#40826D", "Teal Greens"],
  ["Tropical Deep Green", "#00755E", "Teal Greens"],
  ["Blue Spruce Green", "#1E4D3A", "Teal Greens"],
  ["Jade Teal", "#00A693", "Teal Greens"],
  ["Deep Aquamarine", "#006D77", "Teal Greens"],
  ["Dark Turquoise Green", "#008B8B", "Teal Greens"],
  ["Sholok Signature Green", "#087F5B", "Exclusive Greens"],
  ["Heritage Green", "#1B4332", "Exclusive Greens"],
  ["Prestige Green", "#14532D", "Exclusive Greens"],
  ["Noble Green", "#166534", "Exclusive Greens"],
  ["Alpine Green", "#2D6A4F", "Exclusive Greens"],
  ["Royal Forest", "#1B5E20", "Exclusive Greens"],
  ["Artisan Green", "#386641", "Exclusive Greens"],
  ["Organic Luxury Green", "#52734D", "Exclusive Greens"],
  ["Deep Clover", "#228B22", "Exclusive Greens"],
  ["Obsidian Green", "#12372A", "Exclusive Greens"],
];

export interface Logo {
  id: string;
  name: string;
  hex: string;
  family: Family;
  font: FontDef;
  sharedHexWith?: string;
}

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const LOGOS: Logo[] = RAW.map(([name, hex, family], i) => {
  const first = RAW.findIndex((r) => r[1] === hex);
  return {
    id: slug(name),
    name,
    hex,
    family,
    font: FONTS[i % FONTS.length],
    sharedHexWith: first !== i ? RAW[first][0] : undefined,
  };
});

export const UNIQUE_HEX_COUNT = new Set(LOGOS.map((l) => l.hex)).size;
export const FAMILIES: Family[] = ["Luxury Dark Greens", "Emerald Greens", "Botanical Greens", "Teal Greens", "Exclusive Greens"];
export const FONT_STYLES: FontStyle[] = ["Geometric", "Luxury", "Bold", "Minimal", "Editorial", "Rounded"];
export const fileNameFor = (l: Logo) => `sholok-${l.id}.svg`;
