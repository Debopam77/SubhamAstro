import React, { useState } from 'react'
import { Link, useRouter } from '../context/RouterContext'
import { Sparkles, Menu, X, User } from 'lucide-react'

export interface NavItem {
  label: string
  path: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Videos', path: '/videos' },
  { label: 'Karma Correction', path: '/karma-correction' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Learn Astrology', path: '/learn-astrology' },
  { label: 'FAQs', path: '/faqs' },
]

export const Navbar: React.FC = () => {
  const { currentPath } = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header
      style={{
        borderBottom: '1px solid rgba(255, 215, 0, 0.15)',
        background: 'rgba(7, 9, 19, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '74px',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #ffd700 0%, #ff7b00 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(255, 215, 0, 0.35)',
            }}
          >
            <Sparkles size={22} color="#070913" />
          </div>
          <div>
            <span
              className="brand-title"
              style={{
                fontSize: '1.2rem',
                fontWeight: 800,
                color: '#ffd700',
                display: 'block',
                lineHeight: 1.1,
              }}
            >
              SubhamAstro
            </span>
            <span
              style={{
                display: 'block',
                fontSize: '0.68rem',
                color: '#94a3b8',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Vedic & Modern Astrology
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            margin: '0 1rem',
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.path === '/'
                ? currentPath === '/'
                : currentPath === item.path || currentPath.startsWith(item.path + '/')

            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#ffd700' : '#cbd5e1',
                  textDecoration: 'none',
                  padding: '0.4rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  transition: 'all 0.2s ease',
                  background: isActive ? 'rgba(255, 215, 0, 0.12)' : 'transparent',
                  border: isActive ? '1px solid rgba(255, 215, 0, 0.3)' : '1px solid transparent',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Action Button: Sign In */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <Link
            to="/sign-in"
            onClick={closeMobileMenu}
            className="btn-primary"
            style={{
              padding: '0.5rem 1.1rem',
              fontSize: '0.85rem',
              textDecoration: 'none',
            }}
          >
            <User size={15} />
            <span>Sign In</span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-toggle-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation"
            style={{
              display: 'none',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '8px',
              padding: '0.5rem',
              color: '#f8fafc',
              cursor: 'pointer',
            }}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {isMobileMenuOpen && (
        <div
          style={{
            borderTop: '1px solid rgba(255, 215, 0, 0.15)',
            background: 'rgba(11, 15, 28, 0.98)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.path === '/'
                ? currentPath === '/'
                : currentPath === item.path || currentPath.startsWith(item.path + '/')

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#ffd700' : '#cbd5e1',
                  textDecoration: 'none',
                  padding: '0.6rem 1rem',
                  borderRadius: '8px',
                  background: isActive ? 'rgba(255, 215, 0, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                  borderLeft: isActive ? '3px solid #ffd700' : '3px solid transparent',
                  display: 'block',
                }}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
