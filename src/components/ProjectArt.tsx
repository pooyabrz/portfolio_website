import type { Project } from "@/content/projects";

export function ProjectArt({ project, detailed = false }: { project: Project; detailed?: boolean }) {
  const kind = project.art;
  const white = "rgba(255,255,255,.85)";
  return (
    <div className={`project-art art-${project.color} ${detailed ? "project-art--wide" : ""}`} aria-hidden="true">
      <div className="art-watermark">{project.id.toUpperCase()}</div>
      <svg viewBox="0 0 760 520" fill="none" role="presentation" focusable="false" preserveAspectRatio="xMidYMid meet">
        {kind === "forecast" && <>
          <g opacity=".16" stroke="currentColor" strokeWidth="2">{[110,190,270,350,430].map(y=><path key={y} d={`M85 ${y}H680`}/>)}{[130,230,330,430,530,630].map(x=><path key={x} d={`M${x} 70V445`}/>)}</g>
          <path d="M92 338 C165 344 172 265 240 275 S346 375 410 245 S530 306 593 170 S650 202 693 104" stroke="currentColor" strokeWidth="16" strokeLinecap="round"/>
          <path d="M92 376 C165 382 172 303 240 313 S346 413 410 283 S530 344 593 208 S650 240 693 142 L693 222 C644 298 638 268 593 282 S470 352 410 365 S302 446 240 385 S150 425 92 442Z" fill="currentColor" opacity=".16"/>
          {[92,240,410,593,693].map((x,i)=><circle key={x} cx={x} cy={[338,275,245,170,104][i]} r="11" fill={white} stroke="currentColor" strokeWidth="7"/>)}
          <rect x="120" y="102" width="172" height="48" rx="24" fill="currentColor" opacity=".17"/><text x="150" y="134" fontSize="25" fontWeight="800" fill="currentColor">+ UNCERTAINTY</text>
        </>}
        {kind === "water" && <>
          <g stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"><path d="M70 270H218V132H379V317H526V171H690"/><path d="M218 270V425H410V317"/><path d="M526 317V422H646"/></g>
          {[ [70,270],[218,132],[218,270],[218,425],[379,132],[379,317],[410,317],[526,317],[526,171],[690,171],[646,422] ].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i===5?30:19} fill={i===5?white:"currentColor"} stroke={i===5?"currentColor":white} strokeWidth="6"/>)}
          <circle cx="410" cy="317" r="81" stroke="currentColor" strokeWidth="3" strokeDasharray="9 13" opacity=".65"/>
          <path d="M410 250L427 291L469 307L427 325L410 367L393 325L351 307L393 291Z" fill={white} opacity=".8"/>
        </>}
        {kind === "facade" && <>
          <g transform="translate(118,55) skewY(-8)">{[0,1,2,3,4].map(i=><g key={i} transform={`translate(${i*104},0)`}><rect x="0" y="0" width="75" height="391" rx="13" stroke="currentColor" strokeWidth="8"/><path d="M12 15L64 52V338L12 370Z" fill="currentColor" opacity={i%2?.38:.72}/><path d="M12 124L64 162M12 251L64 289" stroke={white} strokeWidth="7"/></g>)}</g>
          <circle cx="636" cy="108" r="47" fill={white}/><path d="M603 436C630 392 658 390 682 434" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
        </>}
        {kind === "chat" && <>
          <rect x="113" y="105" width="446" height="291" rx="50" fill="currentColor"/>
          <path d="M215 384L179 457L306 394" fill="currentColor"/>
          <rect x="314" y="210" width="326" height="203" rx="41" fill="none" stroke={white} strokeWidth="17"/>
          <path d="M590 400L623 460L529 415" fill="none" stroke={white} strokeWidth="17" strokeLinejoin="round"/>
          <path d="M178 203H478M178 265H393M352 296H562M352 347H510" stroke={white} strokeWidth="18" strokeLinecap="round"/>
          <circle cx="577" cy="125" r="56" fill={white}/><path d="M558 124L575 140L600 107" stroke="currentColor" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round"/>
        </>}
        {kind === "document" && <>
          <rect x="171" y="48" width="372" height="432" rx="22" fill={white}/>
          <path d="M229 132H480M229 189H480M229 246H407M229 302H457M229 359H361" stroke="currentColor" strokeWidth="17" strokeLinecap="round" opacity=".6"/>
          <rect x="218" y="277" width="286" height="46" rx="13" fill="currentColor" opacity=".22"/>
          <circle cx="518" cy="366" r="84" stroke="currentColor" strokeWidth="24"/>
          <path d="M577 426L672 493" stroke="currentColor" strokeWidth="29" strokeLinecap="round"/>
          <path d="M503 344L519 364L546 328" stroke="currentColor" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
        </>}
        {kind === "sampling" && <>
          <path d="M68 353C174 247 252 452 357 315S545 205 684 304" stroke="currentColor" strokeWidth="27" strokeLinecap="round"/>
          {[ [108,327],[229,371],[357,315],[481,247],[630,275] ].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="36" fill={white} stroke="currentColor" strokeWidth="11"/><text x={x} y={y+10} textAnchor="middle" fontSize="30" fontWeight="800" fill="currentColor">{i+1}</text></g>)}
          <path d="M390 72C343 141 322 164 322 193C322 238 353 263 390 263S458 238 458 193C458 164 437 141 390 72Z" fill="currentColor" opacity=".3"/>
          <path d="M578 92L634 167L690 92" stroke="currentColor" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
        </>}
        {kind === "grid" && <>
          <g transform="translate(176,47)">{Array.from({length:5},(_,i)=>Array.from({length:5},(_,j)=><rect key={`${i}-${j}`} x={j*84} y={i*84} width="76" height="76" rx="18" stroke="currentColor" strokeWidth="6" fill={i===2&&j===1?"currentColor":"none"} opacity=".8"/>))}<circle cx="122" cy="121" r="23" fill={white}/><circle cx="375" cy="373" r="29" fill={white}/><path d="M126 121L210 121L210 205L295 205L295 289L375 289L375 373" stroke={white} strokeWidth="10" strokeDasharray="15 13"/></g>
        </>}
        {kind === "audio" && <>
          {Array.from({length:25},(_,i)=>{ const h=35+Math.abs(Math.sin(i*1.27)*Math.cos(i*.46))*295; return <rect key={i} x={84+i*24} y={260-h/2} width="12" height={h} rx="6" fill="currentColor" opacity={.5+(i%3)*.16}/>})}
          <rect x="205" y="117" width="354" height="282" rx="72" stroke={white} strokeWidth="11"/>
          <path d="M340 193L450 260L340 327Z" fill={white}/>
        </>}
        {kind === "puzzle" && <>
          <g transform="translate(138,80) rotate(-8 220 180)"><rect width="235" height="235" rx="40" fill="currentColor" opacity=".85"/><path d="M115 0V235M0 116H235" stroke={white} strokeWidth="12"/><circle cx="115" cy="0" r="37" fill={white}/><circle cx="235" cy="116" r="37" fill={white}/></g>
          <g transform="translate(391,182) rotate(12 90 90)"><rect width="207" height="207" rx="40" fill={white}/><path d="M104 0V207M0 104H207" stroke="currentColor" strokeWidth="11"/><circle cx="0" cy="104" r="33" fill="currentColor"/><circle cx="104" cy="207" r="33" fill="currentColor"/></g>
        </>}
        {kind === "space" && <>
          {Array.from({length:38},(_,i)=><circle key={i} cx={(i*197)%742+9} cy={(i*117)%480+15} r={i%5===0?4:2} fill={white} opacity=".6"/>)}
          <path d="M387 75L459 318L632 409L457 396L387 464L315 396L144 409L315 318Z" fill="currentColor" stroke={white} strokeWidth="11" strokeLinejoin="round"/>
          <path d="M387 133L417 329H357Z" fill={white}/><path d="M318 392L287 478M455 392L489 478" stroke="currentColor" strokeWidth="21" strokeLinecap="round"/>
        </>}
      </svg>
      <span className="art-caption">{project.kicker} / {project.year ?? "ARCHIVE"}</span>
    </div>
  );
}
