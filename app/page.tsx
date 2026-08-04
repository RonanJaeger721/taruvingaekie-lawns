"use client";

import { useEffect, useState } from "react";

const phoneDisplay = "077 271 1588";
const phoneLink = "263772711588";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting)),
      { threshold: 0.13 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="nav-shell">
        <a className="brand" href="#top" aria-label="Taruvingaekie home" onClick={closeMenu}>
          <span className="brand-mark"><i /><i /><i /></span>
          <span>TARUVINGAEKIE<small>LAWNS & LANDSCAPES</small></span>
        </a>
        <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
          <a href="#story" onClick={closeMenu}>Our story</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>The field</a>
          <a className="nav-cta" href={`https://wa.me/${phoneLink}`} target="_blank" rel="noreferrer">Get a quote</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <video autoPlay muted loop playsInline poster="/media/open-field.jpeg" aria-label="A Taruvingaekie lawn field">
          <source src="/media/taruvingaekie-field.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="hero-grid" />
        <div className="hero-copy">
          <p className="eyebrow hero-in">Grown with care · Laid with precision</p>
          <h1 className="hero-in delay-1">Grounds worth<br /><em>looking after.</em></h1>
          <div className="hero-bottom hero-in delay-2">
            <p>Premium lawn supply, installation and care for homes, businesses and ambitious outdoor spaces.</p>
            <a href={`https://wa.me/${phoneLink}?text=Hello%20Taruvingaekie%2C%20I%20would%20like%20a%20lawn%20quote.`} target="_blank" rel="noreferrer" className="circle-link" aria-label="Request a quote on WhatsApp"><span>Start a<br />project</span><b>↗</b></a>
          </div>
        </div>
        <div className="scroll-cue"><span /> Scroll to grow</div>
      </section>

      <section className="intro" id="story">
        <div className="section-number" data-reveal>01 — Rooted here</div>
        <div className="intro-copy" data-reveal>
          <p className="kicker">A better lawn starts beneath the surface.</p>
          <h2>We don’t just roll out grass.<br />We create <em>living ground.</em></h2>
        </div>
        <div className="intro-foot" data-reveal>
          <p>From field-grown lawn to a clean final cut, we bring patience, practical knowledge and a sharp eye to every metre.</p>
          <div className="stat"><strong>100%</strong><span>Real, field-grown<br />natural lawn</span></div>
        </div>
      </section>

      <section className="field-story" id="work">
        <div className="field-image" data-reveal>
          <img src="/media/tractor-field.jpeg" alt="Taruvingaekie tractor maintaining a green lawn field" />
          <div className="survey-line"><span>FIELD / 001</span></div>
        </div>
        <div className="field-copy" data-reveal>
          <span className="section-number light">02 — From our field</span>
          <h2>Raised under open skies.</h2>
          <p>Healthy lawn is cultivated, cut and prepared by people who understand the ground. The result is dense, resilient grass ready to transform your space.</p>
          <a href={`tel:+${phoneLink}`} className="text-link">Talk to our team <span>↗</span></a>
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-head" data-reveal>
          <div className="section-number">03 — What we do</div>
          <h2>From bare earth<br />to <em>beautifully green.</em></h2>
        </div>
        <div className="service-list">
          {[
            ["01", "Lawn supply", "Fresh, field-grown grass prepared for homes, commercial grounds and landscape projects."],
            ["02", "Professional installation", "Ground preparation, measured laying and clean finishing for a lawn that settles properly."],
            ["03", "Lawn care & maintenance", "Practical upkeep that protects colour, density and the long-term health of your lawn."],
            ["04", "Large-area mowing", "Efficient tractor mowing for broad grounds, estates, institutions and open landscapes."],
          ].map(([n, title, copy]) => (
            <article className="service-row" data-reveal key={n}>
              <span>{n}</span><h3>{title}</h3><p>{copy}</p><b>↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="process">
        <div className="process-photo" data-reveal><img src="/media/harvesting-lawn.jpeg" alt="Team harvesting fresh lawn rolls from the field" /></div>
        <div className="process-copy" data-reveal>
          <span className="section-number light">04 — The process</span>
          <h2>Cut today.<br />Green tomorrow.</h2>
          <ol>
            <li><span>01</span><div><b>Tell us about your space</b><p>Share your measurements, location and what you want the ground to become.</p></div></li>
            <li><span>02</span><div><b>We prepare the right lawn</b><p>Fresh turf is selected and cut from our field for your project.</p></div></li>
            <li><span>03</span><div><b>We install and hand over</b><p>Your lawn is laid with care, finished neatly and ready for its first chapter.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="gallery">
        <figure data-reveal><img src="/media/open-field.jpeg" alt="Wide healthy green lawn field" /><figcaption>Open field / Healthy growth</figcaption></figure>
        <div className="gallery-word" data-reveal>GROWN<br /><em>RIGHT.</em></div>
        <figure data-reveal><img src="/media/grass-detail.jpeg" alt="Close-up texture of dense green grass" /><figcaption>Natural texture / Dense finish</figcaption></figure>
      </section>

      <section className="contact" id="contact">
        <img src="/media/lawn-texture.jpeg" alt="" />
        <div className="contact-overlay" />
        <div className="contact-copy" data-reveal>
          <p>Ready when you are.</p>
          <h2>Let’s give your<br />ground a <em>future.</em></h2>
          <a href={`https://wa.me/${phoneLink}?text=Hello%20Taruvingaekie%2C%20I%20would%20like%20a%20lawn%20quote.`} target="_blank" rel="noreferrer">Request a quote <span>↗</span></a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">TARUVINGAEKIE<small>Lawns & Landscapes</small></div>
        <div><span>Call or WhatsApp</span><a href={`tel:+${phoneLink}`}>{phoneDisplay}</a></div>
        <div><span>Explore</span><a href="#story">Our story</a><a href="#services">Services</a><a href="#work">Our field</a></div>
        <p>© 2026 Taruvingaekie. Grounded in quality.</p>
      </footer>
    </main>
  );
}
