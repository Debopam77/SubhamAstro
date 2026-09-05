import React, { useState } from 'react'
import {
  Sparkles,
  Compass,
  Sun,
  Moon,
  Flame,
  Droplets,
  Wind,
  Mountain,
  ChevronRight,
  Star,
  Layers,
  ArrowRight
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
    reading: 'Dynamic cosmic energy surrounds your endeavors today. Take bold, pioneering steps toward your aspirations.',
  },
  {
    id: 'taurus',
    name: 'Taurus',
    sanskrit: 'Vrishabha (वृषभ)',
    dates: 'Apr 20 - May 20',
    element: 'Earth',
    ruler: 'Venus (Shukra)',
    symbol: '♉',
    reading: 'Ground your visions in patient discipline. Harmony in relationships and financial clarity will blossom.',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    sanskrit: 'Mithuna (मिथुन)',
    dates: 'May 21 - Jun 20',
    element: 'Air',
    ruler: 'Mercury (Budha)',
    symbol: '♊',
    reading: 'Your intellect is sharp and curious. An unexpected conversation may unlock new creative avenues.',
  },
  {
    id: 'cancer',
    name: 'Cancer',
    sanskrit: 'Karka (कर्क)',
    dates: 'Jun 21 - Jul 22',
    element: 'Water',
    ruler: 'Moon (Chandra)',
    symbol: '♋',
    reading: 'Nurture your inner sanctuary. Intuition runs exceptionally deep; listen to subtle cosmic whispers.',
  },
  {
    id: 'leo',
    name: 'Leo',
    sanskrit: 'Simha (सिंह)',
    dates: 'Jul 23 - Aug 22',
    element: 'Fire',
    ruler: 'Sun (Surya)',
    symbol: '♌',
    reading: 'Radiate generosity and quiet confidence. Solar vitality propels your leadership and creative endeavors.',
  },
  {
    id: 'virgo',
    name: 'Virgo',
    sanskrit: 'Kanya (कन्या)',
    dates: 'Aug 23 - Sep 22',
    element: 'Earth',
    ruler: 'Mercury (Budha)',
    symbol: '♍',
    reading: 'Refinement and mindful attention to detail yield satisfying progress in both wellness and projects.',
  },
  {
    id: 'libra',
    name: 'Libra',
    sanskrit: 'Tula (तुला)',
    dates: 'Sep 23 - Oct 22',
    element: 'Air',
    ruler: 'Venus (Shukra)',
    symbol: '♎',
    reading: 'Seek equilibrium in decision making. Aesthetic balance and diplomatic grace guide your path.',
  },
  {
    id: 'scorpio',
    name: 'Scorpio',
    sanskrit: 'Vrischika (वृश्चिक)',
    dates: 'Oct 23 - Nov 21',
    element: 'Water',
    ruler: 'Mars & Ketu',
    symbol: '♏',
    reading: 'Profound transformation is taking root. Trust the shedding of old layers for rebirth of purpose.',
  },
  {
    id: 'sagittarius',
    name: 'Sagittarius',
    sanskrit: 'Dhanu (धनु)',
    dates: 'Nov 22 - Dec 21',
    element: 'Fire',
    ruler: 'Jupiter (Brihaspati)',
    symbol: '♐',
    reading: 'Expansive horizons beckon. Philosophical insight and optimism attract serendipitous guides.',
  },
  {
    id: 'capricorn',
    name: 'Capricorn',
    sanskrit: 'Makara (मकर)',
    dates: 'Dec 22 - Jan 19',
    element: 'Earth',
    ruler: 'Saturn (Shani)',
    symbol: '♑',
    reading: 'Steadfast perseverance is your superpower. Foundations built with integrity will stand eternal.',
  },
  {
    id: 'aquarius',
    name: 'Aquarius',
    sanskrit: 'Kumbha (कुम्भ)',
    dates: 'Jan 20 - Feb 18',
    element: 'Air',
    ruler: 'Saturn & Rahu',
    symbol: '♒',
    reading: 'Visionary thinking connects community and breakthrough technology. Champion collective empowerment.',
  },
  {
    id: 'pisces',
    name: 'Pisces',
    sanskrit: 'Meena (मीन)',
    dates: 'Feb 19 - Mar 20',
    element: 'Water',
    ruler: 'Jupiter (Brihaspati)',
    symbol: '♓',
    reading: 'Ethereal empathy connects you to divine inspiration. Trust the artistic and spiritual currents flowing now.',
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
    <div className="container" style={{ paddingBottom: '3rem' }}>
      {/* Hero Section */}
      <section
        style={{
          textAlign: 'center',
          padding: '3rem 1rem 2.5rem',
          position: 'relative',
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <span className="badge badge-gold">
            <Sparkles size={14} /> Astrological Guidance for Growth
          </span>
          <span className="badge badge-purple">
            <Moon size={14} /> Vedic & Western Wisdom
          </span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #ffffff 25%, #ffd700 70%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
          }}
        >
          Guiding You Through The Stars
        </h1>

        <p
          style={{
            maxWidth: '680px',
            margin: '0 auto 2rem',
            fontSize: '1.1rem',
            color: '#94a3b8',
            lineHeight: 1.7,
          }}
        >
          Discover profound insights into your karma, life path, relationships, and destiny with <strong style={{ color: '#ffd700' }}>SubhamAstro</strong>.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/services" className="btn-primary" style={{ textDecoration: 'none' }}>
            <Compass size={18} /> Book Consultation
          </Link>
          <Link to="/about" className="btn-secondary" style={{ textDecoration: 'none' }}>
            <span>Learn About Us</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Zodiac Constellation Explorer */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {/* Left: Constellation Grid */}
          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffd700' }}>
                <Sun size={20} color="#ffd700" />
                Zodiac Constellations (राशि चक्र)
              </h3>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Select to reveal</span>
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
              background: 'linear-gradient(180deg, rgba(24, 29, 58, 0.8) 0%, rgba(11, 15, 28, 0.95) 100%)',
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
                    Period
                  </span>
                  <strong style={{ fontSize: '0.92rem', color: '#f8fafc' }}>
                    {selectedZodiac.dates}
                  </strong>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ffd700', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Star size={14} /> Daily Cosmic Guidance
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
                Powered by SubhamAstro Engine
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

      {/* Featured Services Preview */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Consultations</span>
            <h2 style={{ fontSize: '1.8rem', color: '#f8fafc' }}>Featured Astrology Services</h2>
          </div>
          <Link to="/services" style={{ color: '#ffd700', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            View All Services <ArrowRight size={16} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(251, 191, 36, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#fbbf24' }}>
              <Sun size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#f8fafc' }}>Career Consultation</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Unlock guidance on career direction, promotions, business transitions, and financial timing based on your 10th house.
            </p>
            <Link to="/services" className="btn-secondary" style={{ textDecoration: 'none', padding: '0.45rem 1rem', fontSize: '0.85rem' }}>
              Learn More
            </Link>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(244, 63, 94, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#f43f5e' }}>
              <Sparkles size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#f8fafc' }}>Marriage Consultation</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              36 Guna Milan compatibility, timing of marriage, partner characteristics, and planetary harmony in marital life.
            </p>
            <Link to="/services" className="btn-secondary" style={{ textDecoration: 'none', padding: '0.45rem 1rem', fontSize: '0.85rem' }}>
              Learn More
            </Link>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(192, 132, 252, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#c084fc' }}>
              <Layers size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#f8fafc' }}>Karma Correction</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Understand your past-life karmic debts (Rinubandhana) and practical remedies to alleviate persistent life blockages.
            </p>
            <Link to="/karma-correction" className="btn-secondary" style={{ textDecoration: 'none', padding: '0.45rem 1rem', fontSize: '0.85rem' }}>
              Explore Karma
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
