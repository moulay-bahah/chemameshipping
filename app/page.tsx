import Image from "next/image";
import {
  Anchor,
  ArrowRight,
  Box,
  CarFront,
  Check,
  ChevronRight,
  Container,
  FileCheck2,
  Mail,
  MapPin,
  Phone,
  Route,
  ShieldCheck,
  Ship,
} from "lucide-react";
import { getSiteUrl } from "./site-url";

const phoneDisplay = "+1 (347) 671-1702";
const phoneHref = "tel:+13476711702";
const email = "Mouhidine.souvi@gmail.com";
const emailHref = "mailto:Mouhidine.souvi@gmail.com";
const facebookHref = "https://www.facebook.com/share/1FpTYprWFv/?mibextid=wwXIfr";
const instagramHref = "https://www.instagram.com/cjemame_shipping?igsh=cThyZGxrOGt1eGN6";

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H7.7v3h2.7v8h3.1Z" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const services = [
  {
    icon: CarFront,
    number: "01",
    title: "Vehicle Shipping",
    text: "Cars, SUVs, pickups and light trucks shipped from the United States to ports across Africa.",
  },
  {
    icon: Route,
    number: "02",
    title: "Mauritania Route",
    text: "Regular ocean freight service dedicated to Mauritania and neighbouring West African destinations.",
  },
  {
    icon: Container,
    number: "03",
    title: "Container & Ro-Ro",
    text: "Vehicles loaded in containers or on roll-on/roll-off vessels, depending on the destination port.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Careful Handling",
    text: "Each vehicle is secured, documented and prepared for ocean transit before departure.",
  },
];

const steps = [
  { icon: MapPin, title: "U.S. pick-up", text: "We coordinate the vehicle pick-up in the United States." },
  { icon: FileCheck2, title: "Documents & prep", text: "Your vehicle is documented and prepared for ocean transit." },
  { icon: Ship, title: "Loading & sailing", text: "We arrange Container or Ro-Ro loading and follow the shipment." },
  { icon: Anchor, title: "Destination port", text: "The vehicle arrives for delivery to the receiving party." },
];

