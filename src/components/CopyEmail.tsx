"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/content/profile";
export function CopyEmail(){const [status,setStatus]=useState<"idle"|"copied"|"failed">("idle");return <div className="copy-email-wrap"><button type="button" className="copy-email-btn" onClick={async()=>{try{await navigator.clipboard.writeText(profile.email);setStatus("copied");}catch{setStatus("failed");}}}>{status==="copied"?<Check size={18}/>:<Copy size={18}/>}<span>{status==="copied"?"Copied!":"Copy email"}</span></button><span className="copy-message" role="status" aria-live="polite">{status==="failed"?"Select the email address above to copy it.":""}</span></div>}
