import React from 'react'
import { PageHeader } from '../components/PageHeader'
import { FileText, Calendar, Clock, ArrowRight } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  date: string
  readTime: string
  category: string
  excerpt: string
}

const POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Retrograde Planets (Vakri Grahas): Hidden Blessings or Life Delays?',
    date: 'Sep 2, 2026',
    readTime: '6 min read',
    category: 'Planetary Theory',
    excerpt: 'When planets appear to move backward from our terrestrial vantage point, their energy intensifies inward. Here is how Mercury, Venus, Mars, and Jupiter retrogrades actually work.',
  },
  {
    id: '2',
    title: 'Understanding Sade Sati: A 7.5-Year Period of Radical Transformation',
    date: 'Aug 24, 2026',
    readTime: '8 min read',
    category: 'Saturn Transit',
    excerpt: 'Sade Sati is widely feared, but ancient classical texts praise it as the greatest purifier of human character. Learn about the three distinct phases and practical remedies.',
  },
  {
    id: '3',
    title: 'The Role of the D9 Navamsha Chart in Marriage and Soul Purpose',
    date: 'Aug 12, 2026',
    readTime: '7 min read',
    category: 'Kundli Analysis',
    excerpt: 'While the Rashi chart represents the tree of life, the Navamsha is the hidden fruit. Discover how to evaluate your Navamsha Lagna and 7th house for marriage longevity.',
  },
  {
    id: '4',
    title: 'Vedic Gemology 101: Why You Should Never Wear Gemstones Blindly',
    date: 'Jul 28, 2026',
    readTime: '5 min read',
    category: 'Remedies',
    excerpt: 'Wearing a gemstone for an afflicted functional malefic can amplify your hardships rather than heal them. Essential rules every astrology seeker must follow.',
  },
]

export const BlogsPage: React.FC = () => {
  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        title="Astrological Insights & Articles"
        subtitle="Explore in-depth articles on Vedic astrological principles, transits, planetary remedies, and spiritual philosophy."
        tag="Cosmic Journal"
        icon={<FileText size={24} />}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {POSTS.map((post) => (
          <article
            key={post.id}
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
                <span className="badge badge-purple">{post.category}</span>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={12} /> {post.readTime}
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#f8fafc', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                {post.title}
              </h3>

              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {post.excerpt}
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#64748b', marginBottom: '1.25rem' }}>
                <Calendar size={13} /> {post.date}
              </div>

              <button
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => alert(`Opening article: "${post.title}"`)}
              >
                <span>Read Full Article</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
