import React, { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { FileText, Calendar, Clock, ArrowRight, TrendingUp, Heart, Home, Gem, Sparkles } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  date: string
  readTime: string
  pillar: 'Wealth & Career' | 'Relationships & Emotional Harmony' | 'Vastu, Sade Sati & Dashas' | 'Remedies, Navamsha & Personal Progress'
  topics: string[]
  excerpt: string
}

const POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Wealth Yogas & the 11th House: Identifying Your Peak Financial Timing',
    date: 'Sep 18, 2026',
    readTime: '6 min read',
    pillar: 'Wealth & Career',
    topics: ['Dhana Yogas', '10th & 11th House', 'Rahu Ambition'],
    excerpt: 'How the alignment of the 2nd, 5th, 9th, and 11th bhavas determines your capacity to generate and preserve wealth. Timing career promotions and business scale-ups with Mahadashas.',
  },
  {
    id: '2',
    title: 'Manglik Dosha Reality Check: Separating Scripture from Superstition',
    date: 'Sep 12, 2026',
    readTime: '7 min read',
    pillar: 'Relationships & Emotional Harmony',
    topics: ['Manglik Dosha Truth', 'Kundli Matchmaking', 'Mars in 7th/8th'],
    excerpt: 'Over 80% of perceived Manglik doshas get cancelled automatically through classical exception rules. Learn why fear has replaced scripture and how genuine compatibility is analyzed.',
  },
  {
    id: '3',
    title: 'The 3 Phases of Shani Sade Sati: A 7.5-Year Period of Radical Transformation',
    date: 'Sep 4, 2026',
    readTime: '8 min read',
    pillar: 'Vastu, Sade Sati & Dashas',
    topics: ['Sade Sati Phases', 'Saturn Transit', 'Mental Resilience'],
    excerpt: 'Sade Sati is widely feared, but ancient classical texts praise it as the greatest purifier of human character. Understand the rising, peak, and setting phases and practical behavioral remedies.',
  },
  {
    id: '4',
    title: 'The D9 Navamsha Chart: Unlocking Your True Soul Fruit & Marriage Longevity',
    date: 'Aug 28, 2026',
    readTime: '7 min read',
    pillar: 'Remedies, Navamsha & Personal Progress',
    topics: ['D9 Navamsha', 'Dharma Lagna', 'Marriage Harmony'],
    excerpt: 'While the D1 Rashi chart represents the tree of life, the Navamsha is the hidden fruit that ripens as you mature. How to read your Navamsha to discover marriage harmony and destiny.',
  },
  {
    id: '5',
    title: 'Workspace Vastu: Aligning Direction, Focus, and Financial Cashflow',
    date: 'Aug 19, 2026',
    readTime: '5 min read',
    pillar: 'Vastu, Sade Sati & Dashas',
    topics: ['Workspace Vastu', 'Kuber Direction', 'Career Energy'],
    excerpt: 'Simple directional adjustments for your home office or desk: why facing North or East boosts analytical sharpness, and how clutter in the Northeast stalls career momentum.',
  },
  {
    id: '6',
    title: 'Vedic Gemology 101: Why You Should Never Wear Gemstones Blindly',
    date: 'Aug 10, 2026',
    readTime: '6 min read',
    pillar: 'Remedies, Navamsha & Personal Progress',
    topics: ['Gemstone Science', 'Functional Malefics', 'Satvik Upaya'],
    excerpt: 'Wearing a gemstone for an afflicted functional malefic can amplify your hardships rather than heal them. Essential scripture-based principles every astrology seeker must follow.',
  },
  {
    id: '7',
    title: 'Retrograde Planets (Vakri Grahas): Hidden Blessings or Karmic Delays?',
    date: 'Jul 29, 2026',
    readTime: '6 min read',
    pillar: 'Vastu, Sade Sati & Dashas',
    topics: ['Vakri Grahas', 'Retrogrades', '8th House Shifts'],
    excerpt: 'When planets appear to move backward from our terrestrial vantage point, their energy intensifies inward. How Mercury, Venus, Mars, and Jupiter retrogrades trigger introspection.',
  },
  {
    id: '8',
    title: 'Moon Sign & Emotional Harmony: The Foundation of Conscious Relationships',
    date: 'Jul 15, 2026',
    readTime: '5 min read',
    pillar: 'Relationships & Emotional Harmony',
    topics: ['Moon Sign', 'Ketu Detachment', 'Emotional Needs'],
    excerpt: 'Sun signs show outer persona, but the Moon reveals how you process fear, affection, and stress. Why matching Moon signs brings emotional peace and stability.',
  },
]

