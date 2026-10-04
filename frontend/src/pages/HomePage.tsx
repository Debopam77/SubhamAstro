import React, { useState } from 'react'
import {
  Sparkles,
  Compass,
  Sun,
  Flame,
  Droplets,
  Wind,
  Mountain,
  ChevronRight,
  Star,
  ArrowRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  XCircle,
  BookOpen,
  Users,
  Heart,
  TrendingUp,
  Home,
  Gem
} from 'lucide-react'
import { Link } from '../context/RouterContext'

interface ZodiacSign {
  id: string
  name: string
  sanskrit: string
  dates: string
  element: 'Fire' | 'Earth' | 'Air' | 'Water'
  ruler: string
  symbol: string
  reading: string
}

const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    id: 'aries',
    name: 'Aries',
    sanskrit: 'Mesha (मेष)',
    dates: 'Mar 21 - Apr 19',
    element: 'Fire',
    ruler: 'Mars (Mangal)',
    symbol: '♈',
    reading: 'Channel high vitality into purposeful initiatives. Mars encourages disciplined courage and conscious direction over impulsive reaction.',
  },
  {
    id: 'taurus',
    name: 'Taurus',
    sanskrit: 'Vrishabha (वृषभ)',
    dates: 'Apr 20 - May 20',
    element: 'Earth',
    ruler: 'Venus (Shukra)',
    symbol: '♉',
    reading: 'Ground your vision in patient perseverance. Venus supports relationship harmony, steady wealth building, and mindful emotional balance.',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    sanskrit: 'Mithuna (मिथुन)',
    dates: 'May 21 - Jun 20',
    element: 'Air',
    ruler: 'Mercury (Budha)',
    symbol: '♊',
    reading: 'Clear communication and intellectual curiosity unlock new opportunities. Focus your analytical mind on priority goals.',
  },
  {
    id: 'cancer',
    name: 'Cancer',
    sanskrit: 'Karka (कर्क)',
    dates: 'Jun 21 - Jul 22',
    element: 'Water',
    ruler: 'Moon (Chandra)',
    symbol: '♋',
    reading: 'Deep intuition and emotional clarity guide your choices. Honor your inner rhythm and nurture trust in your personal timing.',
  },
  {
    id: 'leo',
    name: 'Leo',
    sanskrit: 'Simha (सिंह)',
    dates: 'Jul 23 - Aug 22',
    element: 'Fire',
    ruler: 'Sun (Surya)',
    symbol: '♌',
    reading: 'Solar vitality illuminates your authentic self-worth. Lead with humility, generosity, and inspiring creative expression.',
  },
  {
    id: 'virgo',
    name: 'Virgo',
    sanskrit: 'Kanya (कन्या)',
    dates: 'Aug 23 - Sep 22',
    element: 'Earth',
    ruler: 'Mercury (Budha)',
    symbol: '♍',
    reading: 'Discerning practical adjustments bring lasting order. Refine habits and align your daily routines with your higher dharma.',
  },
  {
    id: 'libra',
    name: 'Libra',
    sanskrit: 'Tula (तुला)',
    dates: 'Sep 23 - Oct 22',
    element: 'Air',
    ruler: 'Venus (Shukra)',
    symbol: '♎',
    reading: 'Harmonious decisions arise when intellect balances empathy. Strive for equitable solutions in both personal and professional partnerships.',
  },
  {
    id: 'scorpio',
    name: 'Scorpio',
    sanskrit: 'Vrischika (वृश्चिक)',
    dates: 'Oct 23 - Nov 21',
    element: 'Water',
    ruler: 'Mars & Ketu',
    symbol: '♏',
    reading: 'Karmic evolution requires releasing outdated patterns. Deep introspective strength paves the way for conscious rebirth.',
  },
  {
    id: 'sagittarius',
    name: 'Sagittarius',
    sanskrit: 'Dhanu (धनु)',
    dates: 'Nov 22 - Dec 21',
    element: 'Fire',
    ruler: 'Jupiter (Brihaspati)',
    symbol: '♐',
    reading: 'Expansive vision and ethical values illuminate the horizon. Seek wisdom through structured learning and mentorship.',
  },
  {
    id: 'capricorn',
    name: 'Capricorn',
    sanskrit: 'Makara (मकर)',
    dates: 'Dec 22 - Jan 19',
    element: 'Earth',
    ruler: 'Saturn (Shani)',
    symbol: '♑',
    reading: 'Saturnian discipline rewards consistency and integrity. Focus on sustainable progress rather than immediate shortcuts.',
  },
  {
    id: 'aquarius',
    name: 'Aquarius',
    sanskrit: 'Kumbha (कुम्भ)',
    dates: 'Jan 20 - Feb 18',
    element: 'Air',
    ruler: 'Saturn & Rahu',
    symbol: '♒',
    reading: 'Innovative thinking serves collective progress. Combine progressive concepts with grounded, practical execution.',
  },
  {
    id: 'pisces',
    name: 'Pisces',
    sanskrit: 'Meena (मीन)',
    dates: 'Feb 19 - Mar 20',
    element: 'Water',
    ruler: 'Jupiter (Brihaspati)',
    symbol: '♓',
    reading: 'Spiritual clarity and compassionate insight elevate your perspective. Surrender unnecessary anxieties and trust the cosmic flow.',
  },
]

