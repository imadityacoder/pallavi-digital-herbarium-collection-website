import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Leaf, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const navLinks = [
  { label: 'Home', href: '#home', isHome: true },
  { label: 'About', href: '#about' },
  { label: 'Collection', href: '#collection' },
  { label: 'Facts', href: '#facts' },
  { label: 'Conclusion', href: '#conclusion' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const isHome = location.pathname === '/'

  const handleNavClick = (href, isHomeLink) => {
    setOpen(false)
    if (isHomeLink) {
      if (isHome) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        navigate('/')
      }
      return
    }
    if (!isHome) {
      navigate({ pathname: '/', hash: href })
    } else {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 backdrop-blur-md bg-background/80">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="flex items-center gap-2 text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
          aria-label="Digital Herbarium Collection home"
        >
          <Leaf className="h-7 w-7" aria-hidden="true" />
          <span className="font-heading text-lg font-semibold hidden sm:inline">
            Digital Herbarium
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href, link.isHome)}
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors min-h-11 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="font-heading">Navigation</SheetTitle>
            </SheetHeader>
            <ul className="mt-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href, link.isHome)}
                    className="w-full text-left px-4 py-3 text-base font-medium hover:bg-primary/10 rounded-md min-h-11 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
