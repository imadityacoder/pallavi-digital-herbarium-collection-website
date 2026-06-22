import { rawPlantsPart2 } from './plants-part2.js'
import { rawPlantsPart3 } from './plants-part3.js'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

const rawPlantsPart1 = [
  {
    id: 1,
    slug: 'ricinus-communis',
    scientificName: 'Ricinus communis',
    commonName: 'Castor Bean',
    family: 'Euphorbiaceae',
    thumbnail: 'assets/plants/ricinus-communis/thumb.jpg',
    plantPhoto: 'assets/plants/ricinus-communis/plant.jpg',
    herbariumPhoto: 'assets/plants/ricinus-communis/herbarium.jpg',
    collectionInfo: {
      locality: 'B.N. College (Garden)',
      collectedBy: 'Pallavi Kumari',
      date: '18.06.2026',
      remarks: 'Source of castor oil',
    },
    classification: {
      kingdom: 'Plantae',
      division: 'Magnoliophyta',
      class: 'Magnoliopsida',
      order: 'Malpighiales',
      family: 'Euphorbiaceae',
      genus: 'Ricinus',
      species: 'R. communis',
    },
    description:
      'Ricinus communis, commonly known as the castor bean, is a fast-growing perennial shrub that can reach tree-like proportions in tropical climates. Native to northeastern Africa and the Middle East, it has become naturalized across warm regions worldwide. The species is instantly recognizable by its large, deeply palmate leaves with seven to nine pointed lobes radiating from a central point like the spokes of a wheel. These leaves can exceed forty centimeters in width, creating a bold, tropical silhouette. The plant produces distinctive spiny seed capsules containing mottled seeds that are the commercial source of castor oil. All parts of the plant contain ricin, an extremely potent toxin concentrated in the seeds, making proper handling essential. Despite this toxicity, castor bean has been cultivated for millennia as an ornamental, industrial oil crop, and traditional medicine plant. Its dramatic foliage and rapid growth make it a striking subject for herbarium documentation.',
    habitat:
      'Ricinus communis thrives in tropical and subtropical regions with warm temperatures and abundant sunlight. It grows along riverbanks, roadsides, disturbed soils, and agricultural margins from sea level to moderate elevations. The species tolerates poor, sandy soils and periodic drought once established, though it performs best in well-drained loam with regular moisture. In India, it is commonly found in gardens, wastelands, and cultivated fields across the plains and lower hills. The specimen in this collection was gathered from the B.N. College garden, where it grows as a cultivated ornamental alongside other botanical teaching specimens. Castor bean readily colonizes open habitats and can become weedy in favorable climates, spreading through its buoyant seeds that remain viable for years.',
    morphology:
      'Ricinus communis exhibits a robust, upright growth habit with hollow, glaucous-green stems that become woody at the base in mature plants. The overall form ranges from a single-stemmed herbaceous annual in temperate zones to a multi-branched shrub or small tree up to twelve meters tall in the tropics. Leaves are alternate, simple, and peltate with long petioles attaching near the center of the blade. The palmate venation is prominent, with primary veins extending to each lobe tip. Stems and petioles often bear a waxy bloom. The root system is taprooted with extensive lateral branching, enabling survival in variable moisture conditions. When damaged, all vegetative parts exude a watery latex typical of the Euphorbiaceae family.',
    flowers:
      'Castor bean produces monoecious inflorescences called thyrses at the branch tips, with separate female flowers positioned above male flowers on the same axis. Female flowers occupy the upper portion and are characterized by red stigma branches that give the inflorescence a distinctive appearance. Male flowers below are numerous, cream-colored, and densely clustered. Blooming occurs throughout the warm season in tropical climates. Individual flowers are small and inconspicuous compared to the showy foliage, but the red stigmas create visible color accents. After pollination, primarily by wind, the ovary develops into the characteristic spiny capsule. Flowering is continuous as long as growing conditions remain favorable.',
    leaves:
      'The leaves of Ricinus communis are its most diagnostic feature. Each blade is large, glossy, and deeply divided into seven to nine lanceolate lobes with serrated margins and acuminate tips. The surface is dark green above, sometimes with a reddish tinge on young leaves and along the midrib. Petioles are stout and can exceed the length of the blade. Venation is palmate with a prominent central vein and radiating secondary veins. Leaves are arranged spirally along the stem, becoming progressively larger on lower nodes. The palmate shape maximizes light capture while allowing air circulation through the deeply cut lobes, an adaptation to humid tropical environments.',
    stem:
      'Stems are thick, cylindrical, and often tinged with red or purple, especially in sun-exposed specimens. Young stems are herbaceous and hollow, while older stems develop a woody cortex. Lenticels are visible as small raised dots along the surface. Branching is typically sympodial, with the terminal inflorescence dying back and lateral branches continuing growth. The stem contains vascular bundles arranged in a ring and a central pith that may be hollow in mature plants. When cut, stems release a clear to slightly cloudy latex. Stem diameter can reach several centimeters at the base of mature tropical specimens.',
    fruitsAndSeeds:
      'The fruit is a trilocular capsule covered with soft green to reddish spines, turning brown and woody at maturity. Each capsule splits explosively along three sutures, ejecting three large, oval seeds per locule. Seeds are mottled in gray, brown, and cream patterns, measuring twelve to seventeen millimeters long with a caruncle at the base that aids ant dispersal. Castor oil is cold-pressed from these seeds after heat treatment destroys ricin. A single plant can produce hundreds of seeds across multiple fruiting cycles. The caruncle is rich in lipids and attracts seed-harvesting ants, contributing to local dispersal.',
    ecologicalImportance:
      'Ricinus communis serves as a nectar source for pollinators visiting its inflorescences and provides larval food for several moth species in its native range. Its rapid growth and colonization of disturbed sites help stabilize bare soil and initiate ecological succession. However, the species can become invasive in tropical regions, outcompeting native vegetation along waterways. Seeds are toxic to many animals, reducing herbivory pressure. The plant\'s ability to accumulate heavy metals from contaminated soils has been studied for phytoremediation applications. In agricultural landscapes, it functions as a windbreak and green manure when tilled into fields.',
    medicinalUses:
      'Castor oil extracted from the seeds has been used for centuries as a purgative, lubricant laxative, and topical treatment for skin conditions. Ricinoleic acid, the primary fatty acid in castor oil, exhibits anti-inflammatory properties when applied externally. Traditional Ayurvedic and Unani medicine systems employ castor oil for joint pain, constipation, and hair growth promotion. Leaf poultices have been applied to reduce inflammation and treat headaches. Modern pharmacology recognizes castor oil as a safe excipient in cosmetics and pharmaceuticals. However, raw seeds and ricin are extremely toxic and must never be ingested. Medical use is restricted to purified, processed castor oil products.',
    traditionalUses:
      'Indigenous communities across Africa and Asia have cultivated castor bean for lamp oil, soap making, and leather conditioning for over four thousand years. In India, castor oil lamps are used in religious ceremonies, and the plant appears in classical Sanskrit texts as Eranda. Traditional healers apply warmed castor oil packs to the abdomen for digestive complaints. Seed oil has been used to waterproof fabrics and preserve wood. In Egypt, castor oil was employed in mummification processes. The plant\'s striking leaves also made it a common garden ornamental in colonial botanical gardens throughout the tropics.',
    economicImportance:
      'Global castor oil production exceeds two million metric tons annually, with India as the leading producer. The oil is indispensable in manufacturing lubricants, paints, varnishes, plastics, nylon, perfumes, and pharmaceuticals. Hydrogenated castor oil (castor wax) is used in cosmetics and food additives. The seed meal remaining after oil extraction, detoxified of ricin, serves as organic fertilizer. Emerging applications include biodiesel production and biodegradable polymers. The global castor oil market continues to expand due to demand for sustainable, plant-derived industrial raw materials.',
    interestingFacts:
      'A single castor bean seed contains enough ricin to be lethal if chewed and swallowed, yet castor oil pressed from the same seeds is safely consumed worldwide. Ricin gained notoriety as a potential bioweapon, but the plant itself has been cultivated peacefully for millennia. The name Ricinus means tick in Latin, referring to the resemblance of the seeds to blood-filled ticks. Castor plants can grow up to four meters in a single season under ideal conditions. NASA studied castor oil derivatives for lubricating spacecraft components due to their exceptional viscosity and thermal stability.',
  },
  {
    id: 2,
    slug: 'tabernaemontana-divaricata',
    scientificName: 'Tabernaemontana divaricata',
    commonName: 'Crape Jasmine',
    family: 'Apocynaceae',
    thumbnail: 'assets/plants/tabernaemontana-divaricata/thumb.jpg',
    plantPhoto: 'assets/plants/tabernaemontana-divaricata/plant.jpg',
    herbariumPhoto: 'assets/plants/tabernaemontana-divaricata/herbarium.jpg',
    collectionInfo: {
      locality: 'B.N. College (Garden)',
      collectedBy: 'Pallavi Kumari',
      date: '18.06.2026',
      remarks: 'Pinwheel-like blooms',
    },
    classification: {
      kingdom: 'Plantae',
      division: 'Magnoliophyta',
      class: 'Magnoliopsida',
      order: 'Gentianales',
      family: 'Apocynaceae',
      genus: 'Tabernaemontana',
      species: 'T. divaricata',
    },
    description:
      'Tabernaemontana divaricata, known as crape jasmine or pinwheel flower, is an evergreen shrub prized throughout tropical Asia for its pure white, waxy blossoms that resemble miniature pinwheels. The species typically grows two to four meters tall with a spreading, open habit and glossy dark green foliage that provides year-round ornamental value. Its flowers feature five overlapping petals arranged in a pinwheel pattern with a subtle spiral twist, creating an elegant geometric form that has made it a staple of temple gardens and formal landscapes. The plant exudes a milky latex when cut, characteristic of the Apocynaceae family. Double-flowered cultivars are widely planted, though the single-flowered form documented in this herbarium specimen displays the classic pinwheel morphology most valued by botanists for taxonomic study.',
    habitat:
      'Native to South and Southeast Asia, Tabernaemontana divaricata occurs naturally in open forests, forest edges, and streamside thickets from India through Indonesia. It prefers partial shade to full sun and humid tropical climates with moderate rainfall. The plant is widely cultivated as an ornamental hedge and specimen shrub in gardens, college campuses, and public parks throughout the Indian subcontinent. At B.N. College garden, it grows in sheltered beds where consistent moisture and dappled light support continuous flowering. It tolerates pruning well and adapts to container cultivation, making it suitable for botanical teaching collections and landscape demonstration plots.',
    morphology:
      'This shrub exhibits a multi-stemmed, branching architecture with opposite leaf arrangement along woody stems. The overall silhouette is rounded to vase-shaped, with branches spreading at wide angles as indicated by the specific epithet divaricata, meaning spreading. Bark on older stems is gray-brown and smooth. The plant maintains evergreen foliage in tropical climates but may drop leaves briefly during dry seasons. Growth is moderate, adding thirty to sixty centimeters annually under favorable conditions. The compact form responds well to hedging, and plants can be maintained at one to two meters for formal garden use.',
    flowers:
      'Flowers are the defining ornamental feature, appearing singly or in small cymes at branch tips throughout the year in tropical climates. Each blossom measures five to seven centimeters across with five white, waxy, overlapping petals arranged in a pinwheel configuration with a slight helical twist. The corolla tube is slender and greenish, flaring into broad petal lobes with rounded tips. A contrasting orange-yellow center marks the point where petals overlap around the reproductive structures. Flowers open at dawn, remain pristine for two to three days, and emit a faint sweet fragrance most noticeable in the evening. The pinwheel-like bloom structure noted on the herbarium label is the key identifying character.',
    leaves:
      'Leaves are simple, opposite, and elliptic to oblong-lanceolate, measuring eight to fifteen centimeters long and three to five centimeters wide. The blade is coriaceous with a glossy dark green upper surface and a paler, matte underside. The apex is acuminate and the base is cuneate to rounded. The midrib is prominent with numerous parallel secondary veins running toward the margin. Petioles are short, stout, and often reddish. Leaves are arranged in decussate pairs along the stem, creating a regular, symmetrical pattern. The thick cuticle reduces water loss and gives the foliage its characteristic shine.',
    stem:
      'Stems are woody, terete, and green on young growth, becoming gray-brown and lignified with age. Branching is sympodial with opposite decussate arrangement. When cut or broken, stems immediately exude a copious milky white latex that coagulates on exposure to air. Lenticels are inconspicuous on young green stems. The pith is solid and white. Internodes are moderately spaced, typically three to six centimeters apart. Stem diameter at the base of mature shrubs reaches three to five centimeters. The latex contains alkaloids and should be handled with care to avoid skin and eye irritation.',
    fruitsAndSeeds:
      'Fertilized flowers develop into paired follicles, characteristic of many Apocynaceae genera. Each follicle is slender, cylindrical, and green, splitting along one suture to release numerous small seeds. Seeds are oblong, brown, and embedded in a fleshy red aril that attracts birds for dispersal. Fruit set is moderate in cultivated specimens, as many garden plants receive heavy pruning that removes developing fruit. In wild populations, the paired follicles are a reliable taxonomic character distinguishing Tabernaemontana from related genera with different fruit morphologies.',
    ecologicalImportance:
      'Crape jasmine flowers provide nectar and pollen for butterflies, moths, and bees, particularly during early morning hours when blossoms first open. The red arils on seeds are consumed by birds, which disperse seeds in forest edge habitats. The dense evergreen foliage offers shelter for small birds and insects. In garden ecosystems, the plant contributes to biodiversity in cultivated landscapes and supports pollinator populations in urban and campus environments. Its moderate water requirements make it suitable for sustainable landscaping in tropical regions.',
    medicinalUses:
      'Traditional medicine systems in India and Southeast Asia employ Tabernaemontana divaricata for treating eye diseases, skin infections, and hypertension. Root bark preparations are used as antipyretic and anti-inflammatory agents. The latex has been applied topically to wounds, though its alkaloid content requires caution. Research has identified iboga alkaloids and related compounds with potential neurological activity. In Ayurveda, the plant is known as Nandivriksha and is associated with treatments for dental pain and digestive disorders. Modern pharmacological studies continue to investigate its alkaloid profile for therapeutic applications.',
    traditionalUses:
      'In South Indian temple tradition, crape jasmine flowers are offered in daily worship and strung into garlands for religious ceremonies. The pristine white blossoms symbolize purity and are essential elements of puja rituals. Gardeners have cultivated the plant for centuries as living fences and ornamental hedges around homes and sacred spaces. The wood is hard and has been used for small handicrafts. Flower extract has been used as a natural hair conditioner in traditional beauty preparations across tropical Asia.',
    economicImportance:
      'The primary economic value of Tabernaemontana divaricata lies in the ornamental horticulture industry. Millions of plants are propagated annually through cuttings for landscape use across tropical and subtropical regions. The cut flower industry utilizes blossoms for garlands and floral arrangements, particularly in South India. Nursery production provides livelihoods for horticulturists and garden center operators. Pharmaceutical research into its alkaloids represents a potential future economic avenue, though commercial drug development remains in early stages.',
    interestingFacts:
      'The genus name honors the German botanist Jacob Tabernaemontanus, whose name itself means tavern in the mountains. The pinwheel flower arrangement results from contort aestivation, where each petal overlaps its neighbor in a consistent spiral direction. Double-flowered varieties contain mutated stamens transformed into petaloid structures, but the single form preserves the natural pinwheel geometry. The plant is so associated with Indian temple culture that it is rarely found far from human habitation in its native range.',
  },
]

const createPlant = (data) => ({
  ...data,
  thumbnail: asset(data.thumbnail),
  plantPhoto: asset(data.plantPhoto),
  herbariumPhoto: asset(data.herbariumPhoto),
})

const allRaw = [...rawPlantsPart1, ...rawPlantsPart2, ...rawPlantsPart3]

export const plants = allRaw.map(createPlant)

export function getPlantBySlug(slug) {
  return plants.find((p) => p.slug === slug)
}

export function getAllFamilies() {
  return [...new Set(plants.map((p) => p.family))].sort()
}

export function searchPlants(query = '', family = 'all') {
  const q = query.toLowerCase().trim()
  return plants.filter((p) => {
    const matchesFamily = family === 'all' || p.family === family
    const matchesQuery =
      !q ||
      p.scientificName.toLowerCase().includes(q) ||
      p.commonName.toLowerCase().includes(q) ||
      p.family.toLowerCase().includes(q)
    return matchesFamily && matchesQuery
  })
}

export function getStatistics() {
  return {
    specimens: plants.length,
    families: getAllFamilies().length,
    sheets: plants.length,
    records: plants.length,
  }
}
