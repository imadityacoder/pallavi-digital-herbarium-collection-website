import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from '@/pages/Home'

const PlantDetails = lazy(() => import('@/pages/PlantDetails'))

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center" role="status" aria-label="Loading">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  )
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-fluid-title font-heading font-bold text-primary mb-4">Page Not Found</h1>
      <p className="text-muted mb-8">The page you are looking for does not exist.</p>
      <a href="/" className="text-primary hover:underline font-medium">
        Return to Home
      </a>
    </div>
  )
}

export default function Router() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/plants/:slug" element={<PlantDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}
