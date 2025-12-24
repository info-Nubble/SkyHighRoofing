
'use client';
import { CheckCircle, Hammer, Home, Layers, Mail, MapPin, Phone, Shield, Star, Wrench } from 'lucide-react';
import ContactForm from './ContactForm';
import { useEffect, useRef } from 'react';

const BUSINESS_NAME = 'Sky High Roofing & General Contracting';
const REGION = 'Maine Seacoast';
const PHONE = '+1 (207) 451-3163';
const PHONE_RAW = '+12074513163';
const ADDRESS = '3 Smalls Way, York, ME 03909';

export function Hero() {
  const layerRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const onMove = (e:MouseEvent)=>{
      const el = layerRef.current; if(!el) return;
      const amtX = (e.clientX / window.innerWidth - .5) * 6;
      const amtY = (e.clientY / window.innerHeight - .5) * 6;
      el.style.transform = `translate(${amtX}px, ${amtY}px)`;
    };
    window.addEventListener('mousemove', onMove);
    return ()=>window.removeEventListener('mousemove', onMove);
  },[]);

  return (
    <section id="top" className="relative isolate overflow-hidden text-white">
      <div className="hero-wrap">
        <div ref={layerRef} className="hero-shimmer animate-shimmer" />
        <div className="container">
          <div className="grid min-h-[60vh] grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/80">{REGION} • Residential & Light Commercial</p>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">High‑quality roofing, done right the first time.</h1>
              <p className="mt-4 max-w-xl text-white/85">From storm‑tight shingle replacements to leak repairs and full tear‑offs, {BUSINESS_NAME} protects Seacoast homes with craftsmanship you can trust.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:${PHONE_RAW}`} className="btn btn-primary bg-teal text-navy hover:bg-teal/90">
                  <Phone className="h-5 w-5" /> Call {PHONE.replace('+1 ', '')}
                </a>
                <a href="/#contact" className="btn btn-ghost">
                  <Mail className="h-5 w-5" /> Request a Free Estimate
                </a>
              </div>
              <ul className="mt-6 grid max-w-lg grid-cols-1 gap-2 text-sm text-white/85 md:grid-cols-2">
                {['Licensed & insured','CertainTeed shingle expertise','Ice & water shield'].map((t) => (
                  <li className="flex items-center gap-2" key={t}><CheckCircle className="h-4 w-4" /> {t}</li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 shadow-soft">
                <div className="h-full w-full bg-[url('/hero.jpg')] bg-cover bg-center" />
              </div>
              <div className="badge absolute -right-3 -top-3">Family‑run • Local pros</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wave absolute inset-x-0 bottom-0 h-24 md:h-32" />
    </section>
  );
}