export default async function Home() {
  const siteUrl = await getSiteUrl();
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Chemame Shipping",
    url: siteUrl.href,
    telephone: "+13476711702",
    email,
    description:
      "Vehicle ocean shipping from the United States to African ports, with dedicated service to Mauritania.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4635 Seminary Rd, Apt 304",
      addressLocality: "Alexandria",
      addressRegion: "VA",
      postalCode: "22304",
      addressCountry: "US",
    },
    areaServed: ["Africa", "Mauritania"],
    knowsAbout: ["Vehicle shipping", "Ocean freight", "Container shipping", "Ro-Ro shipping"],
    sameAs: [facebookHref, instagramHref],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Chemame Shipping home">
            <Image
              className="brand-logo"
              src="/chemame-shipping-logo-header.png"
              alt="Chemame Shipping"
              width={184}
              height={86}
              sizes="(max-width: 560px) 132px, 184px"
              preload
              unoptimized
            />
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#process">How it works</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav-social" href={instagramHref} target="_blank" rel="noreferrer" aria-label="Follow Chemame Shipping on Instagram">
            <InstagramIcon size={18} />
          </a>
          <a className="nav-call" href={phoneHref} aria-label={`Call Chemame Shipping at ${phoneDisplay}`}>
            <Phone size={17} aria-hidden="true" />
            <span>{phoneDisplay}</span>
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-heading">
          <Image
            className="hero-image"
            src="/hero-shipping.jpg"
            alt="Vehicle carrier cargo ship at a port terminal ready for ocean freight"
            fill
            loading="eager"
            sizes="100vw"
          />
          <div className="hero-overlay" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-content">
              <p className="eyebrow"><span /> Ocean freight · United States to Africa</p>
              <h1 id="hero-heading">Your vehicle.<br /><em>Across the Atlantic.</em></h1>
              <p className="hero-lead">
                Chemame Shipping handles the ocean transport of vehicles from the United States to African ports, with a dedicated service to Mauritania.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={phoneHref}>
                  <Phone size={18} aria-hidden="true" /> Call for shipping details
                </a>
                <a className="button button-ghost" href="#services">
                  Explore services <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
              <div className="hero-assurance" aria-label="Service highlights">
                <span><Check size={16} aria-hidden="true" /> Vehicle-focused freight</span>
                <span><Check size={16} aria-hidden="true" /> Container & Ro-Ro</span>
                <span><Check size={16} aria-hidden="true" /> Shipment follow-through</span>
              </div>
            </div>

            <aside className="route-card" aria-label="Featured Mauritania shipping route">
              <div className="route-card-top">
                <span className="route-icon"><Route size={24} aria-hidden="true" /></span>
                <span className="route-kicker">Dedicated service</span>
              </div>
              <h2>Mauritania route</h2>
              <div className="route-line" aria-hidden="true">
                <span>USA</span><i /><Ship size={24} /><i /><span>MR</span>
              </div>
              <dl className="route-details">
                <div><dt>Cargo</dt><dd>Cars & light vehicles</dd></div>
                <div><dt>Methods</dt><dd>Container & Ro-Ro</dd></div>
                <div><dt>Schedule</dt><dd>Regular sailings</dd></div>
              </dl>
              <a href={phoneHref}>Discuss your shipment <ChevronRight size={17} aria-hidden="true" /></a>
            </aside>
          </div>
          <div className="scroll-note" aria-hidden="true"><span /> Scroll to explore</div>
        </section>

        <section className="service-strip" aria-label="Shipping overview">
          <div className="container service-strip-inner">
            <div><strong>USA</strong><span>Origin</span></div>
            <i />
            <div><strong>Africa</strong><span>Destination region</span></div>
            <i />
            <div><strong>Mauritania</strong><span>Main destination</span></div>
            <i />
            <div><strong>Container + Ro-Ro</strong><span>Shipping methods</span></div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow dark"><span /> What we do</p>
                <h2>Vehicle shipping,<br />handled end to end.</h2>
              </div>
              <p>Focused ocean freight for vehicles traveling from the United States to ports across Africa.</p>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, number, title, text }) => (
                <article className="service-card" key={title}>
                  <div className="service-card-head">
                    <span className="service-icon"><Icon size={27} strokeWidth={1.8} aria-hidden="true" /></span>
                    <span className="service-number">{number}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="card-line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process" id="process">
          <div className="container process-grid">
            <div className="process-intro">
              <p className="eyebrow"><span /> From pick-up to port</p>
              <h2>A clear route from here to there.</h2>
              <p>
                We prepare the documentation, arrange the loading and follow each shipment until it is delivered to the receiving party.
              </p>
              <a className="text-link" href={phoneHref}>Start with a phone call <ArrowRight size={18} aria-hidden="true" /></a>
            </div>
            <ol className="steps">
              {steps.map(({ icon: Icon, title, text }, index) => (
                <li key={title}>
                  <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="step-icon"><Icon size={23} aria-hidden="true" /></span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="container about-grid">
            <div className="about-visual">
              <Image
                src="/hero-shipping.jpg"
                alt="Ocean vehicle carrier docked at a shipping terminal"
                fill
                sizes="(max-width: 900px) 100vw, 47vw"
              />
              <div className="about-badge"><Anchor size={30} aria-hidden="true" /><strong>Atlantic<br />vehicle freight</strong></div>
            </div>
            <div className="about-copy">
              <p className="eyebrow dark"><span /> About Chemame Shipping</p>
              <h2>One focus. One ocean. A world of connections.</h2>
              <p className="about-lead">
                Chemame Shipping is a vehicle shipping company operating from the United States. Our work is focused on one thing: moving cars safely across the Atlantic to Africa, with Mauritania as our main destination.
              </p>
              <p>
                From pick-up in the United States to arrival at the destination port, we prepare the documentation, arrange the loading and follow each shipment until it is delivered to the receiving party.
              </p>
              <div className="about-facts">
                <div><Ship size={21} aria-hidden="true" /><span><small>Sailings</small><strong>Regular departures</strong></span></div>
                <div><Box size={21} aria-hidden="true" /><span><small>Cargo type</small><strong>Cars & light vehicles</strong></span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-cta" id="contact">
          <div className="contact-pattern" aria-hidden="true" />
          <div className="container contact-grid">
            <div>
              <p className="eyebrow"><span /> Ready to get moving?</p>
              <h2>Let’s talk about<br />your vehicle.</h2>
            </div>
            <div className="contact-details">
              <p>Call Chemame Shipping to discuss your vehicle, destination and preferred shipping method.</p>
              <a className="contact-phone" href={phoneHref}><Phone size={22} aria-hidden="true" />{phoneDisplay}</a>
              <a className="contact-social" href={emailHref}>
                <Mail size={20} aria-hidden="true" /> {email}
              </a>
              <a className="contact-social" href={facebookHref} target="_blank" rel="noreferrer">
                <FacebookIcon /> Follow us on Facebook
              </a>
              <a className="contact-social" href={instagramHref} target="_blank" rel="noreferrer">
                <InstagramIcon /> Follow us on Instagram
              </a>
              <address><MapPin size={20} aria-hidden="true" /><span>4635 Seminary Rd, Apt 304, Alexandria, VA 22304</span></address>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand" href="#top" aria-label="Back to top">
            <span className="brand-mark" aria-hidden="true"><Anchor size={25} /></span>
            <span className="brand-copy"><strong>CHEMAME SHIPPING</strong><small>Cars to Africa & Mauritania</small></span>
          </a>
          <p>Vehicle ocean freight from the United States to Africa.</p>
          <div className="footer-links">
            <a href={phoneHref}>{phoneDisplay}</a>
            <a href={emailHref}><Mail size={18} aria-hidden="true" /> {email}</a>
            <a href={facebookHref} target="_blank" rel="noreferrer" aria-label="Chemame Shipping on Facebook"><FacebookIcon size={18} /> Facebook</a>
            <a href={instagramHref} target="_blank" rel="noreferrer" aria-label="Chemame Shipping on Instagram"><InstagramIcon size={18} /> Instagram</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Chemame Shipping. All rights reserved.</span>
          <span>4635 Seminary Rd, Apt 304, Alexandria, VA 22304</span>
        </div>
      </footer>

      <a className="mobile-call" href={phoneHref} aria-label={`Call ${phoneDisplay}`}>
        <Phone size={19} aria-hidden="true" /> Call now
      </a>
    </>
  );
}
