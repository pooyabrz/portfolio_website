import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
export default function NotFound(){return <div className="not-found-page wrap"><p className="eyebrow">WHOOPS / THAT PAGE ISN'T HERE</p><h1>4<span>✳</span>4</h1><h2>Lost in the <em>internet?</em></h2><p>This path doesn't lead anywhere. But there's plenty worth exploring.</p><div><Link href="/" className="button button-dark"><ArrowLeft size={18}/> Back home</Link><Link href="/work" className="button button-outline">Explore work <ArrowUpRight size={18}/></Link></div></div>}
