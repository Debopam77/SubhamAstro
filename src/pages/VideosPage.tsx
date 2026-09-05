import React from 'react'
import { PageHeader } from '../components/PageHeader'
import { Video, Play, Clock, Eye } from 'lucide-react'

interface VideoItem {
  id: string
  title: string
  duration: string
  views: string
  topic: string
  description: string
}

const VIDEOS: VideoItem[] = [
  {
    id: '1',
    title: 'Saturn Transit (Shani Gochar) - Complete Predictions for All 12 Signs',
    duration: '42:15',
    views: '124K views',
    topic: 'Planetary Transits',
    description: 'Detailed analysis of the transformative transit of Saturn, houses affected, and specific dos and don’ts for each rising sign.',
  },
  {
    id: '2',
    title: 'How to Read Your Own Kundli - Beginner to Intermediate Masterclass',
    duration: '58:30',
    views: '280K views',
    topic: 'Vedic Learning',
    description: 'Step-by-step breakdown of Lagna, 12 Bhavas (houses), planetary dignities, aspects (Drishti), and identifying Kendra & Trikona lords.',
  },
  {
    id: '3',
    title: 'Rahu and Ketu: The Karmic Axis That Shapes Your Desires and Liberation',
    duration: '34:10',
    views: '95K views',
    topic: 'Karmic Secrets',
    description: 'Unraveling the mystery of the lunar nodes, eclipse impacts, and how to master your Rahu desire while honoring your Ketu detachment.',
  },
  {
    id: '4',
    title: '5 Common Vedic Astrology Myths Debunked by Classical Scriptures',
    duration: '26:45',
    views: '65K views',
    topic: 'Myths & Remedies',
    description: 'Separating superstition from genuine Parashari principles: Manglik dosha truth, Kaal Sarp yoga realities, and gemstone ethics.',
  },
]

export const VideosPage: React.FC = () => {
  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        title="Video Gallery & Masterclasses"
        subtitle="Watch in-depth discourses, transit analysis, and educational masterclasses on Vedic astrology."
        tag="Watch & Learn"
        icon={<Video size={24} />}
      />

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
              onClick={() => alert(`Playing video: ${video.title}`)}
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
                <span className="badge badge-purple">{video.topic}</span>
                <span style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Eye size={12} /> {video.views}
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', color: '#f8fafc', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                {video.title}
              </h3>

              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {video.description}
              </p>
            </div>

            <button
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => alert(`Playing video: ${video.title}`)}
            >
              <Play size={15} /> Watch Discourse
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
