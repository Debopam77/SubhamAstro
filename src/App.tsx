import React from 'react'
import { RouterProvider, useRouter } from './context/RouterContext'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
// import { PublicationsPage } from './pages/PublicationsPage'
// import { MediaCoveragePage } from './pages/MediaCoveragePage'
import { VideosPage } from './pages/VideosPage'
import { KarmaCorrectionPage } from './pages/KarmaCorrectionPage'
import { BlogsPage } from './pages/BlogsPage'
import { LearnAstrologyPage } from './pages/LearnAstrologyPage'
import { FaqsPage } from './pages/FaqsPage'
import { SignInPage } from './pages/SignInPage'

import { StarryBackground } from './components/StarryBackground'

const AppRoutes: React.FC = () => {
  const { currentPath } = useRouter()

  const renderPage = () => {
    // Normalize path by stripping trailing slash
    const normalized = currentPath.length > 1 && currentPath.endsWith('/')
      ? currentPath.slice(0, -1)
      : currentPath

    switch (normalized) {
      case '/':
        return <HomePage />
      case '/about':
      case '/contact':
        return <AboutPage />
      case '/services':
        return <ServicesPage />
      // case '/publications':
      //   return <PublicationsPage />
      // case '/media-coverage':
      // case '/category/media-coverage':
      //   return <MediaCoveragePage />
      case '/videos':
      case '/video-gallery':
        return <VideosPage />
      case '/karma-correction':
        return <KarmaCorrectionPage />
      case '/blogs':
        return <BlogsPage />
      case '/learn-astrology':
        return <LearnAstrologyPage />
      case '/faqs':
        return <FaqsPage />
      case '/sign-in':
      case '/member-portal':
        return <SignInPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <StarryBackground />
      <Navbar />
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>{renderPage()}</main>
      <Footer />
    </div>
  )
}

export const App: React.FC = () => {
  return (
    <RouterProvider>
      <AppRoutes />
    </RouterProvider>
  )
}

export default App