export const HomePage: React.FC = () => {
  const [selectedZodiac, setSelectedZodiac] = useState<ZodiacSign>(ZODIAC_SIGNS[0])

  const getElementBadge = (element: ZodiacSign['element']) => {
    switch (element) {
      case 'Fire':
        return (
          <span className="badge" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
            <Flame size={12} /> Fire
          </span>
        )
      case 'Water':
        return (
          <span className="badge" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
            <Droplets size={12} /> Water
          </span>
        )
      case 'Air':
        return (
          <span className="badge" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
            <Wind size={12} /> Air
          </span>
        )
      case 'Earth':
        return (
          <span className="badge" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#4ade80', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
            <Mountain size={12} /> Earth
          </span>
        )
    }
  }

  return (
    <div className="container" style={{ paddingBottom: '3.5rem' }}>
      {/* 1. Hero Section */}
      <section
        style={{
          textAlign: 'center',
          padding: '3rem 1rem 2.5rem',
          position: 'relative',
        }}
      >
        {/* Extracted Logo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
          <img
            src="/logo-transparent.png"
            alt="North Star Astro"
            style={{
              maxHeight: '135px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.35))',
            }}
          />
        </div>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span className="badge badge-gold">
            <Sparkles size={14} /> Dhruv Tara — Symbol of Direction, Clarity & Constancy
          </span>
          <span className="badge badge-purple">
            <Award size={14} /> 50-Year Ancestral Legacy
          </span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #ffffff 25%, #ffd700 70%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}
        >
          Guiding You by the Stars.
        </h1>

        <p
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            color: '#fbbf24',
            fontWeight: 600,
            letterSpacing: '0.04em',
            marginBottom: '1.25rem',
          }}
        >
          Your Destiny. Your Direction. Your North Star.
        </p>

        <p
          style={{
            maxWidth: '720px',
            margin: '0 auto 1.75rem',
            fontSize: '1.08rem',
            color: '#cbd5e1',
            lineHeight: 1.75,
          }}
        >
          Jaise raat ke ghane andhere mein <strong style={{ color: '#ffd700' }}>Dhruv Tara (North Star)</strong> bhatke hue yatriyon ko sahi rasta dikhata hai, bilkul waise hi North Star Astro ka purpose life ke confusion aur uncertainty mein direction dena hai.
        </p>

        {/* Brand Promise Callout */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '680px',
            margin: '0 auto 2.25rem',
            padding: '1.25rem 1.75rem',
            border: '1px solid rgba(255, 215, 0, 0.35)',
            background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.08) 0%, rgba(15, 23, 42, 0.8) 100%)',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: '#ffd700', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}>
            Our Brand Promise
          </span>
          <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: '#f8fafc', fontWeight: 600, lineHeight: 1.4 }}>
            “Aapko future se darana nahi — aapko apni direction samajhne mein help karna.”
          </p>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.4rem' }}>
            Astrology not as fear-based prediction, but as a practical framework for self-understanding, conscious timing, and empowered choices.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/services" className="btn-primary" style={{ textDecoration: 'none' }}>
            <Compass size={18} /> Book Consultation
          </Link>
          <Link to="/about" className="btn-secondary" style={{ textDecoration: 'none' }}>
            <span>Our Story & Philosophy</span>
            <ArrowRight size={16} />
          </Link>
          <Link to="/learn-astrology" className="btn-secondary" style={{ textDecoration: 'none' }}>
            <BookOpen size={16} />
            <span>Learn Astrology</span>
          </Link>
        </div>
      </section>

      {/* 2. Authority & Founder Spotlight */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div
          className="glass-panel"
          style={{
            padding: '2.5rem',
            background: 'linear-gradient(135deg, rgba(20, 26, 54, 0.8) 0%, rgba(11, 15, 28, 0.95) 100%)',
            border: '1px solid rgba(255, 215, 0, 0.25)',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="badge badge-gold">Foundational Authority</span>
                <span className="badge badge-cyan">Acharya Prateek Shastri</span>
              </div>
              <h2 style={{ fontSize: '1.9rem', color: '#f8fafc', marginBottom: '1rem', lineHeight: 1.25 }}>
                Ancestral Legacy Meets 15 Years of Elite Precision
              </h2>
              <p style={{ color: '#cbd5e1', lineHeight: 1.75, marginBottom: '1rem', fontSize: '0.98rem' }}>
                North Star Astro apni <strong>50 saal ki ancestral legacy</strong> aur <strong>Acharya Prateek Shastri</strong> ki <strong>15 saal ki expertise</strong> ko apni authority ka foundation maanta hai.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.92rem' }}>
                Yeh expertise pehle high-profile clients—celebrities, politicians aur business executives—tak seemit thi. North Star Astro ka next chapter ise <em>aam logon tak accessible banana hai</em>, delivering elite astrological clarity without fear or commercial exploitation.
              </p>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ borderLeft: '3px solid #ffd700', paddingLeft: '0.75rem' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffd700' }}>50+ Yrs</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase' }}>Ancestral Legacy</div>
                </div>
                <div style={{ borderLeft: '3px solid #38bdf8', paddingLeft: '0.75rem' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#38bdf8' }}>15+ Yrs</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase' }}>Acharya's Mastery</div>
                </div>
                <div style={{ borderLeft: '3px solid #c084fc', paddingLeft: '0.75rem' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#c084fc' }}>100%</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase' }}>Ethical Guidance</div>
                </div>
              </div>
            </div>

            <div
              style={{
                background: 'rgba(0, 0, 0, 0.35)',
                padding: '2rem',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <h3 style={{ fontSize: '1.15rem', color: '#ffd700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={20} color="#ffd700" /> Brand Personality Pillars
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                Authoritative yet not intimidating. Spiritual depth without blind superstition. A knowledgeable, calm, premium and practical guide.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {[
                  { title: 'Wise & Grounded', desc: 'Classical Shastra depth' },
                  { title: 'Precise', desc: 'Exact Dasha & transit timing' },
                  { title: 'Spiritual', desc: 'Karmic clarity & soul growth' },
                  { title: 'Modern', desc: 'Clear Hinglish & English' },
                  { title: 'Trustworthy', desc: 'Zero fear mongering' },
                  { title: 'Empowering', desc: 'Conscious action focus' },
                ].map((item, idx) => (
                  <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.65rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc' }}>{item.title}</div>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Brand Message Banner */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div
          className="glass-panel"
          style={{
            padding: '2.25rem 2rem',
            textAlign: 'center',
            background: 'linear-gradient(90deg, rgba(245, 158, 11, 0.12) 0%, rgba(147, 51, 234, 0.15) 50%, rgba(56, 189, 248, 0.12) 100%)',
            border: '1px solid rgba(255, 215, 0, 0.3)',
          }}
        >
          <span style={{ fontSize: '0.78rem', color: '#ffd700', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
            Core Brand Philosophy
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
              color: '#f8fafc',
              fontWeight: 700,
              maxWidth: '850px',
              margin: '0 auto 0.75rem',
              lineHeight: 1.3,
            }}
          >
            “The stars may indicate the path, but conscious action creates the journey.”
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1rem', maxWidth: '650px', margin: '0 auto' }}>
            Astrology should not make you dependent on predictions. It should make you deeply aware of patterns, timing, and choices.
          </p>
        </div>
      </section>

      {/* 4. Brand Positioning: Traditional Astrology vs North Star Astro */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>The North Star Difference</span>
          <h2 style={{ fontSize: '2rem', color: '#f8fafc' }}>Traditional Astrology vs North Star Astro</h2>
          <p style={{ color: '#94a3b8', maxWidth: '620px', margin: '0.5rem auto 0', fontSize: '0.95rem' }}>
            Discover how we redefine astrological guidance from mystery and fear into conscious awareness and empowerment.
          </p>
        </div>

        <div className="glass-panel" style={{ overflow: 'hidden', padding: '1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '0.5rem', padding: '0.75rem 1rem', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '12px' }}>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <XCircle size={18} /> Traditional Astrology
            </div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={18} /> North Star Astro Approach
            </div>
          </div>

          {[
            {
              traditional: 'Generic sun-sign horoscopes and cookie-cutter claims',
              northstar: 'Personalised chart-based guidance & individual Kundli context',
            },
            {
              traditional: 'Fear, superstition & dread of malefic doshas',
              northstar: 'Understanding, awareness & psychological clarity',
            },
            {
              traditional: 'Passive waiting for fatalistic future predictions',
              northstar: 'Direction, timing & proactive self-understanding',
            },
            {
              traditional: 'Complex, intimidating Sanskrit jargon',
              northstar: 'Simple, practical communication in modern Hinglish / English',
            },
            {
              traditional: 'Astrology treated as an exclusive, gatekept mystery',
              northstar: 'Astrology as an empowering learning journey for the seeker',
            },
          ].map((row, index) => (
            <div
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                padding: '1rem',
                borderBottom: index < 4 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
                background: index % 2 === 0 ? 'rgba(255, 255, 255, 0.015)' : 'transparent',
                borderRadius: '8px',
              }}
            >
              <div style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.5, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#f87171', fontSize: '1rem', lineHeight: 1 }}>•</span>
                {row.traditional}
              </div>
              <div style={{ color: '#f8fafc', fontSize: '0.92rem', lineHeight: 1.5, fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#34d399', fontSize: '1.1rem', lineHeight: 1 }}>✓</span>
                <strong style={{ color: '#ffd700' }}>{row.northstar}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. The Four Brand Content Pillars */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="badge badge-purple" style={{ marginBottom: '0.5rem' }}>Masterplan Architecture</span>
            <h2 style={{ fontSize: '1.9rem', color: '#f8fafc' }}>The 4 Core Content & Consultation Pillars</h2>
          </div>
          <Link to="/services" style={{ color: '#ffd700', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            Explore All Services <ArrowRight size={16} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {/* Pillar 1 */}
          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(251, 191, 36, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#fbbf24' }}>
              <TrendingUp size={24} />
            </div>
            <span style={{ fontSize: '0.72rem', color: '#ffd700', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>Pillar 1</span>
            <h3 style={{ fontSize: '1.25rem', marginTop: '0.2rem', marginBottom: '0.5rem', color: '#f8fafc' }}>Wealth & Career</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Wealth yogas, Rahu ambitions, Shubh Muhurat, the 10th house of profession, and the 11th house of gains & cashflow.
            </p>
            <div style={{ fontSize: '0.78rem', color: '#cbd5e1', background: 'rgba(255, 255, 255, 0.03)', padding: '0.5rem', borderRadius: '6px', marginBottom: '1.25rem' }}>
              Focus: Timing career shifts, business launches, and wealth accumulation yogas.
            </div>
            <Link to="/services" className="btn-secondary" style={{ textDecoration: 'none', padding: '0.45rem 1rem', fontSize: '0.85rem' }}>
              Career Readings
            </Link>
          </div>

          {/* Pillar 2 */}
          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(244, 63, 94, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#f43f5e' }}>
              <Heart size={24} />
            </div>
            <span style={{ fontSize: '0.72rem', color: '#f43f5e', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>Pillar 2</span>
            <h3 style={{ fontSize: '1.25rem', marginTop: '0.2rem', marginBottom: '0.5rem', color: '#f8fafc' }}>Relationships & Harmony</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Authentic Kundli matchmaking, demystifying Manglik Dosha, Moon sign emotional alignment, and resolving Ketu detachments.
            </p>
            <div style={{ fontSize: '0.78rem', color: '#cbd5e1', background: 'rgba(255, 255, 255, 0.03)', padding: '0.5rem', borderRadius: '6px', marginBottom: '1.25rem' }}>
              Focus: Deep emotional compatibility beyond superficial scorecards.
            </div>
            <Link to="/services" className="btn-secondary" style={{ textDecoration: 'none', padding: '0.45rem 1rem', fontSize: '0.85rem' }}>
              Marriage Guidance
            </Link>
          </div>

          {/* Pillar 3 */}
          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(192, 132, 252, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#c084fc' }}>
              <Home size={24} />
            </div>
            <span style={{ fontSize: '0.72rem', color: '#c084fc', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>Pillar 3</span>
            <h3 style={{ fontSize: '1.25rem', marginTop: '0.2rem', marginBottom: '0.5rem', color: '#f8fafc' }}>Vastu, Sade Sati & Dashas</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Workspace and home Vastu, navigating the 3 phases of Shani Sade Sati, Mahadashas, Antardashas, and retrograde planets (Vakri Grahas).
            </p>
            <div style={{ fontSize: '0.78rem', color: '#cbd5e1', background: 'rgba(255, 255, 255, 0.03)', padding: '0.5rem', borderRadius: '6px', marginBottom: '1.25rem' }}>
              Focus: Transforming challenging transits into personal breakthroughs.
            </div>
            <Link to="/karma-correction" className="btn-secondary" style={{ textDecoration: 'none', padding: '0.45rem 1rem', fontSize: '0.85rem' }}>
              Transit Assessment
            </Link>
          </div>

          {/* Pillar 4 */}
          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#38bdf8' }}>
              <Gem size={24} />
            </div>
            <span style={{ fontSize: '0.72rem', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>Pillar 4</span>
            <h3 style={{ fontSize: '1.25rem', marginTop: '0.2rem', marginBottom: '0.5rem', color: '#f8fafc' }}>Remedies & Navamsha</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Scientific gemstone prescription, D9 Navamsha soul analysis, 8th house transformation, and practical daily lifestyle remedies.
            </p>
            <div style={{ fontSize: '0.78rem', color: '#cbd5e1', background: 'rgba(255, 255, 255, 0.03)', padding: '0.5rem', borderRadius: '6px', marginBottom: '1.25rem' }}>
              Focus: Non-exploitative, satvik remediations aligned with your birth chart.
            </div>
            <Link to="/services" className="btn-secondary" style={{ textDecoration: 'none', padding: '0.45rem 1rem', fontSize: '0.85rem' }}>
              Remedies Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Vision Spotlight: Har Ghar Mein Ek Astrologer Ho */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div
          className="glass-panel"
          style={{
            padding: '2.5rem',
            background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)',
            border: '1px solid rgba(168, 85, 247, 0.35)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span className="badge badge-purple">Our Long-Term Vision</span>
              <Users size={16} color="#c084fc" />
            </div>
            <h2 style={{ fontSize: '2rem', color: '#f8fafc', marginBottom: '1rem' }}>
              “Har Ghar Mein Ek Astrologer Ho.”
            </h2>
            <p style={{ color: '#cbd5e1', lineHeight: 1.7, marginBottom: '1.25rem', fontSize: '0.98rem' }}>
              Our vision is that in every family, at least one person can understand their own and their loved ones’ <strong>Dasha and transits</strong> at a basic level.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '1.75rem', fontSize: '0.92rem' }}>
              When people understand their timing, natural tendencies, and karmic patterns, they make conscious choices instead of operating only through fear, confusion, or guesswork. Astrology moves from an exclusive, intimidating mystery to practical daily awareness.
            </p>
            <Link to="/learn-astrology" className="btn-primary" style={{ textDecoration: 'none' }}>
              <BookOpen size={16} /> Explore Learning Academy
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <h4 style={{ color: '#ffd700', fontSize: '1rem', marginBottom: '0.35rem' }}>Demystifying Dashas & Transits</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5 }}>
                Learn how planetary periods affect focus, energy, and decision-making for you and your family.
              </p>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <h4 style={{ color: '#38bdf8', fontSize: '1rem', marginBottom: '0.35rem' }}>Challenging Fear & Superstition</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5 }}>
                Replace blind rituals and anxieties with classical scriptural logic and empowering self-awareness.
              </p>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <h4 style={{ color: '#4ade80', fontSize: '1rem', marginBottom: '0.35rem' }}>Practical Family Guidance</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5 }}>
                Navigate children's education, career crossroads, and health timing with ancient Vedic insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Zodiac Constellation Explorer */}
      <section style={{ marginBottom: '2.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Astrological Awareness</span>
          <h2 style={{ fontSize: '1.9rem', color: '#f8fafc' }}>Zodiac Constellations (राशि चक्र)</h2>
          <p style={{ color: '#94a3b8', maxWidth: '620px', margin: '0.5rem auto 0', fontSize: '0.95rem' }}>
            Decode your cosmic tendencies. Every sign represents a unique karmic field for conscious action and growth.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {/* Left: Constellation Grid */}
          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffd700' }}>
                <Sun size={20} color="#ffd700" />
                Select Your Rashi
              </h3>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>12 Solar Archetypes</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              {ZODIAC_SIGNS.map((sign) => {
                const isSelected = sign.id === selectedZodiac.id
                return (
                  <button
                    key={sign.id}
                    onClick={() => setSelectedZodiac(sign)}
                    style={{
                      background: isSelected
                        ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.22) 0%, rgba(245, 158, 11, 0.15) 100%)'
                        : 'rgba(255, 255, 255, 0.03)',
                      border: isSelected ? '1px solid #ffd700' : '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '12px',
                      padding: '0.85rem 0.5rem',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      transform: isSelected ? 'scale(1.03)' : 'scale(1)',
                    }}
                  >
                    <span style={{ display: 'block', fontSize: '1.5rem', marginBottom: '0.2rem' }}>
                      {sign.symbol}
                    </span>
                    <span style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', color: isSelected ? '#ffd700' : '#f8fafc' }}>
                      {sign.name}
                    </span>
                    <span style={{ display: 'block', fontSize: '0.68rem', color: '#94a3b8' }}>
                      {sign.dates}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right: Selected Sign Oracle Reading */}
          <div
            className="glass-panel"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(180deg, rgba(24, 29, 58, 0.85) 0%, rgba(11, 15, 28, 0.95) 100%)',
              border: '1px solid rgba(255, 215, 0, 0.25)',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <div style={{ fontSize: '3rem', lineHeight: 1, marginBottom: '0.5rem' }}>
                    {selectedZodiac.symbol}
                  </div>
                  <h2 style={{ fontSize: '1.8rem', color: '#f8fafc', marginBottom: '0.2rem' }}>
                    {selectedZodiac.name}
                  </h2>
                  <p style={{ color: '#ffd700', fontSize: '0.95rem', fontWeight: 500 }}>
                    {selectedZodiac.sanskrit}
                  </p>
                </div>
                <div>{getElementBadge(selectedZodiac.element)}</div>
              </div>

              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  padding: '1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  marginBottom: '1.5rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                }}
              >
                <div>
                  <span style={{ display: 'block', fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>
                    Planetary Ruler
                  </span>
                  <strong style={{ fontSize: '0.92rem', color: '#f8fafc' }}>
                    {selectedZodiac.ruler}
                  </strong>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>
                    Sun Period
                  </span>
                  <strong style={{ fontSize: '0.92rem', color: '#f8fafc' }}>
                    {selectedZodiac.dates}
                  </strong>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ffd700', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Star size={14} /> Conscious Direction & Awareness
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: 1.65 }}>
                  "{selectedZodiac.reading}"
                </p>
              </div>
            </div>

            <div
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                Guiding You by the Stars • North Star Astro
              </span>
              <Link
                to="/services"
                className="btn-secondary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', textDecoration: 'none' }}
              >
                Detailed Reading <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
