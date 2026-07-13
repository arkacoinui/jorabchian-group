import { useState } from 'react';
import headerVideo from '../assets/header.mp4';
import video1     from '../assets/video1.mp4';
import video2     from '../assets/video2.mp4';
import video3     from '../assets/video3.mp4';

/* ─── tiny sub-components ─────────────────────────────────────────────── */

const Dot = () => (
  <span style={{ width: 5, height: 5, background: '#F57C00', borderRadius: '50%', flexShrink: 0, display: 'inline-block' }} />
);

const BulletLi = ({ text }) => (
  <li style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#7db4c0', fontSize: 14 }}>
    <Dot />
    {text}
  </li>
);

const Arrow = () => (
  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
    <path d="M0 5h12M8 1l4 4-4 4" stroke="#F57C00" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlayBtn = () => (
  <div className="play-btn" style={{
    width: 60, height: 60, borderRadius: '50%', background: '#F57C00',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    position: 'relative', zIndex: 1, cursor: 'pointer',
    boxShadow: '0 0 28px rgba(245,120,0,0.4)', transition: 'transform 0.2s',
  }}>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
      <polygon points="6,3 17,10 6,17" />
    </svg>
  </div>
);

const ContactIcon = ({ children }) => (
  <div style={{
    width: 36, height: 36, background: 'rgba(245,120,0,0.12)',
    borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  }}>
    {children}
  </div>
);

/* ─── data ─────────────────────────────────────────────────────────────── */

const COLLAB_AREAS = [
  {
    title: '3D Animation',
    items: ['Industrial Animation', 'Process Animation', 'Product Animation', 'Technical Visualization', 'Manufacturing Pros'],
    videoBg: 'linear-gradient(135deg,#091722 0%,#162840 100%)',
  },
  {
    title: 'Real-Time Applications',
    items: ['Unreal Engine Applications', 'VR Experiences', 'Interactive Simulations', 'Safety Training', 'Serious Games', 'Learning Applications'],
    videoBg: 'linear-gradient(135deg,#0d1424 0%,#1a1e38 100%)',
  },
  {
    title: 'Web-Based Experiences',
    items: ['WebGL Applications', 'Three.js Experiences', 'Product Configuration', 'Interactive Product Showcases', 'Virtual Showrooms', 'Digital Sales Tools'],
    videoBg: 'linear-gradient(135deg,#0a1a18 0%,#122a25 100%)',
  },
];

const WHY_CARDS = [
  ['Flexible Production Resources', 'Scale up or down based on project requirements without overhead.'],
  ['Industry Expertise', 'Deep knowledge of industrial sectors, terminology, and visualization needs.'],
  ['Scalable Teams', 'Access to a network of specialists for any scope of production.'],
  ['Structured Workflow', 'Clear milestones, defined deliverables, and transparent communication.'],
  ['Technical Accuracy', 'Every asset is engineered to reflect real-world technical specifications.'],
  ['Collaborative Approach', 'You stay in the loop at every stage from brief to final delivery.'],
];

const MODELS = [
  {
    num: '01', title: 'Project-Based Collaboration',
    desc: 'For studios that need defined scope or fixed deliverables.',
    items: ['Fixed price per project', 'Milestone-based payments', 'Clear scope & timeline'],
  },
  {
    num: '02', title: 'Time-Based Collaboration',
    desc: 'For flexible or evolving production needs.',
    items: ['Daily / Weekly / Monthly rate', 'Suitable for ongoing development', 'Scalable resource allocation'],
  },
  {
    num: '03', title: 'Retainer / Monthly Partnership',
    desc: 'For studios that need continuous production support.',
    items: ['Fixed monthly capacity (X hrs / month)', 'Priority availability', 'Lower operational friction', 'Integrated into studio pipeline'],
  },
  {
    num: '04', title: 'Production Partnership (Hybrid Model)',
    desc: 'For complex or high-value projects.',
    items: ['Mixed model (fixed + hourly + milestone)', 'Shared responsibility in production', 'Suitable team setup from network specialists', 'Long-term collaboration potential'],
  },
];

const WORKFLOWS = [
  {
    title: '3D Animation Workflow',
    steps: ['Pre-Production', 'Asset Development', 'Animation', 'Rendering', 'Delivery'],
    tech: 'Maya, Blender, 3ds Max, Substance 3D, V-Ray, Redshift, Arnold, After Effects',
  },
  {
    title: 'Real-Time Applications Workflow',
    steps: ['Experience Design', 'Asset Preparation', 'Development', 'Testing', 'Deployment'],
    tech: 'Unreal Engine, Unity, Blueprints, C++, Git, OpenXR, Meta XR, SteamVR',
  },
  {
    title: 'Web-Based Experiences Workflow',
    steps: ['UX Design', 'Development', 'Optimization', 'Testing', 'Deployment'],
    tech: 'Three.js, WebGL, React, Next.js, TypeScript, Node.js, REST APIs',
  },
];

const INDUSTRIES = [
  ['⚙️', 'Manufacturing'],
  ['🌱', 'Renewable Energy'],
  ['🚛', 'Transportation'],
  ['🏗️', 'Industrial Equipment'],
  ['🏢', 'Construction'],
  ['🎓', 'Training'],
];

/* ─── main component ────────────────────────────────────────────────────── */

export default function JoorbachianLanding() {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [name, setName]             = useState('');
  const [email, setEmail]           = useState('');
  const [phone, setPhone]           = useState('');
  const [message, setMessage]       = useState('');
  const [submitted, setSubmitted]   = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName(''); setEmail(''); setPhone(''); setMessage('');
      }, 4000);
    }
  };

  return (
    <div style={{ background: '#071820', color: '#fff', fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── Global CSS (fonts loaded via index.html) ── */}
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; overflow-x: hidden; }
        a { text-decoration: none; }
        ul { list-style: none; padding: 0; margin: 0; }

        .nav-item:hover  { color: #F57C00 !important; }
        .btn-orange:hover{ background: #e06500 !important; transform: translateY(-1px); }
        .btn-outline:hover{ background: rgba(245,196,24,0.08) !important; }
        .play-btn:hover  { transform: scale(1.1) !important; }
        .why-card:hover  { border-color: rgba(245,120,0,0.55) !important; background: #222 !important; }
        .industry-card:hover { background: #16163a !important; border-color: rgba(245,120,0,0.35) !important; transform: translateY(-2px); }
        .btn-orange, .btn-outline, .industry-card { transition: all 0.2s ease; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── responsive overrides ── */
        @media (max-width: 768px) {
          .nav-desktop  { display: none !important; }
          .hamburger    { display: flex !important; }
          .get-in-touch-desktop { display: none !important; }
.why-grid     { grid-template-columns: repeat(2,1fr) !important; }
          .models-grid  { grid-template-columns: 1fr !important; }
          .footer-split { flex-direction: column !important; }
          .contact-left { border-radius: 12px 12px 0 0 !important; }
          .contact-right{ border-radius: 0 0 12px 12px !important; }
          .hero-title   { font-size: clamp(2.2rem, 8vw, 3.6rem) !important; }
          .about-row    { flex-direction: column !important; }
        }
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
        }
        @media (max-width: 480px) {
          .why-grid         { grid-template-columns: 1fr !important; }
          .industries-grid  { grid-template-columns: 1fr 1fr !important; }
        }

        input, textarea { box-sizing: border-box; }
      `}</style>

      {/* ════════════════════════════════════════════════════════
          NAVBAR
      ════════════════════════════════════════════════════════ */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
        background: 'rgba(5,18,28,0.96)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center',
          height: 64, padding: '0 24px', gap: 20,
        }}>
          {/* Logo */}
          <div style={{ flexShrink: 0, lineHeight: 1.1 }}>
            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 15, color: '#fff', letterSpacing: '0.4px' }}>
              Joorbachian
            </div>
            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 9, fontWeight: 500, color: '#ff683f', letterSpacing: '2.5px', textTransform: 'uppercase' }}>
              Group
            </div>
          </div>

          {/* Desktop nav links */}
          <nav className="nav-desktop" style={{ display: 'flex', gap: 28, margin: '0 auto' }}>
            {[
              ['#hero', 'Home', false],
              ['#collaboration', 'works', true],
              ['#about', 'About', false],
              ['#contact', 'Contact', false],
            ].map(([href, label, italic]) => (
              <a key={href} href={href} className="nav-item" style={{ color: '#8cb8c5', fontSize: 14, transition: 'color 0.18s', fontStyle: italic ? 'italic' : 'normal' }}>
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a href="#contact" className="btn-orange get-in-touch-desktop" style={{
            color: '#fff', padding: '9px 22px', borderRadius: 7,
            fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, fontWeight: 600,
            whiteSpace: 'nowrap', flexShrink: 0, cursor: 'pointer', backgroundColor: '#ff683f',
          }}>
            Get in touch
          </a>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(o => !o)}
            style={{
              width: 38, height: 38, border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 6, background: 'transparent', cursor: 'pointer',
              alignItems: 'center', justifyContent: 'center', flexShrink: 0, padding: 0,
            }}
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M0 1h16M0 6h16M0 11h16" stroke="#8cb8c5" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{ background: 'rgba(5,18,28,0.98)', padding: '20px 24px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[['#hero', 'Home'], ['#collaboration', 'Works'], ['#about', 'About'], ['#contact', 'Contact']].map(([href, label]) => (
                <a key={href} href={href} className="nav-item" onClick={() => setMenuOpen(false)} style={{ color: '#8cb8c5', fontSize: 16 }}>
                  {label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-orange" style={{
                background: '#F57C00', color: '#fff', padding: '13px 24px',
                borderRadius: 7, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, textAlign: 'center',
              }}>
                Get in touch
              </a>
            </div>
          </div>
        )}
      </header>

      <main>

        {/* ════════════════════════════════════════════════════════
            HERO
        ════════════════════════════════════════════════════════ */}
        <section id="hero" className="main-header" style={{
          position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center',
          background: '#061018',
          paddingTop: 64, overflow: 'hidden',
        }}>
          {/* ── Background video ── */}
          <video className="header-video" autoPlay loop muted playsInline>
            <source src={headerVideo} type="video/mp4" />
          </video>

          {/* Dark gradient scrim so text stays readable over video */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
            background: 'linear-gradient(150deg,rgba(6,16,24,0.82) 0%,rgba(10,28,40,0.76) 45%,rgba(13,31,48,0.72) 100%)',
          }} />

          {/* Grid overlay */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.032) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.032) 1px,transparent 1px)',
            backgroundSize: '56px 56px',
          }} />
          {/* Glows */}
          <div style={{ position: 'absolute', top: '15%', right: '8%', width: '45vw', height: '60vh', zIndex: 2, background: 'radial-gradient(ellipse,rgba(14,55,80,0.55) 0%,transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 0, left: '-5%', width: '35vw', height: '45vh', zIndex: 2, background: 'radial-gradient(ellipse,rgba(28,15,48,0.45) 0%,transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 3, maxWidth: 1200, margin: '0 auto', padding: '80px 28px', animation: 'fadeUp 0.8s ease both' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(245,120,0,0.1)', border: '1px solid rgba(245,120,0,0.22)',
              borderRadius: 100, padding: '6px 16px', marginBottom: 32,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F57C00', display: 'inline-block' }} />
              <span style={{ fontSize: 11, color: '#F5A855', fontWeight: 500, letterSpacing: '1.2px', textTransform: 'uppercase' }}>
                Available for projects
              </span>
            </div>

            <h1 className="hero-title" style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: 'clamp(2.4rem,5.5vw,4.8rem)', fontWeight: 700, lineHeight: 1.08,
              margin: '0 0 28px', letterSpacing: '-0.5px', maxWidth: 720,
            }}>
              <span style={{ color: '#F5C418', fontStyle: 'italic' }}>Production partner</span><br />
              <span style={{ color: '#fff' }}>for Industrial Visualization<br />&amp; Interactive Solutions</span>
            </h1>

            <p style={{ color: '#6fa0b2', fontSize: 'clamp(14px,1.5vw,17px)', lineHeight: 1.7, margin: '0 0 44px', maxWidth: 500 }}>
              Industrial-grade 3D animation, real-time Unreal Engine applications, and interactive web experiences — built for technical industries.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#collaboration" className="btn-orange" style={{
                color: '#fff', padding: '14px 32px', borderRadius: 8,
                fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 15,
                display: 'inline-block', cursor: 'pointer', backgroundColor: '#ff683f',
              }}>
                Explore my work
              </a>
              <a href="#contact" className="btn-outline" style={{
                color: '#F5C418', border: '1px solid rgba(245,196,24,0.3)',
                padding: '14px 32px', borderRadius: 8,
                fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 15,
                display: 'inline-block', cursor: 'pointer',
              }}>
                Get in touch
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <span style={{ color: '#2c5a6a', fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
            <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
              <rect x="1" y="1" width="12" height="18" rx="6" stroke="#2c5a6a" strokeWidth="1.2" />
              <rect x="5.5" y="4" width="3" height="5" rx="1.5" fill="#2c5a6a" />
            </svg>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            ABOUT ME
        ════════════════════════════════════════════════════════ */}
        <section id="about" style={{ padding: '80px 28px', backgroundColor: '#45848d' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div className="about-row" style={{ display: 'flex', gap: 60, flexWrap: 'wrap', alignItems: 'flex-start' }}>
              <div style={{ flex: 1, minWidth: 280 }}>
                <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 30, fontWeight: 700, color: '#030303', margin: '0 0 6px' }}>
                  About me
                </h2>
                <p style={{ color: '#000', fontWeight: 500, fontSize: 16, margin: '0 0 22px' }}>Hi, I'm Ali Joorbachian.</p>
                <p style={{ color: '#000', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                  I specialize in industrial visualization, interactive experiences, and real-time content production. I collaborate with animation studios, VR developers, Unreal Engine teams, and interactive production specialists to deliver industrial visualization, training, and product experience projects.
                </p>
              </div>
              <div style={{ flex: 1, minWidth: 280, display: 'flex', flexDirection: 'column', gap: 28 }}>
                <p style={{ color: '#000', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                  I collaborate with animation studios, VR developers, Unreal Engine teams, and interactive production specialists to deliver industrial visualization, training, and product experience projects.
                </p>
                <div>
                  <a href="#" className="btn-orange" style={{
                    color: '#fff', padding: '13px 28px', borderRadius: 7,
                    fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 14,
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    cursor: 'pointer', backgroundColor: '#ff683f',
                  }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <polygon points="3,2 13,7 3,12" fill="#fff" />
                    </svg>
                    Introduction video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            AREAS OF COLLABORATION
        ════════════════════════════════════════════════════════ */}
        <section id="collaboration" className="areas-of-collaboration">
          <div className="aoc-inner">
            <h2 className="aoc-heading">Areas of Collaboration</h2>

            <div className="aoc-grid">
              {COLLAB_AREAS.map((area, i) => (
                <div key={area.title} className="aoc-card">
                  {/* Video */}
                  <div className="aoc-video-wrap">
                    <video autoPlay loop muted playsInline>
                      <source src={[video1, video2, video3][i]} type="video/mp4" />
                    </video>
                  </div>

                  {/* Text body */}
                  <div className="aoc-body">
                    <h3 className="aoc-title">{area.title}</h3>
                    <ul className="aoc-list">
                      {area.items.map(item => <BulletLi key={item} text={item} />)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            WHY WORK WITH ME
        ════════════════════════════════════════════════════════ */}
        <section id="why" style={{ padding: '80px 28px', backgroundColor: '#1a2730' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 28, fontWeight: 600, textAlign: 'center', color: '#fff', margin: '0 0 48px' }}>
              Why work with me
            </h2>
            <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
              {WHY_CARDS.map(([title, desc]) => (
                <div key={title} className="why-card" style={{
                  border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10,
                  padding: '24px 28px', cursor: 'default', transition: 'all 0.2s',
                }}>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 8 }}>{title}</div>
                  <div style={{ fontSize: 13, color: '#5a8898', lineHeight: 1.5 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            COLLABORATION MODELS
        ════════════════════════════════════════════════════════ */}
        <section id="models" style={{ padding: '80px 28px', backgroundColor: '#48494b' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 28, fontWeight: 700, textAlign: 'center', color: '#fff', margin: '0 0 48px' }}>
              COLLABORATION MODELS
            </h3>
            <div className="models-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              {MODELS.map(({ num, title, desc, items }) => (
                <div key={num} style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '32px 36px' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: '#F57C00', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 10 }}>{num}</div>
                  <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 17, fontWeight: 700, color: '#fff', margin: '0 0 10px' }}>{title}</h4>
                  <p style={{ color: '#5a8898', fontSize: 13, margin: '0 0 14px', lineHeight: 1.6 }}>{desc}</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {items.map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, color: '#7db4c0', fontSize: 13 }}>
                        <span style={{ color: '#F57C00', marginTop: 1 }}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            HOW PROJECTS MOVE FORWARD
        ════════════════════════════════════════════════════════ */}
        <section id="workflow" style={{ padding: '80px 28px', backgroundColor: '#1a2d31' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 28, fontWeight: 600, textAlign: 'center', color: '#fff', margin: '0 0 52px' }}>
              How Projects Move Forward
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {WORKFLOWS.map(({ title, steps, tech }) => (
                <div key={title} style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '32px 36px', backgroundColor: '#1a2d31' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <polygon points="2,2 14,8 2,14" fill="#F57C00" />
                    </svg>
                    <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 17, fontWeight: 700, color: '#fff', margin: 0 }}>{title}</h4>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
                    {steps.map((step, idx) => (
                      <span key={step} style={{ display: 'contents' }}>
                        <span style={{ background: '#1e1e1e', border: '1px solid rgba(255,255,255,0.08)', padding: '6px 14px', borderRadius: 100, fontSize: 12, color: '#7db4c0', whiteSpace: 'nowrap' }}>
                          {step}
                        </span>
                        {idx < steps.length - 1 && <Arrow />}
                      </span>
                    ))}
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
                    <span style={{ fontSize: 11, color: '#F57C00', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginRight: 12 }}>Technologies</span>
                    <span style={{ fontSize: 13, color: '#5a8898' }}>{tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            INDUSTRIES
        ════════════════════════════════════════════════════════ */}
        <section id="industries" style={{ padding: '80px 28px', backgroundColor: '#1a1e31' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 28, fontWeight: 600, textAlign: 'center', color: '#fff', margin: '0 0 48px' }}>
              Industries Section
            </h2>
            <div className="industries-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
              {INDUSTRIES.map(([icon, label]) => (
                <div key={label} className="industry-card" style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '28px 32px', cursor: 'default', transition: 'all 0.2s ease' }}>
                  <div style={{ fontSize: 22, marginBottom: 12 }}>{icon}</div>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 16, fontWeight: 600, color: '#fff' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            CTA BANNER
        ════════════════════════════════════════════════════════ */}
        <section style={{
          padding: '40px 28px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          backgroundColor: '#000',
        }}>
          <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: '#cec414', fontSize: 14, lineHeight: 1.8, margin: 0 }}>
              For the detailed overview of our production workflow, sample timeline and pricing structures, please{' '}
              <span style={{ color: '#F5C418' }}>contact me via Email / Whatsapp / Google Meet</span>
              {' '}to receive the{' '}
              <span style={{ color: '#F5C418', textDecoration: 'underline', cursor: 'pointer' }}>full production brief (PDF)</span>
              {' '}or discussing your concerns face to face.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            CONTACT
        ════════════════════════════════════════════════════════ */}
        <section id="contact" style={{ padding: '80px 28px', backgroundColor: '#1a1e31' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="footer-split" style={{ display: 'flex', borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>

              {/* ── Left: contact info ── */}
              <div className="contact-left" style={{ flex: 1, padding: '52px 48px', minWidth: 280, backgroundColor: '#1a1e31' }}>
                <p style={{ fontSize: 11, color: '#F57C00', fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', margin: '0 0 12px' }}>
                  Let's talk
                </p>
                <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 34, fontWeight: 700, color: '#F57C00', margin: '0 0 12px', lineHeight: 1.1 }}>
                  Get in touch!
                </h2>
                <p style={{ color: '#5a8898', fontSize: 14, margin: '0 0 40px', lineHeight: 1.65 }}>
                  Looking for a production partner for animation, VR, Unreal Engine, or WebGL projects?
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                  {/* Email */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <ContactIcon>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 3h10c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1z" stroke="#F57C00" strokeWidth="1.3" />
                        <path d="M2 4l6 5 6-5" stroke="#F57C00" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </ContactIcon>
                    <div>
                      <div style={{ fontSize: 11, color: '#3a6a78', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 3 }}>Email</div>
                      <div style={{ color: '#c8dde4', fontSize: 14 }}>Ali@Joorbachian.com</div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <ContactIcon>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3.5 2h2.2l1 2.5L5.5 5.7a8 8 0 004.8 4.8l1.2-1.2 2.5 1V12.5A1.5 1.5 0 0112.5 14C6.7 14 2 9.3 2 3.5A1.5 1.5 0 013.5 2z" stroke="#F57C00" strokeWidth="1.3" strokeLinejoin="round" />
                      </svg>
                    </ContactIcon>
                    <div>
                      <div style={{ fontSize: 11, color: '#3a6a78', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 3 }}>Whatsapp</div>
                      <div style={{ color: '#c8dde4', fontSize: 14 }}>+0090 9651980</div>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <ContactIcon>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="2" y="2" width="12" height="12" rx="2" stroke="#F57C00" strokeWidth="1.3" />
                        <path d="M5 7v4M5 5v.5M8 11V8c0-1.1.9-2 2-2h.5" stroke="#F57C00" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </ContactIcon>
                    <div>
                      <div style={{ fontSize: 11, color: '#3a6a78', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 3 }}>LinkedIn</div>
                      <div style={{ color: '#c8dde4', fontSize: 14 }}>@ali-Joorbachian2</div>
                    </div>
                  </div>

                  {/* Location */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <ContactIcon>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2a4 4 0 000 8c2.2 0 4-1.8 4-4S10.2 2 8 2z" stroke="#F57C00" strokeWidth="1.3" />
                        <path d="M4 10.5C2.8 11.4 2 12.6 2 14h12c0-1.4-.8-2.6-2-3.5" stroke="#F57C00" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </ContactIcon>
                    <div>
                      <div style={{ fontSize: 11, color: '#3a6a78', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 3 }}>Location</div>
                      <div style={{ color: '#c8dde4', fontSize: 14 }}>Istanbul, Turkey</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Right: form ── */}
              <div className="contact-right" style={{ flex: 1.2, background: '#fff', padding: '52px 48px', minWidth: 280 }}>
                {submitted ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 16, textAlign: 'center' }}>
                    <div style={{ width: 56, height: 56, background: '#F57C00', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12l5 5 9-9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 20, color: '#1a1a1a', margin: 0 }}>Message Sent!</h3>
                    <p style={{ color: '#6a8a98', fontSize: 14, margin: 0 }}>I'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    {/* Name */}
                    <div>
                      <label style={labelStyle}>Name</label>
                      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your full name" required style={inputStyle} />
                    </div>

                    {/* Email + Phone */}
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" required style={{ ...inputStyle, marginBottom: 8 }} />
                      <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="phone number" style={inputStyle} />
                    </div>

                    {/* Message */}
                    <div>
                      <label style={labelStyle}>Message</label>
                      <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Tell me about your project..." required rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
                    </div>

                    <button type="submit" className="btn-orange" style={{
                      background: '#F57C00', color: '#fff', padding: '14px 28px', borderRadius: 8,
                      fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 15,
                      border: 'none', cursor: 'pointer', width: '100%',
                    }}>
                      Send Message
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* ════════════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════════════ */}
      <footer style={{ background: '#050e14', padding: '20px 28px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p style={{ color: '#3a5a68', fontSize: 13, margin: 0 }}>
          © 2014 – 2024 All rights reserved. Content's copyright by Ali Joorbachian
        </p>
      </footer>

    </div>
  );
}

/* ── shared form styles ─────────────────────────────────────────────────── */
const labelStyle = {
  display: 'block', fontSize: 12, fontWeight: 600, color: '#3a5a68',
  letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: 6,
};

const inputStyle = {
  width: '100%', padding: '12px 16px',
  border: '1.5px solid #e0eaee', borderRadius: 8,
  fontSize: 14, color: '#1a1a1a', outline: 'none',
  fontFamily: "'DM Sans', sans-serif", background: '#f8fbfc',
  display: 'block',
};
