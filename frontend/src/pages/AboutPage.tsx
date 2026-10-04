import React, { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import {
  Compass,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  Award,
  BookOpen,
  Users,
  ShieldCheck,
  Check,
  X,
  Target,
  HeartHandshake,
  Lightbulb,
  GraduationCap
} from 'lucide-react'
import { Link } from '../context/RouterContext'

export const AboutPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    tob: '',
    pob: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        title="About North Star Astro"
        subtitle="Guiding You by the Stars — 50 years of ancestral legacy and 15 years of elite expertise by Acharya Prateek Shastri."
        tag="Brand Story • Vision • Mission • Philosophy"
        icon={<Compass size={24} />}
      />

      {/* 1. Our Brand Story & The Dhruv Tara Metaphor */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div className="glass-panel" style={{ padding: '2.5rem', border: '1px solid rgba(255, 215, 0, 0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <img
              src="/logo-symbol.png"
              alt="North Star Astro Emblem"
              style={{
                height: '74px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 16px rgba(255, 215, 0, 0.45))',
                flexShrink: 0,
              }}
            />
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <span className="badge badge-gold">1. Our Brand Story</span>
                <span className="badge badge-cyan">Dhruv Tara</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', color: '#f8fafc', lineHeight: 1.25 }}>
                Dhruv Tara — A Symbol of Direction, Clarity and Constancy
              </h2>
            </div>
          </div>

          <div style={{ fontStyle: 'italic', fontSize: '1.15rem', color: '#ffd700', lineHeight: 1.7, marginBottom: '1.5rem', borderLeft: '3px solid #ffd700', paddingLeft: '1rem' }}>
            “Jaise raat ke ghane andhere mein Dhruv Tara (North Star) bhatke hue yatriyon ko sahi rasta dikhata hai, bilkul waise hi North Star Astro ka purpose life ke confusion aur uncertainty mein direction dena hai.”
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#f8fafc', marginBottom: '0.75rem' }}>
                50-Year Ancestral Legacy & Acharya Prateek Shastri
              </h3>
              <p style={{ color: '#cbd5e1', lineHeight: 1.75, marginBottom: '1rem', fontSize: '0.95rem' }}>
                North Star Astro apni <strong>50 saal ki ancestral legacy</strong> aur <strong>Acharya Prateek Shastri</strong> ki <strong>15 saal ki expertise</strong> ko apni authority ka foundation maanta hai.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.75, fontSize: '0.92rem' }}>
                Yeh expertise pehle high-profile clients—celebrities, politicians aur business executives—tak seemit thi. Brand ka next chapter ise <em>aam logon tak accessible banana hai</em>, delivering authentic and elite astrological guidance to every seeker.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#f8fafc', marginBottom: '0.75rem' }}>
                Astrology as a Guidance Framework
              </h3>
              <p style={{ color: '#cbd5e1', lineHeight: 1.75, marginBottom: '1rem', fontSize: '0.95rem' }}>
                The central idea is simple: astrology ko sirf prediction ke roop mein nahi, balki <strong>self-understanding, timing aur conscious decision-making</strong> ke ek guidance framework ke roop mein present karna.
              </p>
              <div
                style={{
                  background: 'rgba(255, 215, 0, 0.08)',
                  border: '1px solid rgba(255, 215, 0, 0.3)',
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                }}
              >
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ffd700', fontWeight: 700, display: 'block' }}>
                  Brand Promise
                </span>
                <p style={{ fontSize: '1.05rem', fontWeight: 600, color: '#f8fafc', marginTop: '0.25rem' }}>
                  “Aapko future se darana nahi — aapko apni direction samajhne mein help karna.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {/* Vision */}
          <div className="glass-panel" style={{ padding: '2.25rem', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span className="badge badge-purple">2. Our Vision</span>
              <Target size={18} color="#c084fc" />
            </div>
            <h3 style={{ fontSize: '1.6rem', color: '#f8fafc', marginBottom: '1rem' }}>
              “Har Ghar Mein Ek Astrologer Ho.”
            </h3>
            <p style={{ color: '#cbd5e1', lineHeight: 1.75, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
              Long-term vision hai ki <strong>har family mein kam se kam ek person apni aur apne loved ones ki Dasha aur transits ko basic level par samajh sake</strong>.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.92rem', marginBottom: '1.25rem' }}>
              Is vision ka objective astrology ko exclusive knowledge se nikaal kar practical awareness ke closer lana hai. When people understand their timing, tendencies and karmic patterns, they can make more conscious choices instead of operating only through fear, confusion or guesswork.
            </p>
            <Link to="/learn-astrology" className="btn-secondary" style={{ textDecoration: 'none', fontSize: '0.88rem' }}>
              <GraduationCap size={16} /> Explore Learning Academy
            </Link>
          </div>

          {/* Mission */}
          <div className="glass-panel" style={{ padding: '2.25rem', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span className="badge badge-cyan">3. Our Mission</span>
              <HeartHandshake size={18} color="#38bdf8" />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: '#f8fafc', marginBottom: '1rem' }}>
              Authentic aur Elite Guidance Aam Logon Tak
            </h3>
            <p style={{ color: '#cbd5e1', lineHeight: 1.75, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
              North Star Astro ka mission hai Vedic astrology ki depth ko accessible language aur practical guidance ke through wider audience tak le jaana.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.92rem' }}>
              Brand material specifically superstition ko challenge karne aur people ko more educated, conscious decisions lene mein empower karne par focus karta hai.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Five Practical Pillars of Mission */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Core Execution</span>
          <h2 style={{ fontSize: '1.9rem', color: '#f8fafc' }}>Mission Ke 5 Practical Pillars</h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0.5rem auto 0', fontSize: '0.95rem' }}>
            The actionable foundations that distinguish North Star Astro's consultations and educational programs.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {[
            {
              title: 'Authenticity',
              desc: 'Traditional astrological knowledge ko responsible manner mein present karna. Grounded in classical Parashari scriptures.',
              icon: <Award size={20} color="#ffd700" />,
              badge: 'Pillar 1',
            },
            {
              title: 'Education',
              desc: 'Audience ko concepts samjhana, sirf conclusions dena nahi. Helping you understand why certain life cycles unfold.',
              icon: <BookOpen size={20} color="#38bdf8" />,
              badge: 'Pillar 2',
            },
            {
              title: 'Accessibility',
              desc: 'Complex astrology ko understandable Hinglish aur modern language mein communicate karna without intimidating jargon.',
              icon: <Lightbulb size={20} color="#c084fc" />,
              badge: 'Pillar 3',
            },
            {
              title: 'Personalisation',
              desc: 'Generic horoscope ke bajay individual birth chart (Lagna, Dasha, Navamsha) context par deep focus karna.',
              icon: <Users size={20} color="#fbbf24" />,
              badge: 'Pillar 4',
            },
            {
              title: 'Empowerment',
              desc: 'Fear-based dependency ke bajay conscious decision-making encourage karna. You are the architect of your karma.',
              icon: <ShieldCheck size={20} color="#10b981" />,
              badge: 'Pillar 5',
            },
          ].map((pillar, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {pillar.icon}
                </div>
                <span className="badge" style={{ fontSize: '0.7rem' }}>{pillar.badge}</span>
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#f8fafc', marginBottom: '0.5rem' }}>{pillar.title}</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6 }}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Brand Positioning Table */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="badge badge-purple" style={{ marginBottom: '0.5rem' }}>4. Brand Positioning</span>
          <h2 style={{ fontSize: '1.9rem', color: '#f8fafc' }}>Traditional Astrology vs North Star Astro</h2>
        </div>

        <div className="glass-panel" style={{ overflow: 'hidden', padding: '1.25rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '0.75rem', padding: '0.85rem 1.25rem', background: 'rgba(0, 0, 0, 0.4)', borderRadius: '12px' }}>
            <div style={{ fontWeight: 700, fontSize: '1rem', color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <X size={20} /> Traditional Astrology
            </div>
            <div style={{ fontWeight: 700, fontSize: '1rem', color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={20} /> North Star Astro
            </div>
          </div>

          {[
            {
              trad: 'Generic predictions',
              ns: 'Personalised chart-based guidance',
            },
            {
              trad: 'Fear & superstition',
              ns: 'Understanding & awareness',
            },
            {
              trad: 'Only future prediction',
              ns: 'Direction, timing & self-understanding',
            },
            {
              trad: 'Complex terminology',
              ns: 'Simple, practical communication',
            },
            {
              trad: 'Astrology as mystery',
              ns: 'Astrology as a learning journey',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.25rem',
                padding: '1.1rem 1.25rem',
                borderBottom: idx < 4 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
                background: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
                borderRadius: '8px',
              }}
            >
              <div style={{ color: '#94a3b8', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#f87171' }}>✕</span>
                {item.trad}
              </div>
              <div style={{ color: '#f8fafc', fontSize: '0.95rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#34d399' }}>✓</span>
                <span style={{ color: '#ffd700' }}>{item.ns}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Brand Personality & Core Message */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {/* Personality */}
          <div className="glass-panel" style={{ padding: '2.25rem' }}>
            <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>5. Brand Personality</span>
            <h3 style={{ fontSize: '1.4rem', color: '#f8fafc', marginBottom: '1rem' }}>
              Wise • Precise • Spiritual • Modern • Trustworthy • Empowering
            </h3>
            <p style={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: '0.93rem', marginBottom: '1rem' }}>
              North Star Astro ki communication authoritative honi chahiye, lekin intimidating nahi. Spiritual depth honi chahiye, lekin blind belief ko promote karne wali tone nahi.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.92rem' }}>
              The brand should feel like a knowledgeable guide—<strong>calm, premium and practical</strong>.
            </p>
          </div>

          {/* Core Message & Taglines */}
          <div className="glass-panel" style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span className="badge badge-purple" style={{ marginBottom: '0.75rem' }}>6. Core Brand Message</span>
              <h3 style={{ fontSize: '1.35rem', color: '#ffd700', lineHeight: 1.4, marginBottom: '1rem' }}>
                “The stars may indicate the path, but conscious action creates the journey.”
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Is thought ko brand ke content, consultations, social media aur educational material mein consistently reinforce kiya jaata hai.
              </p>
            </div>

            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem' }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8', display: 'block', marginBottom: '0.5rem' }}>
                7. Recommended Tagline System
              </span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                <li><strong style={{ color: '#ffd700' }}>Primary:</strong> Guiding You by the Stars.</li>
                <li><strong style={{ color: '#fbbf24' }}>Premium:</strong> Your Destiny. Your Direction. Your North Star.</li>
                <li><strong style={{ color: '#38bdf8' }}>Educational:</strong> Decode the Stars. Discover Your Path.</li>
                <li><strong style={{ color: '#c084fc' }}>Spiritual:</strong> Where the Stars Guide Your Journey.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. The North Star Astro Philosophy Summary */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div
          className="glass-panel"
          style={{
            padding: '2.25rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(24, 29, 58, 0.85) 0%, rgba(11, 15, 28, 0.95) 100%)',
            border: '1px solid rgba(255, 215, 0, 0.3)',
          }}
        >
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>9. The North Star Astro Philosophy</span>
          <p
            style={{
              fontSize: '1.2rem',
              color: '#f8fafc',
              maxWidth: '820px',
              margin: '0.5rem auto 1.5rem',
              lineHeight: 1.7,
              fontWeight: 500,
            }}
          >
            “Astrology should not make a person more dependent on predictions. It should make a person more aware of patterns, timing and choices. North Star Astro owns this space by becoming a guide for clarity rather than simply another horoscope page.”
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#ffd700', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.05em' }}>
            <Sparkles size={18} /> North Star Astro — Guiding You by the Stars.
          </div>
        </div>
      </section>

      {/* Integrated Contact Section */}
      <section id="contact" style={{ paddingTop: '1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Connect With Acharya Prateek Shastri</span>
          <h2 style={{ fontSize: '2rem', color: '#f8fafc' }}>Contact & Consultation Inquiries</h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0.5rem auto 0', fontSize: '0.95rem' }}>
            Reach out directly for consultation appointments, horoscope questions, or Vedic learning inquiries.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', maxWidth: '1050px', margin: '0 auto' }}>
          {/* Contact Details Card */}
          <div className="glass-panel" style={{ padding: '2.25rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#ffd700', marginBottom: '1rem' }}>
              We Are Here to Guide You
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Whether seeking clarity in love, facing career turning points, or exploring your karmic path, North Star Astro is here to illuminate your journey with care, precision, and zero superstition.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(255, 215, 0, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffd700', flexShrink: 0 }}>
                  <Mail size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>Email Support</span>
                  <a href="mailto:contact@northstarastro.com" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem' }}>
                    contact@northstarastro.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8', flexShrink: 0 }}>
                  <Phone size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>Direct Helpline / WhatsApp</span>
                  <span style={{ color: '#f8fafc', fontWeight: 500, fontSize: '0.95rem' }}>
                    +91 (0) 98765 43210
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(192, 132, 252, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c084fc', flexShrink: 0 }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>Main Office</span>
                  <span style={{ color: '#f8fafc', fontWeight: 500, fontSize: '0.95rem' }}>
                    Sodepur, West Bengal & Online Worldwide
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="glass-panel" style={{ padding: '2.25rem' }}>
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <CheckCircle2 size={48} color="#10b981" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.4rem', color: '#f8fafc', marginBottom: '0.5rem' }}>
                  Inquiry Received
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Thank you, {formData.name || 'Friend'}. Our team under Acharya Prateek Shastri will review your message and contact you within 24 hours.
                </p>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({ name: '', email: '', phone: '', dob: '', tob: '', pob: '', message: '' })
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#ffd700', marginBottom: '0.25rem' }}>
                  Send an Inquiry
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full Name"
                      style={{ width: '100%', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '0.65rem 0.85rem', color: '#f8fafc', fontSize: '0.9rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      style={{ width: '100%', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '0.65rem 0.85rem', color: '#f8fafc', fontSize: '0.9rem' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Date of Birth</label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      style={{ width: '100%', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '0.65rem 0.85rem', color: '#f8fafc', fontSize: '0.9rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Time of Birth</label>
                    <input
                      type="time"
                      value={formData.tob}
                      onChange={(e) => setFormData({ ...formData, tob: e.target.value })}
                      style={{ width: '100%', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '0.65rem 0.85rem', color: '#f8fafc', fontSize: '0.9rem' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Birth Place (City, Country)</label>
                  <input
                    type="text"
                    value={formData.pob}
                    onChange={(e) => setFormData({ ...formData, pob: e.target.value })}
                    placeholder="e.g. Kolkata, India"
                    style={{ width: '100%', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '0.65rem 0.85rem', color: '#f8fafc', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Inquiry / Focus Areas</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe what you would like guidance on (e.g. Career, Marriage, Kundli Analysis)"
                    style={{ width: '100%', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '0.65rem 0.85rem', color: '#f8fafc', fontSize: '0.9rem', resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                  <Send size={16} /> Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
