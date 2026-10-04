import React from 'react'
import { PageHeader } from '../components/PageHeader'
import { GraduationCap, Clock, CheckCircle, ArrowRight, Users, Sparkles, BookOpen, ShieldCheck } from 'lucide-react'
import { Link } from '../context/RouterContext'

interface CourseModule {
  id: string
  module: string
  title: string
  duration: string
  priceInr: string
  priceUsd: string
  topics: string[]
  highlight: string
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
    highlight: 'Build the bedrock of authentic chart reading without fear or superstition.',
  },
  {
    id: '2',
    module: 'Module II',
    title: 'House Interpretations & Planetary Yogas',
    duration: '6 Months (24 Classes, 48 Hours)',
    priceInr: '₹ 42,551',
    priceUsd: '$710',
    topics: ['Raja Yogas & Dhana (Wealth) Yogas', 'Vipareeta & Neecha Bhanga Yogas', 'Dispositor Dynamics', 'Combustion & Retrogression (Vakri Grahas)'],
    highlight: 'Identify true life strengths, career inclinations, and wealth patterns.',
  },
  {
    id: '3',
    module: 'Module III',
    title: 'Dasha Systems & Timing of Life Events',
    duration: '6 Months (24 Classes, 48 Hours)',
    priceInr: '₹ 48,551',
    priceUsd: '$770',
    topics: ['Vimshottari Dasha Mechanics', 'Mahadasha & Antardasha synthesis', 'Transit (Gochar) Overlay', 'Sade Sati & Dhaiya Timing'],
    highlight: 'Core to our vision: Know when to act and when to endure with patience.',
  },
  {
    id: '4',
    module: 'Module IV',
    title: 'Divisional Charts & Navamsha (D9) Mastery',
    duration: '6 Months (24 Classes, 48 Hours)',
    priceInr: '₹ 45,551',
    priceUsd: '$727',
    topics: ['D9 Navamsha Depth Analysis', 'D10 Dashamsha for Career', 'D7 Saptamsha for Family', 'Practical Ethical Remedial Measures'],
    highlight: 'Decode marriage longevity, spiritual dharma, and deeper karmic roots.',
  },
]

export const LearnAstrologyPage: React.FC = () => {
  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        title="Learn Vedic Astrology"
        subtitle="“Decode the Stars. Discover Your Path.” — Structured courses under Acharya Prateek Shastri rooted in 50 years of ancestral legacy."
        tag="Har Ghar Mein Ek Astrologer Ho"
        icon={<GraduationCap size={24} />}
      />

      {/* Vision Feature Box */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div
          className="glass-panel"
          style={{
            padding: '2.5rem',
            background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%)',
            border: '1px solid rgba(255, 215, 0, 0.3)',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="badge badge-purple">Our Guiding Vision</span>
                <span className="badge badge-gold">Har Ghar Mein Ek Astrologer Ho</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', color: '#f8fafc', marginBottom: '1rem', lineHeight: 1.3 }}>
                Empowering Families Through Practical Cosmic Awareness
              </h2>
              <p style={{ color: '#cbd5e1', lineHeight: 1.75, marginBottom: '1rem', fontSize: '0.96rem' }}>
                North Star Astro ka long-term vision hai ki <strong>har family mein kam se kam ek person apni aur apne loved ones ki Dasha aur transits ko basic level par samajh sake</strong>.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.92rem' }}>
                Is vision ka objective astrology ko exclusive knowledge aur mysterious fear se nikaal kar practical awareness ke closer lana hai. When people understand their timing, tendencies and karmic patterns, they can make conscious choices instead of operating only through fear, confusion or guesswork.
              </p>
            </div>

            <div style={{ background: 'rgba(0, 0, 0, 0.35)', padding: '1.75rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <h4 style={{ color: '#ffd700', fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={18} /> What You Will Experience
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.88rem' }}>
                  <ShieldCheck size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Zero Fear Mongering:</strong> Understand the classical rationale behind retrograde planets, Sade Sati, and Dashas.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.88rem' }}>
                  <Users size={16} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Family Chart Mastery:</strong> Confidently guide loved ones through education, career, and relationship milestones.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.88rem' }}>
                  <BookOpen size={16} color="#c084fc" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Accessible Hinglish & English:</strong> Clear conceptual teaching, avoiding unnecessary and intimidating Sanskrit jargon.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Curriculum Modules</span>
          <h2 style={{ fontSize: '1.9rem', color: '#f8fafc' }}>Comprehensive Masterclass Modules</h2>
          <p style={{ color: '#94a3b8', maxWidth: '620px', margin: '0.5rem auto 0', fontSize: '0.95rem' }}>
            Structured progressive learning designed by Acharya Prateek Shastri from foundational principles to advanced predictive timing.
          </p>
        </div>

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

                <h3 style={{ fontSize: '1.25rem', color: '#f8fafc', marginBottom: '0.65rem', lineHeight: 1.35 }}>
                  {course.title}
                </h3>

                <p style={{ color: '#fbbf24', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1.25rem', fontStyle: 'italic' }}>
                  "{course.highlight}"
                </p>

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
      </section>

      {/* Quote Banner */}
      <section>
        <div
          className="glass-panel"
          style={{
            padding: '2rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(20, 26, 54, 0.9) 0%, rgba(11, 15, 28, 0.95) 100%)',
            border: '1px solid rgba(255, 215, 0, 0.25)',
          }}
        >
          <p style={{ fontSize: '1.15rem', color: '#ffd700', fontWeight: 600, fontStyle: 'italic', marginBottom: '0.5rem' }}>
            “The stars may indicate the path, but conscious action creates the journey.”
          </p>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
            Empower yourself and your loved ones with timeless Vedic literacy.
          </p>
        </div>
      </section>
    </div>
  )
}
