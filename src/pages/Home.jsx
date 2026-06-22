import { useState, useMemo, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Hero from '@/components/Hero'
import AboutHerbarium from '@/components/AboutHerbarium'
import Statistics from '@/components/Statistics'
import SearchBar from '@/components/SearchBar'
import PlantCard from '@/components/PlantCard'
import FactsSection from '@/components/FactsSection'
import Conclusion from '@/components/Conclusion'
import ScrollReveal from '@/components/ScrollReveal'
import { searchPlants } from '@/data/plants'
import useDocumentTitle from '@/hooks/useDocumentTitle'

function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])
  return debounced
}

export default function Home() {
  const [query, setQuery] = useState('')
  const [family, setFamily] = useState('all')
  const debouncedQuery = useDebounce(query, 150)

  useDocumentTitle(
    'Digital Herbarium Collection',
    'Explore a curated collection of preserved plant specimens documenting botanical diversity and scientific observation.'
  )

  const filteredPlants = useMemo(
    () => searchPlants(debouncedQuery, family),
    [debouncedQuery, family]
  )

  return (
    <>
      <Hero />
      <AboutHerbarium />
      <Statistics />

      <section id="collection" className="py-20 sm:py-28" aria-labelledby="collection-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="collection-heading" className="text-fluid-title font-heading font-bold text-primary text-center mb-4">
              Plant Collection Gallery
            </h2>
            <p className="text-center text-muted max-w-2xl mx-auto mb-10">
              Browse and search our curated collection of preserved botanical specimens
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <SearchBar
              query={query}
              onQueryChange={setQuery}
              family={family}
              onFamilyChange={setFamily}
            />
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredPlants.length > 0 ? (
                filteredPlants.map((plant) => <PlantCard key={plant.slug} plant={plant} />)
              ) : (
                <div className="col-span-full text-center py-16 text-muted">
                  <p className="text-lg">No specimens found matching your search.</p>
                  <p className="text-sm mt-2">Try adjusting your search terms or family filter.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <FactsSection />
      <Conclusion />
    </>
  )
}
