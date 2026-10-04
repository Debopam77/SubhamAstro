import React from 'react'
import { PageHeader } from '../components/PageHeader'
import { BookOpen, ExternalLink, Star } from 'lucide-react'

interface Book {
  id: string
  title: string
  subtitle: string
  publishedYear: string
  description: string
  availableOn: string[]
}

const BOOKS: Book[] = [
  {
    id: '1',
    title: 'Planetary Karma & The Destiny Matrix',
    subtitle: 'Decoding Past Life Impressions through the Navamsha & D60 Chart',
    publishedYear: '2024',
    description: 'A comprehensive exposition on the esoteric mechanisms through which Prarabdha and Sanchita karma manifest across the twelve houses of the horoscope.',
    availableOn: ['Amazon Kindle', 'Paperback', 'Barnes & Noble'],
  },
  {
    id: '2',
    title: 'The Modern Prashna Shastra Guide',
    subtitle: 'Horary Astrology for Instant Decision Making',
    publishedYear: '2023',
    description: 'A practical handbook simplifying the classical principles of Daivajna Neelakantha for contemporary query resolution without accurate birth certificates.',
    availableOn: ['Amazon Kindle', 'Hardcover'],
  },
  {
    id: '3',
    title: 'Remedies of the Ancient Seers',
    subtitle: 'Practical Vedic Solutions for Real-World Peace and Prosperity',
    publishedYear: '2022',
    description: 'De-mystifying superstitious astrology with easy-to-follow planetary remedies, lifestyle realignment, and Vedic behavioral science.',
    availableOn: ['Amazon Kindle', 'Paperback'],
  },
]

export const PublicationsPage: React.FC = () => {
  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        title="Books & Publications"
        subtitle="Explore scholarly treatises, practical guides, and authored literature on Vedic astrological science."
        tag="Authored Works"
        icon={<BookOpen size={24} />}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {BOOKS.map((book) => (
          <div
            key={book.id}
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
                <span className="badge badge-gold" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Star size={12} /> Published {book.publishedYear}
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', color: '#f8fafc', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                {book.title}
              </h3>
              <p style={{ color: '#ffd700', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 500 }}>
                {book.subtitle}
              </p>

              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {book.description}
              </p>
            </div>

            <div>
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                  Available Formats
                </span>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {book.availableOn.map((platform) => (
                    <span
                      key={platform}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '6px',
                        padding: '0.25rem 0.6rem',
                        fontSize: '0.78rem',
                        color: '#cbd5e1',
                      }}
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              <button
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => alert(`Redirecting to publication details for: ${book.title}`)}
              >
                <span>Order Copy</span>
                <ExternalLink size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
