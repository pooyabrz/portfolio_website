"use client";
import { useMemo, useState } from "react";
import { RotateCcw, Shuffle, Activity } from "lucide-react";

const sigmoid=(x:number)=>1/(1+Math.exp(-x));
const original = [
 [0.8,-0.6,0.3,0.5],[-0.5,0.9,0.45,-0.4],
 [0.6,-0.7,0.85],[0.5,0.4,-0.65],[0.3,-0.25,0.6],[-0.4,0.7,0.45],
 [0.45,-0.8,0.6],[0.9,0.4,-0.3],[0.65,-0.6,0.55]
];
const positions=[ [{x:60,y:112},{x:60,y:262}], [{x:275,y:67},{x:275,y:167},{x:275,y:267},{x:275,y:367}], [{x:490,y:120},{x:490,y:225},{x:490,y:330}], [{x:705,y:225}] ];
function compute(input:[number,number], weights:number[][]){
 const first=[0,1,2,3].map(j=>sigmoid(input[0]*weights[0][j]+input[1]*weights[1][j]));
 const second=[0,1,2].map(j=>sigmoid(first.reduce((sum,v,i)=>sum+v*weights[2+i][j],0)-.7));
 const output=sigmoid(second.reduce((sum,v,i)=>sum+v*weights[6+i][0],0)-.65);
 return { first,second,output };
}
export function NeuralPlayground(){
 const [inputs,setInputs]=useState<[number,number]>([.75,-.25]);const [weights,setWeights]=useState<number[][]>(original);const [generation,setGeneration]=useState(0);
 const computed=useMemo(()=>compute(inputs,weights),[inputs,weights]);
 const layers=[[...inputs.map(n=>(n+1)/2)],computed.first,computed.second,[computed.output]];
 let weightsLayer=[ [weights[0],weights[1]],weights.slice(2,6),weights.slice(6,9) ];
 const edges: {from:{x:number,y:number};to:{x:number,y:number};value:number;key:string}[]=[];
 for(let l=0;l<3;l++)for(let i=0;i<positions[l].length;i++)for(let j=0;j<positions[l+1].length;j++){
  // Edge weights are stored per neuron in the source layer.
  edges.push({from:positions[l][i],to:positions[l+1][j],value:weightsLayer[l][i][j],key:`${l}-${i}-${j}`});
 }
 function randomize(){const next=original.map(row=>row.map(()=>Math.random()*2-1));setWeights(next);setGeneration(n=>n+1);}
 function reset(){setInputs([.75,-.25]);setWeights(original);setGeneration(0);}
 return <div className="lab-experiment">
  <div className="lab-canvas" role="img" aria-label={`Toy network: two inputs, four neurons in first hidden layer, three neurons in second hidden layer, one output. Current output is ${computed.output.toFixed(3)}.`}>
   <div className="lab-canvas-top"><span className="mono">EXPERIMENT 001</span><span className="live-status"><Activity size={13}/> LIVE CALCULATION</span></div>
   <svg viewBox="0 0 765 430" focusable="false" aria-hidden="true">
    {edges.map(e=><line key={e.key} x1={e.from.x} y1={e.from.y} x2={e.to.x} y2={e.to.y} stroke={e.value>=0?"#87dca3":"#f7a5a2"} strokeWidth={1.4+Math.abs(e.value)*3.5} opacity={.16+Math.abs(e.value)*.65}/>) }
    {positions.map((layer,i)=>layer.map((p,j)=><g key={`${i}-${j}`}><circle cx={p.x} cy={p.y} r={i===3?37:28} fill="var(--lab-surface)" stroke="var(--lab-stroke)" strokeWidth="2"/><circle cx={p.x} cy={p.y} r={Math.max(4, (i===3?32:23)*Math.abs(layers[i][j]))} fill="var(--accent)" opacity={.25+.65*Math.abs(layers[i][j])}/><text x={p.x} y={p.y+5} fontSize="15" textAnchor="middle" fontWeight="700" fill="var(--lab-ink)">{layers[i][j].toFixed(2)}</text></g>))}
    <g fontFamily="monospace" fontSize="13" fontWeight="700" fill="var(--lab-muted)"><text x="60" y="417" textAnchor="middle">INPUT</text><text x="275" y="417" textAnchor="middle">HIDDEN 1</text><text x="490" y="417" textAnchor="middle">HIDDEN 2</text><text x="705" y="417" textAnchor="middle">OUTPUT</text></g>
   </svg>
   <p className="lab-diagram-note">GREEN CONNECTION = POSITIVE WEIGHT <span>·</span> PINK CONNECTION = NEGATIVE WEIGHT</p>
  </div>
  <div className="lab-control-panel"><div className="lab-control-heading"><p className="eyebrow">THE CONTROL ROOM</p><h3>Make the network think<span>.</span></h3><p>Move the two inputs and watch values propagate through a tiny, fixed-weight neural network. The circles show node activations. This is an educational forward-pass visualizer — <strong>not a trained model.</strong></p></div>
   {inputs.map((val,i)=><label key={i} className="lab-slider"><span><strong>INPUT 0{i+1}</strong><output>{val.toFixed(2)}</output></span><input type="range" min="-1" max="1" step="0.05" value={val} onChange={e=>setInputs(v=>i===0?[Number(e.target.value),v[1]]:[v[0],Number(e.target.value)])}/></label>)}
   <div className="lab-output"><span>NETWORK OUTPUT</span><strong aria-live="polite">{computed.output.toFixed(3)}</strong><small>sigmoid activation · example only</small></div>
   <div className="lab-buttons"><button type="button" onClick={randomize}><Shuffle size={17}/> Randomize weights</button><button type="button" onClick={reset}><RotateCcw size={17}/> Reset</button></div><p className="lab-generation">WEIGHT CONFIGURATION / {generation===0?"DEFAULT":`RANDOMIZED #${generation}`}</p>
  </div>
 </div>;
}
