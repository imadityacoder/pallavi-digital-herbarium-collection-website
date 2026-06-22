import { Leaf, Globe, Mail } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary/5" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-primary mb-4">
              <Leaf className="h-6 w-6" aria-hidden="true" />
              <h2 className="font-heading text-xl font-semibold">Digital Herbarium Collection</h2>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              A scientific collection of preserved plant specimens documenting botanical diversity
              and scientific observation for educational purposes.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Project Information</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <span className="font-medium text-foreground">Student:</span> Pallavi Kumari
              </li>
              <li>
                <span className="font-medium text-foreground">School:</span> B.N. College
              </li>
              <li>
                <span className="font-medium text-foreground">Academic Year:</span> 2025–2026
              </li>
              <li>
                <span className="font-medium text-foreground">Subject:</span> Biology Project
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              <a
                href="mailto:student@bncollege.edu"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Send email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Visit project website"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} Sr Studio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
