/**
 * ================================================
 * LEAFSPEC - Complete Enhanced Tree Database
 * Created by: SYLVAH™
 * © 2026 SYLVAH™. All Rights Reserved.
 * 
 * Project ID: LEAF-2026-SYLVAH-001
 * Version: 2.0.0 - Complete with 57 Trees
 * Last Updated: February 27, 2026
 * ================================================
 */

const PROJECT_SIGNATURE = {
    id: "LS-SYL-2026-A7F3",
    author: "SYLVAH™",
    created: "2026-02-27",
    version: "2.0.0",
    repository: "github.com/houda-djb/leafspec",
    hash: "e8a9f3b2c4d1a6f7"
};

const treesData = [
    {
        id: 1,
        name: "Aleppo Pine",
        scientificName: "Pinus halepensis",
        type: "coniferous",
        family: "Pinaceae",
        
        height: "15-20m",
        spread: "10-15m",
        growthRate: "Moderate to Fast",
        lifespan: "150-200 years",
        
        climate: ["mediterranean", "subtropical"],
        hardiness: "USDA Zones 8-11",
        pollution: "Good",
        drought: "Excellent",
        
        waterRequirements: "Low",
        rootSystem: "Deep taproot",
        flowerColor: "Yellow-brown cones",
        bloomingSeason: "Spring",
        fallColor: "Evergreen (no fall color)",
        wildlifeBenefits: ["Seeds for birds", "Nesting habitat", "Shelter"],
        commonPests: ["Pine processionary moth", "Scale insects"],
        plantingSeason: "Fall or early spring",
        costRange: "Budget to Moderate",
        
        description: "Mediterranean pine perfectly adapted to dry climates. Excellent for Mediterranean and North African urban areas with minimal water needs.",
        
        benefits: [
            "Extremely drought tolerant",
            "Fast-growing evergreen screen",
            "Tolerates poor, rocky soils",
            "Mediterranean climate specialist"
        ],
        
        maintenance: "Very Low - naturally adapted to harsh conditions",
        
        _meta: {
            catalogId: "SYL-001",
            sourceCode: "LS2026",
            revision: "HDB-v2"
        },
        
        image: "assets/images/trees/Aleppo Pine tree.jpg"
    },
    
    {
        id: 2,
        name: "American Elm",
        scientificName: "Ulmus americana",
        type: "deciduous",
        family: "Ulmaceae",
        
        height: "25-35m",
        spread: "15-25m",
        growthRate: "Fast",
        lifespan: "200+ years",
        
        climate: ["temperate", "continental"],
        hardiness: "USDA Zones 2-9",
        pollution: "Good",
        drought: "Moderate",
        
        waterRequirements: "Moderate",
        rootSystem: "Shallow, spreading, can damage sidewalks",
        flowerColor: "Inconspicuous green",
        bloomingSeason: "Early spring",
        fallColor: "Yellow",
        wildlifeBenefits: ["Seeds for birds", "Nesting habitat", "Supports many insects"],
        commonPests: ["Dutch elm disease (choose resistant varieties)", "Elm leaf beetle"],
        plantingSeason: "Fall to spring",
        costRange: "Moderate to Premium (resistant cultivars)",
        
        description: "Classic American street tree with vase-shaped canopy. Disease-resistant cultivars have revived this beloved species for urban boulevards.",
        
        benefits: [
            "Iconic vase-shaped form",
            "Rapid growth rate",
            "New disease-resistant varieties",
            "Creates beautiful tree-lined streets"
        ],
        
        maintenance: "Low - choose resistant cultivars",
        
        _meta: {
            catalogId: "SYL-002",
            sourceCode: "LS2026",
            revision: "HDB-v2"
        },
        
        image: "assets/images/trees/american elm.jpg"
    },
    
    {
        id: 3,
        name: "Atlas Cedar",
        scientificName: "Cedrus atlantica",
        type: "coniferous",
        family: "Pinaceae",
        
        height: "30-40m",
        spread: "12-20m",
        growthRate: "Slow to Moderate",
        lifespan: "200+ years",
        
        climate: ["mediterranean", "temperate"],
        hardiness: "USDA Zones 6-9",
        pollution: "Good",
        drought: "High",
        
        waterRequirements: "Low to Moderate",
        rootSystem: "Deep, spreading",
        flowerColor: "Male cones (catkins)",
        bloomingSeason: "Fall",
        fallColor: "Evergreen (no fall color)",
        wildlifeBenefits: ["Nesting sites", "Seeds for birds", "Shelter for wildlife"],
        commonPests: ["Cedar aphids", "Needle blight (rare)"],
        plantingSeason: "Spring or fall",
        costRange: "Moderate to Premium",
        
        description: "Majestic North African native cedar from the Atlas Mountains. Symbol of Algeria with striking blue-green needles and pyramidal form.",
        
        benefits: [
            "Native to Algeria (Atlas Mountains)",
            "Drought tolerant once established",
            "Stunning architectural form",
            "Blue-green evergreen foliage"
        ],
        
        maintenance: "Low - minimal pruning needed",
        
        _meta: {
            catalogId: "SYL-003",
            sourceCode: "LS2026",
            revision: "HDB-v2"
        },
        
        image: "assets/images/trees/atlas cedar tree.jpg"
    },
    
    {
        id: 4,
        name: "Bald Cypress",
        scientificName: "Taxodium distichum",
        type: "coniferous",
        family: "Cupressaceae",
        
        height: "25-35m",
        spread: "15-20m",
        growthRate: "Moderate",
        lifespan: "600+ years",
        
        climate: ["temperate", "subtropical"],
        hardiness: "USDA Zones 4-9",
        pollution: "Good",
        drought: "Moderate",
        
        waterRequirements: "High (but tolerates drought once established)",
        rootSystem: "Deep, develops 'knees' in wet soil",
        flowerColor: "Purple male cones",
        bloomingSeason: "Spring",
        fallColor: "Russet-orange to brown",
        wildlifeBenefits: ["Nesting sites", "Seeds for waterfowl", "Aquatic habitat"],
        commonPests: ["Generally pest-free", "Occasional spider mites"],
        plantingSeason: "Spring",
        costRange: "Moderate",
        
        description: "Unique deciduous conifer tolerating both wet and dry conditions. Develops characteristic 'knees' and russet fall color.",
        
        benefits: [
            "Tolerates both wet and dry soils",
            "Beautiful russet fall color",
            "Very long-lived",
            "Unique pyramidal form"
        ],
        
        maintenance: "Low - very adaptable",
        
        _meta: {
            catalogId: "SYL-004",
            sourceCode: "LS2026",
            revision: "HDB-v2"
        },
        
        image: "assets/images/trees/bald cypress tree.jpg"
    },
    
    {
        id: 5,
        name: "Black Locust",
        scientificName: "Robinia pseudoacacia",
        type: "deciduous",
        family: "Fabaceae",
        
        height: "15-25m",
        spread: "10-15m",
        growthRate: "Very Fast",
        lifespan: "80-100 years",
        
        climate: ["temperate", "continental"],
        hardiness: "USDA Zones 3-8",
        pollution: "Excellent",
        drought: "Excellent",
        
        waterRequirements: "Low",
        rootSystem: "Shallow, spreading, can sucker",
        flowerColor: "White, fragrant clusters",
        bloomingSeason: "Late spring (May-June)",
        fallColor: "Yellow-green",
        wildlifeBenefits: ["Excellent for bees", "Nitrogen-fixing", "Seeds for birds"],
        commonPests: ["Locust borer", "Leaf miners"],
        plantingSeason: "Spring or fall",
        costRange: "Budget",
        
        description: "Fast-growing pioneer species with fragrant white flowers. Nitrogen-fixing ability improves soil quality.",
        
        benefits: [
            "Extremely fast growth",
            "Fragrant spring flowers",
            "Fixes nitrogen in soil",
            "Highly drought tolerant"
        ],
        
        maintenance: "Moderate - can be invasive, remove suckers",
        
        _meta: {
            catalogId: "SYL-005",
            sourceCode: "LS2026",
            revision: "HDB-v2"
        },
        
        image: "assets/images/trees/Black Locust Tree.jpg"
    },
    
    {
        id: 6,
        name: "Callery Pear",
        scientificName: "Pyrus calleryana",
        type: "deciduous",
        family: "Rosaceae",
        
        height: "12-15m",
        spread: "8-12m",
        growthRate: "Fast",
        lifespan: "25-50 years",
        
        climate: ["temperate"],
        hardiness: "USDA Zones 5-9",
        pollution: "Excellent",
        drought: "Good",
        
        waterRequirements: "Moderate",
        rootSystem: "Shallow, spreading",
        flowerColor: "White, showy",
        bloomingSeason: "Early spring (March-April)",
        fallColor: "Red to purple",
        wildlifeBenefits: ["Early nectar for pollinators", "Small fruits for birds"],
        commonPests: ["Fire blight", "Weak branch structure"],
        plantingSeason: "Spring or fall",
        costRange: "Budget to Moderate",
        
        description: "Popular urban tree with spectacular early spring flowers. Choose improved cultivars for better branch structure.",
        
        benefits: [
            "Spectacular spring flower display",
            "Excellent pollution tolerance",
            "Glossy foliage",
            "Reliable fall color"
        ],
        
        maintenance: "Moderate - prune for structure, watch for weak branches",
        
        _meta: {
            catalogId: "SYL-006",
            sourceCode: "LS2026",
            revision: "HDB-v2"
        },
        
        image: "assets/images/trees/callery pear.jpg"
    },
    
    {
        id: 7,
        name: "Catalpa",
        scientificName: "Catalpa speciosa",
        type: "deciduous",
        family: "Bignoniaceae",
        
        height: "15-25m",
        spread: "12-18m",
        growthRate: "Fast",
        lifespan: "60-80 years",
        
        climate: ["temperate"],
        hardiness: "USDA Zones 4-8",
        pollution: "Good",
        drought: "Moderate",
        
        waterRequirements: "Moderate",
        rootSystem: "Shallow to moderate",
        flowerColor: "White with purple and yellow markings",
        bloomingSeason: "Late spring to early summer (May-June)",
        fallColor: "Yellow-green",
        wildlifeBenefits: ["Attracts hummingbirds", "Host plant for catalpa sphinx moth"],
        commonPests: ["Catalpa sphinx caterpillar", "Leaf spots"],
        plantingSeason: "Spring",
        costRange: "Budget",
        
        description: "Fast-growing tree with large heart-shaped leaves and showy flowers. Dramatic presence with interesting long seed pods.",
        
        benefits: [
            "Large ornamental flowers",
            "Very fast growth",
            "Large shade leaves",
            "Unique seed pods"
        ],
        
        maintenance: "Moderate - can be messy (pods and leaves)",
        
        _meta: {
            catalogId: "SYL-007",
            sourceCode: "LS2026",
            revision: "HDB-v2"
        },
        
        image: "assets/images/trees/Catalpa Tree.jpg"
    },
    
    {
        id: 8,
        name: "Chinese Fringe Tree",
        scientificName: "Chionanthus retusus",
        type: "deciduous",
        family: "Oleaceae",
        
        height: "5-8m",
        spread: "5-8m",
        growthRate: "Slow to Moderate",
        lifespan: "50-100 years",
        
        climate: ["temperate"],
        hardiness: "USDA Zones 5-9",
        pollution: "Good",
        drought: "Moderate",
        
        waterRequirements: "Moderate",
        rootSystem: "Moderate, non-invasive",
        flowerColor: "White, fragrant, fringe-like",
        bloomingSeason: "Late spring to early summer (May-June)",
        fallColor: "Yellow",
        wildlifeBenefits: ["Attracts pollinators", "Blue fruits for birds"],
        commonPests: ["Generally pest-free"],
        plantingSeason: "Spring or fall",
        costRange: "Premium",
        
        description: "Small ornamental tree with spectacular white fringe-like flowers. Excellent for small urban spaces and courtyards.",
        
        benefits: [
            "Stunning fringe-like flowers",
            "Compact size for small spaces",
            "Pest and disease resistant",
            "Fragrant blooms"
        ],
        
        maintenance: "Low - minimal pruning needed",
        
        _meta: {
            catalogId: "SYL-008",
            sourceCode: "LS2026",
            revision: "HDB-v2"
        },
        
        image: "assets/images/trees/Chinese fringe tree.jpg"
    },
    
    {
        id: 9,
        name: "Chinese Pistache",
        scientificName: "Pistacia chinensis",
        type: "deciduous",
        family: "Anacardiaceae",
        
        height: "10-15m",
        spread: "10-15m",
        growthRate: "Moderate",
        lifespan: "100-150 years",
        
        climate: ["temperate", "subtropical"],
        hardiness: "USDA Zones 6-9",
        pollution: "Excellent",
        drought: "Excellent",
        
        waterRequirements: "Low",
        rootSystem: "Deep, non-invasive",
        flowerColor: "Inconspicuous green",
        bloomingSeason: "Spring",
        fallColor: "Brilliant orange, red, yellow",
        wildlifeBenefits: ["Small fruits for birds"],
        commonPests: ["Virtually pest-free", "Occasional verticillium wilt"],
        plantingSeason: "Fall to spring",
        costRange: "Moderate",
        
        description: "Excellent urban tree with spectacular fall color and high drought tolerance. One of the best small to medium street trees.",
        
        benefits: [
            "Outstanding fall color",
            "Extremely drought tolerant",
            "Pest and disease resistant",
            "Excellent urban tolerance"
        ],
        
        maintenance: "Very Low - drought-tolerant once established",
        
        _meta: {
            catalogId: "SYL-009",
            sourceCode: "LS2026",
            revision: "HDB-v2"
        },
        
        image: "assets/images/trees/Chinese Pistache.jpg"
    },
    
    {
        id: 10,
        name: "Chitalpa",
        scientificName: "× Chitalpa tashkentensis",
        type: "deciduous",
        family: "Bignoniaceae",
        
        height: "6-10m",
        spread: "6-10m",
        growthRate: "Fast",
        lifespan: "40-60 years",
        
        climate: ["arid", "mediterranean"],
        hardiness: "USDA Zones 6-9",
        pollution: "Good",
        drought: "Excellent",
        
        waterRequirements: "Low",
        rootSystem: "Moderate, non-invasive",
        flowerColor: "Pink, white, or lavender trumpet flowers",
        bloomingSeason: "Summer (May-September)",
        fallColor: "Yellow",
        wildlifeBenefits: ["Attracts hummingbirds", "Butterfly friendly"],
        commonPests: ["Generally pest-free"],
        plantingSeason: "Spring",
        costRange: "Moderate",
        
        description: "Hybrid tree perfect for hot, dry climates. Long-blooming trumpet flowers and exceptional drought tolerance.",
        
        benefits: [
            "Long summer flowering period",
            "Extremely drought tolerant",
            "Attracts hummingbirds",
            "Heat tolerant"
        ],
        
        maintenance: "Low - minimal water needs once established",
        
        _meta: {
            catalogId: "SYL-010",
            sourceCode: "LS2026",
            revision: "HDB-v2"
        },
        
        image: "assets/images/trees/Chitalpa.jpg"
    },

    {
    id: 11,
    name: "Colorado Blue Spruce",
    scientificName: "Picea pungens",
    type: "coniferous",
    family: "Pinaceae",
    
    height: "15-23m",
    spread: "6-8m",
    growthRate: "Slow to Moderate",
    lifespan: "200+ years",
    
    climate: ["temperate", "continental", "montane"],
    hardiness: "USDA Zones 2-7",
    pollution: "Moderate",
    drought: "Moderate",
    
    waterRequirements: "Moderate",
    rootSystem: "Shallow, wide-spreading",
    flowerColor: "Reddish-purple cones",
    bloomingSeason: "Late spring",
    fallColor: "Evergreen (blue-green needles)",
    wildlifeBenefits: ["Shelter for birds", "Nesting habitat", "Seeds for wildlife"],
    commonPests: ["Spruce spider mites", "Aphids", "Cytospora canker"],
    plantingSeason: "Fall or early spring",
    costRange: "Moderate to Premium",
    
    description: "Ornamental evergreen known for its striking blue needles. Popular as a landscape focal tree and widely used as a living windbreak in cooler climates.",
    
    benefits: [
        "Striking blue foliage",
        "Excellent windbreak and privacy screen",
        "Cold-hardy conifer",
        "Long-lived ornamental tree"
    ],
    
    maintenance: "Low to Moderate - occasional pest monitoring and pruning of dead branches",
    
    _meta: {
        catalogId: "SYL-011",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/colorado blue spruce.jpg"
},
{
    id: 12,
    name: "Crape Myrtle",
    scientificName: "Lagerstroemia indica",
    type: "deciduous",
    family: "Lythraceae",
    
    height: "6-12m",
    spread: "4-8m",
    growthRate: "Fast",
    lifespan: "50-100 years",
    
    climate: ["subtropical", "temperate"],
    hardiness: "USDA Zones 7-10",
    pollution: "Good",
    drought: "Good",
    
    waterRequirements: "Low to Moderate",
    rootSystem: "Shallow, non-invasive",
    flowerColor: "Pink, red, white, or purple",
    bloomingSeason: "Summer",
    fallColor: "Red to orange",
    wildlifeBenefits: ["Attracts pollinators", "Provides shelter for birds"],
    commonPests: ["Aphids", "Powdery mildew", "Scale insects"],
    plantingSeason: "Spring or fall",
    costRange: "Budget to Moderate",
    
    description: "Ornamental flowering tree famous for its long summer blooms and decorative peeling bark. Ideal for streets, parks, and small urban spaces in warm climates.",
    
    benefits: [
        "Long-lasting summer flowers",
        "Attractive peeling bark",
        "Compact size for small streets",
        "Good heat and pollution tolerance"
    ],
    
    maintenance: "Low - minimal pruning, good disease resistance in modern cultivars",
    
    _meta: {
        catalogId: "SYL-012",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/crape myrtle.jpg"
},
{
    id: 13,
    name: "Dawn Redwood",
    scientificName: "Metasequoia glyptostroboides",
    type: "coniferous",
    family: "Cupressaceae",
    
    height: "25-35m",
    spread: "8-10m",
    growthRate: "Fast",
    lifespan: "200+ years",
    
    climate: ["temperate", "continental"],
    hardiness: "USDA Zones 4-8",
    pollution: "Moderate",
    drought: "Low",
    
    waterRequirements: "High",
    rootSystem: "Deep, spreading",
    flowerColor: "Inconspicuous yellow-brown cones",
    bloomingSeason: "Early spring",
    fallColor: "Copper to orange (deciduous conifer)",
    wildlifeBenefits: ["Shelter for birds", "Nesting habitat", "Seeds for wildlife"],
    commonPests: ["Bagworms", "Spider mites (rare)"],
    plantingSeason: "Fall or early spring",
    costRange: "Moderate to Premium",
    
    description: "Living fossil conifer rediscovered in China in the 1940s. Fast-growing, majestic tree with soft needles that turn copper in fall before shedding.",
    
    benefits: [
        "Fast-growing shade tree",
        "Unique deciduous conifer",
        "Beautiful fall color",
        "Long-lived and resilient"
    ],
    
    maintenance: "Low to Moderate - prefers moist soil and open space",
    
    _meta: {
        catalogId: "SYL-013",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/Dawn redwood tree.jpg"
},
{
    id: 14,
    name: "Deodar Cedar",
    scientificName: "Cedrus deodara",
    type: "coniferous",
    family: "Pinaceae",
    
    height: "20-35m",
    spread: "8-12m",
    growthRate: "Moderate",
    lifespan: "200+ years",
    
    climate: ["temperate", "subtropical", "montane"],
    hardiness: "USDA Zones 7-9",
    pollution: "Good",
    drought: "Good",
    
    waterRequirements: "Moderate",
    rootSystem: "Deep, wide-spreading",
    flowerColor: "Greenish cones",
    bloomingSeason: "Fall",
    fallColor: "Evergreen (silvery-green needles)",
    wildlifeBenefits: ["Shelter for birds", "Nesting habitat", "Seeds for wildlife"],
    commonPests: ["Deodar weevil", "Scale insects", "Spider mites"],
    plantingSeason: "Fall or early spring",
    costRange: "Moderate to Premium",
    
    description: "Graceful cedar with drooping branch tips and soft silvery-green needles. Often used as a majestic specimen tree in parks and large avenues.",
    
    benefits: [
        "Elegant drooping form",
        "Good heat and drought tolerance",
        "Long-lived evergreen shade",
        "Strong ornamental value"
    ],
    
    maintenance: "Low - occasional shaping and pest monitoring",
    
    _meta: {
        catalogId: "SYL-014",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/Deodar Cedar Tree.jpg"
},
{
    id: 15,
    name: "Desert Willow",
    scientificName: "Chilopsis linearis",
    type: "deciduous",
    family: "Bignoniaceae",
    
    height: "6-9m",
    spread: "4-7m",
    growthRate: "Moderate",
    lifespan: "50-150 years",
    
    climate: ["arid", "semi-arid", "subtropical"],
    hardiness: "USDA Zones 7-11",
    pollution: "Good",
    drought: "Excellent",
    
    waterRequirements: "Low",
    rootSystem: "Deep, non-invasive",
    flowerColor: "Pink to purple trumpet flowers",
    bloomingSeason: "Late spring to summer",
    fallColor: "Yellow",
    wildlifeBenefits: ["Attracts hummingbirds", "Supports pollinators", "Provides shelter for birds"],
    commonPests: ["Spider mites", "Caterpillars (rare)"],
    plantingSeason: "Spring or fall",
    costRange: "Budget to Moderate",
    
    description: "Desert-adapted flowering tree with showy trumpet-shaped blooms. Excellent choice for dry urban environments, medians, and xeriscape landscapes.",
    
    benefits: [
        "Exceptional drought tolerance",
        "Showy, long-lasting flowers",
        "Low water and maintenance needs",
        "Great for hot urban streets"
    ],
    
    maintenance: "Low - light pruning for shape, thrives in heat",
    
    _meta: {
        catalogId: "SYL-015",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/desert willow tree.jpg"
},
{
    id: 16,
    name: "Eastern Red Cedar",
    scientificName: "Juniperus virginiana",
    type: "coniferous",
    family: "Cupressaceae",
    
    height: "10-20m",
    spread: "3-6m",
    growthRate: "Moderate",
    lifespan: "100-300 years",
    
    climate: ["temperate", "continental"],
    hardiness: "USDA Zones 2-9",
    pollution: "Good",
    drought: "Excellent",
    
    waterRequirements: "Low",
    rootSystem: "Deep, adaptable",
    flowerColor: "Inconspicuous yellow-brown cones",
    bloomingSeason: "Early spring",
    fallColor: "Evergreen (blue-green foliage, purplish berries)",
    wildlifeBenefits: ["Berries for birds", "Shelter for wildlife", "Nesting habitat"],
    commonPests: ["Bagworms", "Cedar-apple rust"],
    plantingSeason: "Fall or early spring",
    costRange: "Budget to Moderate",
    
    description: "Hardy native conifer widely used for windbreaks and erosion control. Extremely adaptable to poor soils, drought, and urban conditions.",
    
    benefits: [
        "Exceptional drought tolerance",
        "Excellent windbreak and screen",
        "Tough native species",
        "Supports wildlife with berries"
    ],
    
    maintenance: "Very Low - thrives with minimal care",
    
    _meta: {
        catalogId: "SYL-016",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/Eastern Red Cedar.jpg"
},
{
    id: 17,
    name: "Eastern Redbud",
    scientificName: "Cercis canadensis",
    type: "deciduous",
    family: "Fabaceae",
    
    height: "6-10m",
    spread: "6-10m",
    growthRate: "Moderate",
    lifespan: "50-100 years",
    
    climate: ["temperate", "continental"],
    hardiness: "USDA Zones 4-9",
    pollution: "Moderate",
    drought: "Moderate",
    
    waterRequirements: "Moderate",
    rootSystem: "Shallow, non-invasive",
    flowerColor: "Pink to magenta",
    bloomingSeason: "Early spring",
    fallColor: "Yellow",
    wildlifeBenefits: ["Early nectar for pollinators", "Seeds for birds", "Shelter for small wildlife"],
    commonPests: ["Canker diseases", "Borers", "Scale insects"],
    plantingSeason: "Fall or early spring",
    costRange: "Budget to Moderate",
    
    description: "Ornamental small tree famous for its early spring pink blossoms that appear directly on branches and trunk. Great for streetscapes and urban gardens.",
    
    benefits: [
        "Early spring color",
        "Compact size for small spaces",
        "Native species with ecological value",
        "Attractive heart-shaped leaves"
    ],
    
    maintenance: "Low - light pruning and occasional disease monitoring",
    
    _meta: {
        catalogId: "SYL-017",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/Eastern Redbud Tree.jpg"
},
{
    id: 18,
    name: "Eastern White Pine",
    scientificName: "Pinus strobus",
    type: "coniferous",
    family: "Pinaceae",
    
    height: "30-45m",
    spread: "8-12m",
    growthRate: "Fast",
    lifespan: "200-400 years",
    
    climate: ["temperate", "continental"],
    hardiness: "USDA Zones 3-8",
    pollution: "Moderate",
    drought: "Moderate",
    
    waterRequirements: "Moderate",
    rootSystem: "Shallow to moderately deep, wide-spreading",
    flowerColor: "Yellow male cones, green female cones",
    bloomingSeason: "Late spring",
    fallColor: "Evergreen (soft blue-green needles)",
    wildlifeBenefits: ["Seeds for birds and mammals", "Nesting habitat", "Winter shelter"],
    commonPests: ["White pine blister rust", "Pine weevil", "Sawflies"],
    plantingSeason: "Fall or early spring",
    costRange: "Budget to Moderate",
    
    description: "Tall native pine with soft, feathery needles and graceful form. Historically important timber tree, now valued as a landscape and windbreak species.",
    
    benefits: [
        "Fast-growing evergreen shade",
        "Soft ornamental foliage",
        "Excellent windbreak",
        "Long-lived native species"
    ],
    
    maintenance: "Low to Moderate - monitor for blister rust and pests",
    
    _meta: {
        catalogId: "SYL-018",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/Eastern white pine.jpg"
},
{
    id: 19,
    name: "European Beech",
    scientificName: "Fagus sylvatica",
    type: "deciduous",
    family: "Fagaceae",
    
    height: "15-25m (60-80 ft)",
    spread: "12-15m (40-50 ft)",
    growthRate: "Slow to Medium",
    lifespan: "150-200+ years",
    
    climate: ["temperate", "continental"],
    hardiness: "USDA Zones 4-7",
    pollution: "Medium",
    drought: "Moderate (once established)",
    
    waterRequirements: "Average to moist, consistent moisture",
    rootSystem: "Shallow, spreading, surface roots with age",
    flowerColor: "Inconspicuous yellow-green",
    bloomingSeason: "Late April to May",
    fallColor: "Harvest gold to yellow-brown",
    wildlifeBenefits: ["Nuts for squirrels", "Seeds for birds", "Nesting habitat", "Supports insects"],
    commonPests: ["Beech bark disease", "Aphids", "Beech scale", "Mites"],
    plantingSeason: "Spring (sensitive to fall transplanting)",
    costRange: "Moderate to Premium",
    
    description: "A magnificent shade tree with smooth silver-gray bark and a dense oval canopy. European Beech is one of the most beautiful landscape trees, offering year-round interest with its ornamental bark, vibrant fall color, and architectural branching structure. It serves as a majestic specimen for large landscapes and parks.",
    
    benefits: [
        "Stunning smooth gray bark provides winter interest",
        "Excellent shade tree with dense canopy",
        "Many cultivars available for varied foliage color and habit",
        "Wildlife attractant with edible nuts",
        "Long-lived heritage tree for future generations"
    ],
    
    maintenance: "Low - choose planting site carefully, protect shallow roots, avoid soil compaction",
    
    _meta: {
        catalogId: "SYL-019",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/european beech.jpg"
},
{
    id: 20,
    name: "Flowering Dogwood",
    scientificName: "Cornus florida",
    type: "deciduous",
    family: "Cornaceae",
    
    height: "5-10m (15-30 ft)",
    spread: "4.5-9m (15-30 ft)",
    growthRate: "Slow to Medium",
    lifespan: "80 years",
    
    climate: ["temperate", "continental", "subtropical"],
    hardiness: "USDA Zones 5-9",
    pollution: "Poor (intolerant of pollution)",
    drought: "Moderate",
    
    waterRequirements: "Medium - average, consistent moisture",
    rootSystem: "Shallow, spreading, benefits from mulch",
    flowerColor: "Yellow-green (tiny flowers) surrounded by white bracts",
    bloomingSeason: "March to May",
    fallColor: "Bright red to red-purple",
    wildlifeBenefits: ["Birds (eat fruits)", "Butterflies", "Native bees", "Caterpillars (host for 115+ species)"],
    commonPests: ["Dogwood anthracnose", "Powdery mildew", "Borers", "Leaf spot", "Scale insects"],
    plantingSeason: "Spring (after last frost) or fall",
    costRange: "Moderate to Premium (cultivar dependent)",
    
    description: "One of the most beautiful native American flowering trees, the Flowering Dogwood puts on a spectacular show in early spring with its large white bracts. This small understory tree offers year-round interest: showy spring flowers, vibrant red fall foliage, bright red berries that attract birds, and distinctive alligator-like bark on mature specimens. It serves as an excellent specimen for residential landscapes, patios, and woodland gardens.",
    
    benefits: [
        "Spectacular spring display with large white bracts",
        "Vibrant red fall color - one of the first trees to change",
        "Bright red berries attract birds and wildlife",
        "Host plant for over 115 species of caterpillars",
        "Distinctive ornamental bark with age",
        "Native understory tree perfect for woodland gardens"
    ],
    
    maintenance: "Medium - prefers acidic, well-drained soil; benefits from mulching to keep roots cool; avoid sprinkling water on leaves; prune in spring to maintain shape; protect from mower damage",
    
    _meta: {
        catalogId: "SYL-020",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/flowering dogwood.jpg"
},
{
    id: 21,
    name: "Ginkgo Biloba",
    scientificName: "Ginkgo biloba",
    type: "deciduous",
    family: "Ginkgoaceae",
    
    height: "15-25m (50-80 ft)",
    spread: "9-15m (30-50 ft)",
    growthRate: "Slow to Medium",
    lifespan: "1000+ years (up to 3000 years)",
    
    climate: ["temperate", "continental", "subtropical"],
    hardiness: "USDA Zones 3-8",
    pollution: "Excellent",
    drought: "Excellent",
    
    waterRequirements: "Low to Medium",
    rootSystem: "Heartroot (deep, non-invasive)",
    flowerColor: "Inconspicuous green (male)",
    bloomingSeason: "April to May",
    fallColor: "Brilliant golden yellow",
    wildlifeBenefits: ["Seeds for squirrels", "Limited wildlife value"],
    commonPests: ["None serious - practically pest-free", "Disease resistant"],
    plantingSeason: "Spring or fall (avoid summer heat)",
    costRange: "Moderate to Premium",
    
    description: "A living fossil and one of the oldest tree species on Earth, the Ginkgo biloba has survived virtually unchanged for over 200 million years. This ancient deciduous tree features unique fan-shaped leaves that flutter in the breeze and transform into a spectacular golden yellow in autumn. With remarkable tolerance to pollution, salt, and compacted soil, it's an exceptional choice for urban environments. Its architectural branching pattern provides winter interest, and its disease-resistant nature makes it virtually problem-free. Note: Only male cultivars should be planted, as female trees produce foul-smelling fruit.",
    
    benefits: [
        "Living fossil - one of the oldest tree species on Earth",
        "Extraordinary golden yellow fall color that drops uniformly",
        "Extremely tolerant of pollution, salt, heat, and compacted soils",
        "Virtually pest and disease-free",
        "Non-invasive root system safe near structures",
        "Unique fan-shaped leaves with architectural beauty"
    ],
    
    maintenance: "Very Low - minimal pruning required; remove only broken or diseased branches in late autumn or winter; water regularly during first few years to establish deep roots; once established, highly drought-tolerant",
    
    _meta: {
        catalogId: "SYL-021",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/ginkgo biloba.jpg"
},
{
    id: 22,
    name: "Golden Rain Tree",
    scientificName: "Koelreuteria paniculata",
    type: "deciduous",
    family: "Sapindaceae",
    
    height: "6-12m (20-40 ft)",
    spread: "6-12m (20-40 ft)",
    growthRate: "Fast",
    lifespan: "50-100 years",
    
    climate: ["temperate", "continental", "subtropical"],
    hardiness: "USDA Zones 5-9",
    pollution: "Good",
    drought: "Excellent",
    
    waterRequirements: "Low to Medium",
    rootSystem: "Fibrous, non-invasive",
    flowerColor: "Bright yellow",
    bloomingSeason: "June to July",
    fallColor: "Yellow to orange-bronze",
    wildlifeBenefits: ["Bees (nectar)", "Butterflies", "Birds (eat seeds)"],
    commonPests: ["Canker diseases", "Root rot (in poorly drained soil)", "Powdery mildew"],
    plantingSeason: "Spring or fall",
    costRange: "Budget to Moderate",
    
    description: "A spectacular small to medium-sized tree prized for its summer display of showy yellow flowers followed by papery lantern-like seed pods that persist into winter. The name 'Golden Rain Tree' comes from the cascading clusters of golden flowers that resemble a gentle rain shower. Its tropical appearance, heat tolerance, and adaptability make it an excellent choice for urban landscapes, patios, and parking lots. Provides multi-season interest with flowers in summer, interesting seed pods in fall, and golden foliage in autumn.",
    
    benefits: [
        "Spectacular summer display with cascading yellow flowers",
        "Unique papery seed pods that resemble Chinese lanterns",
        "Excellent heat and drought tolerance",
        "Tolerant of pollution and urban conditions",
        "Provides dappled shade - lawn grows well beneath",
        "Multi-season interest: flowers, fruit, and fall color"
    ],
    
    maintenance: "Low - prune in late winter to maintain shape and remove dead wood; tolerates a wide range of soil conditions; self-seeds in some regions so remove seedlings if unwanted",
    
    _meta: {
        catalogId: "SYL-022",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/golden rain tree.jpg"
},
{
    id: 23,
    name: "Honey Locust",
    scientificName: "Gleditsia triacanthos",
    type: "deciduous",
    family: "Fabaceae",
    
    height: "20-30m (60-100 ft)",
    spread: "15-25m (50-80 ft)",
    growthRate: "Fast",
    lifespan: "100-150 years",
    
    climate: ["temperate", "continental"],
    hardiness: "USDA Zones 3-9",
    pollution: "Excellent",
    drought: "Excellent",
    
    waterRequirements: "Low to Medium",
    rootSystem: "Deep, spreading, somewhat invasive",
    flowerColor: "Greenish-yellow (inconspicuous)",
    bloomingSeason: "Late spring",
    fallColor: "Golden yellow",
    wildlifeBenefits: ["Deer and livestock (eat pods)", "Bees (nectar)", "Birds and small mammals (seeds)"],
    commonPests: ["Honeylocust pod gall midge", "Spider mites", "Leafhoppers", "Canker diseases"],
    plantingSeason: "Spring or fall",
    costRange: "Budget to Moderate",
    
    description: "A fast-growing, tough shade tree with delicate, fern-like foliage that provides light, dappled shade - allowing grass to grow beneath. Modern thornless and seedless cultivars (like 'Shademaster' or 'Sunburst') eliminate the drawbacks of the native species. Its small leaflets blow away in the wind rather than requiring raking, making it a favorite for low-maintenance landscapes. Exceptionally tolerant of urban conditions, salt, and compacted soils, making it a go-to choice for city plantings, parking lots, and challenging sites.",
    
    benefits: [
        "Provides light, dappled shade - grass grows easily beneath",
        "Fern-like foliage creates delicate, airy appearance",
        "Excellent urban tolerance: salt, pollution, compacted soil",
        "Fast-growing shade provider",
        "Leaves are small and blow away - no raking needed",
        "Thornless and seedless cultivars available"
    ],
    
    maintenance: "Low - prune in late winter to remove dead or crossing branches; choose thornless, seedless cultivars for easiest care; watch for webworms and treat if necessary",
    
    _meta: {
        catalogId: "SYL-023",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/honey locust.jpg"
},
{
    id: 24,
    name: "Japanese Maple",
    scientificName: "Acer palmatum",
    type: "deciduous",
    family: "Sapindaceae",
    
    height: "3-8m (10-25 ft)",
    spread: "3-8m (10-25 ft)",
    growthRate: "Slow to Medium",
    lifespan: "100+ years",
    
    climate: ["temperate", "subtropical"],
    hardiness: "USDA Zones 5-8",
    pollution: "Moderate",
    drought: "Poor to Moderate",
    
    waterRequirements: "Medium - consistent moisture, well-drained",
    rootSystem: "Shallow, fibrous, spreads horizontally",
    flowerColor: "Small reddish-purple (inconspicuous)",
    bloomingSeason: "April to May",
    fallColor: "Brilliant red, orange, or gold (variety dependent)",
    wildlifeBenefits: ["Bees", "Butterflies", "Birds (nesting)"],
    commonPests: ["Aphids", "Scale insects", "Verticillium wilt", "Japanese beetles", "Leaf scorch (in heat)"],
    plantingSeason: "Spring or early fall",
    costRange: "Moderate to Premium (rare cultivars)",
    
    description: "One of the most beloved and versatile landscape trees, Japanese Maples are prized for their graceful form, delicate foliage, and spectacular seasonal color changes. With hundreds of cultivars ranging from dwarf shrubs to small trees, there's a Japanese Maple for virtually every garden situation. The deeply lobed, palmate leaves emerge in spring in shades of green, red, or burgundy, often hold color through summer, and put on a breathtaking autumn display. Their elegant branching structure provides winter interest, making them true four-season plants.",
    
    benefits: [
        "Exquisite year-round beauty - leaves, form, and bark",
        "Hundreds of cultivars for every space and taste",
        "Spectacular fall color display",
        "Elegant, architectural branching structure",
        "Thrives in containers and small gardens",
        "Adds oriental aesthetic to any landscape"
    ],
    
    maintenance: "Medium - requires protection from harsh sun and wind; needs consistent moisture but excellent drainage; prune in late fall or winter when fully dormant; mulch to protect shallow roots; choose site carefully as they don't transplant well",
    
    _meta: {
        catalogId: "SYL-024",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/japanese maple.jpg"
},
{
    id: 25,
    name: "Japanese Zelkova",
    scientificName: "Zelkova serrata",
    type: "deciduous",
    family: "Ulmaceae",
    
    height: "20-30m (60-90 ft)",
    spread: "15-20m (50-70 ft)",
    growthRate: "Medium to Fast",
    lifespan: "100-200+ years",
    
    climate: ["temperate", "continental"],
    hardiness: "USDA Zones 5-8",
    pollution: "Excellent",
    drought: "Moderate",
    
    waterRequirements: "Medium",
    rootSystem: "Deep, spreading, non-invasive",
    flowerColor: "Inconspicuous green",
    bloomingSeason: "Early spring",
    fallColor: "Reddish-bronze to orange-red",
    wildlifeBenefits: ["Birds (nesting)", "Squirrels", "Butterflies"],
    commonPests: ["None serious - Dutch elm disease resistant", "Leaf spot", "Canker"],
    plantingSeason: "Spring or fall",
    costRange: "Moderate to Premium",
    
    description: "Often recommended as a substitute for American Elm due to its similar vase-shaped growth habit and resistance to Dutch elm disease. Japanese Zelkova is a stately shade tree with a rounded to vase-shaped crown, attractive mottled bark that peels to reveal orange patches, and serrated leaves that turn spectacular shades of orange, red, and bronze in autumn. Its strong wood, pollution tolerance, and adaptability make it an outstanding choice for street plantings, boulevards, parks, and large residential landscapes. The vase-shaped form creates beautiful cathedral-like arching branches.",
    
    benefits: [
        "Elegant vase-shaped form - excellent alternative to elm",
        "Dutch elm disease resistant",
        "Beautiful mottled bark with orange patches",
        "Vibrant fall color in orange, red, and bronze",
        "Strong wood withstands wind and ice",
        "Excellent urban tolerance - pollution, heat, compacted soil"
    ],
    
    maintenance: "Low to Medium - prune in late winter to develop strong structure when young; remove lower branches gradually to reveal attractive bark; adaptable to various soils but prefers well-drained; water during extended drought",
    
    _meta: {
        catalogId: "SYL-025",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/japanese zelkova.jpg"
},
{
    id: 26,
    name: "Judas Tree",
    scientificName: "Cercis siliquastrum",
    type: "deciduous",
    family: "Fabaceae",
    
    height: "8-12m (25-40 ft)",
    spread: "Wider than 8m (25+ ft)",
    growthRate: "Slow to Medium",
    lifespan: "50-100 years",
    
    climate: ["mediterranean", "temperate"],
    hardiness: "USDA Zones 6-9 (RHS H5)",
    pollution: "Moderate",
    drought: "Excellent",
    
    waterRequirements: "Low to Medium",
    rootSystem: "Deep, spreading, nitrogen-fixing",
    flowerColor: "Rosy-pink (pea-shaped)",
    bloomingSeason: "Spring (March to May)",
    fallColor: "Yellow",
    wildlifeBenefits: ["Bees", "Butterflies", "Birds (nesting)"],
    commonPests: ["Leafhoppers", "Scale insects", "Coral spot", "Verticillium wilt"],
    plantingSeason: "Spring or fall",
    costRange: "Moderate",
    
    description: "A beautiful small deciduous tree known for its striking display of rosy-pink, pea-shaped flowers that bloom directly on the older wood (cauliflory) before the leaves emerge. Legend says Judas Iscariot hanged himself from this tree, causing the once-white flowers to blush pink in shame. The broadly heart-shaped leaves emerge with a bronze tint, mature to green, and turn yellow in autumn. Purple seed pods follow the flowers, adding extended interest. Perfect for Mediterranean and cottage gardens, this drought-tolerant tree thrives in well-drained soils and brings a touch of legend to any landscape.",
    
    benefits: [
        "Spectacular spring display of cauliflorous pink flowers",
        "Interesting legendary backstory",
        "Excellent drought tolerance once established",
        "Heart-shaped leaves with seasonal bronze and yellow color",
        "Decorative purple seed pods in summer and fall",
        "Nitrogen-fixing improves soil fertility"
    ],
    
    maintenance: "Low - minimal pruning required; prune after flowering to maintain shape if needed; tolerates a wide range of soils including chalk; protect from strong winds when young",
    
    _meta: {
        catalogId: "SYL-026",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/judas tree.jpg"
},
{
    id: 27,
    name: "Kentucky Coffeetree",
    scientificName: "Gymnocladus dioicus",
    type: "deciduous",
    family: "Fabaceae",
    
    height: "18-21m (60-70 ft), up to 25m (80 ft)",
    spread: "12-15m (40-50 ft)",
    growthRate: "Medium (12-24 inches per year)",
    lifespan: "100-150 years",
    
    climate: ["temperate", "continental"],
    hardiness: "USDA Zones 3-8 (WHZ 6a)",
    pollution: "Excellent",
    drought: "Excellent",
    
    waterRequirements: "Low to Medium",
    rootSystem: "Deep taproot (difficult to transplant), fibrous with age, nitrogen-fixing",
    flowerColor: "Greenish-white",
    bloomingSeason: "June",
    fallColor: "Bright clear yellow",
    wildlifeBenefits: ["Bees (nectar)", "Birds and small mammals (seeds)"],
    commonPests: ["None serious - practically pest-free", "Disease resistant"],
    plantingSeason: "Spring (due to taproot)",
    costRange: "Moderate to Premium (rare in nurseries)",
    
    description: "A unique and sculptural tree with coarse, stout branches that remain bare for up to six months, earning it the Greek name 'gymnocladus' meaning 'naked branch'. This North American native features enormous bipinnately compound leaves up to 90 cm long that emerge pink in spring, mature to blue-green, and turn brilliant yellow in autumn. Male and female flowers occur on separate trees (dioecious), with female trees producing large, woody pods containing toxic seeds that can be roasted as a coffee substitute. Exceptionally tolerant of urban conditions, pollution, drought, and poor soils, it's an outstanding choice for challenging urban sites where winter sunlight penetration is desired.",
    
    benefits: [
        "Unique winter silhouette with sculptural naked branches",
        "Extremely tolerant of urban pollution, salt, and drought",
        "Pest and disease-free - virtually no maintenance",
        "Late leaf emergence allows maximum winter sun penetration",
        "Nitrogen-fixing improves soil fertility",
        "Stunning fall color and interesting seed pods"
    ],
    
    maintenance: "Very Low - prune in late winter if needed; difficult to transplant due to taproot, so choose location carefully; tolerant of most soils including alkaline; one of the last trees to leaf out in spring",
    
    _meta: {
        catalogId: "SYL-027",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/kentucky coffeetree.jpg"
},
{
    id: 28,
    name: "Kousa Dogwood",
    scientificName: "Cornus kousa",
    type: "deciduous",
    family: "Cornaceae",
    
    height: "4.5-9m (15-30 ft)",
    spread: "4.5-8m (15-25 ft)",
    growthRate: "Slow to Medium",
    lifespan: "15+ years in cultivation, longer in native habitat",
    
    climate: ["temperate", "subtropical"],
    hardiness: "USDA Zones 5-8 (RHS H6)",
    pollution: "Good",
    drought: "Moderate",
    
    waterRequirements: "Medium - consistent moisture",
    rootSystem: "Shallow, far-reaching, fibrous",
    flowerColor: "Tiny green (showy white bracts)",
    bloomingSeason: "Late spring to early summer (May-June)",
    fallColor: "Pink to crimson-purple",
    wildlifeBenefits: ["Birds (eat fruits)", "Butterflies", "Bees"],
    commonPests: ["Generally pest-free", "Horse chestnut scale", "Cornus anthracnose (less susceptible than native dogwood)"],
    plantingSeason: "Spring or early fall",
    costRange: "Moderate to Premium",
    
    description: "A magnificent small tree prized for its long-lasting floral display that occurs about a month after native dogwoods. Unlike its native cousin, Kousa Dogwood flowers after the leaves emerge, with showy creamy-white pointed bracts surrounding tiny green flower clusters. The show continues into summer and fall with raspberry-like pink fruits that attract birds and stunning crimson-purple autumn foliage. The exfoliating bark provides winter interest, peeling to reveal patches of tan and gray. More disease-resistant than native dogwoods, this East Asian native is an outstanding choice for residential landscapes, patios, and woodland gardens.",
    
    benefits: [
        "Long-lasting spring floral display with pointed white bracts",
        "Edible raspberry-like fruits attract wildlife",
        "Spectacular crimson-purple fall color",
        "Exfoliating bark adds winter interest",
        "More resistant to anthracnose than native dogwoods",
        "Flowers after leaves emerge, extending dogwood season"
    ],
    
    maintenance: "Medium - prefers acidic, well-drained soil with consistent moisture; mulch to protect shallow roots; prune in late winter to shape; avoid overhead watering to prevent leaf spots; more sun-tolerant than native dogwoods",
    
    _meta: {
        catalogId: "SYL-028",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/kousa dogwood tree.jpg"
},
{
    id: 29,
    name: "Leyland Cypress",
    scientificName: "× Cuprocyparis leylandii",
    type: "coniferous",
    family: "Cupressaceae",
    
    height: "30m+ (100+ ft) if unchecked",
    spread: "4-8m (15-25 ft)",
    growthRate: "Very Fast (up to 1m per year)",
    lifespan: "50-100 years",
    
    climate: ["temperate", "maritime"],
    hardiness: "USDA Zones 6-10 (RHS H6)",
    pollution: "Good",
    drought: "Moderate",
    
    waterRequirements: "Medium",
    rootSystem: "Shallow, spreading, fibrous",
    flowerColor: "Non-flowering (conifer)",
    bloomingSeason: "Non-flowering",
    fallColor: "Evergreen (no fall color)",
    wildlifeBenefits: ["Nesting sites for birds", "Shelter for wildlife"],
    commonPests: ["Conifer aphid", "Scale insects", "Canker", "Honey fungus", "Cypress bark beetle"],
    plantingSeason: "Spring or early fall",
    costRange: "Budget to Moderate",
    
    description: "One of the fastest-growing evergreen conifers, Leyland Cypress is a hybrid cross between Monterey Cypress and Nootka Cypress. Its dense, columnar habit and rapid growth make it a popular choice for quick screening, windbreaks, and hedging. The foliage forms flattened, slightly drooping sprays of scale-like leaves that remain green year-round. However, its vigorous growth requires regular maintenance - without annual trimming, it can quickly outgrow its space and become a nuisance. Best suited for large properties where its ultimate height can be accommodated or for formal hedges with disciplined pruning.",
    
    benefits: [
        "Extremely fast-growing - creates screens in just a few years",
        "Dense evergreen foliage provides year-round privacy",
        "Tolerant of a wide range of soils including chalk and clay",
        "Responds well to regular trimming for formal hedges",
        "Salt-tolerant, suitable for coastal plantings",
        "Effective windbreak when planted in rows"
    ],
    
    maintenance: "High if used as hedge - requires trimming 2-3 times per growing season to control size; never cut back to old wood as it will not regrow; choose planting site carefully as mature size is often underestimated; prone to brown patches if neglected",
    
    _meta: {
        catalogId: "SYL-029",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/Leyland Cypress Tree.jpg"
},
{
    id: 30,
    name: "Littleleaf Linden",
    scientificName: "Tilia cordata",
    type: "deciduous",
    family: "Malvaceae",
    
    height: "20-25m (65-80 ft)",
    spread: "10-15m (35-50 ft)",
    growthRate: "Medium",
    lifespan: "100-200+ years",
    
    climate: ["temperate", "continental"],
    hardiness: "USDA Zones 3-7 (RHS H6)",
    pollution: "Good",
    drought: "Moderate",
    
    waterRequirements: "Medium - consistent moisture",
    rootSystem: "Deep, spreading, non-invasive",
    flowerColor: "Pale creamy-yellow",
    bloomingSeason: "Late June to July",
    fallColor: "Pale yellow",
    wildlifeBenefits: ["Bees (excellent nectar source)", "Butterflies", "Birds"],
    commonPests: ["Aphids (honeydew)", "Horse chestnut scale", "Caterpillars", "Sawflies", "Gall mites", "Japanese beetles"],
    plantingSeason: "Spring or fall",
    costRange: "Moderate",
    
    description: "A classic European shade tree prized for its formal pyramidal to rounded crown, dense foliage, and exceptionally fragrant summer flowers. The small, heart-shaped leaves are dark green and glossy above, paler beneath, and flutter attractively in the breeze. In midsummer, clusters of pale yellow flowers appear, filling the air with a sweet fragrance that attracts bees in abundance - the resulting honey is considered a delicacy. Tolerant of urban conditions and pollution, it's an excellent choice for street plantings, parks, and large residential landscapes. Provides dense shade and a formal appearance.",
    
    benefits: [
        "Highly fragrant summer flowers loved by bees",
        "Formal, symmetrical growth habit ideal for avenues",
        "Dense shade with attractive heart-shaped leaves",
        "Excellent urban tolerance and pollution resistance",
        "Long-lived heritage tree for future generations",
        "Pale yellow fall color extends seasonal interest"
    ],
    
    maintenance: "Low to Medium - prune in winter to maintain shape and remove lower branches for clearance; aphids can cause sticky honeydew on surfaces below; prefers moist, well-drained soil; avoid planting near patios or cars if aphids are a concern",
    
    _meta: {
        catalogId: "SYL-030",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/Little Leaf Linden.jpg"
},
{
    id: 31,
    name: "London Plane",
    scientificName: "Platanus × acerifolia",
    type: "deciduous",
    family: "Platanaceae",
    
    height: "25-35m (80-115 ft)",
    spread: "20-25m (65-80 ft)",
    growthRate: "Fast",
    lifespan: "200-300+ years",
    
    climate: ["temperate", "continental", "mediterranean"],
    hardiness: "USDA Zones 5-9 (RHS H6)",
    pollution: "Excellent",
    drought: "Good (once established)",
    
    waterRequirements: "Medium to High",
    rootSystem: "Vigorous, spreading, potentially invasive near buildings",
    flowerColor: "Inconspicuous (red and yellow)",
    bloomingSeason: "Spring",
    fallColor: "Yellow-brown",
    wildlifeBenefits: ["Birds (nesting)", "Squirrels"],
    commonPests: ["Lace bugs", "Plane anthracnose", "Powdery mildew", "Canker stain"],
    plantingSeason: "Spring or fall",
    costRange: "Moderate",
    
    description: "The quintessential city tree, London Plane combines the toughness of American Sycamore with the disease resistance of Oriental Plane. Its most striking feature is the exfoliating bark that peels away in large flakes to reveal a mottled camouflage pattern of cream, olive, and gray. The large, maple-like leaves cast dense shade and tolerate heavy pruning, making this tree ideal for pollarding in urban settings. Exceptionally tolerant of pollution, compacted soils, and challenging urban conditions, it has been planted in cities worldwide for over 300 years. Provides majestic scale for parks, boulevards, and large landscapes.",
    
    benefits: [
        "Stunning mottled bark - one of the most beautiful of all trees",
        "Exceptional tolerance to pollution and urban conditions",
        "Fast-growing shade provider for parks and avenues",
        "Long-lived with historic specimens over 300 years old",
        "Withstands heavy pruning and pollarding",
        "Provides dense shade with large, attractive leaves"
    ],
    
    maintenance: "Medium - prune in late winter to maintain structure; vigorous roots may damage foundations and pavements - plant at least 15m from buildings; susceptible to anthracnose in wet springs but generally recovers; fallen leaves and seed balls can be messy in autumn",
    
    _meta: {
        catalogId: "SYL-031",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/london plane tree.jpg"
},
{
    id: 32,
    name: "Mexican Palo Verde",
    scientificName: "Parkinsonia aculeata",
    type: "deciduous",
    family: "Fabaceae",
    
    height: "6-9m (20-30 ft)",
    spread: "6-9m (20-30 ft)",
    growthRate: "Medium",
    lifespan: "60+ years",
    
    climate: ["desert", "subtropical", "tropical"],
    hardiness: "USDA Zones 8-11",
    pollution: "Moderate",
    drought: "Excellent",
    
    waterRequirements: "Very Low (xeric)",
    rootSystem: "Deep, spreading, nitrogen-fixing",
    flowerColor: "Bright yellow with orange blotch",
    bloomingSeason: "Spring to fall (multiple cycles)",
    fallColor: "Evergreen in mild winters, deciduous in drought",
    wildlifeBenefits: ["Bees", "Butterflies", "Birds (eat seeds)", "Hummingbirds"],
    commonPests: ["Few serious pests", "Borers (in stressed trees)", "Root rot (in poorly drained soil)"],
    plantingSeason: "Spring (after frost danger)",
    costRange: "Moderate",
    
    description: "A unique desert-adapted tree prized for its photosynthesizing green bark and delicate, airy appearance. The common name 'Palo Verde' means 'green stick' in Spanish, referring to the smooth green bark that carries out photosynthesis when leaves are shed during drought. Tiny leaves appear briefly after rains, giving the tree a feathery, light-dappled shade that allows grass and understory plants to thrive. Nearly continuous waves of fragrant yellow flowers with orange centers appear from spring through fall, attracting pollinators in abundance. Spiny branches add character but require careful placement. Perfect for xeriscaping, desert gardens, and water-wise landscapes.",
    
    benefits: [
        "Extremely drought-tolerant - ideal for xeriscaping",
        "Unique green bark provides photosynthetic interest",
        "Nearly year-round flowering with fragrant yellow blooms",
        "Feathery foliage provides light, dappled shade",
        "Nitrogen-fixing improves soil fertility",
        "Attracts bees, butterflies, and birds throughout season"
    ],
    
    maintenance: "Low - prune after flowering to maintain shape and remove spiny growth; extremely drought-tolerant but benefits from occasional deep watering; avoid overwatering which can cause root rot; deciduous in dry conditions, retaining leaves when watered; self-seeds in some regions",
    
    _meta: {
        catalogId: "SYL-032",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/mexican palo verde tree.jpg"
},
{
    id: 33,
    name: "Northern Red Oak",
    scientificName: "Quercus rubra",
    type: "deciduous",
    family: "Fagaceae",
    
    height: "18-23m (60-75 ft)",
    spread: "13-18m (45-60 ft)",
    growthRate: "Fast (1-2 ft per year)",
    lifespan: "200-400 years",
    
    climate: ["temperate", "continental"],
    hardiness: "USDA Zones 3-7",
    pollution: "Good",
    drought: "Moderate",
    
    waterRequirements: "Medium",
    rootSystem: "Deep taproot initially, spreading with age",
    flowerColor: "Yellow-green catkins (inconspicuous)",
    bloomingSeason: "Spring (April-May)",
    fallColor: "Deep red to russet",
    wildlifeBenefits: ["Acorns for deer, squirrels, turkeys, birds", "Nesting habitat", "Supports 400+ caterpillar species"],
    commonPests: ["Oak wilt", "Anthracnose", "Gypsy moth", "Two-lined chestnut borer", "Leaf miners"],
    plantingSeason: "Spring or fall",
    costRange: "Moderate",
    
    description: "One of America's most important and beloved hardwood trees, the Northern Red Oak is prized for its fast growth, stately form, and brilliant fall color. The name comes from the reddish-brown wood and the red hues of autumn foliage. Its broad, rounded canopy provides generous shade, while the distinctive bark features flat, gray ridges with shiny stripes (often called 'ski tracks'). Acorns are a vital food source for wildlife, appearing when trees reach about 20-25 years of age. Tolerant of urban conditions and adaptable to various soils, it's an excellent choice for parks, campuses, and large residential landscapes where its majestic scale can be appreciated.",
    
    benefits: [
        "Fast-growing shade tree for quick establishment",
        "Brilliant deep red fall color - one of the best oaks",
        "Valuable wildlife support with abundant acorns",
        "Strong, sturdy wood resists wind and ice damage",
        "Distinctive bark with attractive 'ski track' pattern",
        "Adaptable to many soil types and urban conditions"
    ],
    
    maintenance: "Low to Medium - prune in late winter to develop strong structure; prefers acidic, well-drained soils (may show chlorosis in alkaline soils); protect trunk from mowers and weed trimmers; susceptible to oak wilt - avoid pruning in spring and early summer when beetles are active",
    
    _meta: {
        catalogId: "SYL-033",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/Northern Red Oak.jpg"
},
{
    id: 34,
    name: "Norway Maple",
    scientificName: "Acer platanoides",
    type: "deciduous",
    family: "Sapindaceae",
    
    height: "12-20m (40-65 ft)",
    spread: "12-15m (40-50 ft)",
    growthRate: "Fast",
    lifespan: "100-150 years",
    
    climate: ["temperate", "continental"],
    hardiness: "USDA Zones 3-7",
    pollution: "Excellent",
    drought: "Good",
    
    waterRequirements: "Low to Medium",
    rootSystem: "Shallow, dense, aggressive, competitive",
    flowerColor: "Yellow-green (showy clusters)",
    bloomingSeason: "Early spring (before leaves)",
    fallColor: "Yellow to golden",
    wildlifeBenefits: ["Bees (early nectar source)", "Squirrels (seeds)"],
    commonPests: ["Verticillium wilt", "Leaf spots", "Tar spot", "Aphids", "Borers"],
    plantingSeason: "Spring or fall",
    costRange: "Budget to Moderate",
    
    description: "A popular European maple widely planted in North America for its rapid growth, dense shade, and excellent urban tolerance. Norway Maple features large, five-lobed leaves that resemble its native cousin, the Sugar Maple, but with a milky sap when the leaf stem is broken. In early spring, showy clusters of yellow-green flowers appear before the leaves, providing an important early nectar source for bees. The dense canopy casts deep shade that inhibits lawn growth beneath. While adaptable and tough, it has become invasive in some regions where it escapes cultivation and outcompetes native forests. Numerous cultivars offer varied growth habits and foliage colors.",
    
    benefits: [
        "Fast-growing shade tree for quick results",
        "Excellent tolerance to pollution, salt, and urban conditions",
        "Many cultivars available with purple, variegated, or columnar forms",
        "Early spring flowers provide pollen for bees",
        "Adaptable to most soils including compacted urban sites",
        "Dense canopy provides deep shade"
    ],
    
    maintenance: "Low - prune in late winter; very adaptable but shallow roots may compete with lawns and lift sidewalks; aggressive root system can outcompete nearby plants; considered invasive in some regions - check local recommendations before planting; prolific self-seeding may require cleanup",
    
    _meta: {
        catalogId: "SYL-034",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/Norway Maple.jpg"
},
{
    id: 35,
    name: "Norway Spruce",
    scientificName: "Picea abies",
    type: "coniferous",
    family: "Pinaceae",
    
    height: "18-25m (60-80 ft), up to 40m (130 ft)",
    spread: "6-9m (20-30 ft)",
    growthRate: "Fast (12-24 inches per year)",
    lifespan: "200-300+ years",
    
    climate: ["temperate", "boreal", "continental"],
    hardiness: "USDA Zones 2-7",
    pollution: "Moderate",
    drought: "Moderate",
    
    waterRequirements: "Medium - consistent moisture",
    rootSystem: "Shallow, wide-spreading (often shallow-rooted)",
    flowerColor: "Non-flowering (conifer)",
    bloomingSeason: "Non-flowering",
    fallColor: "Evergreen (no fall color)",
    wildlifeBenefits: ["Nesting sites for birds", "Shelter for wildlife", "Seed cones for small mammals"],
    commonPests: ["Spruce spider mites", "Aphids", "Cytospora canker", "Needle cast", "Spruce budworm"],
    plantingSeason: "Spring or early fall",
    costRange: "Budget to Moderate",
    
    description: "A majestic European conifer that has become one of the most widely planted Christmas trees worldwide. Norway Spruce features dark green needles and distinctive pendant cones - the longest of any spruce - that hang like ornaments from the branches. The tree develops a graceful pyramidal form with slightly drooping branchlets, giving it a soft, elegant appearance. Young trees grow rapidly, often used for windbreaks and screening. Mature specimens develop a stately presence with their dark silhouette and pendulous branch tips. Traditional Christmas tree in many countries and an important timber tree in Northern Europe. Weeping and dwarf cultivars available for smaller spaces.",
    
    benefits: [
        "Fast-growing evergreen for quick screening",
        "Classic Christmas tree form and tradition",
        "Graceful habit with drooping branchlets",
        "Long, decorative cones add winter interest",
        "Excellent windbreak when planted in rows",
        "Cold-hardy to Zone 2 - one of the toughest spruces"
    ],
    
    maintenance: "Low to Medium - prefers moist, well-drained acidic soils; shallow roots benefit from mulching; susceptible to windthrow in exposed sites due to shallow root system; prune in late winter to maintain shape if desired; provide adequate spacing as mature trees become large; spider mites can be problematic in dry conditions",
    
    _meta: {
        catalogId: "SYL-035",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/Norway Spruce.jpg"
},
{
    id: 36,
    name: "Olive Tree",
    scientificName: "Olea europaea",
    type: "evergreen",
    family: "Oleaceae",
    
    height: "4.5-9m (15-30 ft)",
    spread: "4.5-8m (15-25 ft)",
    growthRate: "Slow",
    lifespan: "500-1000+ years",
    
    climate: ["mediterranean", "subtropical"],
    hardiness: "USDA Zones 8-11 (RHS H4)",
    pollution: "Good",
    drought: "Excellent",
    
    waterRequirements: "Very Low",
    rootSystem: "Deep, spreading, non-invasive",
    flowerColor: "Very small white flowers in racemes",
    bloomingSeason: "Summer",
    fallColor: "Evergreen (silvery-green year-round)",
    wildlifeBenefits: ["Bees (nectar)", "Birds (eat olives)", "Butterflies"],
    commonPests: ["Scale insects", "Olive fruit fly", "Verticillium wilt", "Xylella fastidiosa (high risk host)"],
    plantingSeason: "Spring (after frost danger)",
    costRange: "Moderate to Premium (specimen trees)",
    
    description: "An iconic Mediterranean tree with rugged, much-branched habit and slow growth, eventually reaching 4.5-9m. The narrowly obovate leaves are leathery, green above and silvery beneath, creating a shimmering effect in sunlight. Very small white flowers appear in summer, followed by the beloved olives. Tolerant of poor, rocky soils and coastal conditions, this ancient tree symbolizes peace and longevity. Perfect for Mediterranean gardens, xeriscaping, and container cultivation in cooler regions. Gnarled trunks of mature specimens provide sculptural interest year-round.",
    
    benefits: [
        "Extremely drought-tolerant once established",
        "Silvery foliage provides year-round interest",
        "Edible fruit production (with proper cultivars)",
        "Sculptural form adds architectural beauty",
        "Excellent for coastal and Mediterranean gardens",
        "Long-lived heritage tree - can live 1000+ years"
    ],
    
    maintenance: "Low - prune in late winter to maintain shape; thrives in sharply-drained soil in full sun; protect from severe frost; can be grown in containers in colder regions and moved indoors; avoid overwatering which causes root rot; harvest olives when ripe",
    
    _meta: {
        catalogId: "SYL-036",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/olive tree.jpg"
},
{
    id: 37,
    name: "Paperbark Maple",
    scientificName: "Acer griseum",
    type: "deciduous",
    family: "Sapindaceae",
    
    height: "8-12m (25-40 ft)",
    spread: "4-8m (15-25 ft)",
    growthRate: "Slow to Medium",
    lifespan: "100-150 years",
    
    climate: ["temperate", "continental"],
    hardiness: "USDA Zones 4-8 (RHS H5)",
    pollution: "Good",
    drought: "Moderate",
    
    waterRequirements: "Medium - consistent moisture",
    rootSystem: "Deep, fibrous, non-invasive",
    flowerColor: "Small yellow-green",
    bloomingSeason: "Spring",
    fallColor: "Brilliant red and orange",
    wildlifeBenefits: ["Birds (nesting)", "Butterflies", "Moths"],
    commonPests: ["Acer gall mite", "Aphids", "Caterpillars", "Horse chestnut scale"],
    plantingSeason: "Spring or fall",
    costRange: "Moderate to Premium",
    
    description: "One of the most beautiful small trees for all-season interest, the Paperbark Maple is prized above all for its stunning peeling bark - rich cinnamon-brown and copper-colored bark that exfoliates in thin, papery layers, creating a spectacular winter display. The trifoliate leaves emerge with a bronze tint, mature to dark green above with whitish undersides, and then ignite into brilliant shades of red and orange in autumn. Native to central China, this slow-growing tree develops an upright, spreading habit with age. Perfect as a specimen in small gardens, near patios, or in woodland settings where its bark can be appreciated up close.",
    
    benefits: [
        "Exquisite peeling cinnamon-brown bark - winter standout",
        "Brilliant red and orange fall color",
        "Small stature perfect for residential gardens",
        "Four-season interest: bark, foliage, and form",
        "Non-invasive roots safe near structures",
        "Slow-growing maintains size for decades"
    ],
    
    maintenance: "Low to Medium - prune in late winter to maintain structure; prefers moist but well-drained soil; mulch to protect roots; slow-growing so little pruning needed; one of the most desirable small maples for home landscapes",
    
    _meta: {
        catalogId: "SYL-037",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/Paperbark Maple Tree.jpg"
},
{
    id: 38,
    name: "Persian Ironwood",
    scientificName: "Parrotia persica",
    type: "deciduous",
    family: "Hamamelidaceae",
    
    height: "8-12m (25-40 ft)",
    spread: "8-12m (25-40 ft)",
    growthRate: "Slow to Medium",
    lifespan: "150-200+ years",
    
    climate: ["temperate", "continental"],
    hardiness: "USDA Zones 4-8 (RHS H7)",
    pollution: "Excellent",
    drought: "Good (once established)",
    
    waterRequirements: "Medium - consistent moisture",
    rootSystem: "Deep, spreading, non-invasive",
    flowerColor: "Small crimson/red",
    bloomingSeason: "Late winter to early spring (on bare stems)",
    fallColor: "Brilliant yellow, orange, and red",
    wildlifeBenefits: ["Bees (early nectar source)", "Birds", "Butterflies"],
    commonPests: ["Generally pest-free"],
    plantingSeason: "Spring or fall",
    costRange: "Moderate to Premium",
    
    description: "A magnificent large shrub or small tree native to northern Iran, the Persian Ironwood is treasured for its spectacular multi-season interest. In late winter, before leaves emerge, small crimson flowers with showy red stamens appear along the bare branches, providing an early pollen source for bees. The broadly oval leaves emerge with a purple tinge, mature to lustrous dark green, and then put on one of the most spectacular autumn shows of any tree - a breathtaking display of yellow, orange, scarlet, and purple, often with multiple colors on the same leaf. The exfoliating bark, peeling to reveal patches of gray, green, and cream, adds winter interest. Tolerant of pollution and urban conditions, it's an outstanding specimen for landscapes.",
    
    benefits: [
        "Spectacular multi-color fall foliage - among the best",
        "Late winter flowers provide early bee forage",
        "Exfoliating bark adds winter interest",
        "Excellent urban tolerance - pollution and compacted soil",
        "Slow-growing and long-lived",
        "Vase-shaped form with age creates architectural interest"
    ],
    
    maintenance: "Low - thrives in deep, fertile, moist but well-drained soil; autumn color is best in full sun on acid soils; little pruning needed; tolerant of most soils including clay; generally pest-free; one of the finest small trees for year-round beauty",
    
    _meta: {
        catalogId: "SYL-038",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/Persian Ironwood.jpg"
},
{
    id: 39,
    name: "Pin Oak",
    scientificName: "Quercus palustris",
    type: "deciduous",
    family: "Fagaceae",
    
    height: "18-23m (60-75 ft)",
    spread: "10-15m (35-50 ft)",
    growthRate: "Fast",
    lifespan: "150-200 years",
    
    climate: ["temperate", "continental"],
    hardiness: "USDA Zones 4-8",
    pollution: "Good",
    drought: "Moderate",
    
    waterRequirements: "Medium - consistent moisture",
    rootSystem: "Shallow, fibrous, often surface roots",
    flowerColor: "Yellow-green catkins (inconspicuous)",
    bloomingSeason: "Spring",
    fallColor: "Scarlet to reddish-brown",
    wildlifeBenefits: ["Acorns for squirrels, deer, birds", "Nesting habitat", "Supports 500+ caterpillar species"],
    commonPests: ["Gall wasps", "Aphids", "Powdery mildews", "Honey fungus", "Oak wilt"],
    plantingSeason: "Spring or fall",
    costRange: "Budget to Moderate",
    
    description: "A classic American shade tree with a distinctive pyramidal form and strong central leader. Pin Oak is named for the small, pin-like branchlets that remain on the trunk after lower branches die back. The deeply lobed, glossy green leaves are 15cm long and turn spectacular shades of scarlet to reddish-brown in autumn, often persisting into winter. Unlike many oaks, it tolerates poorly-drained soils and urban conditions, making it a popular street tree. The lower branches often sweep downward, middle branches horizontal, and upper branches upward, creating a graceful layered effect. Columnar cultivars like 'Green Pillar' offer narrower forms for tighter spaces.",
    
    benefits: [
        "Brilliant scarlet fall color - one of the best oaks",
        "Distinctive pyramidal form with layered branching",
        "Tolerates wet, poorly-drained soils",
        "Fast-growing shade provider",
        "Many cultivars available for varied spaces",
        "Good urban tolerance once established"
    ],
    
    maintenance: "Low to Medium - prune in late winter to raise crown; shallow roots may make mowing difficult; prefers acidic soils (chlorosis occurs in alkaline soils); lower branches may need removal for clearance; tolerant of compacted soils but prefers moist conditions",
    
    _meta: {
        catalogId: "SYL-039",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/pin oak.jpg"
},
{
    id: 40,
    name: "Red Maple",
    scientificName: "Acer rubrum",
    type: "deciduous",
    family: "Sapindaceae",
    
    height: "12-18m (40-60 ft)",
    spread: "10-15m (35-50 ft)",
    growthRate: "Medium to Fast",
    lifespan: "80-150 years",
    
    climate: ["temperate", "continental", "subtropical"],
    hardiness: "USDA Zones 3-9",
    pollution: "Good",
    drought: "Moderate",
    
    waterRequirements: "Medium - adaptable",
    rootSystem: "Shallow, fibrous, can be surface rooting",
    flowerColor: "Red (showy clusters)",
    bloomingSeason: "Early spring (before leaves)",
    fallColor: "Yellow, orange, red",
    wildlifeBenefits: ["Bees (early nectar)", "Birds (seeds)", "Squirrels", "Supports 300+ caterpillar species"],
    commonPests: ["Acer gall mite", "Aphids", "Caterpillars", "Horse chestnut scale", "Verticillium wilt"],
    plantingSeason: "Spring or fall",
    costRange: "Budget to Moderate",
    
    description: "One of North America's most widespread and beloved native trees, Red Maple lives up to its name throughout the seasons. In early spring, before leaves emerge, bold clusters of tiny red flowers paint the branches, providing essential early nectar for pollinators. The new leaf growth and emerging samaras (winged seeds) continue the red theme into summer. Autumn brings the tree's crowning glory - a spectacular display of yellow, orange, and brilliant red foliage that makes it a standout in any landscape. Many cultivars, like 'Summer Red' with reddish new growth, offer enhanced seasonal color. Adaptable to various soil conditions, it's a reliable choice for parks, residential streets, and naturalized areas.",
    
    benefits: [
        "Spectacular red fall color - among the earliest maples to color",
        "Early spring red flowers provide pollen for bees",
        "Red samaras (helicopter seeds) add summer interest",
        "Fast-growing shade provider",
        "Hundreds of cultivars available for specific needs",
        "Adaptable to many soil types including wet sites"
    ],
    
    maintenance: "Low to Medium - prune in late autumn to midwinter only; best autumn color in full sun on acidic soils; tolerates both wet and dry conditions; shallow roots may compete with lawns; prolific seeder can require cleanup; choose named cultivars for consistent fall color",
    
    _meta: {
        catalogId: "SYL-040",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/red maple.jpg"
},
{
    id: 41,
    name: "Red Oak",
    scientificName: "Quercus rubra",
    type: "deciduous",
    family: "Fagaceae",
    
    height: "18-23m (60-75 ft)",
    spread: "13-18m (45-60 ft)",
    growthRate: "Fast (1-2 ft per year)",
    lifespan: "200-400 years",
    
    climate: ["temperate", "continental"],
    hardiness: "USDA Zones 3-7",
    pollution: "Good",
    drought: "Moderate",
    
    waterRequirements: "Medium",
    rootSystem: "Deep taproot initially, spreading with age",
    flowerColor: "Yellow-green catkins (inconspicuous)",
    bloomingSeason: "Spring (April-May)",
    fallColor: "Deep red to russet",
    wildlifeBenefits: ["Acorns for deer, squirrels, turkeys, birds", "Nesting habitat", "Supports 400+ caterpillar species"],
    commonPests: ["Oak wilt", "Anthracnose", "Gypsy moth", "Two-lined chestnut borer", "Leaf miners"],
    plantingSeason: "Spring or fall",
    costRange: "Moderate",
    
    description: "One of America's most important and beloved hardwood trees, the Northern Red Oak is prized for its fast growth, stately form, and brilliant fall color. The name comes from the reddish-brown wood and the red hues of autumn foliage. Its broad, rounded canopy provides generous shade, while the distinctive bark features flat, gray ridges with shiny stripes (often called 'ski tracks'). Acorns are a vital food source for wildlife, appearing when trees reach about 20-25 years of age. Tolerant of urban conditions and adaptable to various soils, it's an excellent choice for parks, campuses, and large residential landscapes where its majestic scale can be appreciated.",
    
    benefits: [
        "Fast-growing shade tree for quick establishment",
        "Brilliant deep red fall color - one of the best oaks",
        "Valuable wildlife support with abundant acorns",
        "Strong, sturdy wood resists wind and ice damage",
        "Distinctive bark with attractive 'ski track' pattern",
        "Adaptable to many soil types and urban conditions"
    ],
    
    maintenance: "Low to Medium - prune in late winter to develop strong structure; prefers acidic, well-drained soils (may show chlorosis in alkaline soils); protect trunk from mowers and weed trimmers; susceptible to oak wilt - avoid pruning in spring and early summer when beetles are active",
    
    _meta: {
        catalogId: "SYL-041",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/red oak.jpg"
},
{
    id: 42,
    name: "River Birch",
    scientificName: "Betula nigra",
    type: "deciduous",
    family: "Betulaceae",
    
    height: "18-24m (60-80 ft)",
    spread: "9-15m (30-50 ft)",
    growthRate: "Fast (1.5-3 ft per year)",
    lifespan: "30-40 years in landscape, up to 75 in ideal conditions",
    
    climate: ["temperate", "continental", "subtropical"],
    hardiness: "USDA Zones 4-9",
    pollution: "Good",
    drought: "Moderate",
    
    waterRequirements: "Medium to High - prefers moist conditions",
    rootSystem: "Shallow, spreading, fibrous",
    flowerColor: "Brown catkins (inconspicuous)",
    bloomingSeason: "Spring",
    fallColor: "Yellow",
    wildlifeBenefits: ["Deer (browse twigs and leaves)", "Beaver (eat bark)", "Rabbits (feed on saplings)", "Birds (eat seeds)", "Yellow-bellied Sapsuckers (drill for sap)", "Ruby-throated hummingbirds (sap)", "Squirrels"],
    commonPests: ["Bronze birch borer (less susceptible than other birches)", "Aphids", "Leaf miners"],
    plantingSeason: "Spring or fall",
    costRange: "Budget to Moderate",
    
    description: "The most adaptable and heat-tolerant of all birches, River Birch is prized for its spectacular exfoliating bark that peels in sheets of cinnamon, salmon, and cream. Native to eastern North America, it's typically found along stream banks and floodplains, making it an excellent choice for wet areas where other trees struggle. Often forms multi-stemmed thickets naturally, creating stunning winter silhouettes. The diamond-shaped leaves are glossy green above, paler beneath, turning clear yellow in autumn. Highly valued for erosion control along waterways and for creating native landscapes in moist, partially shaded areas. One of the few birches resistant to bronze birch borer.",
    
    benefits: [
        "Stunning exfoliating bark in cinnamon and salmon tones",
        "Tolerates wet, poorly-drained soils - ideal for rain gardens",
        "Resistant to bronze birch borer",
        "Fast-growing screen or specimen",
        "Excellent for erosion control along waterways",
        "High wildlife value - supports birds, mammals, and pollinators"
    ],
    
    maintenance: "Low - prune in late winter; naturally forms multi-stemmed clumps; prefers acidic, moist soils but adapts to drier sites; shorter-lived than many trees (30-40 years in landscapes); may drop twigs and small branches in storms; provides dappled shade beneath",
    
    _meta: {
        catalogId: "SYL-042",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/River Birch Tree.jpg"
},
{
    id: 43,
    name: "Sassafras",
    scientificName: "Sassafras albidum",
    type: "deciduous",
    family: "Lauraceae",
    
    height: "4.5-9m (15-20 ft)",
    spread: "3-4.5m (10-15 ft)",
    growthRate: "Fast",
    lifespan: "50-100 years",
    
    climate: ["temperate", "continental", "subtropical"],
    hardiness: "USDA Zones 4-9",
    pollution: "Moderate",
    drought: "Good (once established)",
    
    waterRequirements: "Medium",
    rootSystem: "Deep taproot, suckering (forms colonies)",
    flowerColor: "Yellow-green",
    bloomingSeason: "March-May",
    fallColor: "Red, orange, peach, yellow",
    wildlifeBenefits: ["Butterflies (larval host)", "Birds (eat fruits)", "Deer", "Bees"],
    commonPests: ["Few serious pests", "Japanese beetles", "Scale insects", "Powdery mildew"],
    plantingSeason: "Spring or fall",
    costRange: "Moderate",
    
    description: "A uniquely aromatic native tree with fascinating leaf diversity - three distinct shapes appear on the same tree: oval, mitten-shaped, and three-lobed. All parts of the tree are fragrant when crushed, releasing a scent of root beer or fruit loops. In spring, clusters of small yellow-green flowers appear, followed by dark blue berries on red stalks that attract birds. Autumn brings a spectacular display of red, orange, peach, and yellow foliage, often with multiple colors on a single tree. Native Americans and early settlers used sassafras roots for tea and medicine. It spreads by root suckers to form colonies, making it excellent for naturalizing in woodland gardens but requiring space.",
    
    benefits: [
        "Three distinct leaf shapes on same tree - fascinating curiosity",
        "Aromatic foliage with root beer scent",
        "Spectacular multi-color fall display",
        "Larval host for Spicebush and Tiger Swallowtail butterflies",
        "Native understory tree for woodland gardens",
        "Blue fruits attract birds in late summer"
    ],
    
    maintenance: "Low to Medium - may colonize to form thickets; give lots of room or thin as needed; tolerant of wet roots; allelopathic - releases chemicals that may discourage growth of nearby plants; suckering habit may require management in formal gardens; bark is poisonous - caution around pets",
    
    _meta: {
        catalogId: "SYL-043",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/Sassafras albidum tree.jpg"
},
{
    id: 44,
    name: "Saucer Magnolia",
    scientificName: "Magnolia × soulangeana",
    type: "deciduous",
    family: "Magnoliaceae",
    
    height: "4-8m (15-25 ft)",
    spread: "4-8m (15-25 ft)",
    growthRate: "Slow to Medium",
    lifespan: "100-150 years",
    
    climate: ["temperate", "subtropical"],
    hardiness: "USDA Zones 4-9 (RHS H6)",
    pollution: "Moderate",
    drought: "Moderate",
    
    waterRequirements: "Medium - consistent moisture",
    rootSystem: "Fleshy, spreading, somewhat surface-rooting",
    flowerColor: "White, pink, purple (cup-shaped)",
    bloomingSeason: "Early spring (before leaves)",
    fallColor: "Yellow-brown",
    wildlifeBenefits: ["Bees (early pollen)", "Butterflies", "Birds (nesting)"],
    commonPests: ["Scale insects", "Coral spot", "Honey fungus", "Capsid bug"],
    plantingSeason: "Spring or early fall",
    costRange: "Moderate to Premium",
    
    description: "One of the most spectacular flowering trees, the Saucer Magnolia produces an astonishing display of large, cup-shaped flowers in early spring before leaves emerge. The flowers, in shades of white, pink, and purple, resemble saucers held upright on bare branches, creating a breathtaking sight against early spring skies. A hybrid between M. denudata and M. liliifolia, this small tree has a bushy, spreading habit with ovate dark green leaves. Many cultivars offer variations in flower color and size, from pure white to deep purple. Perfect as a specimen near patios, in courtyards, or as a focal point in spring gardens, though late frosts can damage early blooms.",
    
    benefits: [
        "Spectacular early spring floral display - one of the best",
        "Large cup-shaped flowers in white, pink, and purple",
        "Flowers appear on bare branches for maximum impact",
        "Many cultivars available for varied colors and sizes",
        "Small stature perfect for residential gardens",
        "Long-lived with proper care"
    ],
    
    maintenance: "Medium - prune only between midsummer and early autumn (not in spring/winter); prefers moist, humus-rich, slightly acidic soil; protect from late frosts which can damage flowers; mulch to protect shallow roots; flowers best in full sun; slow to establish but long-lived",
    
    _meta: {
        catalogId: "SYL-044",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/saucer magnolia tree.jpg"
},
{
    id: 45,
    name: "Scarlet Oak",
    scientificName: "Quercus coccinea",
    type: "deciduous",
    family: "Fagaceae",
    
    height: "15-21m (50-70 ft)",
    spread: "12-15m (40-50 ft)",
    growthRate: "Fast (1-2 ft per year)",
    lifespan: "150-200 years (80-120 in urban)",
    
    climate: ["temperate", "continental"],
    hardiness: "USDA Zones 5-9",
    pollution: "Good",
    drought: "Excellent (once established)",
    
    waterRequirements: "Low to Medium",
    rootSystem: "Deep taproot (difficult to transplant)",
    flowerColor: "Yellow-green catkins (inconspicuous)",
    bloomingSeason: "Spring",
    fallColor: "Brilliant scarlet and red",
    wildlifeBenefits: ["Supports 800+ caterpillar species", "Acorns for deer, squirrels, turkeys", "Birds", "Butterfly host"],
    commonPests: ["Oak wilt", "Root rot", "Anthracnose", "Canker", "Scale insects", "Leafminers", "Borers"],
    plantingSeason: "Spring (due to taproot)",
    costRange: "Moderate",
    
    description: "Noted for its absolutely spectacular fall color, the Scarlet Oak puts on a brilliant display of vivid scarlet and red foliage that may last 3-4 weeks in autumn. Native to eastern North America, this large deciduous tree has a pyramidal habit in youth, becoming upright-spreading and open with age. The lustrous dark green leaves feature 7-9 pointed, bristle-tipped lobes that turn brilliant red in fall. Acorns appear after about 20 years, providing valuable wildlife food. Tolerant of poor, dry soils and urban conditions, it's an outstanding choice for parks, large landscapes, and naturalized areas where its fall fireworks can be appreciated.",
    
    benefits: [
        "Spectacular scarlet fall color - among the best oaks",
        "Fast-growing shade tree",
        "Excellent drought tolerance once established",
        "Supports over 800 species of caterpillars",
        "Tolerant of poor, dry soils",
        "Long-lived heritage tree"
    ],
    
    maintenance: "Low - prune during dormant season; difficult to transplant due to taproot - choose location carefully; prefers acidic, well-drained soils; tolerant of drought and dry soils once established; susceptible to oak wilt - avoid pruning in spring/early summer; provides excellent wildlife habitat",
    
    _meta: {
        catalogId: "SYL-045",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/scarlet oak.jpg"
},
{
    id: 46,
    name: "Serviceberry",
    scientificName: "Amelanchier × grandiflora",
    type: "deciduous",
    family: "Rosaceae",
    
    height: "4-8m (15-25 ft)",
    spread: "4-8m (15-25 ft)",
    growthRate: "Medium",
    lifespan: "30-50 years",
    
    climate: ["temperate", "continental"],
    hardiness: "USDA Zones 4-9 (RHS H7)",
    pollution: "Good",
    drought: "Moderate",
    
    waterRequirements: "Medium - consistent moisture",
    rootSystem: "Fibrous, spreading, suckering",
    flowerColor: "White (starry clusters)",
    bloomingSeason: "Mid-spring",
    fallColor: "Brilliant red",
    wildlifeBenefits: ["Birds (eat berries)", "Butterflies", "Bees (nectar)", "Caterpillars"],
    commonPests: ["Generally pest-free", "Fireblight", "Honey fungus", "Leaf miners", "Scale"],
    plantingSeason: "Spring or fall",
    costRange: "Moderate",
    
    description: "A true four-season performer, Serviceberry (also known as Juneberry or Shadbush) offers year-round beauty in a manageable size. In early to mid-spring, before leaves fully expand, the tree is covered in drooping clusters of starry white flowers, creating a delicate, ethereal display. These are followed in early summer by small, edible berries that ripen to deep purple-black - delicious fresh or in pies and jams. The ovate leaves emerge with bronze tints, mature to green, and then put on a spectacular show in autumn, turning brilliant shades of red and orange. Even in winter, the smooth gray bark with light striations provides interest. Cultivars like 'Autumn Brilliance' offer enhanced fall color.",
    
    benefits: [
        "Year-round interest: spring flowers, summer fruit, fall color, winter bark",
        "Edible berries - delicious for humans and wildlife",
        "Brilliant red fall foliage",
        "Delicate spring flowers provide early nectar",
        "Multi-stemmed form adds architectural interest",
        "Small size perfect for residential gardens"
    ],
    
    maintenance: "Low - prune in late winter if needed; grows in moist, well-drained, lime-free soil; best fall color in full sun; suckering habit can be managed by removing unwanted stems; generally pest-free; adaptable to sun or partial shade; berries attract birds so harvest quickly if desired",
    
    _meta: {
        catalogId: "SYL-046",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/serviceberry tree.jpg"
},
{
    id: 47,
    name: "Silver Linden",
    scientificName: "Tilia tomentosa",
    type: "deciduous",
    family: "Malvaceae",
    
    height: "20-25m (65-80 ft)",
    spread: "12-15m (40-50 ft)",
    growthRate: "Medium",
    lifespan: "100-150 years",
    
    climate: ["temperate", "continental"],
    hardiness: "USDA Zones 4-7",
    pollution: "Excellent",
    drought: "Good",
    
    waterRequirements: "Medium",
    rootSystem: "Deep, spreading, non-invasive",
    flowerColor: "Pale yellow (fragrant)",
    bloomingSeason: "July (later than other Lindens)",
    fallColor: "Yellow",
    wildlifeBenefits: ["Bees (excellent nectar source)", "Butterflies", "Birds"],
    commonPests: ["Aphids (less than other Lindens)", "Japanese beetles", "Scale insects", "Leaf miners"],
    plantingSeason: "Spring or fall",
    costRange: "Moderate to Premium",
    
    description: "A superb shade tree distinguished by its striking silver-backed leaves that shimmer in the slightest breeze. The heart-shaped leaves are dark green above and covered with silvery-white hairs beneath, creating a beautiful two-tone effect. The tree's name comes from this silver undersurface, which gives the canopy a silvery sheen when wind rustles the leaves. In mid-summer, after most other Lindens have finished blooming, Silver Linden produces abundant clusters of fragrant pale yellow flowers that are highly attractive to bees - the resulting honey is light and flavorful. More drought-tolerant and pollution-resistant than other Lindens, it's an excellent choice for urban plantings, boulevards, and parks where its unique foliage can be appreciated.",
    
    benefits: [
        "Stunning silver-backed leaves shimmer in wind",
        "Fragrant summer flowers attract bees abundantly",
        "More drought-tolerant than other Lindens",
        "Excellent urban tolerance - pollution and heat",
        "Late blooming extends pollinator season",
        "Symmetrical pyramidal form with age"
    ],
    
    maintenance: "Low - prune in winter to maintain shape; adaptable to most soils; aphids less problematic than on other Lindens, reducing sticky honeydew; prefers full sun for best silver effect; one of the most urban-tolerant shade trees available",
    
    _meta: {
        catalogId: "SYL-047",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/silver linden.jpg"
},
{
    id: 48,
    name: "Southern Magnolia",
    scientificName: "Magnolia grandiflora",
    type: "evergreen",
    family: "Magnoliaceae",
    
    height: "20-30m (60-100 ft)",
    spread: "12-18m (40-60 ft)",
    growthRate: "Medium",
    lifespan: "150-200+ years",
    
    climate: ["subtropical", "temperate", "maritime"],
    hardiness: "USDA Zones 6-10",
    pollution: "Good",
    drought: "Moderate",
    
    waterRequirements: "Medium - consistent moisture",
    rootSystem: "Fleshy, spreading, shallow",
    flowerColor: "Creamy white, large (20-30cm across)",
    bloomingSeason: "Late spring to summer (May-June)",
    fallColor: "Evergreen",
    wildlifeBenefits: ["Birds (nesting)", "Bees (pollen)", "Squirrels (seeds)"],
    commonPests: ["Scale insects", "Magnolia scale", "Coral spot", "Leaf spot", "Sooty mold"],
    plantingSeason: "Spring or early fall",
    costRange: "Moderate to Premium",
    
    description: "The iconic tree of the American South, Southern Magnolia is a magnificent broadleaf evergreen with huge, glossy dark green leaves that are rust-colored beneath. Its claim to fame is the spectacular, fragrant creamy-white flowers that appear in late spring and summer - among the largest flowers of any cultivated tree, reaching up to 30cm across. The lemon-scented blossoms give way to cone-like fruits with bright red seeds that attract birds. The dense, pyramidal form provides year-round structure, while the leathery leaves create deep shade beneath. Cold-hardy cultivars have extended its range northward. Perfect as a stately specimen, for screening, or as a living legacy in large landscapes.",
    
    benefits: [
        "Spectacular large, fragrant flowers - among the largest of any tree",
        "Year-round evergreen structure with glossy foliage",
        "Iconic Southern charm and heritage",
        "Red seeds attract birds and wildlife",
        "Cold-hardy cultivars available for northern gardens",
        "Long-lived legacy tree for future generations"
    ],
    
    maintenance: "Medium - prune in spring; prefers acidic, moist, well-drained soils; protect from harsh winter winds in northern zones; large leaves drop year-round requiring some cleanup; shallow roots benefit from mulching; choose smaller cultivars for residential gardens",
    
    _meta: {
        catalogId: "SYL-048",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/southern magnolia.jpg"
},
{
    id: 49,
    name: "Stone Pine",
    scientificName: "Pinus pinea",
    type: "coniferous",
    family: "Pinaceae",
    
    height: "12-20m (40-65 ft)",
    spread: "10-15m (35-50 ft)",
    growthRate: "Slow to Medium",
    lifespan: "150-250 years",
    
    climate: ["mediterranean", "subtropical", "temperate"],
    hardiness: "USDA Zones 8-11 (RHS H4)",
    pollution: "Good",
    drought: "Excellent",
    
    waterRequirements: "Low to Medium",
    rootSystem: "Deep taproot, spreading with age",
    flowerColor: "Yellow male cones, small female cones",
    bloomingSeason: "Spring",
    fallColor: "Evergreen",
    wildlifeBenefits: ["Birds (eat seeds)", "Squirrels", "Small mammals"],
    commonPests: ["Pine processionary moth", "Scale insects", "Aphids", "Pine wilt disease"],
    plantingSeason: "Fall or early spring",
    costRange: "Moderate to Premium",
    
    description: "The iconic umbrella-shaped pine of the Mediterranean, instantly recognizable by its distinctive parasol canopy that develops with age. Stone Pine has been cultivated for over 6,000 years for its edible pine nuts (pignoli), which are still harvested from its large, glossy brown cones. The needles are bright green, flexible, and held in pairs, creating a soft, dense crown. Young trees are bushy and rounded, slowly developing the characteristic flat-topped, umbrella form as they mature. Exceptionally drought-tolerant and salt-resistant, it's perfect for coastal plantings, Mediterranean gardens, and as a sculptural specimen. The picturesque form has inspired artists and landscape designers for centuries.",
    
    benefits: [
        "Distinctive umbrella-shaped canopy - instantly recognizable",
        "Produces edible pine nuts (pignoli)",
        "Excellent drought and salt tolerance",
        "Sculptural form adds architectural interest",
        "Classic Mediterranean ambiance",
        "Long-lived heritage tree"
    ],
    
    maintenance: "Low - prune only to remove dead wood; thrives in well-drained soils; avoid overwatering; protect from severe frost when young; pine nuts require 3 years to mature in cones; needles create light shade beneath; excellent coastal tolerance",
    
    _meta: {
        catalogId: "SYL-049",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/Stone Pine tree.jpg"
},
{
    id: 50,
    name: "Swamp White Oak",
    scientificName: "Quercus bicolor",
    type: "deciduous",
    family: "Fagaceae",
    
    height: "15-24m (50-80 ft)",
    spread: "12-18m (40-60 ft)",
    growthRate: "Moderate",
    lifespan: "200-300 years",
    
    climate: ["temperate", "continental"],
    hardiness: "USDA Zones 4-8",
    pollution: "Good",
    drought: "Moderate",
    
    waterRequirements: "Medium to High - tolerates wet soils",
    rootSystem: "Deep, spreading",
    flowerColor: "Yellow-green catkins (male), green to red (female)",
    bloomingSeason: "Mid-spring",
    fallColor: "Yellow, brown, sometimes reddish purple",
    wildlifeBenefits: ["Acorns for squirrels, deer, birds", "Nesting habitat", "Supports insects"],
    commonPests: ["Oak wilt", "Anthracnose", "Scale insects", "Leaf miners"],
    plantingSeason: "Spring or fall",
    costRange: "Moderate",
    
    description: "A medium-sized deciduous tree with a broad, rounded crown and short trunk. The leaves are dark, shiny green above and silvery white beneath, giving the tree its name 'bicolor'. Features 4-7 inch leaves with 5-10 rounded lobes or blunt teeth along margins. Adaptable to both wet and dry conditions, it thrives in moist to swampy locations but also tolerates average soils. Best grown in full sun with acidic soil. Acorns are 1.5-2cm long on long stalks, maturing in early fall.",
    
    benefits: [
        "Distinctive two-toned leaves: shiny green above, silvery beneath",
        "Tolerates wet, poorly-drained soils",
        "Good urban tolerance",
        "Valuable wildlife food from acorns",
        "Attractive fall color",
        "Strong wood resists wind damage"
    ],
    
    maintenance: "Low - prune during dormant season; adaptable to various soils but prefers acidic conditions; benefits from mulch; relatively pest-free; one of the more adaptable oaks for landscape use",
    
    _meta: {
        catalogId: "SYL-050",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/Swamp White Oak.jpg"
},
{
    id: 51,
    name: "Sweetgum",
    scientificName: "Liquidambar styraciflua",
    type: "deciduous",
    family: "Altingiaceae",
    
    height: "18-24m (60-80 ft), up to 37m (120 ft)",
    spread: "12-18m (40-60 ft)",
    growthRate: "Medium to Fast",
    lifespan: "150-200 years",
    
    climate: ["temperate", "subtropical"],
    hardiness: "USDA Zones 5-9",
    pollution: "Good",
    drought: "Moderate",
    
    waterRequirements: "Medium - average, consistent moisture",
    rootSystem: "Deep, fibrous, non-invasive",
    flowerColor: "Yellow-green (inconspicuous)",
    bloomingSeason: "April to May",
    fallColor: "Brilliant mix of yellow, orange, purple, red",
    wildlifeBenefits: ["Luna moth host plant", "Birds eat seeds", "Squirrels and chipmunks"],
    commonPests: ["Webworms", "Caterpillars", "Borers", "Scale insects", "Leaf spots"],
    plantingSeason: "Spring (fall planting may cause dieback)",
    costRange: "Budget to Moderate",
    
    description: "A low-maintenance deciduous shade tree with a straight trunk and pyramidal habit in youth, becoming oval-rounded with age. Glossy, star-shaped leaves (4-7 inches across) have 5-7 pointed lobes and are fragrant when bruised. Fall color is spectacular - a brilliant mixture of yellows, oranges, purples, and reds. Produces hard, spherical, bristly fruiting clusters (gumballs) that persist through winter but can create litter problems. The name 'sweetgum' refers to the aromatic balsam or gum that exudes from wounds. Native from Connecticut to Florida and Texas, south to Mexico and Central America.",
    
    benefits: [
        "Spectacular multi-color fall foliage display",
        "Star-shaped leaves provide unique texture",
        "Fast-growing shade tree",
        "Luna moth larval host species",
        "Tolerates clay soil and black walnut",
        "Fruitless cultivars available (like 'Rotundiloba')"
    ],
    
    maintenance: "Low - prefers deep, moist, fertile soils in full sun; intolerant of shade; avoid alkaline soils; fruit can create cleanup problems in pedestrian areas; spring planting recommended to avoid winter dieback; choose seedless cultivars for low-maintenance",
    
    _meta: {
        catalogId: "SYL-051",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/sweetgum tree.jpg"
},
{
    id: 52,
    name: "Sycamore",
    scientificName: "Platanus occidentalis",
    type: "deciduous",
    family: "Platanaceae",
    
    height: "30-40m (98-130 ft), up to 53m (174 ft)",
    spread: "15-24m (50-80 ft)",
    growthRate: "Fast",
    lifespan: "500-600 years",
    
    climate: ["temperate", "continental"],
    hardiness: "USDA Zones 4-9",
    pollution: "Moderate",
    drought: "Moderate",
    
    waterRequirements: "Medium to High - prefers moist conditions",
    rootSystem: "Fibrous, spreading",
    flowerColor: "Dark red (male), light green tinged with red (female)",
    bloomingSeason: "May (with leaves)",
    fallColor: "Brown (leaves wither before falling)",
    wildlifeBenefits: ["Black bears (den in hollow trunks)", "Bats", "Wood ducks", "Barred owls", "Chimney swifts"],
    commonPests: ["Anthracnose (Apiognomonia veneta)", "Sycamore leaf beetle", "Canker stain"],
    plantingSeason: "Spring or fall",
    costRange: "Budget to Moderate",
    
    description: "One of the most massive trees native to eastern North America, the American Sycamore is easily distinguished by its striking mottled bark which flakes off in large irregular masses, leaving the surface patterned in gray, greenish-white, and brown - often described as 'camouflage' bark. The bark is more rigid and less elastic than other trees, so it sheds in large, brittle pieces to accommodate trunk growth. Leaves are large (4-8 inches wide), palmately veined with 3-5 lobes. Often divided near the ground into several secondary trunks, with spreading limbs making an irregular, open head. Large trees often have hollow trunks which provide critical nesting habitat for wildlife. Found most commonly in bottomland or floodplain areas.",
    
    benefits: [
        "Stunning camouflage-patterned exfoliating bark",
        "Massive scale creates dramatic landscape presence",
        "Extremely long-lived (500-600 years)",
        "Provides critical wildlife habitat with hollow trunks",
        "Fast-growing shade tree",
        "Pioneer species excellent for reclamation"
    ],
    
    maintenance: "Medium - highly susceptible to anthracnose, which can cause defoliation and unsightly appearance; prune to remove dead wood; prefers deep, moist soils; large size requires ample space; often usurped in landscape use by resistant London plane tree; fallen leaves and fruit require cleanup",
    
    _meta: {
        catalogId: "SYL-052",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/sycamore maple.jpg"
},
{
    id: 53,
    name: "Texas Ebony",
    scientificName: "Ebenopsis ebano",
    type: "evergreen",
    family: "Fabaceae",
    
    height: "7.6-9.1m (25-30 ft)",
    spread: "1.8-4.6m (6-15 ft)",
    growthRate: "Slow",
    lifespan: "100-150 years",
    
    climate: ["desert", "subtropical", "coastal"],
    hardiness: "USDA Zones 9-11",
    pollution: "Good",
    drought: "Excellent",
    
    waterRequirements: "Very Low (xeric)",
    rootSystem: "Deep, spreading, nitrogen-fixing",
    flowerColor: "Fragrant white to cream",
    bloomingSeason: "Spring to summer",
    fallColor: "Evergreen",
    wildlifeBenefits: ["Caterpillar host (coyote cloudywing)", "Bees", "Butterflies", "Bean weevils"],
    commonPests: ["Few serious pests", "Root rot (in poorly drained soil)"],
    plantingSeason: "Spring (after frost danger)",
    costRange: "Moderate to Premium",
    
    description: "A small, evergreen tree native to the coastal plain of southern Texas and eastern Mexico, Texas Ebony is prized for its dense, dark green foliage and extremely fragrant flowers. It features hard, heavy wood and is cultivated in xeriscaping for its ornamental qualities and adaptability to arid conditions. The tree produces fragrant white to cream-colored flowers that attract pollinators, followed by distinctive seedpods. It is also a host plant for caterpillars of the coyote cloudywing butterfly (Achalarus toxeus) and Sphingicampa blanchardi. Popular in bonsai cultivation and for use in arid gardens.",
    
    benefits: [
        "Extremely drought-tolerant - ideal for xeriscaping",
        "Highly fragrant flowers perfume the garden",
        "Evergreen structure provides year-round interest",
        "Nitrogen-fixing improves soil fertility",
        "Excellent for bonsai cultivation",
        "Caterpillar host for native butterflies"
    ],
    
    maintenance: "Low - prune after flowering to maintain shape; thrives in well-drained soils; avoid overwatering which can cause root rot; responds well to container cultivation; protect from severe frost; host for epiphyte Tillandsia baileyi (Bailey's ball moss)",
    
    _meta: {
        catalogId: "SYL-053",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/Texas Ebony.jpg"
},
{
    id: 54,
    name: "Thornless Honey Locust",
    scientificName: "Gleditsia triacanthos var. inermis",
    type: "deciduous",
    family: "Fabaceae",
    
    height: "9-21m (30-70 ft)",
    spread: "12-18m (40-60 ft)",
    growthRate: "Fast",
    lifespan: "100-150 years",
    
    climate: ["temperate", "continental"],
    hardiness: "USDA Zones 3-8",
    pollution: "Excellent",
    drought: "Excellent",
    
    waterRequirements: "Low to Medium",
    rootSystem: "Deep, spreading, somewhat invasive",
    flowerColor: "Small yellow-green in spikes",
    bloomingSeason: "May",
    fallColor: "Yellow",
    wildlifeBenefits: ["Bees (nectar)", "Birds (seeds)", "Deer (eat pods)"],
    commonPests: ["Honeylocust pod gall midge", "Spider mites", "Leafhoppers", "Canker diseases"],
    plantingSeason: "Spring or fall",
    costRange: "Budget to Moderate",
    
    description: "This variety of honey locust retains all the ornamental qualities of the species - lovely, fern-like pinnately compound leaves with 20-30 small oval leaflets - but lacks the formidable thorns of the wild type. The leaves are 6-8 inches long with leaflets 0.5-1.5 inches long, creating a delicate, dappled shade that allows grass to grow beneath. Bark is dark gray and breaks into long flat plates which curl along the edges. Produces flat, red-brown pods up to 18 inches long that curl slightly and contain several seeds with a sweet, gummy substance. Pods mature in late summer and persist into winter. Rounded spreading form makes an excellent shade tree.",
    
    benefits: [
        "Thornless - safe for high-traffic areas",
        "Provides light, dappled shade - grass grows beneath",
        "Fern-like foliage creates delicate appearance",
        "Excellent urban tolerance",
        "Fast-growing shade provider",
        "Small leaflets blow away - minimal raking"
    ],
    
    maintenance: "Low - prune in late winter to remove dead wood; adaptable to most soils; prefers organically rich, moist, well-drained soil in full sun; watch for webworms; choose improved cultivars for best performance",
    
    _meta: {
        catalogId: "SYL-054",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/thornless Honey Locust.jpg"
},
{
    id: 55,
    name: "Trident Maple",
    scientificName: "Acer buergerianum",
    type: "deciduous",
    family: "Sapindaceae",
    
    height: "5-20m (15-65 ft)",
    spread: "5-12m (15-40 ft)",
    growthRate: "Slow to Medium",
    lifespan: "100-150 years",
    
    climate: ["temperate", "subtropical"],
    hardiness: "USDA Zones 5-8",
    pollution: "Good",
    drought: "Moderate",
    
    waterRequirements: "Medium - consistent moisture",
    rootSystem: "Fibrous, non-invasive",
    flowerColor: "Yellow-green",
    bloomingSeason: "Spring",
    fallColor: "Red, orange, yellow",
    wildlifeBenefits: ["Birds (nesting)", "Bees", "Butterflies"],
    commonPests: ["Aphids", "Scale insects", "Verticillium wilt (rare)"],
    plantingSeason: "Spring or fall",
    costRange: "Moderate to Premium",
    
    description: "A small to medium-sized deciduous tree native to eastern China, Taiwan, and Japan, prized for its distinctive three-lobed leaves that give it the common name 'Trident Maple'. Leaves are 2.5-8 cm long, hard, glossy dark green above and paler below, with three forward-pointing lobes on mature trees (young trees may have more spreading, serrated lobes). In autumn, foliage turns brilliant shades of red, orange, and yellow. The tree has a rounded, spreading habit and smooth gray bark that develops subtle texture with age. Flowers are small and yellow-green, produced in pendulous corymbs in spring, followed by samaras with forward-pointing wings. Extremely popular in bonsai cultivation due to excellent leaf reduction and ramification. Several cultivars available including variegated and dwarf forms.",
    
    benefits: [
        "Distinctive three-lobed leaves add textural interest",
        "Excellent fall color in red, orange, and yellow",
        "Highly prized for bonsai",
        "Small stature perfect for residential gardens",
        "Glossy foliage provides ornamental appeal",
        "Many interesting cultivars available"
    ],
    
    maintenance: "Low to Medium - prune in late winter; prefers well-drained soil; responds well to pruning for shape; one of the best maples for bonsai enthusiasts; adaptable to container cultivation; relatively pest-free",
    
    _meta: {
        catalogId: "SYL-055",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/Trident Maple.jpg"
},
{
    id: 56,
    name: "Tulip Tree",
    scientificName: "Liriodendron tulipifera",
    type: "deciduous",
    family: "Magnoliaceae",
    
    height: "24-46m (80-150 ft), up to 58.5m (192 ft)",
    spread: "12-18m (40-60 ft)",
    growthRate: "Fast",
    lifespan: "200-500 years",
    
    climate: ["temperate", "continental", "subtropical"],
    hardiness: "USDA Zones 4-9",
    pollution: "Good",
    drought: "Moderate",
    
    waterRequirements: "Medium - prefers moist, well-drained soils",
    rootSystem: "Deep, fleshy, spreading",
    flowerColor: "Pale green or yellow with orange band",
    bloomingSeason: "May to June (April in South)",
    fallColor: "Clear, bright yellow",
    wildlifeBenefits: ["Bees (nectar)", "Hummingbirds", "Birds (nesting)", "Imperial moth host"],
    commonPests: ["Aphids", "Scale insects", "Tulip tree scale", "Canker", "Leaf spots"],
    plantingSeason: "Spring or fall",
    costRange: "Moderate",
    
    description: "The tallest tree of the Nearctic temperate deciduous forest, the Tulip Tree can exceed 50m in virgin cove forests of the Appalachian Mountains. Named for its spectacular tulip-shaped flowers - pale green or yellow with an orange band, 1.5-2 inches long, appearing in late spring. The leaves are distinctive: 5-6 inches long and wide, with four lobes, and the apex cut across at a shallow angle, making the upper part of the leaf appear square. In autumn, leaves turn a clear, bright yellow. The tree tends to have a pyramidal crown with a straight trunk often free of limbs for 25-30m. Wood is light yellow to brown, and the tree combines rapid growth with strong wood - recently termed 'midwood' for its unique properties. Native to eastern North America from Southern Ontario south to Florida and Louisiana.",
    
    benefits: [
        "Spectacular tulip-shaped flowers in late spring",
        "Tallest eastern hardwood - dramatic landscape presence",
        "Unique square-lobed leaves",
        "Fast-growing with strong wood",
        "Brilliant yellow fall color",
        "Valuable timber tree"
    ],
    
    maintenance: "Low to Medium - prune in late winter; prefers deep, rich, moist soils; can drop nectar and honeydew on surfaces below; large size requires ample space; some cultivars available for smaller gardens; relatively pest-free but watch for scale",
    
    _meta: {
        catalogId: "SYL-056",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/tulip tree.jpg"
},
{
    id: 57,
    name: "Yoshino Cherry",
    scientificName: "Prunus × yedoensis",
    type: "deciduous",
    family: "Rosaceae",
    
    height: "8-12m (25-40 ft)",
    spread: "8-12m (25-40 ft)",
    growthRate: "Medium to Fast",
    lifespan: "50-80 years",
    
    climate: ["temperate", "subtropical"],
    hardiness: "USDA Zones 5-8",
    pollution: "Moderate",
    drought: "Moderate",
    
    waterRequirements: "Medium - consistent moisture",
    rootSystem: "Shallow, spreading, fibrous",
    flowerColor: "Pale pink to white, almond fragrance",
    bloomingSeason: "Early spring (March-April)",
    fallColor: "Yellow-bronze",
    wildlifeBenefits: ["Bees (early nectar)", "Birds (eat fruit)", "Butterflies"],
    commonPests: ["Aphids", "Scale insects", "Borers", "Caterpillars", "Leaf spot", "Powdery mildew"],
    plantingSeason: "Spring or fall",
    costRange: "Moderate to Premium",
    
    description: "One of the most celebrated flowering cherries, Yoshino Cherry produces an breathtaking display of pale pink to white, slightly almond-scented flowers in early spring before leaves emerge. This hybrid tree (Prunus speciosa × Prunus subhirtella) forms a spreading, rounded crown with graceful arching branches. The famous cherry trees around the Tidal Basin in Washington, D.C., are primarily Yoshino Cherries. Flowers appear in clusters of 5-6, covering the bare branches in a cloud-like display. The simple, serrated leaves emerge green, mature to dark green, and turn yellow-bronze in autumn. Glossy black fruits are small and attractive to birds. Grows best in full sun with well-drained, acidic soil.",
    
    benefits: [
        "Iconic spring floral display - clouds of pale pink blossoms",
        "Almond-scented flowers fragrance the garden",
        "Graceful, spreading form with arching branches",
        "National Cherry Blossom Festival tree",
        "Attracts early-season pollinators",
        "Multi-season interest with fall color and winter form"
    ],
    
    maintenance: "Medium - prune immediately after flowering (never in winter); prefers well-drained, acidic soil; shallow roots benefit from mulching; susceptible to borers and diseases when stressed; shorter-lived than many trees (50-80 years); choose disease-resistant cultivars when available; protect trunk from mower damage",
    
    _meta: {
        catalogId: "SYL-057",
        sourceCode: "LS2026",
        revision: "HDB-v2"
    },
    
    image: "assets/images/trees/Yoshino Cherry Tree.jpg"
}

];

// Make data available globally
window.treesData = treesData;

// Hidden verification
window.__leafspec_auth__ = PROJECT_SIGNATURE;