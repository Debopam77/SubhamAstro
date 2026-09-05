import React, { ReactNode } from 'react'
import { Link } from '../context/RouterContext'
import { ChevronRight, Home } from 'lucide-react'

interface PageHeaderProps {
  title: string
  subtitle: string
  tag?: string
  icon?: ReactNode
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, tag, icon }) => {
  return (
    <div
      style={{
        padding: '3rem 0 2rem',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Breadcrumb */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.85rem',
          color: 'var(--text-muted)',
          marginBottom: '1.25rem',
          background: 'rgba(255, 255, 255, 0.04)',
          padding: '0.35rem 1rem',
          borderRadius: 'var(--radius-full)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)' }}>
          <Home size={14} /> Home
        </Link>
        <ChevronRight size={14} color="var(--text-muted)" />
        <span style={{ color: 'var(--color-amber-400)', fontWeight: 500 }}>{title}</span>
      </div>

      {/* Tag badge */}
      {tag && (
        <div style={{ marginBottom: '1rem' }}>
          <span className="badge badge-gold">{tag}</span>
        </div>
      )}

      {/* Icon & Title */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
        {icon && (
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(255, 215, 0, 0.12)',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-gold-400)',
            }}
          >
            {icon}
          </div>
        )}
        <h1
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #ffffff 30%, #ffd700 80%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.03em',
          }}
        >
          {title}
        </h1>
      </div>

      <p
        style={{
          maxWidth: '620px',
          margin: '0 auto',
          fontSize: '1.05rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
        }}
      >
        {subtitle}
      </p>
    </div>
  )
}
