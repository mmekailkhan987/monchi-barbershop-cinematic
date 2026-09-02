import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight, CalendarDays, ChevronRight, Clock3, MapPin, Menu, Phone, Star, X } from "lucide-react";

/**
 * Chrome & Cut page system: asymmetrical editorial composition, smoked-black
 * surfaces, bone typography, brass-orange interactions, and camera-like motion.
 */

const reviews = [
  { quote: "Great prices, excellent service and wonderful employees.", source: "Google review highlight" },
  { quote: "Great place , great music , great vibes !", source: "Google review highlight" },
  { quote: "Large waiting area and the scheduling is well organized.", source: "Google review highlight" },
];

const hours = [
  ["Sunday", "Closed"], ["Monday", "9:00 AM – 7:00 PM"], ["Tuesday", "9:00 AM – 7:00 PM"],
  ["Wednesday", "9:00 AM – 7:00 PM"], ["Thursday", "9:00 AM – 7:00 PM"], ["Friday", "8:00 AM – 8:00 PM"], ["Saturday", "6:40 AM – 5:30 PM"],
];

function useParallax() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setOffset(Math.min(window.scrollY, 900)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); };
  }, []);
  return offset;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const scroll = useParallax();
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const items = revealRef.current?.querySelectorAll("[data-reveal]");
    if (!items) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }), { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={`loader ${loading ? "loader-visible" : "loader-hidden"}`} aria-hidden={!loading}><img src="/manus-storage/monchi-mark_c0628db7.png" alt="" /><span>MONCHI / ELIZABETH</span></div>
    <main ref={revealRef} className="site-shell">
      <div className="grain" aria-hidden="true" />
      <div className="side-rail"><span>MONCHI</span><span>ELIZABETH · NJ</span><span className="rail-dot" /></div>

      <header className="topbar">
        <a className="brand" href="#top" aria-label="Monchi Barbershop home"><span className="brand-mark"><img src="/manus-storage/monchi-mark_c0628db7.png" alt="" /></span><span className="brand-wordmark">MONCHI<span className="brand-slash">/</span></span></a>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#story" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="#visit" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-cta" href="tel:+19083163431"><Phone size={14} /> Call the shop</a>
        </nav>
        <button className="menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </header>

      <section id="top" className="hero">
        <div className="hero-image" style={{ transform: `translate3d(0, ${scroll * 0.12}px, 0)` }} />
        <div className="hero-image-wash" />
        <div className="hero-light" style={{ transform: `translate3d(${scroll * 0.08}px, ${scroll * 0.03}px, 0)` }} />
        <div className="hero-content">
          <p className="eyebrow reveal-line">ELIZABETH, NEW JERSEY <span className="eyebrow-rule" /></p>
          <h1 className="hero-title"><span className="reveal-line">Sharp <em>looks.</em></span><span className="reveal-line delay-1">Good energy.</span></h1>
          <p className="hero-deck reveal-line delay-2">A neighborhood barbershop with a clean point of view, a welcoming chair, and the attention to detail that makes the difference.</p>
          <div className="hero-actions reveal-line delay-3"><a className="button button-primary" href="#visit">Take the next chair <ArrowUpRight size={17} /></a><a className="text-link" href="#story">Step inside <ArrowDownRight size={16} /></a></div>
        </div>
        <div className="hero-meta"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
        <div className="hero-index">01 <span>/</span> 04</div>
      </section>

      <section id="story" className="story section-pad">
        <div className="section-kicker" data-reveal><span>01</span><span>THE SHOP</span></div>
        <div className="story-grid">
          <div className="story-heading" data-reveal><p className="eyebrow">THE MONCHI STANDARD</p><h2>A better<br /><i>kind</i> of<br />usual.</h2></div>
          <div className="story-copy" data-reveal><p className="large-copy">Monchi is built around the essentials: a precise cut, a clean space, and a crew that makes you feel like you’ve been coming here for years.</p><p>From the first hello to the final mirror check, the experience stays personal. Skilled barbers, an organized schedule, and a friendly, bilingual atmosphere make room for the details that count.</p><a className="text-link" href="#services">See the craft <ArrowDownRight size={16} /></a></div>
          <div className="story-photo parallax-photo" data-reveal style={{ transform: `translate3d(0, ${scroll * -0.045}px, 0)` }}><img src="/manus-storage/monchi-interior_abb99e02.jpg" alt="Warm, clean Monchi Barbershop interior" /><span className="photo-caption">A clean canvas for a fresh start.</span></div>
        </div>
      </section>

      <section id="services" className="services section-pad">
        <div className="section-kicker light" data-reveal><span>02</span><span>THE CRAFT</span></div>
        <div className="services-intro" data-reveal><p className="eyebrow">YOUR LOOK, SHARPENED</p><h2>Leave with<br /><i>something</i><br />to say.</h2><p className="services-note">Come in for the cut you already know. Leave with the one you didn’t know you needed.</p></div>
        <div className="service-list" data-reveal>
          {[['01', 'Barbers', 'Skilled grooming in a relaxed, welcoming shop.'], ['02', 'Hair stylists', 'Personal attention and a clean point of view.'], ['03', "Men's hair salon", 'A reliable place for your next cut in Elizabeth.']].map(([n, title, desc]) => <div className="service-row" key={n}><span className="service-number">{n}</span><h3>{title}</h3><p>{desc}</p><ChevronRight size={21} /></div>)}
        </div>
      </section>

      <section id="gallery" className="gallery section-pad"><div className="section-kicker" data-reveal><span>03</span><span>THE ROOM</span></div><div className="gallery-head" data-reveal><p className="eyebrow">A LOOK INSIDE</p><h2>Made for<br /><i>the moment.</i></h2><p>Clean lines, warm light, and the quiet ritual of getting ready to meet the day.</p></div><div className="gallery-grid" data-reveal><figure className="gallery-tall"><img loading="lazy" src="/manus-storage/monchi-detail_42331c6f.jpg" alt="Close-up of barber tools and a fresh cut" /><figcaption>Precision in the details.</figcaption></figure><figure><img loading="lazy" src="/manus-storage/monchi-interior_abb99e02.jpg" alt="Monchi Barbershop interior" /><figcaption>A welcoming chair, every time.</figcaption></figure></div></section>

      <section id="reviews" className="quote-section section-pad"><div className="quote-orbit" aria-hidden="true" /><div className="quote-head" data-reveal><p className="eyebrow">WHAT PEOPLE SAY</p><span className="rating"><Star size={15} fill="currentColor" /> 4.7 <small>· 178 reviews</small></span></div><div className="quote-list">{reviews.map((review, i) => <blockquote key={review.quote} data-reveal style={{ transitionDelay: `${i * 70}ms` }}><span className="quote-mark">“</span><p>{review.quote}</p><cite>{review.source}</cite></blockquote>)}</div></section>

      <section id="visit" className="visit section-pad"><div className="section-kicker" data-reveal><span>03</span><span>THE VISIT</span></div><div className="visit-grid"><div data-reveal><p className="eyebrow">FIND YOUR WAY IN</p><h2>Make the<br /><i>turn.</i></h2><a className="address-link" href="https://www.google.com/maps/dir/?api=1&destination=220+Rahway+Ave%2C+Elizabeth%2C+NJ+07202" target="_blank" rel="noreferrer"><MapPin size={18} /><span>220 Rahway Ave<br />Elizabeth, NJ 07202</span><ArrowUpRight size={18} /></a><a className="phone-link" href="tel:+19083163431"><Phone size={17} /> +1 908-316-3431</a></div><div className="hours-panel" data-reveal><div className="hours-title"><Clock3 size={17} /><span>HOURS</span><span className="open-now">OPEN TODAY</span></div>{hours.map(([day, time]) => <div className="hours-row" key={day}><span>{day}</span><span>{time}</span></div>)}</div></div></section>

      <section className="final-cta"><div className="final-image" style={{ transform: `translate3d(0, ${scroll * -0.06}px, 0)` }} /><div className="final-overlay" /><div className="final-copy" data-reveal><p className="eyebrow">READY WHEN YOU ARE</p><h2>Good hair<br /><i>changes</i> the day.</h2><a className="button button-primary" href="tel:+19083163431"><CalendarDays size={17} /> Book online / call</a></div></section>

      <footer className="footer"><div className="footer-brand"><span className="brand-mark"><img src="/manus-storage/monchi-mark_c0628db7.png" alt="" /></span><strong className="brand-wordmark">MONCHI<span>/</span></strong><p>Sharp looks. Good energy.<br />Elizabeth, New Jersey.</p></div><div className="footer-links"><a href="#story">The shop</a><a href="#services">Services</a><a href="#visit">Visit</a></div><div className="footer-note">© {new Date().getFullYear()} Monchi Barbershop LLC<br /><a href="tel:+19083163431">+1 908-316-3431</a></div>      </footer>
    </main>
    </>);
}
