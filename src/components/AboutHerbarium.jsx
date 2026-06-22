import { Archive, Microscope, BookOpen } from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: Archive,
    title: 'Preservation',
    description:
      'Herbarium sheets preserve plant morphology, color, and structure for centuries, creating permanent scientific records that outlive seasonal changes.',
  },
  {
    icon: Microscope,
    title: 'Research',
    description:
      'Researchers worldwide rely on herbarium collections for taxonomic studies, DNA analysis, climate change research, and discovery of new species.',
  },
  {
    icon: BookOpen,
    title: 'Education',
    description:
      'Herbarium specimens serve as hands-on teaching tools, helping students develop identification skills and understand plant diversity firsthand.',
  },
]

export default function AboutHerbarium() {
  return (
    <section id="about" className="py-20 sm:py-28" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 id="about-heading" className="text-fluid-title font-heading font-bold text-primary text-center mb-4">
            About the Herbarium
          </h2>
          <p className="text-center text-muted max-w-2xl mx-auto mb-16">
            Understanding the science and significance of preserved plant collections
          </p>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-16">
          <ScrollReveal direction="left">
            <div className="flex items-center justify-center p-8 bg-primary/5 rounded-2xl">
              <svg viewBox="0 0 300 300" className="w-full max-w-sm" aria-hidden="true">
                <rect x="30" y="30" width="240" height="240" rx="8" fill="#F8FAF5" stroke="#2E7D32" strokeWidth="2" />
                <path d="M150 260 Q150 180 100 120 Q70 90 80 60 Q110 75 150 100 Q190 75 220 60 Q230 90 200 120 Q150 180 150 260" fill="#81C784" opacity="0.6" />
                <path d="M150 100 L150 260" stroke="#2E7D32" strokeWidth="2" />
                <text x="150" y="50" textAnchor="middle" fill="#2E7D32" fontSize="14" fontFamily="serif">HERBARIUM</text>
              </svg>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                A herbarium is a systematically arranged collection of dried, pressed, and preserved
                plant specimens mounted on archival sheets, accompanied by detailed collection data.
                These living libraries of botanical diversity serve as the foundation of plant
                taxonomy, ecology, and conservation science. Each sheet captures a moment in botanical
                time, preserving the morphology, venation patterns, and reproductive structures that
                define a species.
              </p>
              <p>
                The importance of herbarium preservation cannot be overstated. As habitats disappear
                and species face extinction, herbarium collections become irreplaceable repositories
                of biodiversity. Scientists use these specimens to track environmental changes,
                verify species identifications, and discover compounds with medicinal potential. For
                students, herbarium work develops critical observation skills and connects classroom
                learning with authentic scientific practice.
              </p>
              <p>
                This digital herbarium transforms traditional specimen sheets into an accessible,
                interactive educational resource, bringing the rigor of botanical science to a wider
                audience while honoring the centuries-old tradition of plant documentation.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <StaggerItem key={title}>
              <Card className="h-full hover:shadow-lg transition-shadow border-primary/10">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-2">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardTitle className="font-heading">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
