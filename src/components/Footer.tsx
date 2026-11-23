import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";
import { asset } from "@/lib/paths";
export function Footer(){return <footer className="footer"><div className="wrap"><div className="footer-main"><Link href="/" className="footer-logo">pb.</Link><p>A little curiosity.<br/>A lot of building.</p><div><a href={profile.github} target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={14}/></a><a href={`mailto:${profile.email}`}>EMAIL <ArrowUpRight size={14}/></a><a href={asset("CV.pdf")} download="Pooya-Barazandeh-CV.pdf">RESUME ↓</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Pooya Barazandeh</span><span>Built with intention, not a template.</span><a href="#top">BACK TO TOP ↑</a></div></div></footer>}
