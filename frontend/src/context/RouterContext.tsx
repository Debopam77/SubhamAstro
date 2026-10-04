import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface RouterContextType {
  currentPath: string
  navigate: (path: string) => void
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
})

export const useRouter = () => useContext(RouterContext)

interface RouterProviderProps {
  children: ReactNode
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/'
  })

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/')
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (path: string) => {
    if (path === currentPath) return
    window.history.pushState({}, '', path)
    setCurrentPath(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
  children: ReactNode
  activeClassName?: string
  className?: string
  style?: React.CSSProperties
  activeStyle?: React.CSSProperties
}

export const Link: React.FC<LinkProps> = ({
  to,
  children,
  activeClassName = '',
  className = '',
  style,
  activeStyle,
  onClick,
  ...rest
}) => {
  const { currentPath, navigate } = useRouter()
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to))

  const combinedClassName = `${className} ${isActive ? activeClassName : ''}`.trim()
  const combinedStyle = isActive ? { ...style, ...activeStyle } : style

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e)
    if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      e.preventDefault()
      navigate(to)
    }
  }

  return (
    <a
      href={to}
      onClick={handleClick}
      className={combinedClassName}
      style={combinedStyle}
      {...rest}
    >
      {children}
    </a>
  )
}
