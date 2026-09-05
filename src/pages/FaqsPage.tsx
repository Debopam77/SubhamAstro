import React, { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react'
import { Link } from '../context/RouterContext'

interface FaqItem {
  question: string
  answer: string
}

const FAQS: FaqItem[] = [
  {
    question: 'What is the procedure for scheduling an astrology consultation?',
    answer: 'After selecting your desired consultation category and submitting your birth details, you will receive an immediate confirmation. Within 3-4 working days, our team coordinates with you via email/WhatsApp to finalize the exact date, time slot, and meeting link.',
  },
  {
    question: 'How are the consultation sessions conducted?',
    answer: 'Consultations are conducted online via Zoom Video call or high-fidelity Phone call based on your preference. We strongly believe in interactive two-way sessions where you can ask direct questions. You are welcome to record the video session for future reference.',
  },
  {
    question: 'Do you prescribe gemstone or Yantra remedies during the consultation?',
    answer: 'Yes. Based on planetary placements in your natal and divisional charts, we suggest simple, ethical remedies such as appropriate gemstones, energized Rudrakshas, specific stotras/mantras, or behavioral modifications. We never prescribe fear-driven or unnecessary costly rituals.',
  },
  {
    question: 'How many questions can I ask in a single consultation?',
    answer: 'You may ask unlimited questions related to your chosen consultation category within the allotted session timeframe (e.g., up to 60 minutes).',
  },
  {
    question: 'What if I do not know my exact birth time?',
    answer: 'If you have an approximate range (within 15-30 minutes), we perform Birth Time Rectification (BTR) using past life milestones. Alternatively, we utilize Prashna Shastra (Horary astrology), which generates accurate predictions based on the exact moment the query is asked.',
  },
]

export const FaqsPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Clear answers to common questions regarding our consultation methods, chart calculations, remedies, and scheduling."
        tag="Help & Support"
        icon={<HelpCircle size={24} />}
      />

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="glass-panel"
                style={{
                  padding: '1.5rem',
                  cursor: 'pointer',
                  border: isOpen ? '1px solid var(--color-border-hover)' : '1px solid var(--color-border)',
                }}
                onClick={() => toggleFaq(index)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#f8fafc', fontWeight: 600 }}>
                    {faq.question}
                  </h3>
                  <div style={{ color: '#ffd700', flexShrink: 0 }}>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>

                {isOpen && (
                  <p
                    style={{
                      marginTop: '1rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      color: '#cbd5e1',
                      lineHeight: 1.7,
                      fontSize: '0.95rem',
                    }}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>

        {/* Contact CTA */}
        <div
          className="glass-panel"
          style={{
            padding: '2rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(24, 29, 58, 0.9) 0%, rgba(11, 15, 28, 0.95) 100%)',
          }}
        >
          <h3 style={{ fontSize: '1.3rem', color: '#ffd700', marginBottom: '0.5rem' }}>
            Still Have a Question?
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
            Our astrology coordinators are available to answer any inquiry prior to booking.
          </p>
          <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
            <MessageSquare size={16} /> Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}
