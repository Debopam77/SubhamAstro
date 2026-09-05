import React from 'react'
import { PageHeader } from '../components/PageHeader'
import { Briefcase, Clock, ArrowRight } from 'lucide-react'
import { Link } from '../context/RouterContext'

interface ServiceItem {
  id: string
  title: string
  priceInr: string
  priceUsd: string
  duration: string
  description: string
  badge: string
}

const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'career',
    title: 'Career & Business Consultation',
    priceInr: '₹ 8,915',
    priceUsd: '$140',
    duration: 'Max 60 Mins',
    description: 'Detailed analysis of your 10th house, D10 Dashamsha, timing for career transitions, business launches, and wealth prospects.',
    badge: 'Popular',
  },
  {
    id: 'marriage',
    title: 'Marriage & Relationship Guidance',
    priceInr: '₹ 10,095',
    priceUsd: '$145',
    duration: 'Max 60 Mins',
    description: 'In-depth marital analysis covering 7th house lord, Venus/Jupiter placements, delay causes, compatibility, and harmony remedies.',
    badge: 'High Demand',
  },
  {
    id: 'priority',
    title: 'Connect Within 3 Days (Urgent Session)',
    priceInr: '₹ 55,001',
    priceUsd: '$699',
    duration: 'Max 60 Mins',
    description: 'Express priority scheduling for acute life dilemmas requiring swift astrological intervention and strategic direction.',
    badge: 'Express VIP',
  },
  {
    id: 'yearly',
    title: 'Plan Your Year Ahead (Varshaphala)',
    priceInr: '₹ 14,500',
    priceUsd: '$190',
    duration: 'Max 60 Mins',
    description: 'Month-by-month cosmic roadmap based on your annual solar return chart (Tajika system) and major planetary transits.',
    badge: 'Annual Special',
  },
  {
    id: 'remedial',
    title: 'Holistic Remedial & Gemstone Consultation',
    priceInr: '₹ 7,500',
    priceUsd: '$110',
    duration: 'Max 45 Mins',
    description: 'Scientific gemstone recommendations, Yantra energization, Rudraksha suitability, and satvik mantras tailored to your horoscope.',
    badge: 'Remedies',
  },
  {
    id: 'prashna',
    title: 'Horary Astrology (Prashna Kundli)',
    priceInr: '₹ 6,200',
    priceUsd: '$95',
    duration: 'Max 30 Mins',
    description: 'Precise answer to specific pressing questions when accurate birth time details are unavailable or missing.',
    badge: 'Direct Answers',
  },
]

export const ServicesPage: React.FC = () => {
  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        title="Consultation Services"
        subtitle="Select the personalized astrological consultation that best addresses your questions, aspirations, and life crossroads."
        tag="Expert Readings"
        icon={<Briefcase size={24} />}
      />

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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge badge-gold">{service.badge}</span>
                <span style={{ fontSize: '0.82rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={14} /> {service.duration}
                </span>
              </div>

              <h3 style={{ fontSize: '1.3rem', color: '#f8fafc', marginBottom: '0.75rem' }}>
                {service.title}
              </h3>

              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {service.description}
              </p>
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
