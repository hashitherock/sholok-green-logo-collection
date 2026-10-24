import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { RotateCcw, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LogoCard } from "@/components/LogoCard";
import { FAMILIES, FONT_STYLES, LOGOS, UNIQUE_HEX_COUNT } from "@/lib/logos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SHOLOK Premium Green Logo Studio" },
      { name: "description", content: "Explore and download premium green SHOLOK wordmark logos in SVG." },
      { property: "og:title", content: "SHOLOK Premium Green Logo Studio" },
      { property: "og:description", content: "Explore premium green identities for SHOLOK and download individual SVG logos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Sort = "default" | "name" | "hex";

function Index() {
  const [q, setQ] = useState("");
  const [family, setFamily] = useState("all");
  const [style, setStyle] = useState("all");
  const [sort, setSort] = useState<Sort>("default");

  const list = useMemo(() => {
    let r = LOGOS.filter(
      (l) =>
        l.name.toLowerCase().includes(q.trim().toLowerCase()) &&
        (family === "all" || l.family === family) &&
        (style === "all" || l.font.style === style),
    );
    if (sort === "name") r = [...r].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "hex") r = [...r].sort((a, b) => a.hex.localeCompare(b.hex));
    return r;
  }, [q, family, style, sort]);

  const reset = () => { setQ(""); setFamily("all"); setStyle("all"); setSort("default"); };

  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-[1600px] px-6 py-8">
          <p className="font-display text-sm font-bold tracking-[0.3em] text-primary">SHOLOK</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Premium Green Logo Collection</h1>
              <p className="mt-2 text-muted-foreground">Explore premium green identities for SHOLOK.</p>
            </div>
            <p className="rounded-lg border border-border px-3 py-1.5 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{LOGOS.length}</span> logos · <span className="font-semibold text-foreground">{UNIQUE_HEX_COUNT}</span> unique shades
            </p>
          </div>
        </div>
      </header>

      <div className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-3 px-6 py-3">
          <div className="relative min-w-[200px] flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by color name" className="pl-9" />
          </div>
          <Select value={family} onValueChange={setFamily}>
            <SelectTrigger className="w-[190px]"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All green families</SelectItem>
              {FAMILIES.map((f) => <SelectItem key={f} value={f}>{f}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={style} onValueChange={setStyle}>
            <SelectTrigger className="w-[160px]"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All font styles</SelectItem>
              {FONT_STYLES.map((f) => <SelectItem key={f} value={f}>{f}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={sort} onValueChange={(v) => setSort(v as Sort)}>
            <SelectTrigger className="w-[160px]"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Collection order</SelectItem>
              <SelectItem value="name">Sort by name</SelectItem>
              <SelectItem value="hex">Sort by HEX</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={reset}><RotateCcw className="h-4 w-4" /> Reset</Button>
        </div>
      </div>

      <main className="mx-auto max-w-[1600px] px-6 py-8">
        <p className="mb-4 text-sm text-muted-foreground">Showing {list.length} of {LOGOS.length}</p>
        {list.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">No logos match these filters.</p>
        ) : (
          <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
            {list.map((l) => <LogoCard key={l.id} logo={l} />)}
          </div>
        )}
      </main>
    </div>
  );
}
