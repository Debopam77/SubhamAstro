import React, { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'

export const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    tob: '',
    pob: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <PageHeader
        title="Contact & Consultation Inquiries"
        subtitle="Reach out with your questions, consultation requests, or feedback. We are here to illuminate your journey."
        tag="Get in Touch"
        icon={<Mail size={24} />}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', maxWidth: '1000px', margin: '0 auto' }}>
        {/* Contact Info Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#ffd700', marginBottom: '1rem' }}>
              We Are Here to Guide You
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              Whether seeking guidance in love, career decisions, ancestral healing, or spiritual growth, SubhamAstro provides compassionate, grounded clarity.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255, 215, 0, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffd700' }}>
                  <Mail size={18} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>Email</span>
                  <a href="mailto:contact@subhamastro.com" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem' }}>
                    contact@subhamastro.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                  <Phone size={18} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>Phone / WhatsApp</span>
                  <span style={{ color: '#f8fafc', fontWeight: 500, fontSize: '0.95rem' }}>
                    +91 (0) 98765 43210
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(192, 132, 252, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c084fc' }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>Location</span>
                  <span style={{ color: '#f8fafc', fontWeight: 500, fontSize: '0.95rem' }}>
                    Kolkata & Global Online Consultations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <CheckCircle2 size={48} color="#10b981" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.4rem', color: '#f8fafc', marginBottom: '0.5rem' }}>
                Inquiry Received
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Thank you, {formData.name || 'Friend'}. Our astrology coordinators will review your details and contact you within 24 hours.
              </p>
              <button
                className="btn-secondary"
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({ name: '', email: '', phone: '', dob: '', tob: '', pob: '', message: '' })
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#ffd700', marginBottom: '0.5rem' }}>
                Schedule or Inquiry Form
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    style={{ width: '100%', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '0.65rem 0.85rem', color: '#f8fafc', fontSize: '0.9rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    style={{ width: '100%', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '0.65rem 0.85rem', color: '#f8fafc', fontSize: '0.9rem' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Date of Birth</label>
                  <input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    style={{ width: '100%', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '0.65rem 0.85rem', color: '#f8fafc', fontSize: '0.9rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Time of Birth</label>
                  <input
                    type="time"
                    value={formData.tob}
                    onChange={(e) => setFormData({ ...formData, tob: e.target.value })}
                    style={{ width: '100%', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '0.65rem 0.85rem', color: '#f8fafc', fontSize: '0.9rem' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Place of Birth (City, Country)</label>
                <input
                  type="text"
                  value={formData.pob}
                  onChange={(e) => setFormData({ ...formData, pob: e.target.value })}
                  placeholder="e.g. Kolkata, India"
                  style={{ width: '100%', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '0.65rem 0.85rem', color: '#f8fafc', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Message or Inquiries</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any specific areas of focus (career, marriage, health, etc.)"
                  style={{ width: '100%', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '0.65rem 0.85rem', color: '#f8fafc', fontSize: '0.9rem', resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                <Send size={16} /> Send Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
