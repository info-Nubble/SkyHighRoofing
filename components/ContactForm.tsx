
'use client';
import { useState } from 'react';
export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' });
  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus('sending');
    try { const res = await fetch('/api/quote', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) });
      if(!res.ok) throw new Error('failed'); setStatus('sent'); setForm({name:'',email:'',phone:'',message:''}); } catch { setStatus('error'); }
  };
  return (<form onSubmit={submit} className="grid grid-cols-1 gap-4">
    <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Your name" className="rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-ocean"/>
    <input required value={form.email} onChange={e=>setForm({...form, email:e.target.value})} type="email" placeholder="Email" className="rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-ocean"/>
    {!compact && <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="Phone (optional)" className="rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-ocean"/>}
    <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Tell us about your roof" rows={compact?3:4} className="rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-ocean"/>
    <button disabled={status==='sending'} type="submit" className="rounded-xl bg-ocean px-5 py-3 font-semibold text-white shadow hover:bg-ocean/90">{status==='sending'?'Sending...':'Send Request'}</button>
    {status==='sent' && <div className="text-sm text-green-700">Thanks! We’ll get back to you shortly.</div>}
    {status==='error' && <div className="text-sm text-red-700">Something went wrong. Please try again.</div>}
  </form>);
}
