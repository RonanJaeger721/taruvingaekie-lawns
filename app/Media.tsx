"use client";
import Image from "next/image";
import { useState } from "react";

export function FarmHeroMedia() {
  const [playing, setPlaying] = useState(false);
  return <>
    <Image className="hero-photo" src="/media/ekie/durban-field-upscaled.webp" alt="Ekie Gardens lawn growing in the field" fill sizes="100vw" quality={60} priority />
    {playing && <video autoPlay controls muted loop playsInline preload="none" aria-label="Ekie Gardens farm video"><source src="/media/taruvingaekie-field.mp4" type="video/mp4" /></video>}
    <button className="video-choice" type="button" aria-pressed={playing} onClick={() => setPlaying(!playing)}>{playing ? "Close farm video ×" : "Watch the farm video · 6 MB ▶"}</button>
  </>;
}

export function LawnPhoto({src,alt}: {src:string;alt:string}) {
  const landscape = src.includes("bulk-delivery") || src.includes("lawn-texture");
  return <Image src={src} alt={alt} width={landscape ? 1448 : 948} height={landscape ? 1086 : 1660} sizes="(max-width: 800px) 100vw, 50vw" quality={60} loading="lazy" />;
}

export function FarmMap() {
  const [loaded,setLoaded] = useState(false);
  const address="Plot 10 Amalinda Farm, Harare, Zimbabwe";
  return <div className="map-on-request">{loaded ? <iframe title="Google Maps search for Plot 10 Amalinda Farm, Harare" src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`} referrerPolicy="no-referrer-when-downgrade" /> : <div className="map-placeholder"><span>FARM COLLECTION / HARARE</span><h3>Plot 10<br/>Amalinda Farm</h3><p>Load the interactive map when you need it.</p><button type="button" className="solid-button" onClick={()=>setLoaded(true)}>Load Google Maps <span>↗</span></button></div>}</div>;
}
