import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function ContactBanner(){return <section className="contact-banner" id="get-in-touch"><div className="wrap contact-banner-inner"><p className="eyebrow">05 / WHAT'S NEXT?</p><h2>Have something <em>interesting</em><br/>in mind<span>?</span></h2><div className="contact-banner-bottom"><p>Research idea, product challenge, or just a good question.<br/>I’d love to hear about it.</p><Link href="/contact" className="contact-circle" aria-label="Get in touch"><ArrowUpRight size={48}/></Link></div></div></section>}
