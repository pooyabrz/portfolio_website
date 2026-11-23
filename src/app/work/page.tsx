import type { Metadata } from "next";
import { ProjectFilter } from "@/components/ProjectFilter";
import { canonical } from "@/lib/paths";
export const metadata:Metadata={title:"Work — Projects & Case Studies",description:"Explore Pooya Barazandeh's machine-learning, research, simulation, and software engineering projects.",alternates:{canonical:canonical("/work")}};
export default function WorkPage(){return <div className="page-shell wrap"><div className="page-heading"><p className="eyebrow">THE PROJECT INDEX / 2025—26</p><h1>Selected <em>work.</em><span className="heading-star">✳</span></h1><div className="page-heading-footer"><p>From machine learning to full-stack tools and tiny experiments. Filter, explore, and dig into the decisions behind the work.</p><span>SELECT A PROJECT TO EXPLORE ↘</span></div></div><ProjectFilter/></div>}
