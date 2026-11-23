"use client";
import { useEffect, useState } from "react";
import { Moon, Sun, RotateCcw, Palette } from "lucide-react";

const colors = [
  { key: "cobalt", label: "Electric cobalt", hex: "#4063ea" },
  { key: "lavender", label: "Soft lavender", hex: "#9e8feb" },
  { key: "lime", label: "Acid lime", hex: "#b1d84b" },
  { key: "coral", label: "Coral orange", hex: "#f0785a" },
  { key: "mono", label: "Monochrome", hex: "#777777" }
] as const;
const getTheme = () => typeof document === "undefined" ? "light" : (document.documentElement.dataset.theme || "light");
export function ThemeControls({ compact = false }: {compact?: boolean}) {
  const [theme, setTheme] = useState("light");
  const [accent, setAccent] = useState("cobalt");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setTheme(getTheme()); setAccent(document.documentElement.dataset.accent || "cobalt");
    const sync=()=>setTheme(getTheme());
    window.addEventListener("pb-theme-updated",sync);
    return ()=>window.removeEventListener("pb-theme-updated",sync);
  }, []);
  function changeTheme(){
    const next=theme === "light" ? "dark":"light"; setTheme(next);
    document.documentElement.dataset.theme=next;
    try { localStorage.setItem("pb-theme",next); } catch {}
  }
  function changeAccent(next: string){
    setAccent(next); document.documentElement.dataset.accent=next;
    try { localStorage.setItem("pb-accent",next); } catch {}
  }
  function reset(){
    try { localStorage.removeItem("pb-theme");localStorage.removeItem("pb-accent"); } catch {}
    const systemDark=window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(systemDark?"dark":"light");document.documentElement.dataset.theme=systemDark?"dark":"light";
    changeAccent("cobalt"); setOpen(false);
  }
  return <div className={`theme-controls ${compact ? "theme-controls--compact":""}`}>
    <button className="icon-control" onClick={changeTheme} aria-label={theme==="light"?"Switch to dark theme":"Switch to light theme"} title="Toggle theme" type="button">{theme==="light"?<Moon size={19}/>:<Sun size={19}/>}</button>
    <div className="accent-wrap"><button className="icon-control" aria-label="Choose accent color" title="Customize colors" aria-expanded={open} onClick={()=>setOpen(!open)} type="button"><Palette size={19}/></button>
    {open&&<div className="accent-popover"><p className="eyebrow">PERSONALIZE</p><span className="accent-hint">Choose a little color.</span><div className="accent-swatches">{colors.map(c=><button key={c.key} className={`accent-swatch ${accent===c.key?"accent-swatch--selected":""}`} style={{background:c.hex}} title={c.label} aria-label={c.label} aria-pressed={accent===c.key} onClick={()=>changeAccent(c.key)} type="button"/>)}</div><button className="accent-reset" type="button" onClick={reset}><RotateCcw size={14}/> Reset to system defaults</button></div>}
    </div>
  </div>;
}