export const BlogsPage: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<string>('All')

  const pillars = [
    'All',
    'Wealth & Career',
    'Relationships & Emotional Harmony',
    'Vastu, Sade Sati & Dashas',
    'Remedies, Navamsha & Personal Progress',
  ]

  const filteredPosts =
    selectedPillar === 'All'
      ? POSTS
      : POSTS.filter((post) => post.pillar === selectedPillar)

  const getPillarIcon = (pillar: BlogPost['pillar']) => {
    switch (pillar) {
      case 'Wealth & Career':
        return <TrendingUp size={14} color="#ffd700" />
      case 'Relationships & Emotional Harmony':
        return <Heart size={14} color="#f43f5e" />
      case 'Vastu, Sade Sati & Dashas':
        return <Home size={14} color="#c084fc" />
      case 'Remedies, Navamsha & Personal Progress':
        return <Gem size={14} color="#38bdf8" />
    }
  }

  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        title="Cosmic Knowledge & Insights"
        subtitle="Organized across North Star Astro’s 4 Core Brand Pillars: Wealth & Career, Relationships, Vastu & Dashas, and Remedies & Navamsha."
        tag="Brand Content Masterplan"
        icon={<FileText size={24} />}
      />

      {/* Philosophy Header Note */}
      <div
        className="glass-panel"
        style={{
          padding: '1.25rem 1.75rem',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.06) 0%, rgba(15, 23, 42, 0.8) 100%)',
          border: '1px solid rgba(255, 215, 0, 0.2)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Sparkles size={20} color="#ffd700" />
          <span style={{ fontSize: '0.92rem', color: '#cbd5e1' }}>
            <strong>Our Editorial Standard:</strong> “Decode the Stars. Discover Your Path.” No fear, no sensationalism — only authentic scriptural logic and practical awareness.
          </span>
        </div>
      </div>

      {/* 4 Pillars Filter Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        {pillars.map((pillar) => {
          const isActive = selectedPillar === pillar
          return (
            <button
              key={pillar}
              onClick={() => setSelectedPillar(pillar)}
              style={{
                background: isActive ? 'linear-gradient(135deg, #ffd700 0%, #f59e0b 100%)' : 'rgba(255, 255, 255, 0.05)',
                color: isActive ? '#070913' : '#cbd5e1',
                border: isActive ? '1px solid #ffd700' : '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {pillar}
            </button>
          )
        })}
      </div>

      {/* Posts Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {filteredPosts.map((post) => (
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                <span className="badge badge-purple" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem' }}>
                  {getPillarIcon(post.pillar)} {post.pillar}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={12} /> {post.readTime}
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#f8fafc', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                {post.title}
              </h3>

              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {post.excerpt}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
                {post.topics.map((t) => (
                  <span key={t} style={{ fontSize: '0.72rem', background: 'rgba(255, 255, 255, 0.04)', color: '#cbd5e1', padding: '0.2rem 0.6rem', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#64748b', marginBottom: '1.25rem' }}>
                <Calendar size={13} /> {post.date}
              </div>

              <button
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => alert(`Reading article: "${post.title}"\nAligned with North Star Astro Masterplan.`)}
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
