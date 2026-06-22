import { Leaf, Globe, TreePine, Pill, Flower2, Thermometer } from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const facts = [
  {
    icon: Leaf,
    title: 'Plant Conservation',
    description:
      'Over forty percent of plant species face extinction risk. Herbarium collections document biodiversity before it vanishes, providing baseline data essential for conservation planning. Each preserved specimen represents an irreplaceable genetic and morphological record that supports habitat protection and species recovery programs worldwide.',
  },
  {
    icon: Globe,
    title: 'Biodiversity',
    description:
      'Earth harbors approximately four hundred thousand known plant species, with thousands more awaiting discovery. Biodiversity ensures ecosystem resilience, providing the genetic variety needed to adapt to changing environments. Herbarium documentation captures this diversity at local and global scales, revealing patterns of distribution and endemism.',
  },
  {
    icon: TreePine,
    title: 'Ecosystems',
    description:
      'Plants form the foundation of terrestrial ecosystems, converting sunlight into energy that sustains all other life forms. From tropical rainforests to grassland prairies, plant communities regulate water cycles, stabilize soils, and maintain atmospheric composition. Understanding plant ecology through herbarium study reveals the intricate web of life.',
  },
  {
    icon: Pill,
    title: 'Medicinal Plants',
    description:
      'Over fifty percent of modern pharmaceuticals derive from natural plant compounds or their synthetic analogs. From aspirin inspired by willow bark to anti-cancer drugs from periwinkle alkaloids, plants remain humanity\'s greatest pharmacy. Herbarium collections preserve the botanical sources of these life-saving medicines for future research.',
  },
  {
    icon: Flower2,
    title: 'Pollination',
    description:
      'Approximately eighty-seven percent of flowering plants depend on animal pollinators for reproduction. Bees, butterflies, birds, and bats transfer pollen between flowers, enabling seed and fruit production. This mutualistic relationship supports global food security, as one-third of human food crops require pollinators. Herbarium specimens document flower structures essential for pollination studies.',
  },
  {
    icon: Thermometer,
    title: 'Climate Importance',
    description:
      'Plants sequester carbon dioxide through photosynthesis, making forests and vegetation critical allies against climate change. Herbarium collections spanning centuries reveal shifts in flowering times, distribution ranges, and species composition driven by warming temperatures. These historical records provide evidence for climate impact assessment and adaptation strategies.',
  },
]

export default function FactsSection() {
  return (
    <section id="facts" className="py-20 sm:py-28" aria-labelledby="facts-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 id="facts-heading" className="text-fluid-title font-heading font-bold text-primary text-center mb-4">
            Educational Facts
          </h2>
          <p className="text-center text-muted max-w-2xl mx-auto mb-16">
            Essential knowledge about plants and their role in our world
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map(({ icon: Icon, title, description }) => (
            <StaggerItem key={title}>
              <Card className="h-full hover:shadow-lg transition-shadow border-primary/10">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-primary mb-2">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardTitle className="font-heading text-lg">{title}</CardTitle>
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
