/**
 * ================================================
 * LEAFSPEC - Tree Database
 * Created by: SYLVAH™
 * © 2026 SYLVAH™. All Rights Reserved.
 * ================================================
 */

const treesData = [
    {
        id: 1,
        name: "London Plane",
        scientificName: "Platanus × acerifolia",
        type: "deciduous",
        family: "Platanaceae",
        
        height: "25-35m",
        spread: "15-25m",
        growthRate: "Fast",
        lifespan: "200-300 years",
        
        climate: ["temperate", "subtropical"],
        hardiness: "USDA Zones 5-9",
        pollution: "Excellent",
        drought: "Moderate",
        
        description: "The London Plane is one of the most successful urban street trees. Its tolerance to pollution, compacted soil, and pruning makes it ideal for cities worldwide.",
        
        benefits: [
            "Exceptional air purification",
            "Large canopy provides extensive shade",
            "Tolerates urban pollution extremely well",
            "Self-cleaning bark resists disease"
        ],
        
        maintenance: "Low - requires minimal pruning",
        
        image: "assets/images/trees/london plane tree.jpg"
    },
    {
        id: 2,
        name: "Ginkgo Biloba",
        scientificName: "Ginkgo biloba",
        type: "deciduous",
        family: "Ginkgoaceae",
        
        height: "15-25m",
        spread: "8-15m",
        growthRate: "Slow to Moderate",
        lifespan: "1000+ years",
        
        climate: ["temperate", "continental"],
        hardiness: "USDA Zones 3-8",
        pollution: "Excellent",
        drought: "High",
        
        description: "Ancient living fossil tree with unique fan-shaped leaves. Extremely hardy and pollution-resistant, making it perfect for urban boulevards.",
        
        benefits: [
            "Virtually pest and disease-free",
            "Stunning golden fall color",
            "Tolerates salt and compaction",
            "Long-lived and low maintenance"
        ],
        
        maintenance: "Very Low - plant male trees to avoid fruit",
        
        image: "assets/images/trees/gingko biloba.jpg"
    },
    {
        id: 3,
        name: "Japanese Zelkova",
        scientificName: "Zelkova serrata",
        type: "deciduous",
        family: "Ulmaceae",
        
        height: "15-25m",
        spread: "15-20m",
        growthRate: "Moderate",
        lifespan: "150-200 years",
        
        climate: ["temperate"],
        hardiness: "USDA Zones 5-8",
        pollution: "Good",
        drought: "Moderate",
        
        description: "Elegant vase-shaped tree often used as a disease-resistant alternative to American Elm. Beautiful structure and reliable fall color.",
        
        benefits: [
            "Disease resistant (unlike elms)",
            "Graceful vase-shaped canopy",
            "Tolerates urban conditions",
            "Orange-bronze fall foliage"
        ],
        
        maintenance: "Low - some structural pruning when young",
        
        image: "assets/images/trees/japanese zelkova.jpg"
    },
    {
        id: 4,
        name: "Honey Locust",
        scientificName: "Gleditsia triacanthos",
        type: "deciduous",
        family: "Fabaceae",
        
        height: "20-30m",
        spread: "12-20m",
        growthRate: "Fast",
        lifespan: "120-150 years",
        
        climate: ["temperate", "continental"],
        hardiness: "USDA Zones 3-9",
        pollution: "Good",
        drought: "Excellent",
        
        description: "Fast-growing tree with delicate, filtered shade perfect for lawns. Thornless varieties are ideal for urban planting with exceptional drought tolerance.",
        
        benefits: [
            "Filtered shade allows grass growth",
            "Extremely drought tolerant",
            "Salt tolerant for street use",
            "Small leaflets decompose easily"
        ],
        
        maintenance: "Low - choose thornless cultivars",
        
        image: "assets/images/trees/honey locust.jpg"
    },
    {
        id: 5,
        name: "Japanese Maple",
        scientificName: "Acer palmatum",
        type: "deciduous",
        family: "Sapindaceae",
        
        height: "4-8m",
        spread: "4-8m",
        growthRate: "Slow",
        lifespan: "100+ years",
        
        climate: ["temperate"],
        hardiness: "USDA Zones 5-8",
        pollution: "Moderate",
        drought: "Low",
        
        description: "Compact ornamental tree with stunning foliage. Hundreds of cultivars offer diverse colors and forms, perfect for smaller urban spaces and gardens.",
        
        benefits: [
            "Compact size for small spaces",
            "Year-round visual interest",
            "Diverse color options available",
            "Elegant branching structure"
        ],
        
        maintenance: "Moderate - requires good drainage and partial shade",
        
        image: "assets/images/trees/japanese maple.jpg"

        },
{
        id: 6,
        name: "Flowering Dogwood",
        scientificName: "Cornus florida",
        type: "deciduous",
        family: "Cornaceae",
        
        height: "5-10m",
        spread: "5-8m",
        growthRate: "Moderate",
        lifespan: "80-100 years",
        
        climate: ["temperate"],
        hardiness: "USDA Zones 5-9",
        pollution: "Moderate",
        drought: "Low to Moderate",
        
        description: "Beautiful understory tree with spectacular spring blooms. Four-season interest with flowers, fruit, fall color, and attractive bark.",
        
        benefits: [
            "Stunning spring flower display",
            "Provides food for wildlife",
            "Red fall foliage",
            "Suitable for small urban lots"
        ],
        
        maintenance: "Moderate - prefers acidic soil and partial shade",
        image: "assets/images/trees/flowering dogwood.jpg"
    },
    {
        id: 7,
        name: "Crape Myrtle",
        scientificName: "Lagerstroemia indica",
        type: "deciduous",
        family: "Lythraceae",
        
        height: "3-10m",
        spread: "3-8m",
        growthRate: "Fast",
        lifespan: "50+ years",
        
        climate: ["subtropical", "temperate"],
        hardiness: "USDA Zones 6-9",
        pollution: "Good",
        drought: "Excellent",
        
        description: "Multi-season small tree with summer blooms, fall color, and beautiful exfoliating bark. Extremely heat and drought tolerant for southern urban areas.",
        
        benefits: [
            "Long summer flowering period",
            "Stunning exfoliating bark",
            "Excellent drought tolerance",
            "Multiple sizes available"
        ],
        
        maintenance: "Low - some pruning for shape",
        
    image: "assets/images/trees/crape myrtle.jpg"

    },
    {
        id: 8,
        name: "Southern Magnolia",
        scientificName: "Magnolia grandiflora",
        type: "evergreen",
        family: "Magnoliaceae",
        
        height: "20-30m",
        spread: "10-15m",
        growthRate: "Moderate",
        lifespan: "80-120 years",
        
        climate: ["subtropical", "temperate"],
        hardiness: "USDA Zones 6-10",
        pollution: "Moderate",
        drought: "Moderate",
        
        description: "Iconic evergreen with large glossy leaves and fragrant white flowers. A classic southern tree that provides year-round structure and beauty.",
        
        benefits: [
            "Year-round evergreen foliage",
            "Large fragrant flowers",
            "Creates dense screening",
            "Low maintenance once established"
        ],
        
        maintenance: "Low - leaf drop can be significant",
        
        image: "assets/images/trees/southern magnolia.jpg"
    },
    {
        id: 9,
        name: "Red Oak",
        scientificName: "Quercus rubra",
        type: "deciduous",
        family: "Fagaceae",
        
        height: "20-30m",
        spread: "15-25m",
        growthRate: "Fast (for oak)",
        lifespan: "200-300 years",
        
        climate: ["temperate", "continental"],
        hardiness: "USDA Zones 3-8",
        pollution: "Good",
        drought: "Moderate to High",
        
        description: "Fast-growing native oak with brilliant red fall color. Strong branching structure and adaptability make it excellent for parks and large urban spaces.",
        
        benefits: [
            "Fastest growing oak species",
            "Brilliant red fall color",
            "Strong wood structure",
            "Supports extensive wildlife"
        ],
        
        maintenance: "Low - very durable tree",
        
        image: "assets/images/trees/red oak.jpg"
    },
    {
        id: 10,
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
        
        description: "Classic American street tree with vase-shaped canopy. Disease-resistant cultivars have revived this beloved species for urban boulevards.",
        
        benefits: [
            "Iconic vase-shaped form",
            "Rapid growth rate",
            "New disease-resistant varieties",
            "Creates beautiful tree-lined streets"
        ],
        
        maintenance: "Low - choose resistant cultivars",
        
        image: "assets/images/trees/american elm.jpg"
    },
    {
        id: 11,
        name: "Tulip Tree",
        scientificName: "Liriodendron tulipifera",
        type: "deciduous",
        family: "Magnoliaceae",
        
        height: "25-35m",
        spread: "12-20m",
        growthRate: "Very Fast",
        lifespan: "200-300 years",
        
        climate: ["temperate"],
        hardiness: "USDA Zones 4-9",
        pollution: "Moderate",
        drought: "Low to Moderate",
        
        description: "Tall, fast-growing native tree with unique tulip-shaped flowers. Straight trunk and pyramidal form make it ideal for large urban parks.",
        
        benefits: [
            "Very fast growth rate",
            "Unique tulip-like flowers",
            "Bright yellow fall color",
            "Straight, strong trunk"
        ],
        
        maintenance: "Low - needs ample space",
        
        image: "assets/images/trees/tulip tree.jpg"
    },
    {
        id: 12,
        name: "Silver Linden",
        scientificName: "Tilia tomentosa",
        type: "deciduous",
        family: "Malvaceae",
        
        height: "20-25m",
        spread: "12-18m",
        growthRate: "Moderate",
        lifespan: "100-150 years",
        
        climate: ["temperate"],
        hardiness: "USDA Zones 4-7",
        pollution: "Excellent",
        drought: "High",
        
        description: "Elegant tree with silver-backed leaves that shimmer in the breeze. Extremely heat and drought tolerant with fragrant summer flowers.",
        
        benefits: [
            "Silvery shimmering foliage",
            "Fragrant summer flowers",
            "Excellent heat tolerance",
            "Dense shade canopy"
        ],
        
        maintenance: "Low - very adaptable",
        
        image: "assets/images/trees/silver linden.jpg"
    }
];

// Make data available globally
window.treesData = treesData;