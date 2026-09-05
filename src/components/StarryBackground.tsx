import React, { useMemo } from 'react'

interface Star {
  id: number
  top: number
  left: number
  size: number
  duration: number
  delay: number
  color: string
  glowColor: string
}

interface SparklingStar {
  id: number
  top: number
  left: number
  size: number
  duration: number
  delay: number
}

interface ShootingStar {
  id: number
  top: number
  left: number
  delay: number
  duration: number
}

export const StarryBackground: React.FC = () => {
  // Deterministic seed generation for consistent star layout without hydration jumps
  const { stars, sparklingStars, shootingStars } = useMemo(() => {
    const starColors = [
      { color: '#ffffff', glow: 'rgba(255, 255, 255, 0.8)' },
      { color: '#ffd700', glow: 'rgba(255, 215, 0, 0.8)' },
      { color: '#fef08a', glow: 'rgba(254, 240, 138, 0.7)' },
      { color: '#c084fc', glow: 'rgba(192, 132, 252, 0.7)' },
      { color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.7)' },
    ]

    // 90 glittering stars
    const s: Star[] = Array.from({ length: 90 }, (_, i) => {
      // Deterministic pseudorandom using simple math
      const seed1 = Math.sin(i * 12.9898 + 78.233) * 43758.5453
      const seed2 = Math.cos(i * 4.1414 + 13.987) * 23421.631
      const rand1 = Math.abs(seed1 - Math.floor(seed1))
      const rand2 = Math.abs(seed2 - Math.floor(seed2))
      const colorIdx = Math.floor(rand1 * starColors.length)

      return {
        id: i,
        top: Math.floor(rand1 * 100),
        left: Math.floor(rand2 * 100),
        size: rand1 > 0.8 ? 2.5 : rand1 > 0.4 ? 1.8 : 1.2,
        duration: 2 + rand2 * 3, // 2s to 5s
        delay: rand1 * 4,
        color: starColors[colorIdx].color,
        glowColor: starColors[colorIdx].glow,
      }
    })

    // 14 prominent 4-point diamond sparkling stars
    const sp: SparklingStar[] = Array.from({ length: 14 }, (_, i) => {
      const seed1 = Math.sin((i + 100) * 17.123 + 45.67) * 34567.89
      const seed2 = Math.cos((i + 100) * 8.321 + 89.12) * 12345.67
      const rand1 = Math.abs(seed1 - Math.floor(seed1))
      const rand2 = Math.abs(seed2 - Math.floor(seed2))

      return {
        id: i,
        top: 8 + Math.floor(rand1 * 84), // keep within 8% to 92%
        left: 5 + Math.floor(rand2 * 90),
        size: 14 + Math.floor(rand1 * 12), // 14px to 26px
        duration: 3 + rand2 * 2.5,
        delay: rand1 * 3,
      }
    })

    // 4 shooting stars
    const sh: ShootingStar[] = [
      { id: 1, top: 12, left: 85, delay: 1.5, duration: 2.2 },
      { id: 2, top: 35, left: 95, delay: 6.8, duration: 2.6 },
      { id: 3, top: 22, left: 60, delay: 12.4, duration: 2.4 },
      { id: 4, top: 58, left: 90, delay: 18.0, duration: 2.5 },
    ]

    return { stars: s, sparklingStars: sp, shootingStars: sh }
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: -1,
        overflow: 'hidden',
        background: `
          radial-gradient(ellipse at top, #0b112c 0%, #060919 60%, #03040a 100%)
        `,
      }}
    >
      {/* Deep Cosmic Nebula Clouds */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.14) 0%, transparent 65%)',
          filter: 'blur(60px)',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '25%',
          right: '5%',
          width: '45vw',
          height: '45vw',
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.09) 0%, transparent 60%)',
          filter: 'blur(70px)',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '30%',
          width: '55vw',
          height: '45vw',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 65%)',
          filter: 'blur(80px)',
          borderRadius: '50%',
        }}
      />

      {/* Glittering Pinprick Stars */}
      {stars.map((star) => (
        <span
          key={`star-${star.id}`}
          className="glitter-star"
          style={{
            position: 'absolute',
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            borderRadius: '50%',
            boxShadow: `0 0 ${star.size * 2}px ${star.glowColor}`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* 4-Point Diamond Sparkling Celestial Stars */}
      {sparklingStars.map((sparkle) => (
        <div
          key={`sparkle-${sparkle.id}`}
          className="diamond-sparkle"
          style={{
            position: 'absolute',
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDuration: `${sparkle.duration}s`,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <path
              d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z"
              fill="url(#goldStarGrad)"
            />
            <circle cx="12" cy="12" r="2.5" fill="#ffffff" />
            <defs>
              <radialGradient
                id="goldStarGrad"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
              >
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="40%" stopColor="#ffd700" />
                <stop offset="100%" stopColor="rgba(255, 215, 0, 0.2)" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      ))}

      {/* Shooting Stars / Meteors */}
      {shootingStars.map((meteor) => (
        <span
          key={`meteor-${meteor.id}`}
          className="shooting-star"
          style={{
            top: `${meteor.top}%`,
            left: `${meteor.left}%`,
            animationDuration: `${meteor.duration}s`,
            animationDelay: `${meteor.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
