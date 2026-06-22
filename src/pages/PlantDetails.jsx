import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Home, ZoomIn } from 'lucide-react'
import { getPlantBySlug } from '@/data/plants'
import useDocumentTitle from '@/hooks/useDocumentTitle'
import ScrollReveal from '@/components/ScrollReveal'
import BotanicalPlaceholder from '@/components/BotanicalPlaceholder'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const infoSections = [
  { key: 'description', label: 'Description' },
  { key: 'habitat', label: 'Habitat & Distribution' },
  { key: 'morphology', label: 'Morphology' },
  { key: 'flowers', label: 'Flowers' },
  { key: 'leaves', label: 'Leaves' },
  { key: 'stem', label: 'Stem' },
  { key: 'fruitsAndSeeds', label: 'Fruits & Seeds' },
  { key: 'ecologicalImportance', label: 'Ecological Importance' },
  { key: 'medicinalUses', label: 'Medicinal Uses' },
  { key: 'traditionalUses', label: 'Traditional Uses' },
  { key: 'economicImportance', label: 'Economic Importance' },
  { key: 'interestingFacts', label: 'Interesting Facts' },
]

function ImagePanel({ src, alt, label, onClick }) {
  const [error, setError] = useState(false)

  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl border border-border bg-primary/5 aspect-[3/4] w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label={`View full size ${label}`}
    >
      {!error ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setError(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <BotanicalPlaceholder className="h-full w-full" label={alt} />
      )}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
        <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
      </div>
      <span className="absolute bottom-0 left-0 right-0 bg-primary/80 text-white text-sm py-2 px-4 text-center">
        {label}
      </span>
    </button>
  )
}

export default function PlantDetails() {
  const { slug } = useParams()
  const plant = getPlantBySlug(slug)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const el = document.getElementById('plant-hero')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [slug])

  useDocumentTitle(
    plant
      ? `${plant.scientificName} — Digital Herbarium Collection`
      : 'Specimen Not Found — Digital Herbarium Collection',
    plant
      ? `Detailed botanical information for ${plant.scientificName} (${plant.commonName}), family ${plant.family}.`
      : 'The requested plant specimen was not found in our collection.'
  )

  if (!plant) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-fluid-title font-heading font-bold text-primary mb-4">Specimen Not Found</h1>
        <p className="text-muted mb-8 max-w-md">
          The plant specimen you are looking for does not exist in our collection.
        </p>
        <Button asChild>
          <Link to="/#collection">Back to Collection</Link>
        </Button>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Banner */}
      <section
        id="plant-hero"
        className="relative py-20 sm:py-28 botanical-pattern overflow-hidden"
        aria-label={`${plant.scientificName} hero banner`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/40" aria-hidden="true" />
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10 pointer-events-none"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 20}%` }}
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
            aria-hidden="true"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#F8FAF5">
              <path d="M12 2C8 6 4 10 4 16c0 3 2 5 4 6 1-3 2-6 4-8 2 2 3 5 4 8 2-1 4-3 4-6 0-6-4-10-8-14z" />
            </svg>
          </motion.div>
        ))}

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1 text-sm text-white/70 mb-6 flex-wrap">
            <Link to="/" className="hover:text-white flex items-center gap-1">
              <Home className="h-4 w-4" /> Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/#collection" className="hover:text-white">Collection</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white font-scientific italic">{plant.scientificName}</span>
          </nav>

          <h1 className="font-scientific italic text-fluid-hero mb-2">{plant.scientificName}</h1>
          <p className="text-fluid-subtitle font-heading text-white/90 mb-4">{plant.commonName}</p>
          <Badge variant="outline" className="border-white text-white text-sm">
            {plant.family}
          </Badge>
        </div>
      </section>

      {/* Image Comparison */}
      <section className="py-16 sm:py-20" aria-labelledby="images-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="images-heading" className="text-fluid-title font-heading font-bold text-primary text-center mb-10">
              Specimen Documentation
            </h2>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <ScrollReveal direction="left">
              <ImagePanel
                src={plant.plantPhoto}
                alt={`Photograph of ${plant.scientificName}`}
                label="Plant Photograph"
                onClick={() => setLightbox({ src: plant.plantPhoto, alt: `Photograph of ${plant.scientificName}` })}
              />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <ImagePanel
                src={plant.herbariumPhoto}
                alt={`Herbarium specimen of ${plant.scientificName}`}
                label="Herbarium Specimen"
                onClick={() => setLightbox({ src: plant.herbariumPhoto, alt: `Herbarium specimen of ${plant.scientificName}` })}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Collection Info */}
      <section className="pb-8" aria-label="Collection metadata">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto border-primary/20">
            <CardHeader>
              <CardTitle className="font-heading text-primary">Herbarium Specimen Data</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="font-medium text-muted">Locality</dt>
                  <dd>{plant.collectionInfo.locality}</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted">Collected By</dt>
                  <dd>{plant.collectionInfo.collectedBy}</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted">Date</dt>
                  <dd>{plant.collectionInfo.date}</dd>
                </div>
                <div>
                  <dt className="font-medium text-muted">Remarks</dt>
                  <dd>{plant.collectionInfo.remarks}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Classification */}
      <section className="py-8" aria-label="Botanical classification">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Card className="max-w-3xl mx-auto border-primary/10">
              <CardHeader>
                <CardTitle className="font-heading text-primary">Botanical Classification</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  {Object.entries(plant.classification).map(([key, value]) => (
                    <div key={key}>
                      <dt className="font-medium text-muted capitalize">{key}</dt>
                      <dd className="font-scientific italic">{value}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Scientific Information */}
      <section className="py-16 sm:py-20 bg-primary/5" aria-labelledby="science-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="science-heading" className="text-fluid-title font-heading font-bold text-primary text-center mb-10">
              Scientific Information
            </h2>
          </ScrollReveal>

          <Tabs defaultValue="description" className="max-w-4xl mx-auto">
            <TabsList className="w-full flex-wrap h-auto mb-6">
              {infoSections.map(({ key, label }) => (
                <TabsTrigger key={key} value={key} className="text-xs sm:text-sm">
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>

            {infoSections.map(({ key, label }) => (
              <TabsContent key={key} value={key}>
                <ScrollReveal>
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-heading">{label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80 leading-relaxed">{plant[key]}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!lightbox} onOpenChange={() => setLightbox(null)}>
        <DialogContent className="max-w-5xl p-2 sm:p-4">
          <DialogHeader>
            <DialogTitle className="sr-only">{lightbox?.alt}</DialogTitle>
          </DialogHeader>
          {lightbox && (
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}
