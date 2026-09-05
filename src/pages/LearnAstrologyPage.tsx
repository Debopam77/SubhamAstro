import React from 'react'
import { PageHeader } from '../components/PageHeader'
import { GraduationCap, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from '../context/RouterContext'

interface CourseModule {
  id: string
  module: string
  title: string
  duration: string
  priceInr: string
  priceUsd: string
  topics: string[]
}

const MODULES: CourseModule[] = [
  {
    id: '1',
    module: 'Module I',
    title: 'Foundations of Vedic Astrology (Parashari Basics)',
    duration: '6 Months (24 Classes, 48 Hours)',
    priceInr: '₹ 30,551',
    priceUsd: '$500',
    topics: ['12 Rashis & Elements', '9 Grahas & Significations', '12 Bhavas (Houses) Foundations', 'Planetary Aspects (Drishti)'],
  },
  {
    id: '2',
    module: 'Module II',
    title: 'Advanced House Interpretations & Yogas',
    duration: '6 Months (24 Classes, 48 Hours)',
    priceInr: '₹ 42,551',
    priceUsd: '$710',
    topics: ['Raja Yogas & Dhana Yogas', 'Vipareeta & Neecha Bhanga Yogas', 'Dispositor Dynamics', 'Combustion & Retrogression'],
  },
  {
    id: '3',
    module: 'Module III',
    title: 'Dasha Systems & Timing of Life Events',
    duration: '6 Months (24 Classes, 48 Hours)',
    priceInr: '₹ 48,551',
    priceUsd: '$770',
    topics: ['Vimshottari Dasha Mechanics', 'Mahadasha & Antardasha synthesis', 'Transit (Gochar) Overlay', 'Sade Sati & Dhaiya Timing'],
  },
  {
    id: '4',
    module: 'Module IV',
    title: 'Divisional Charts (Vargas & Navamsha)',
    duration: '6 Months (24 Classes, 48 Hours)',
    priceInr: '₹ 45,551',
    priceUsd: '$727',
    topics: ['D9 Navamsha Depth Analysis', 'D10 Dashamsha for Career', 'D7 Saptamsha for Progeny', 'D60 Shashtiamsha for Karma'],
  },
]

export const LearnAstrologyPage: React.FC = () => {
  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        title="Learn Astrology"
        subtitle="Structured masterclasses and comprehensive courses for aspiring astrologers and discerning seekers."
        tag="Academy of Astrology"
        icon={<GraduationCap size={24} />}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {MODULES.map((course) => (
          <div
            key={course.id}
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
                <span className="badge badge-gold">{course.module}</span>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={12} /> {course.duration}
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#f8fafc', marginBottom: '1.25rem', lineHeight: 1.35 }}>
                {course.title}
              </h3>

              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
                  Curriculum Highlights
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {course.topics.map((topic) => (
                    <div key={topic} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                      <CheckCircle size={14} color="#10b981" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '1rem',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                }}
              >
                <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffd700' }}>
                  {course.priceInr}
                  <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 400, marginLeft: '0.5rem' }}>
                    / {course.priceUsd}
                  </span>
                </div>
              </div>

              <Link
                to="/contact"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}
              >
                <span>Enroll in Course</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
