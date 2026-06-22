import AnimatedCounter from './AnimatedCounter'
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'
import { getStatistics } from '@/data/plants'
import { Card, CardContent } from '@/components/ui/card'

export default function Statistics() {
  const stats = getStatistics()

  const items = [
    { label: 'Total Specimens', value: stats.specimens },
    { label: 'Plant Families', value: stats.families },
    { label: 'Herbarium Sheets', value: stats.sheets },
    { label: 'Botanical Records', value: stats.records },
  ]

  return (
    <section className="py-16 sm:py-20 bg-primary/5" aria-labelledby="stats-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 id="stats-heading" className="text-fluid-title font-heading font-bold text-primary text-center mb-12">
            Collection Statistics
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ label, value }) => (
            <StaggerItem key={label}>
              <Card className="border-primary/10 hover:shadow-md transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <AnimatedCounter target={value} label={label} />
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
