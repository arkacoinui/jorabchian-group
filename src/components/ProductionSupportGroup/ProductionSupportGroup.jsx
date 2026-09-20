import React, { useMemo, useState } from 'react';
import './ProductionSupportGroup.css';
import PlaceholderImage from './PlaceholderImage';
import VideoModal from './VideoModal';
import {
  ActivityIcon,
  CheckIcon,
  CircuitLinkIcon,
  ClockIcon,
  CodeIcon,
  CpuIcon,
  CubeIcon,
  DiagonalLinkIcon,
  DropletIcon,
  GearIcon,
  GlobeIcon,
  LayersIcon,
  MailIcon,
  MonitorIcon,
  PhotoIcon,
  PinIcon,
  PlayTriangleIcon,
  RenderIcon,
  RigIcon,
  RingsIcon,
  ShieldIcon,
  ShieldXIcon,
  SlidersIcon,
  TargetIcon,
  UsersIcon,
  WindowBarIcon,
} from './icons';

import heroCollage from '../../assets/images/Baner 1.jpg';
import avatarPhoto from '../../assets/images/avatar-photo.jpg';
import cap3dImg from '../../assets/images/cap-3d.jpg';
import capUnrealImg from '../../assets/images/cap-unreal.jpg';
import capWebglImg from '../../assets/images/cap-webgl.jpg';

import foodProcessingThumb from '../../assets/images/work-thumbs/food-processing.jpg';
import renewableEnergyThumb from '../../assets/images/work-thumbs/renewable-energy.jpg';
import drillingEquipmentThumb from '../../assets/images/work-thumbs/drilling-equipment.jpg';
import oilGasProcessThumb from '../../assets/images/work-thumbs/oil-gas-process.jpg';
import equipmentTrainingThumb from '../../assets/images/work-thumbs/equipment-training.jpg';
import vrSafetyTrainingThumb from '../../assets/images/work-thumbs/vr-safety-training.jpg';
import interactiveConfigThumb from '../../assets/images/work-thumbs/interactive-configuration.jpg';
import productConfiguratorThumb from '../../assets/images/work-thumbs/product-configurator-webgl.jpg';

// Real image paths — see the README for how to add or swap these.
// Leave an entry `null` to keep the placeholder for that slot.
const IMAGES = {
  heroCollage,
  avatarPhoto,
  cap3d: cap3dImg,
  capUnreal: capUnrealImg,
  capWebgl: capWebglImg,
};

// Core Capabilities demo reels (Vimeo IDs) — clicking a capability image plays
// the matching reel in the VideoModal.
const DEMO_REELS = {
  cap3d: '1218499250', // DemoReel - 3d Animation
  capUnreal: '1218499918', // DemoReel - Unreal
  capWebgl: '1218500784', // DemoReel - WebGl
};

