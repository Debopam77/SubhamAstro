import React from 'react'
import { PageHeader } from '../components/PageHeader'
import { Repeat, ShieldCheck, Heart, Sparkles, ArrowRight, Award } from 'lucide-react'
import { Link } from '../context/RouterContext'

export const KarmaCorrectionPage: React.FC = () => {
  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        title="Karma Correction & Conscious Action"
        subtitle="“The stars may indicate the path, but conscious action creates the journey.” — Discover the Vedic science of karmic realignment."
        tag="Spiritual Remediation & Direction"
        icon={<Repeat size={24} />}
      />

      {/* Brand Promise Banner */}
      <div
        className="glass-panel"
        style={{
          padding: '1.75rem 2rem',
          marginBottom: '3rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.08) 0%, rgba(15, 23, 42, 0.85) 100%)',
          border: '1px solid rgba(255, 215, 0, 0.3)',
        }}
      >
        <span style={{ fontSize: '0.75rem', color: '#ffd700', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
          North Star Astro Principle
        </span>
        <h3 style={{ fontSize: '1.35rem', color: '#f8fafc', margin: '0.35rem 0 0.5rem', fontWeight: 600 }}>
          “Aapko future se darana nahi — aapko apni direction samajhne mein help karna.”
        </h3>
        <p style={{ color: '#cbd5e1', fontSize: '0.92rem', maxWidth: '750px', margin: '0 auto' }}>
          Karma is not a fatalistic punishment; it is a cosmic feedback loop. With accurate planetary timing and conscious choices, even challenging karmic cycles become your greatest catalysts for wisdom.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div className="glass-panel" style={{ padding: '2.5rem' }}>
          <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>The Four Layers of Karma</span>
          <h2 style={{ fontSize: '1.6rem', color: '#f8fafc', marginBottom: '1.25rem' }}>
            Why Do Repetitive Life Patterns Occur?
          </h2>
          <p style={{ color: '#cbd5e1', lineHeight: 1.8, marginBottom: '1rem' }}>
            Classical Vedic philosophy explains that your life journey is shaped by four distinct layers of action:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.92rem' }}>
              <strong style={{ color: '#ffd700', minWidth: '130px' }}>1. Sanchita:</strong>
              Accumulated storehouse of past actions awaiting maturation across lifetimes.
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.92rem' }}>
              <strong style={{ color: '#ffd700', minWidth: '130px' }}>2. Prarabdha:</strong>
              The portion ripe for fruition in this current lifetime (reflected in your natal Lagna and planetary Dashas).
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.92rem' }}>
              <strong style={{ color: '#38bdf8', minWidth: '130px' }}>3. Kriyamana:</strong>
              <span>Actions being generated <strong>right now through present conscious free will</strong>. This is where your power lies.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.92rem' }}>
              <strong style={{ color: '#ffd700', minWidth: '130px' }}>4. Agama:</strong>
              Future karmas planned in consciousness for upcoming cycles.
            </li>
          </ul>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
              <span>Book Karma Assessment</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn-secondary" style={{ textDecoration: 'none' }}>
              <Award size={16} />
              <span>Acharya's Guidance</span>
            </Link>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8', flexShrink: 0 }}>
              <ShieldCheck size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#f8fafc', marginBottom: '0.35rem' }}>Rinubandhana (Karmic Debts)</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Identify unresolved debts involving family, ancestry (Pitri Rin), or past partnerships, and perform prescribed satvik atonements.
              </p>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(244, 63, 94, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f43f5e', flexShrink: 0 }}>
              <Heart size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#f8fafc', marginBottom: '0.35rem' }}>Dharma Alignment</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Realign your career, speech, and daily deeds to turn difficult planetary dashas into periods of immense spiritual and material growth.
              </p>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(251, 191, 36, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fbbf24', flexShrink: 0 }}>
              <Sparkles size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#f8fafc', marginBottom: '0.35rem' }}>Practical Remedial Science</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Simple, actionable lifestyle corrections and satvik remedies rather than intimidating, prohibitively expensive rituals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
