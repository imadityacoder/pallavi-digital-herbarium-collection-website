import { BrowserRouter } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Router from '@/routes/Router'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Navbar />
      <main id="main-content">
        <Router />
      </main>
      <Footer />
    </BrowserRouter>
  )
}