const INTRO_VIDEO_ID = '1222125920'; // Video introduction-L

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#support', label: 'How We Support' },
  { href: '#capabilities', label: 'Our Capabilities' },
  { href: '#workflow', label: 'Workflow' },
  { href: '#partnership', label: 'Partnership Models' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const container = { maxWidth: 1400, margin: '0 auto', padding: '0 clamp(16px,4vw,32px) clamp(48px,6vw,72px)' };
const card = { background: '#12161F', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16 };
const sectionHeading = {
  textAlign: 'center',
  fontFamily: "'Poppins',sans-serif",
  fontWeight: 700,
  fontSize: 'clamp(24px,2.6vw,32px)',
  color: '#f3f5f7',
  margin: '0 0 34px',
};

export default function ProductionSupportGroup({ accentColor = '#E4611F' }) {
  const accent = accentColor;
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [workPage, setWorkPage] = useState(0);

  const updateField = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  const submitForm = () => setSubmitted(true);

  const bringCards = useMemo(
    () => [
      { icon: <CubeIcon color={accent} />, title: 'Technical Expertise', desc: 'Deep experience in 3D, real-time, and Web technologies.' },
      { icon: <TargetIcon color={accent} />, title: 'Production Mindset', desc: 'Focused on pipeline integration, efficiency, and measurable results.' },
      { icon: <UsersIcon color={accent} />, title: 'Collaborative Approach', desc: 'I work closely with your team to ensure we hit your studio goals.' },
      { icon: <ShieldXIcon color={accent} />, title: 'Reliable & Professional', desc: 'NDAs respected, timelines met, quality you can count on.' },
      { icon: <GlobeIcon color={accent} />, title: 'Global Experience', desc: 'Worked with international clients across different timezones.' },
    ],
    [accent]
  );

  const teamCards = useMemo(
    () => [
      {
        icon: <CubeIcon color={accent} />,
        title: '3D Animation Studios',
        question: 'Need extra production capacity for your industrial or commercial projects?',
        items: ['3D Animation', 'Modeling & Texturing', 'Rigging & Rendering', 'Technical Visualization'],
      },
      {
        icon: <MonitorIcon color={accent} />,
        title: 'Interactive Development Teams',
        question: 'Need high-quality 3D content for your real-time projects?',
        items: ['Unreal Engine Assets', 'Real-time Optimization', 'WebGL / WebXR Content', 'Configurators & Applications'],
      },
      {
        icon: <LayersIcon color={accent} />,
        title: 'Agencies & Creative Studios',
        question: 'Need a reliable behind-the-scenes production partner?',
        items: ['White Label Production', 'No Direct Client Contact', 'Focus on Your Client', 'We Handle the Production'],
      },
    ],
    [accent]
  );

  const whyCards = useMemo(
    () => [
      { icon: <ShieldIcon color={accent} />, title: 'Confidential & Secure', desc: 'Your projects are safe with our NDA-protected workflow.' },
      { icon: <UsersIcon color={accent} />, title: 'Flexible & Scalable', desc: 'Scale up or down based on your project needs.' },
      { icon: <TargetIcon color={accent} />, title: 'Production Focused', desc: 'We integrate smoothly into your pipeline and deadlines.' },
      { icon: <GearIcon color={accent} />, title: 'Consistent Quality', desc: 'High production standards you can rely on.' },
      { icon: <ClockIcon color={accent} />, title: 'Reliable Delivery', desc: 'We respect timelines and communicate clearly.' },
      { icon: <GlobeIcon color={accent} />, title: 'Global Collaboration', desc: 'Experienced in working with teams worldwide across different timezones.' },
    ],
    [accent]
  );

  const prodIcons = useMemo(
    () => [
      { icon: <ActivityIcon color={accent} />, label: 'Modeling' },
      { icon: <DropletIcon color={accent} />, label: 'Texturing' },
      { icon: <RigIcon color={accent} />, label: 'Rigging' },
      { icon: <ActivityIcon color={accent} />, label: 'Animation' },
      { icon: <RenderIcon color={accent} />, label: 'Rendering' },
    ],
    [accent]
  );

  const unrealIcons = useMemo(
    () => [
      { icon: <MonitorIcon color={accent} />, label: 'Environment Creation' },
      { icon: <CodeIcon color={accent} />, label: 'Blueprint Scripting' },
      { icon: <CpuIcon color={accent} />, label: 'Optimization' },
      { icon: <GearIcon color={accent} />, label: 'Tools & Deployment' },
    ],
    [accent]
  );

  const webglIcons = useMemo(
    () => [
      { icon: <CubeIcon color={accent} />, label: '3D Optimization' },
      { icon: <MonitorIcon color={accent} />, label: 'Product Viewer' },
      { icon: <SlidersIcon color={accent} />, label: 'Configurator' },
      { icon: <GlobeIcon color={accent} />, label: 'Browser Performance' },
    ],
    [accent]
  );

  const pipelineSteps = useMemo(
    () => [
      { icon: <LayersIcon color={accent} />, label: 'CAD / Data' },
      { icon: <CubeIcon color={accent} />, label: 'Modeling' },
      { icon: <DropletIcon color={accent} />, label: 'Texturing' },
      { icon: <RigIcon color={accent} />, label: 'Rigging' },
      { icon: <ActivityIcon color={accent} />, label: 'Animation' },
      { icon: <ClockIcon color={accent} />, label: 'Real-Time' },
    ],
    [accent]
  );

  const workItems = [
    { id: 'work-food-processing', title: 'Food Processing', tag: '3D Animation', placeholder: 'Food processing line render', src: foodProcessingThumb, vimeoId: '1218517905' },
    { id: 'work-renewable-energy', title: 'Renewable Energy', tag: '3D Animation', placeholder: 'Renewable energy render', src: renewableEnergyThumb, vimeoId: '1218518339' },
    { id: 'work-drilling-equipment', title: 'Drilling Equipment', tag: '3D Animation', placeholder: 'Drilling equipment render', src: drillingEquipmentThumb, vimeoId: '1218521079' },
    { id: 'work-oil-gas-process', title: 'Oil & Gas Process', tag: '3D Animation', placeholder: 'Oil & gas process render', src: oilGasProcessThumb, vimeoId: '1218523398' },
    { id: 'work-offshore-marine', title: 'Offshore & Marine', tag: '3D Animation', placeholder: 'Offshore & marine render', src: null, vimeoId: '1218524563' },
    { id: 'work-equipment-training', title: 'VR Product Showcase', tag: 'Unreal Engine / VR', placeholder: 'VR product showcase', src: equipmentTrainingThumb, vimeoId: '1218525467' },
    { id: 'work-vr-safety-training', title: 'VR Safety Training', tag: 'Unreal Engine / VR', placeholder: 'VR safety training', src: vrSafetyTrainingThumb, vimeoId: '1218532267' },
    { id: 'work-interactive-config', title: 'Interactive Configuration', tag: 'Web Interactive', placeholder: 'Interactive WebGL configurator', src: interactiveConfigThumb, vimeoId: '1218537166' },
    { id: 'work-product-configurator', title: 'Product Configurator (WebGL)', tag: 'Web Interactive', placeholder: 'WebGL product configurator', src: productConfiguratorThumb, vimeoId: '1220185878' },
  ];

  // First page shows 5 items, the rest spill onto a second page.
  const WORK_PAGE_SIZE = 5;
  const workPages = [workItems.slice(0, WORK_PAGE_SIZE), workItems.slice(WORK_PAGE_SIZE)];
  const visibleWorkItems = workPages[workPage] || workPages[0];

  const workflowSteps = useMemo(
    () => [
      { icon: <MailIcon color={accent} />, title: '1. Project Brief', desc: 'You share requirements and assets.', showArrow: true },
      { icon: <TargetIcon color={accent} />, title: '2. Planning', desc: 'We analyze, plan resources and provide timeline.', showArrow: true },
      { icon: <GearIcon color={accent} />, title: '3. Production', desc: 'Our team works while you stay in control.', showArrow: true },
      { icon: <UsersIcon color={accent} />, title: '4. Review', desc: 'You review and provide feedback at every stage.', showArrow: true },
      { icon: <RenderIcon color={accent} />, title: '5. Delivery', desc: 'Final delivery in your preferred format.', showArrow: false },
    ],
    [accent]
  );

  const badges = useMemo(
    () => [
      { icon: <MailIcon color={accent} />, title: 'Strict NDA Policy', desc: 'Your IP is always protected.' },
      { icon: <UsersIcon color={accent} />, title: 'Professional Communication', desc: 'Clear, responsive and transparent.' },
      { icon: <GearIcon color={accent} />, title: 'Pipeline Friendly', desc: 'We adapt to your tools and workflow.' },
    ],
    [accent]
  );

  const partnerCards = useMemo(
    () => [
      { icon: <MonitorIcon color={accent} />, title: 'Project-Based', desc: 'Perfect for one-time projects with specific deliverables.' },
      { icon: <UsersIcon color={accent} />, title: 'Dedicated Team', desc: 'Extend your team with our dedicated artists & developers.' },
      { icon: <ClockIcon color={accent} />, title: 'Long-Term Partner', desc: 'Ongoing collaboration for continuous production support.' },
    ],
    [accent]
  );

  return (
    <div className="psg-root">
      {/* HEADER */}
      <header
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 20,
          justifyContent: 'space-between',
          maxWidth: 1400,
          margin: '0 auto',
          padding: '20px clamp(16px,4vw,32px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', gap: 4 }}>
            <span style={{ width: 6, height: 30, background: accent, transform: 'skewX(-12deg)', display: 'inline-block' }} />
            <span style={{ width: 6, height: 30, background: accent, transform: 'skewX(-12deg)', display: 'inline-block' }} />
          </div>
          <div>
            <div style={{ color: accent, fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 1, lineHeight: 1.3 }}>
              JOORABCHIAN
            </div>
            <div style={{ color: '#f3f5f7', fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: 0.5, lineHeight: 1.2 }}>
              PRODUCTION SUPPORT GROUP
            </div>
            <div style={{ color: '#8b94a3', fontSize: 11.5, letterSpacing: 0.3 }}>3D & Interactive Production Partner</div>
          </div>
        </div>
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(14px,2.4vw,28px)', fontSize: 14, color: '#c3c9d1', fontWeight: 500 }}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} style={{ color: link.label === 'Home' ? accent : '#c3c9d1' }}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      {/* HERO */}
      <section
        id="home"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 'clamp(24px,4vw,56px)',
          maxWidth: 1400,
          margin: '0 auto',
          padding: 'clamp(24px,4vw,40px) clamp(16px,4vw,32px) clamp(48px,6vw,72px)',
        }}
      >
        <div style={{ flex: '1 1 420px', minWidth: 320 }}>
          <h1 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 'clamp(38px,5.2vw,58px)', lineHeight: 1.08, color: '#f3f5f7', margin: '0 0 18px' }}>
            Your Production
            <br />
            <span style={{ color: accent }}>Support Partner</span>
          </h1>
          <p style={{ color: '#d7dbe1', fontSize: 'clamp(16px,1.6vw,19px)', lineHeight: 1.5, maxWidth: 520, margin: '0 0 16px' }}>
            Helping animation studios and interactive companies deliver more, with confidence.
          </p>
          <p style={{ color: '#8b94a3', fontSize: 15, lineHeight: 1.65, maxWidth: 520, margin: '0 0 30px' }}>
            We provide reliable 3D animation, Unreal Engine and Web interactive production support, so you can scale your projects without
            boundaries.
          </p>
          <a
            href="#contact"
            style={{ background: accent, color: '#fff', fontWeight: 600, fontSize: 15, padding: '15px 26px', borderRadius: 9, display: 'inline-flex', alignItems: 'center', gap: 10 }}
          >
            Let&apos;s Collaborate <span>&#8594;</span>
          </a>
        </div>
        <div style={{ flex: '1 1 480px', minWidth: 320 }}>
          <PlaceholderImage
            label="Drop hero collage: 3D renders, UI screens, VR photo"
            shape="rounded"
            radius={18}
            src={IMAGES.heroCollage}
            style={{ width: '100%', height: 'clamp(220px,32vw,360px)' }}
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={container}>
        <div style={{ ...card, padding: 'clamp(24px,3.5vw,44px)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(24px,3vw,40px)' }}>
            <div style={{ flex: '1 1 300px', minWidth: 280 }}>
              <div style={{ color: accent, fontWeight: 700, fontSize: 13, letterSpacing: 1.5, marginBottom: 10 }}>ABOUT ME</div>
              <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(24px,2.4vw,30px)', color: '#f3f5f7', margin: '0 0 8px' }}>
                Hi, I&apos;m Ali Joorabchian.
              </h2>
              <div style={{ color: accent, fontWeight: 600, fontSize: 15, marginBottom: 16 }}>3D Production Lead & Technical Art Specialist.</div>
              <p style={{ color: '#9aa4b2', fontSize: 14.5, lineHeight: 1.7, margin: '0 0 14px' }}>
                With over 15 years of experience in 3D animation, software development, and interactive production, I help studios and companies
                overcome complex pipeline challenges and bottlenecks across cinematic production and real-time.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center', marginTop: 22 }}>
                <button
                  type="button"
                  onClick={() => setActiveVideo({ vimeoId: INTRO_VIDEO_ID, title: 'Introduction Video' })}
                  style={{
                    background: accent,
                    color: '#fff',
                    border: 'none',
                    fontWeight: 600,
                    fontSize: 14,
                    padding: '13px 20px',
                    borderRadius: 9,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9 }}>
                    &#9654;
                  </span>{' '}
                  Introduction Video
                </button>
              </div>
            </div>

            <div style={{ flex: '2.2 1 560px', minWidth: 300 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 28 }}>
                <div style={{ flex: '1 1 190px', maxWidth: 220, background: '#171B24', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <RingsIcon color={accent} />
                    <span style={{ color: '#e7e9ed', fontSize: 12.5, fontWeight: 600 }}>
                      3D Animation
                      <br />
                      15+ Years
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <CircuitLinkIcon color={accent} />
                    <span style={{ color: '#e7e9ed', fontSize: 12.5, fontWeight: 600 }}>
                      Pipeline
                      <br />
                      Expertise
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <GearIcon color={accent} />
                    <span style={{ color: '#e7e9ed', fontSize: 12.5, fontWeight: 600 }}>
                      Engineering
                      <br />
                      Mindset
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <GlobeIcon color={accent} />
                    <span style={{ color: '#e7e9ed', fontSize: 12.5, fontWeight: 600 }}>
                      Interactive
                      <br />
                      Studio
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, flex: '0 0 auto' }}>
                  <PlaceholderImage label="Portrait photo" shape="circle" src={IMAGES.avatarPhoto} style={{ width: 110, height: 110 }} />
                  <div style={{ color: '#f3f5f7', fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: 0.5 }}>ALI JOORABCHIAN</div>
                  <div style={{ color: '#8b94a3', fontSize: 12 }}>3D Production Lead</div>
                </div>

                <div style={{ flex: '1 1 220px', maxWidth: 250, background: '#171B24', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <CubeIcon color={accent} />
                    <span style={{ color: '#e7e9ed', fontSize: 13, fontWeight: 600 }}>3D Production & Animation</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <WindowBarIcon color={accent} />
                    <span style={{ color: '#e7e9ed', fontSize: 13, fontWeight: 600 }}>Real-Time (Unreal Engine)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <GlobeIcon color={accent} />
                    <span style={{ color: '#e7e9ed', fontSize: 13, fontWeight: 600 }}>WebGL & Interactive</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <PhotoIcon color={accent} />
                    <span style={{ color: '#e7e9ed', fontSize: 13, fontWeight: 600 }}>Technical Visualization</span>
                  </div>
                </div>
              </div>

              <div style={{ position: 'relative', padding: '8px 10px' }}>
                <div style={{ position: 'absolute', top: 38, left: 24, right: 24, height: 1, background: 'rgba(255,255,255,0.14)', zIndex: 0 }} />
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16, position: 'relative', zIndex: 1 }}>
                  {pipelineSteps.map((step) => (
                    <div key={step.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: 76 }}>
                      <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#12161F', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {step.icon}
                      </div>
                      <div style={{ color: '#c3c9d1', fontSize: 12, textAlign: 'center', fontWeight: 500 }}>{step.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ flex: '1 1 260px', minWidth: 260, display: 'flex', flexDirection: 'column', gap: 22 }}>
              <div style={{ display: 'flex', gap: 14 }}>
                <UsersIcon color={accent} size={26} style={{ flexShrink: 0 }} />
                <p style={{ color: '#9aa4b2', fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>
                  I lead a dedicated team of 30+ artists, technical artists and developers across 3D, engine and web interactive pipelines.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 14, marginTop: 28 }}>
                <GearIcon color={accent} size={26} style={{ flexShrink: 0 }} />
                <p style={{ color: '#9aa4b2', fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>
                  We adapt to your workflows, invest in your process, and deliver consistent quality at every stage.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 14, marginTop: 28 }}>
                <ShieldIcon color={accent} size={26} style={{ flexShrink: 0 }} />
                <p style={{ color: '#9aa4b2', fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>
                  We guarantee scale & flexibility — high-quality, production-ready work you can rely on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I BRING */}
      <section style={container}>
        <h2 style={sectionHeading}>
          What I Bring to <span style={{ color: accent }}>Your Pipeline</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 18 }}>
          {bringCards.map((c) => (
            <div key={c.title} style={{ ...card, padding: '26px 20px', textAlign: 'center' }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: '#171B24', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                {c.icon}
              </div>
              <div style={{ color: '#f3f5f7', fontWeight: 700, fontSize: 15.5, marginBottom: 8 }}>{c.title}</div>
              <div style={{ color: '#8b94a3', fontSize: 13.5, lineHeight: 1.6 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SUPPORT TEAMS */}
      <section id="support" style={container}>
        <h2 style={sectionHeading}>
          We Support <span style={{ color: accent }}>Creative</span> & <span style={{ color: accent }}>Technical</span> Teams
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 22 }}>
          {teamCards.map((team) => (
            <div key={team.title} style={{ ...card, padding: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div style={{ width: 46, height: 46, borderRadius: 10, background: '#171B24', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {team.icon}
                </div>
                <div style={{ color: '#f3f5f7', fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 17 }}>{team.title}</div>
              </div>
              <p style={{ color: '#8b94a3', fontSize: 14, lineHeight: 1.6, margin: '0 0 18px' }}>{team.question}</p>
              {team.items.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <CheckIcon color={accent} size={16} />
                  <span style={{ color: '#c3c9d1', fontSize: 13.5 }}>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* WHY PARTNERS */}
      <section style={container}>
        <h2 style={sectionHeading}>
          Why <span style={{ color: accent }}>Partners</span> Choose to Work With Us
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 18 }}>
          {whyCards.map((w) => (
            <div key={w.title} style={{ textAlign: 'center', padding: 10 }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#12161F', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                {w.icon}
              </div>
              <div style={{ color: '#f3f5f7', fontWeight: 700, fontSize: 14.5, marginBottom: 6 }}>{w.title}</div>
              <div style={{ color: '#8b94a3', fontSize: 13, lineHeight: 1.55 }}>{w.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section id="capabilities" style={container}>
        <h2 style={sectionHeading}>
          Our <span style={{ color: accent }}>Core</span> Production Capabilities
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 22 }}>
          <div style={{ ...card, padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <CubeIcon color={accent} size={20} />
              <span style={{ color: '#f3f5f7', fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: 0.5 }}>3D PRODUCTION</span>
            </div>
            <div
              style={{ position: 'relative', cursor: 'pointer', marginBottom: 18 }}
              onClick={() => setActiveVideo({ vimeoId: DEMO_REELS.cap3d, title: '3D Animation Demoreel' })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveVideo({ vimeoId: DEMO_REELS.cap3d, title: '3D Animation Demoreel' });
                }
              }}
              aria-label="Play 3D Animation demo reel"
            >
              <PlaceholderImage label="Industrial 3D model render" shape="rounded" radius={12} src={IMAGES.cap3d} style={{ width: '100%', height: 220 }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(10,13,19,0.55)', border: '1.5px solid rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <PlayTriangleIcon size={16} color="#fff" />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'space-between', marginBottom: 16 }}>
              {prodIcons.map((ic) => (
                <div key={ic.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 52 }}>
                  <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#171B24', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {ic.icon}
                  </div>
                  <div style={{ color: '#8b94a3', fontSize: 10.5, textAlign: 'center' }}>{ic.label}</div>
                </div>
              ))}
            </div>
            <p style={{ color: '#8b94a3', fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>
              Complete 3D production pipeline from CAD data to final photorealistic render, optimized for industrial and technical visualization.
            </p>
          </div>

          <div style={{ ...card, padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <MonitorIcon color={accent} size={20} />
              <span style={{ color: '#f3f5f7', fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: 0.5 }}>UNREAL ENGINE</span>
            </div>
            <div
              style={{ position: 'relative', cursor: 'pointer', marginBottom: 18 }}
              onClick={() => setActiveVideo({ vimeoId: DEMO_REELS.capUnreal, title: 'Unreal Engine Demoreel' })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveVideo({ vimeoId: DEMO_REELS.capUnreal, title: 'Unreal Engine Demoreel' });
                }
              }}
              aria-label="Play Unreal Engine demo reel"
            >
              <PlaceholderImage label="Unreal Engine environment screenshot" shape="rounded" radius={12} src={IMAGES.capUnreal} style={{ width: '100%', height: 220 }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(10,13,19,0.55)', border: '1.5px solid rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <PlayTriangleIcon size={16} color="#fff" />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'space-between', marginBottom: 16 }}>
              {unrealIcons.map((ic) => (
                <div key={ic.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 70 }}>
                  <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#171B24', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {ic.icon}
                  </div>
                  <div style={{ color: '#8b94a3', fontSize: 10.5, textAlign: 'center' }}>{ic.label}</div>
                </div>
              ))}
            </div>
            <p style={{ color: '#8b94a3', fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>
              Real-time environments and interactive experiences built with Unreal Engine, optimized for performance and quality.
            </p>
          </div>

          <div style={{ ...card, padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <GlobeIcon color={accent} size={20} />
              <span style={{ color: '#f3f5f7', fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: 0.5 }}>WEBGL</span>
            </div>
            <div
              style={{ position: 'relative', cursor: 'pointer', marginBottom: 18 }}
              onClick={() => setActiveVideo({ vimeoId: DEMO_REELS.capWebgl, title: 'WebGL Demoreel' })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveVideo({ vimeoId: DEMO_REELS.capWebgl, title: 'WebGL Demoreel' });
                }
              }}
              aria-label="Play WebGL demo reel"
            >
              <PlaceholderImage label="WebGL product configurator screenshot" shape="rounded" radius={12} src={IMAGES.capWebgl} style={{ width: '100%', height: 220 }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(10,13,19,0.55)', border: '1.5px solid rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <PlayTriangleIcon size={16} color="#fff" />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'space-between', marginBottom: 16 }}>
              {webglIcons.map((ic) => (
                <div key={ic.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 70 }}>
                  <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#171B24', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {ic.icon}
                  </div>
                  <div style={{ color: '#8b94a3', fontSize: 10.5, textAlign: 'center' }}>{ic.label}</div>
                </div>
              ))}
            </div>
            <p style={{ color: '#8b94a3', fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>
              Optimized 3D content and interactive applications for the web, delivering smooth performance across all browsers.
            </p>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section style={container}>
        <h2 style={sectionHeading}>
          Selected Work <span style={{ color: '#8b94a3', fontWeight: 500, fontSize: '0.6em' }}>(Production Support Examples)</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 18, marginBottom: 22 }}>
          {visibleWorkItems.map((work) => (
            <div key={work.id}>
              <div
                style={{ position: 'relative', cursor: work.vimeoId ? 'pointer' : 'default' }}
                onClick={() => work.vimeoId && setActiveVideo({ vimeoId: work.vimeoId, title: work.title })}
                role={work.vimeoId ? 'button' : undefined}
                tabIndex={work.vimeoId ? 0 : undefined}
                onKeyDown={(e) => {
                  if (work.vimeoId && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    setActiveVideo({ vimeoId: work.vimeoId, title: work.title });
                  }
                }}
                aria-label={work.vimeoId ? `Play video: ${work.title}` : undefined}
              >
                <PlaceholderImage label={work.placeholder} shape="rounded" radius={12} src={work.src} style={{ width: '100%', height: 170 }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(10,13,19,0.55)', border: '1.5px solid rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PlayTriangleIcon size={16} color="#fff" />
                  </div>
                </div>
              </div>
              <div style={{ color: '#e7e9ed', fontWeight: 600, fontSize: 14, marginTop: 12 }}>{work.title}</div>
              <div style={{ color: '#8b94a3', fontSize: 12.5 }}>{work.tag}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
          {workPages.map((pageItems, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setWorkPage(i)}
              aria-label={`Show selected work page ${i + 1}`}
              style={{ width: 8, height: 8, borderRadius: '50%', border: 'none', padding: 0, cursor: 'pointer', background: i === workPage ? accent : 'rgba(255,255,255,0.2)' }}
            />
          ))}
        </div>
      </section>

      {/* WORKFLOW + PARTNERSHIP */}
      <section id="workflow" style={{ ...container, display: 'flex', flexWrap: 'wrap', gap: 36, flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 36 }}>
        <div style={{ flex: '1.4 1 480px', minWidth: 320 }}>
          <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(22px,2.2vw,28px)', color: '#f3f5f7', margin: '0 0 30px' }}>
            How We <span style={{ color: accent }}>Work</span> Together
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 6 }}>
            {workflowSteps.map((step) => (
              <div key={step.title} style={{ display: 'contents' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, width: 104, textAlign: 'center' }}>
                  <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#12161F', border: `1.5px solid ${accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {step.icon}
                  </div>
                  <div style={{ color: '#f3f5f7', fontWeight: 700, fontSize: 12.5 }}>{step.title}</div>
                  <div style={{ color: '#8b94a3', fontSize: 11.5, lineHeight: 1.4 }}>{step.desc}</div>
                </div>
                {step.showArrow && <div style={{ color: accent, fontSize: 18, paddingTop: 16 }}>&#8594;</div>}
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16, marginTop: 40 }}>
            {badges.map((b) => (
              <div key={b.title} style={{ display: 'flex', gap: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: 9, background: '#12161F', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {b.icon}
                </div>
                <div>
                  <div style={{ color: '#e7e9ed', fontWeight: 600, fontSize: 13.5, marginBottom: 3 }}>{b.title}</div>
                  <div style={{ color: '#8b94a3', fontSize: 12, lineHeight: 1.5 }}>{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: '1 1 320px', minWidth: 280 }}>
          <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(22px,2.2vw,28px)', color: '#f3f5f7', margin: '0 0 30px' }}>
            Partnership <span style={{ color: accent }}>Models</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {partnerCards.map((p) => (
              <div key={p.title} style={{ ...card, padding: 20, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: '#171B24', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {p.icon}
                </div>
                <div>
                  <div style={{ color: '#f3f5f7', fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{p.title}</div>
                  <div style={{ color: '#8b94a3', fontSize: 13, lineHeight: 1.55 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p style={{ color: '#9aa4b2', fontSize: 13.5, lineHeight: 1.7, textAlign: 'center', maxWidth: 820, margin: '8px auto 0', paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        For the detailed overview of our production workflow, sample timeline and pricing structures, please contact me via Email / WhatsApp / Google Meet to
        receive the full production brief (PDF) or discussing your concerns face to face.
      </p>
      </section>

      {/* FOOTER */}
      <footer id="contact" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', marginTop: 20 }}>
        <div
          style={{
            maxWidth: 1400,
            margin: '0 auto',
            padding: 'clamp(40px,5vw,60px) clamp(16px,4vw,32px) 30px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))',
            gap: 32,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ display: 'flex', gap: 4 }}>
                <span style={{ width: 6, height: 26, background: accent, transform: 'skewX(-12deg)', display: 'inline-block' }} />
                <span style={{ width: 6, height: 26, background: accent, transform: 'skewX(-12deg)', display: 'inline-block' }} />
              </div>
              <span style={{ color: accent, fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 15 }}>Joorabchian Group</span>
            </div>
            <p style={{ color: '#8b94a3', fontSize: 13.5, lineHeight: 1.6, maxWidth: 260 }}>
              We don&apos;t compete with your brand. We work behind the scenes to make you look great.
            </p>
          </div>

          <div>
            <div style={{ color: '#f3f5f7', fontWeight: 700, fontSize: 15, marginBottom: 16 }}>Quick Links</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="#support" style={{ color: '#9aa4b2', fontSize: 13.5 }}>How We Support</a>
              <a href="#capabilities" style={{ color: '#9aa4b2', fontSize: 13.5 }}>Our Capabilities</a>
              <a href="#workflow" style={{ color: '#9aa4b2', fontSize: 13.5 }}>Workflow</a>
              <a href="#partnership" style={{ color: '#9aa4b2', fontSize: 13.5 }}>Partnership Models</a>
            </div>
          </div>

          <div>
            <div style={{ color: '#f3f5f7', fontWeight: 700, fontSize: 15, marginBottom: 16 }}>Get in Touch</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <MailIcon color={accent} size={16} />
                <span style={{ color: '#9aa4b2', fontSize: 13 }}>Hello@joorabchian.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <DiagonalLinkIcon color={accent} size={16} />
                <span style={{ color: '#9aa4b2', fontSize: 13 }}>WhatsApp: +90 850 309 3377</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <PinIcon color={accent} size={16} />
                <span style={{ color: '#9aa4b2', fontSize: 13 }}>Istanbul, Turkey</span>
              </div>
            </div>
          </div>

          <div>
            <div style={{ color: '#f3f5f7', fontWeight: 700, fontSize: 15, marginBottom: 16 }}>Start a Conversation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <input
                  value={form.name}
                  onChange={updateField('name')}
                  placeholder="Your Name"
                  style={{ flex: '1 1 100px', background: '#171B24', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '10px 12px', color: '#e7e9ed', fontSize: 12.5 }}
                />
                <input
                  value={form.email}
                  onChange={updateField('email')}
                  placeholder="Your Email"
                  style={{ flex: '1 1 100px', background: '#171B24', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '10px 12px', color: '#e7e9ed', fontSize: 12.5 }}
                />
              </div>
              <input
                value={form.company}
                onChange={updateField('company')}
                placeholder="Company / Studio Name"
                style={{ background: '#171B24', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '10px 12px', color: '#e7e9ed', fontSize: 12.5 }}
              />
              <textarea
                value={form.message}
                onChange={updateField('message')}
                placeholder="Tell us about your project..."
                rows={3}
                style={{ background: '#171B24', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '10px 12px', color: '#e7e9ed', fontSize: 12.5, resize: 'none', fontFamily: "'Manrope',sans-serif" }}
              />
              <button
                type="button"
                onClick={submitForm}
                style={{ background: accent, color: '#fff', border: 'none', fontWeight: 600, fontSize: 13.5, padding: 12, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer' }}
              >
                {submitted ? 'Sent — Thank you!' : 'Send Message'} <span>+</span>
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: 1400,
            margin: '0 auto',
            padding: '18px clamp(16px,4vw,32px)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div style={{ color: '#6b7481', fontSize: 12.5 }}>&copy; 2026 Joorabchian Support Group. All rights reserved.</div>
        </div>
      </footer>

      {activeVideo && (
        <VideoModal
          src={activeVideo.src}
          vimeoId={activeVideo.vimeoId}
          title={activeVideo.title}
          accent={accent}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </div>
  );
}
