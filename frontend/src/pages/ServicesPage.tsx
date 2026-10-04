import React from 'react'
import { PageHeader } from '../components/PageHeader'
import { Briefcase, Clock, ArrowRight, Award, CheckCircle } from 'lucide-react'
import { Link } from '../context/RouterContext'

interface ServiceItem {
  id: string
  title: string
  pillar: string
  priceInr: string
  priceUsd: string
  duration: string
  description: string
  deliverables: string[]
  badge: string
}

const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'career',
    title: 'Career & Wealth Consultation',
    pillar: 'Pillar 1: Wealth & Career',
    priceInr: '₹ 8,915',
    priceUsd: '$140',
    duration: 'Max 60 Mins',
    description: 'Detailed analysis of your 10th house of profession, 11th house of financial gains, D10 Dashamsha chart, and timing for career promotions or business expansion.',
    deliverables: ['10th & 11th House Deep Dive', 'Mahadasha & Antardasha Timing', 'Rahu & Ketu Career Axis', 'Practical Business Muhurat'],
    badge: 'High Impact',
  },
  {
    id: 'marriage',
    title: 'Marriage & Relationship Guidance',
    pillar: 'Pillar 2: Relationships & Harmony',
    priceInr: '₹ 10,095',
    priceUsd: '$145',
    duration: 'Max 60 Mins',
    description: 'In-depth marital analysis covering 7th house lord, Venus/Jupiter placements, D9 Navamsha compatibility, demystifying Manglik Dosha, and emotional alignment.',
    deliverables: ['Authentic Compatibility Evaluation', 'Manglik Reality Check & Relief', 'Timing of Marriage / Union', 'Harmonization Remedies'],
    badge: 'Popular',
  },
  {
    id: 'priority',
    title: 'Acharya Direct Priority Session (Within 3 Days)',
    pillar: 'Executive & Urgent Guidance',
    priceInr: '₹ 55,001',
    priceUsd: '$699',
    duration: 'Max 60 Mins',
    description: 'Direct priority consultation with Acharya Prateek Shastri for acute life crossroads, high-stakes executive decisions, and time-critical dilemmas.',
    deliverables: ['Personal Review by Acharya Prateek Shastri', 'Fast-Track Slot within 72 Hours', 'Cross-Chart Multi-Varga Verification', 'Full Audio Recording & Follow-up Notes'],
    badge: 'Elite VIP',
  },
  {
    id: 'yearly',
    title: 'Annual Roadmap & Transit Forecast (Varshaphala)',
    pillar: 'Pillar 3: Vastu, Sade Sati & Dashas',
    priceInr: '₹ 14,500',
    priceUsd: '$190',
    duration: 'Max 60 Mins',
    description: 'Month-by-month cosmic roadmap based on your annual solar return chart (Tajika system), major planetary transits (Saturn, Jupiter, Rahu-Ketu), and Sade Sati phases.',
    deliverables: ['12-Month Predictive Timeline', 'Sade Sati / Dhaiya Impact Strategy', 'Retrograde (Vakri) Planet Cautions', 'Quarterly Milestone Planning'],
    badge: 'Annual Special',
  },
  {
    id: 'remedial',
    title: 'Remedies, Navamsha & Gemstone Consultation',
    pillar: 'Pillar 4: Remedies & Personal Progress',
    priceInr: '₹ 7,500',
    priceUsd: '$110',
    duration: 'Max 45 Mins',
    description: 'Scriptural gemstone analysis, D9 Navamsha soul purpose alignment, and satvik lifestyle modifications. Strictly non-fear-based and non-exploitative.',
    deliverables: ['Scientific Gemstone Suitability', 'Dosha Alleviation (Satvik Upayas)', 'D9 Navamsha Soul Insights', 'Mantra & Charity Alignments'],
    badge: 'Remedies',
  },
  {
    id: 'prashna',
    title: 'Prashna Kundli (Horary Specific Query)',
    pillar: 'Direct Situational Answers',
    priceInr: '₹ 6,200',
    priceUsd: '$95',
    duration: 'Max 30 Mins',
    description: 'Precise answer to immediate pressing questions when accurate birth time is unavailable. Cast based on the exact moment and cosmic alignment of your query.',
    deliverables: ['Instant Chart of the Moment', 'Direct Actionable Clarity', 'BTR (Birth Time Rectification) Guidance', 'Decision Roadmapping'],
    badge: 'Direct Answers',
  },
]

export const ServicesPage: React.FC = () => {
  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        title="Consultation Services"
        subtitle="“Aapko future se darana nahi — aapko apni direction samajhne mein help karna.” Grounded in 50 years of ancestral legacy."
        tag="Personalised Chart Guidance"
        icon={<Briefcase size={24} />}
      />

      {/* Brand Ethos Banner */}
      <section style={{ marginBottom: '3rem' }}>
        <div
          className="glass-panel"
          style={{
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(20, 26, 54, 0.8) 0%, rgba(11, 15, 28, 0.95) 100%)',
            border: '1px solid rgba(255, 215, 0, 0.3)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="badge badge-gold">The North Star Promise</span>
              <Award size={16} color="#ffd700" />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: '#f8fafc', marginBottom: '0.75rem' }}>
              Elite Guidance Democratized for Every Seeker
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.7 }}>
              Previously trusted by celebrities, politicians, and business leaders, our consultations bring that same level of rigor, dignity, and deep scriptural mastery directly to you.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.88rem' }}>
              <CheckCircle size={16} color="#10b981" />
              <span><strong>Personalised Kundli:</strong> No generic sun-sign generalities.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.88rem' }}>
              <CheckCircle size={16} color="#10b981" />
              <span><strong>Direction over Fear:</strong> Understand your timing and choices.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.88rem' }}>
              <CheckCircle size={16} color="#10b981" />
              <span><strong>Ethical Remedies:</strong> Zero expensive fear-mongering rituals.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.88rem' }}>
              <CheckCircle size={16} color="#10b981" />
              <span><strong>Modern Hinglish/English:</strong> Clear, respectful two-way dialogue.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        {SERVICES_LIST.map((service) => (
          <div
            key={service.id}
            className="glass-panel"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span className="badge badge-gold">{service.badge}</span>
                <span style={{ fontSize: '0.82rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={14} /> {service.duration}
                </span>
              </div>

              <span style={{ fontSize: '0.72rem', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}>
                {service.pillar}
              </span>

              <h3 style={{ fontSize: '1.25rem', color: '#f8fafc', marginBottom: '0.75rem' }}>
                {service.title}
              </h3>

              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {service.description}
              </p>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#ffd700', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
                  Session Coverage:
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} style={{ fontSize: '0.82rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ color: '#38bdf8' }}>•</span> {item}
                    </li>
                  ))}
                </ul>
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
                  {service.priceInr}
                  <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 400, marginLeft: '0.5rem' }}>
                    / {service.priceUsd}
                  </span>
                </div>
              </div>

              <Link
                to="/contact"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}
              >
                <span>Book Consultation</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
