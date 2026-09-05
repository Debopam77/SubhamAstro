import React from 'react'
import { Link } from '../context/RouterContext'
import { Sparkles, Mail, Heart } from 'lucide-react'
import { NAV_ITEMS } from './Navbar'

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 215, 0, 0.12)',
        background: 'rgba(4, 6, 14, 0.95)',
        marginTop: 'auto',
        padding: '3rem 0 1.5rem',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #ffd700 0%, #ff7b00 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={18} color="#070913" />
              </div>
              <span className="brand-title" style={{ fontSize: '1.15rem', color: '#ffd700' }}>
                SubhamAstro
              </span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Illuminating life paths through the timeless wisdom of Vedic astrology, planetary alignment, and karmic analysis.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.85rem' }}>
              <Mail size={16} color="#ffd700" />
              <a href="mailto:contact@subhamastro.com" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
                contact@subhamastro.com
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4
              style={{
                fontSize: '0.95rem',
                color: '#ffd700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1rem',
              }}
            >
              Navigation
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              {NAV_ITEMS.slice(0, 6).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    transition: 'color 0.2s',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4
              style={{
                fontSize: '0.95rem',
                color: '#ffd700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1rem',
              }}
            >
              Resources & Wisdom
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {NAV_ITEMS.slice(6).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    transition: 'color 0.2s',
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/sign-in"
                style={{
                  color: '#ffd700',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                Member Portal →
              </Link>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: '#64748b',
          }}
        >
          <p>© {new Date().getFullYear()} SubhamAstro. All celestial rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            Crafted with <Heart size={14} color="#f43f5e" fill="#f43f5e" /> for cosmic exploration.
          </p>
        </div>
      </div>
    </footer>
  )
}
