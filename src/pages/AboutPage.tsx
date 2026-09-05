import React, { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import {
  UserCheck,
  Award,
  BookOpen,
  Compass,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2
} from 'lucide-react'
import { Link } from '../context/RouterContext'

export const AboutPage: React.FC = () => {
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
        title="About SubhamAstro"
        subtitle="Unlocking life's deepest mysteries, karmic patterns, and planetary alignments with authentic Vedic wisdom."
        tag="Who We Are"
        icon={<UserCheck size={24} />}
      />

      {/* Main Philosophy & Background */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
        <div className="glass-panel" style={{ padding: '2.5rem' }}>
          <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>Our Philosophy</span>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#f8fafc' }}>
            The Eternal Quest: "Who Am I?"
          </h2>
          <p style={{ color: '#cbd5e1', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            The fundamental question, "Who am I?" eternally burns within all of us. Our purpose in life and the mysteries of our existence have motivated saints, philosophers, scientists, and truth-seekers for centuries.
          </p>
          <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            SubhamAstro was founded to bridge ancient cosmic science with practical modern living. We guide you through everyday dilemmas, relationships, career inflection points, and over-arching karmic lessons.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/services" className="btn-primary" style={{ textDecoration: 'none' }}>
              <Compass size={16} /> Explore Consultations
            </Link>
            <a href="#contact" className="btn-secondary" style={{ textDecoration: 'none' }}>
              <span>Contact Us Below</span>
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255, 215, 0, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffd700', flexShrink: 0 }}>
              <Award size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#f8fafc', marginBottom: '0.35rem' }}>15+ Years of Astrological Guidance</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Thousands of personalized charts analyzed across Vedic, Nadi, and Prashna Kundli systems.
              </p>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(192, 132, 252, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c084fc', flexShrink: 0 }}>
              <BookOpen size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#f8fafc', marginBottom: '0.35rem' }}>Rooted in Ancient Shastras</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Empowering individuals with ethical, non-fear-based solutions, practical remedies, and clear karmic direction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Integrated Contact Section */}
      <section id="contact" style={{ paddingTop: '1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Connect With Us</span>
          <h2 style={{ fontSize: '2rem', color: '#f8fafc' }}>Contact & Consultation Inquiries</h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0.5rem auto 0', fontSize: '0.95rem' }}>
            Reach out directly for consultation appointments, horoscope questions, or Vedic learning inquiries.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', maxWidth: '1050px', margin: '0 auto' }}>
          {/* Contact Details Card */}
          <div className="glass-panel" style={{ padding: '2.25rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#ffd700', marginBottom: '1rem' }}>
              We Are Here to Guide You
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Whether seeking clarity in love, facing career turning points, or exploring your karmic path, SubhamAstro is here to illuminate your journey with care and precision.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(255, 215, 0, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffd700', flexShrink: 0 }}>
                  <Mail size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>Email Support</span>
                  <a href="mailto:contact@subhamastro.com" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem' }}>
                    contact@subhamastro.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8', flexShrink: 0 }}>
                  <Phone size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>Direct Helpline / WhatsApp</span>
                  <span style={{ color: '#f8fafc', fontWeight: 500, fontSize: '0.95rem' }}>
                    +91 (0) 98765 43210
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(192, 132, 252, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c084fc', flexShrink: 0 }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block' }}>Main Office</span>
                  <span style={{ color: '#f8fafc', fontWeight: 500, fontSize: '0.95rem' }}>
                    Kolkata, India & Online Worldwide
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="glass-panel" style={{ padding: '2.25rem' }}>
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <CheckCircle2 size={48} color="#10b981" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.4rem', color: '#f8fafc', marginBottom: '0.5rem' }}>
                  Inquiry Received
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Thank you, {formData.name || 'Friend'}. Our team will review your message and contact you within 24 hours.
                </p>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({ name: '', email: '', phone: '', dob: '', tob: '', pob: '', message: '' })
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#ffd700', marginBottom: '0.25rem' }}>
                  Send an Inquiry
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full Name"
                      style={{ width: '100%', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '0.65rem 0.85rem', color: '#f8fafc', fontSize: '0.9rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
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
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Birth Place (City, Country)</label>
                  <input
                    type="text"
                    value={formData.pob}
                    onChange={(e) => setFormData({ ...formData, pob: e.target.value })}
                    placeholder="e.g. Kolkata, India"
                    style={{ width: '100%', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '0.65rem 0.85rem', color: '#f8fafc', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.35rem' }}>Inquiry / Focus Areas</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe what you would like guidance on (e.g. Career, Marriage, Kundli Analysis)"
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
      </section>
    </div>
  )
}
