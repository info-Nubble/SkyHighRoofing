
'use client';
import { useRef, useState, useEffect } from 'react';

export default function BeforeAfter({ before, after, caption }:{ before:string; after:string; caption?:string }) {
  const wrapper = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  useEffect(()=>{
    const onMove = (e:MouseEvent)=>{
      if(!wrapper.current) return;
      const rect = wrapper.current.getBoundingClientRect();
      const x = Math.min(Math.max(0, e.clientX - rect.left), rect.width);
      setPos(Math.round((x/rect.width)*100));
    };
    const el = wrapper.current;
    el?.addEventListener('mousemove', onMove);
    return ()=>el?.removeEventListener('mousemove', onMove);
  },[]);
  return (
    <figure className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-soft">
      <div ref={wrapper} className="relative w-full h-full select-none">
        {/* eslint-disable @next/next/no-img-element */}
        <img src={after} alt="After" className="w-full h-auto block" />
        <img src={before} alt="Before" className="absolute inset-0 h-full w-full object-cover" style={{ clipPath: `inset(0 ${100-pos}% 0 0)` }}/>
        <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
          <div className="h-full w-0.5 bg-white/80 shadow" />
          <div className="absolute top-1/2 -translate-y-1/2 -ml-5 bg-white/90 border border-neutral-200 rounded-full px-3 py-1 text-xs shadow">Drag</div>
        </div>
      </div>
      {caption && <figcaption className="p-3 text-sm text-neutral-700">{caption}</figcaption>}
    </figure>
  );
}
