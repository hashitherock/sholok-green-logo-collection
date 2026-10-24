import { useEffect, useState } from "react";
import { Check, Copy, Download } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { fileNameFor, type Logo } from "@/lib/logos";
import { buildWordmark, downloadLogo, type Wordmark } from "@/lib/wordmark";

export function LogoCard({ logo }: { logo: Logo }) {
  const [wm, setWm] = useState<Wordmark | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let live = true;
    buildWordmark(logo.font).then((w) => live && setWm(w));
    return () => { live = false; };
  }, [logo.font]);

  const onDownload = async () => {
    const name = fileNameFor(logo);
    await downloadLogo(logo, name);
    toast.success("Download started", { description: name });
  };

  const onCopy = async () => {
    await navigator.clipboard.writeText(logo.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <article className="group card-studio flex flex-col">
      <div className="logo-stage flex aspect-[4/3] items-center justify-center px-8">
        {wm ? (
          <svg viewBox={wm.viewBox} className="logo-art w-full max-h-[60%]" role="img" aria-label={`SHOLOK in ${logo.name}`}>
            <path fill={logo.hex} d={wm.d} />
          </svg>
        ) : (
          <div className="h-6 w-2/3 animate-pulse rounded bg-muted" />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 border-t border-border p-4 text-sm">
        <p><span className="font-semibold text-foreground">Color Name:</span> <span className="text-muted-foreground">{logo.name}</span></p>
        <p><span className="font-semibold text-foreground">Font:</span> <span className="text-muted-foreground">{logo.font.family} {logo.font.weightName}</span></p>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground">Brand Color:</span>
          <span className="swatch" style={{ backgroundColor: logo.hex }} aria-hidden />
          <span className="font-mono text-muted-foreground">{logo.hex}</span>
          <button onClick={onCopy} className="ml-auto rounded p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" aria-label={`Copy ${logo.hex}`}>
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        </div>
        {logo.sharedHexWith && (
          <p className="text-xs text-muted-foreground">Same shade as {logo.sharedHexWith}</p>
        )}
        <Button onClick={onDownload} disabled={!wm} className="mt-auto w-full translate-y-0 pt-0" variant="studio">
          <Download className="h-4 w-4" /> Download Logo
        </Button>
      </div>
    </article>
  );
}
