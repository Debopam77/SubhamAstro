import React from 'react'
import { PageHeader } from '../components/PageHeader'
import { Newspaper, ExternalLink } from 'lucide-react'

interface MediaItem {
  id: string
  outlet: string
  headline: string
  date: string
  category: 'Television' | 'Print' | 'Podcast' | 'Digital'
  summary: string
}

const MEDIA_ITEMS: MediaItem[] = [
  {
    id: '1',
    outlet: 'National News Network',
    headline: 'Understanding Planetary Conjunctions and Global Financial Cycles',
    date: 'February 2026',
    category: 'Television',
    summary: 'Featured interview on how Saturn and Jupiter transits traditionally correlate with macro-economic shifts and currency fluctuations.',
  },
  {
    id: '2',
    outlet: 'The Sunday Chronicle',
    headline: 'Debunking Fear in Astrology: Why Shani Is Not Your Enemy',
    date: 'January 2026',
    category: 'Print',
    summary: 'Full-page op-ed presenting a philosophical re-evaluation of Saturn as the ultimate mentor and equalizer rather than a punisher.',
  },
  {
    id: '3',
    outlet: 'Cosmic Horizons Podcast',
    headline: 'Ep. 48: Navamsha Mysteries and Karmic Blueprints',
    date: 'December 2025',
    category: 'Podcast',
    summary: 'An engaging 75-minute deep-dive conversation exploring the D9 chart and its role in revealing one’s soul trajectory.',
  },
  {
    id: '4',
    outlet: 'Spiritual Heritage Weekly',
    headline: 'Astrology for the Modern Skeptic',
    date: 'November 2025',
    category: 'Digital',
    summary: 'Profile feature highlighting our empirical, statistical approaches to Vedic chart interpretation in an era of AI and skepticism.',
  },
]

export const MediaCoveragePage: React.FC = () => {
  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        title="Media Coverage"
        subtitle="Interviews, television appearances, press releases, and investigative features discussing astrology and ancient wisdom."
        tag="Press & Features"
        icon={<Newspaper size={24} />}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {MEDIA_ITEMS.map((item) => (
          <div
            key={item.id}
            className="glass-panel"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge badge-cyan">{item.outlet}</span>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{item.date}</span>
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#f8fafc', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                {item.headline}
              </h3>

              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {item.summary}
              </p>
            </div>

            <button
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => alert(`Opening media release: "${item.headline}"`)}
            >
              <span>View Coverage</span>
              <ExternalLink size={15} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
