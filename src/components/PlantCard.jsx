import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import BotanicalPlaceholder from './BotanicalPlaceholder'

export default function PlantCard({ plant }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      <Card className="overflow-hidden h-full group hover:shadow-[0_0_20px_rgba(46,125,50,0.3)] transition-shadow duration-300 border-primary/10">
        <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
          {!imgError ? (
            <img
              src={plant.thumbnail}
              alt={`Herbarium specimen of ${plant.scientificName}`}
              loading="lazy"
              decoding="async"
              onError={() => setImgError(true)}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
            />
          ) : (
            <BotanicalPlaceholder
              className="h-full w-full"
              label={`Placeholder for ${plant.scientificName}`}
            />
          )}
        </div>

        <CardHeader className="pb-2">
          <p className="font-scientific italic text-lg text-primary">{plant.scientificName}</p>
          <p className="text-sm text-muted">{plant.commonName}</p>
        </CardHeader>

        <CardContent className="pb-2">
          <Badge variant="secondary">{plant.family}</Badge>
        </CardContent>

        <CardFooter>
          <Button asChild variant="outline" className="w-full group/btn">
            <Link to={`/plants/${plant.slug}`}>
              View Details
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
