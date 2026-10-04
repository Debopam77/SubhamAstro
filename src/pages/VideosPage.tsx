import React from 'react'
import { PageHeader } from '../components/PageHeader'
import { Video, Play, Clock, Eye, Sparkles } from 'lucide-react'

interface VideoItem {
  id: string
  title: string
  duration: string
  views: string
  pillar: string
  speaker: string
  description: string
}

const VIDEOS: VideoItem[] = [
  {
    id: '1',
    title: 'How to Read Your Own Kundli: Towards “Har Ghar Mein Ek Astrologer Ho”',
    duration: '58:30',
    views: '280K views',
    pillar: 'Educational Vision',
    speaker: 'Acharya Prateek Shastri',
    description: 'Learn how to interpret your natal Lagna, understand Mahadashas, and track major transits so your family can navigate life decisions with clarity instead of guesswork.',
  },
  {
    id: '2',
    title: 'Wealth Yogas & 10th/11th House: Identifying Career Elevation Timing',
    duration: '45:15',
    views: '165K views',
    pillar: 'Wealth & Career',
    speaker: 'Acharya Prateek Shastri',
    description: 'Detailed discourse on Dhana yogas, Rahu ambitions in the 10th and 11th houses, choosing Shubh Muhurats, and turning professional transitions into massive breakthroughs.',
  },
  {
    id: '3',
    title: 'Manglik Dosha Reality Check: Debunking Fear with Classical Scriptures',
    duration: '38:20',
    views: '142K views',
    pillar: 'Relationships & Harmony',
    speaker: 'Acharya Prateek Shastri',
    description: 'Why 80% of Manglik doshas get cancelled automatically, what classical Parashara texts actually state, and how genuine emotional harmony is evaluated in Kundli matching.',
  },
  {
    id: '4',
    title: 'Sade Sati & Retrograde Planets (Vakri Grahas): Transforming Life Delays',
    duration: '42:15',
    views: '198K views',
    pillar: 'Vastu, Sade Sati & Dashas',
    speaker: 'Acharya Prateek Shastri',
    description: 'A deep-dive into the 3 phases of Saturn’s 7.5-year cycle, retrograde planetary mechanics, workspace Vastu alignments, and developing unshakeable mental fortitude.',
  },
  {
    id: '5',
    title: 'The D9 Navamsha Chart & Gemstone Science: Real Remedies That Work',
    duration: '34:40',
    views: '115K views',
    pillar: 'Remedies & Navamsha',
    speaker: 'Acharya Prateek Shastri',
    description: 'Why you should never wear gemstones blindly without checking functional benefic status, and how the Navamsha fruit unlocks marriage longevity and spiritual evolution.',
  },
  {
    id: '6',
    title: 'Rahu & Ketu: The Karmic Axis That Governs Desires and Spiritual Liberation',
    duration: '49:10',
    views: '185K views',
    pillar: 'Karmic Mastery',
    speaker: 'Acharya Prateek Shastri',
    description: 'Mastering worldly pursuits while honoring internal detachment. Practical daily remediations to align your soul with its highest destiny.',
  },
]

export const VideosPage: React.FC = () => {
  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        title="Discourses & Video Masterclasses"
        subtitle="“Decode the Stars. Discover Your Path.” — Watch in-depth discourses by Acharya Prateek Shastri rooted in 50 years of ancestral legacy."
        tag="Watch & Learn"
        icon={<Video size={24} />}
      />

      {/* Ethos Callout */}
      <div
        className="glass-panel"
        style={{
          padding: '1.25rem 1.75rem',
          marginBottom: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.08) 0%, rgba(15, 23, 42, 0.85) 100%)',
          border: '1px solid rgba(255, 215, 0, 0.25)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Sparkles size={20} color="#ffd700" />
          <span style={{ fontSize: '0.92rem', color: '#cbd5e1' }}>
            <strong>Authentic Vedic Discourse:</strong> No fear tactics, no superstition. Practical education to empower your conscious choices.
          </span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {VIDEOS.map((video) => (
          <div
            key={video.id}
            className="glass-panel"
            style={{
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Video preview mock */}
            <div
              style={{
                width: '100%',
                height: '180px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                marginBottom: '1.25rem',
                cursor: 'pointer',
              }}
              onClick={() => alert(`Playing Masterclass: "${video.title}" by ${video.speaker}`)}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ffd700 0%, #ff7b00 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
                }}
              >
                <Play size={24} color="#070913" fill="#070913" style={{ marginLeft: '3px' }} />
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  background: 'rgba(0, 0, 0, 0.75)',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: '#f8fafc',
                }}
              >
                <Clock size={12} /> {video.duration}
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span className="badge badge-purple">{video.pillar}</span>
                <span style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Eye size={12} /> {video.views}
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', color: '#f8fafc', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                {video.title}
              </h3>

              <div style={{ fontSize: '0.78rem', color: '#ffd700', fontWeight: 600, marginBottom: '0.75rem' }}>
                Speaker: {video.speaker}
              </div>

              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {video.description}
              </p>
            </div>

            <button
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => alert(`Playing Masterclass: "${video.title}"`)}
            >
              <Play size={15} /> Watch Masterclass
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
