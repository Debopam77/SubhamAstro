import React, { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, Sparkles } from 'lucide-react'
import { Link } from '../context/RouterContext'

interface FaqItem {
  question: string
  answer: string
}

const FAQS: FaqItem[] = [
  {
    question: 'How does North Star Astro differ from traditional astrology platforms?',
    answer: 'Our foundational promise is: “Aapko future se darana nahi — aapko apni direction samajhne mein help karna.” Where traditional astrology often relies on fear, complex mystery, and passive fatalism, North Star Astro presents astrology as a practical guidance framework for self-understanding, conscious timing, and empowered decision-making.',
  },
  {
    question: 'What is the background and lineage behind North Star Astro?',
    answer: 'North Star Astro is built upon a 50-year ancestral legacy and 15 years of rigorous expertise by Acharya Prateek Shastri. While this elite guidance was previously restricted to high-profile clients—celebrities, politicians, and business executives—our current mission is to make this authentic, elite wisdom accessible to everyday seekers with complete transparency.',
  },
  {
    question: 'What does your vision “Har Ghar Mein Ek Astrologer Ho” mean?',
    answer: 'Our long-term vision is that in every family, at least one person can understand their own and their loved ones’ Dasha and transits at a basic level. This demystifies astrology, protects families from superstitious exploitation, and enables conscious decision-making during critical life inflection points.',
  },
  {
    question: 'Do you prescribe expensive pujas, rings, or rituals during consultations?',
    answer: 'Strictly no. We are firmly committed to ethical, non-fear-based astrology. We do not prescribe commercialized or prohibitively expensive rituals. When remedies are indicated, we recommend satvik, scripture-grounded lifestyle adjustments, accurate gemstone guidance based on functional benefic nature, or simple Vedic mantras and humanitarian acts.',
  },
  {
    question: 'How are the consultation sessions conducted?',
    answer: 'Sessions are conducted online via Zoom video call or private phone conference. We emphasize interactive two-way dialogue in clear Hinglish or English so that you understand the "why" behind every planetary indication, not just arbitrary conclusions. You are free to record the session.',
  },
  {
    question: 'What if I do not know my exact birth time?',
    answer: 'If you have an approximate range (within 15-30 minutes), we perform Birth Time Rectification (BTR) based on key milestones in your life. Alternatively, we utilize Prashna Shastra (Horary astrology), which generates accurate situational guidance based on the exact moment the question is asked.',
  },
  {
    question: 'How do I choose between Career, Relationship, or Varshaphala consultation?',
    answer: 'If you are facing professional roadblocks or timing a business venture, choose Career Consultation (10th/11th house focus). If navigating marriage or emotional compatibility, choose Relationship Guidance (7th house & D9 Navamsha focus). For a holistic 12-month roadmap, select Plan Your Year Ahead.',
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
        subtitle="Clear answers on our core philosophy, consultation process, Acharya Prateek Shastri’s lineage, and ethical standards."
        tag="Clarity & Transparency"
        icon={<HelpCircle size={24} />}
      />

      {/* Philosophy Callout */}
      <div
        className="glass-panel"
        style={{
          maxWidth: '800px',
          margin: '0 auto 2.5rem',
          padding: '1.25rem 1.75rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.08) 0%, rgba(15, 23, 42, 0.9) 100%)',
          border: '1px solid rgba(255, 215, 0, 0.3)',
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#ffd700', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
          <Sparkles size={16} /> Core Ethos
        </div>
        <p style={{ color: '#f8fafc', fontSize: '1.05rem', fontWeight: 600, fontStyle: 'italic' }}>
          “The stars may indicate the path, but conscious action creates the journey.”
        </p>
      </div>

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
                  <h3 style={{ fontSize: '1.08rem', color: '#f8fafc', fontWeight: 600 }}>
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
                      fontSize: '0.94rem',
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
            Still Have Questions?
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
            Acharya Prateek Shastri and our team are here to bring you complete peace of mind.
          </p>
          <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
            <MessageSquare size={16} /> Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}
