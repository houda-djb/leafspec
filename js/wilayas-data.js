/**
 * ================================================
 * LEAFSPEC - Algerian Wilayas Database
 * 58 Wilayas across 3 Natural Regions
 * Based on official Algerian botanical geography
 *
 * Regions:
 *   mediterranean  → Tell / Nord (coastal strip, >400mm rain)
 *   steppe         → Hauts Plateaux (semi-arid, 300-500mm rain)
 *   sahara         → Desert (hyper-arid, <50mm rain)
 *
 * Created by: SYLVAH™
 * © 2026 SYLVAH™. All Rights Reserved.
 * ================================================
 */

/* ================================================================
   REGION DEFINITIONS
================================================================ */
const regionsData = [
    {
        id: 'mediterranean',
        name: 'Mediterranean Region',
        nameAr: 'المنطقة المتوسطية',
        nameFr: 'Région Méditerranéenne',
        nickname: 'The Tell',
        nicknameAr: 'الشمال / التل',
        color: '#2D6A4F',
        lightColor: '#d8f3dc',
        icon: '🌿',
        rainfall: '400–1000+ mm/year',
        climate: 'Hot dry summer, humid rainy winter',
        climateFr: 'Été chaud et sec, hiver humide et pluvieux',
        climateAr: 'صيف حار جاف، شتاء رطب ممطر',
        description: 'The most fertile and vegetated region of Algeria. Sandwiched between the Mediterranean coast and the southern slopes of the Tell Atlas. Home to Algeria\'s richest forests and most productive agricultural lands.',
        descriptionFr: 'La région la plus fertile d\'Algérie, entre la côte méditerranéenne et le Tell Atlas. Forêts riches et terres agricoles très productives.',
        descriptionAr: 'أخصب مناطق الجزائر، بين الساحل المتوسطي وجبال الأطلس التلي. غابات كثيفة وأراضٍ زراعية عالية الإنتاج.',
        forestArea: '3.8 million hectares',
        keyFact: 'Home to the largest cork oak forest in the Mediterranean after Portugal',
        dominantTrees: ['Aleppo Pine', 'Atlas Cedar', 'Cork Oak', 'Olive Tree', 'Stone Pine', 'European Beech', 'London Plane', 'Judas Tree'],
        treeIds: [1, 3, 19, 23, 38, 31], // matches trees-data.js ids
        stats: {
            pineForestsHa: 700000,
            oakForestsHa: 500000,
            corkForestsHa: 440000,
            cedarForestsHa: 30000
        }
    },
    {
        id: 'steppe',
        name: 'Steppe Region',
        nameAr: 'منطقة الهضاب العليا',
        nameFr: 'Région des Hauts Plateaux',
        nickname: 'Hauts Plateaux',
        nicknameAr: 'الهضاب العليا',
        color: '#B5835A',
        lightColor: '#fefae0',
        icon: '🌾',
        rainfall: '300–500 mm/year',
        climate: 'Semi-arid, harsh temperature contrasts, cold winters',
        climateFr: 'Semi-aride, contrastes thermiques forts, hivers froids',
        climateAr: 'شبه جاف، تباين حراري حاد، شتاء بارد',
        description: 'A transitional zone between the Mediterranean region and the Sahara. Characterized by esparto grass (alfa) covering 4 million hectares — Algeria\'s first natural pasture zone and key to the paper industry. Saline soils and chotts (salt lakes) are common.',
        descriptionFr: 'Zone de transition entre Méditerranée et Sahara. L\'alfa (4 millions d\'hectares) domine — première zone de pâturage naturel d\'Algérie.',
        descriptionAr: 'منطقة انتقالية بين المتوسط والصحراء. الحلفاء (4 مليون هكتار) تهيمن — أول منطقة مراعٍ طبيعية في الجزائر.',
        forestArea: '4 million hectares (esparto)',
        keyFact: 'Algeria\'s first natural pasture area — home to the most important sheep herds in the country',
        dominantTrees: ['Aleppo Pine', 'Olive Tree', 'Honey Locust', 'Thornless Honey Locust', 'Black Locust', 'Sycamore'],
        dominantPlants: ['Esparto grass (Alfa)', 'Jujube (Sidr)', 'Lentisk (Drou)', 'Artemisia (Chih)', 'Wormwood'],
        treeIds: [1, 23, 25, 37, 5, 44],
        stats: {
            alfaHa: 4000000,
            altitude: '1000–1300m',
            avgRainfall: '350mm'
        }
    },
    {
        id: 'sahara',
        name: 'Saharan Region',
        nameAr: 'المنطقة الصحراوية',
        nameFr: 'Région Saharienne',
        nickname: 'The Sahara',
        nicknameAr: 'الصحراء الكبرى',
        color: '#C9A86A',
        lightColor: '#fff8e7',
        icon: '🌴',
        rainfall: '<50 mm/year',
        climate: 'Hyper-arid, extreme heat, cold nights',
        climateFr: 'Hyper-aride, chaleur extrême, nuits froides',
        climateAr: 'شديد الجفاف، حرارة قصوى، ليالٍ باردة',
        description: 'Covers more than four-fifths of Algeria\'s total territory. Home to oases, dunes, and rocky plateaus (regs). Rich in oil, gas, and natural resources. Vegetation is sparse but uniquely adapted, concentrated around oases and wadis.',
        descriptionFr: 'Plus des quatre cinquièmes du territoire algérien. Oasis, dunes et regs rocheux. Riche en pétrole et gaz. Végétation concentrée autour des oasis.',
        descriptionAr: 'أكثر من أربعة أخماس المساحة الكلية للجزائر. واحات، كثبان رملية وهضاب صخرية. غنية بالنفط والغاز. النباتات مركزة حول الواحات.',
        forestArea: 'Sparse — concentrated in oases',
        keyFact: 'Home to the endemic Saharan Cypress (Cupressus dupreziana) — found only in Tassili N\'Ajjer',
        dominantTrees: ['Date Palm', 'Saharan Cypress (endemic)', 'Acacia', 'Tamarisk', 'Doum Palm', 'Desert Willow'],
        treeIds: [15, 41, 42], // desert-adapted species from catalog
        stats: {
            coveragePct: '85% of Algeria\'s land area',
            largestWilaya: 'Tamanrasset (550,000 km²)',
            oases: 'El Oued, Timimoun, Ghardaïa, Djanet'
        }
    }
];

/* ================================================================
   58 WILAYAS — complete data
   Fields: id, name, nameAr, nameFr, region, capital,
           altitude, rainfall, climate, iconicTree,
           treeIds (from trees-data.js), hasNDVI
================================================================ */
const wilayasData = [

    /* ============================================================
       MEDITERRANEAN REGION — Tell / Nord
    ============================================================ */
    {
        id: 1, code: '01',
        name: 'Adrar', nameAr: 'أدرار', nameFr: 'Adrar',
        region: 'sahara',
        capital: 'Adrar',
        altitude: '276m', rainfall: '<15mm/year',
        climate: 'Hyper-arid Saharan desert',
        iconicTree: 'Date Palm',
        description: 'Deep Saharan wilaya known for its ancient ksour (fortified villages) and vast palm groves in oases like Timimoun.',
        treeIds: [15],
        hasNDVI: false
    },
    {
        id: 2, code: '02',
        name: 'Chlef', nameAr: 'الشلف', nameFr: 'Chlef',
        region: 'mediterranean',
        capital: 'Chlef',
        altitude: '140m', rainfall: '450mm/year',
        climate: 'Mediterranean, fertile Cheliff valley',
        iconicTree: 'Aleppo Pine',
        description: 'Located in the fertile Cheliff valley — the longest river in Algeria. Rich agricultural land with citrus and olive groves.',
        treeIds: [1, 23, 38, 44],
        hasNDVI: false
    },
    {
        id: 3, code: '03',
        name: 'Laghouat', nameAr: 'الأغواط', nameFr: 'Laghouat',
        region: 'steppe',
        capital: 'Laghouat',
        altitude: '770m', rainfall: '180mm/year',
        climate: 'Semi-arid, gateway to the Sahara',
        iconicTree: 'Aleppo Pine',
        description: 'Known as the "Gate of the Sahara". Transition zone between the steppe and the northern Sahara with important pastoral lands.',
        treeIds: [1, 23],
        hasNDVI: false
    },
    {
        id: 4, code: '04',
        name: 'Oum El Bouaghi', nameAr: 'أم البواقي', nameFr: 'Oum El Bouaghi',
        region: 'steppe',
        capital: 'Oum El Bouaghi',
        altitude: '900m', rainfall: '350mm/year',
        climate: 'Semi-arid high plateau, cold winters',
        iconicTree: 'Aleppo Pine',
        description: 'High plateau wilaya in eastern Algeria. Important cereal production zone with harsh continental climate.',
        treeIds: [1, 25, 5],
        hasNDVI: false
    },
    {
        id: 5, code: '05',
        name: 'Batna', nameAr: 'باتنة', nameFr: 'Batna',
        region: 'steppe',
        capital: 'Batna',
        altitude: '1050m', rainfall: '350mm/year',
        climate: 'Semi-arid, cold winters, hot dry summers',
        iconicTree: 'Atlas Cedar',
        description: 'Located in the Aurès Mountains at 1,050m altitude. Gateway to the Timgad Roman ruins. Home to the famous Belezma National Park with Atlas Cedar forests. Batna sits on the eastern edge of the Hauts Plateaux — one of Algeria\'s most forested steppe wilayas.',
        treeIds: [3, 1, 23, 25, 5, 44],
        hasNDVI: true, // ← BATNA HAS REAL NDVI DATA
        ndvi: {
            years: [2024, 2026],
            map2026: 'assets/NDVI/batna_2024.png',
            map2024: 'assets/NDVI/batna_2026.png',
            maxValue2026: 0.612412,
            minValue2026: -0.153852,
            analysis: {
                trend: 'improving',
                summary: 'Vegetation coverage in Batna has noticeably increased between 2024 and 2026. The 2026 NDVI map shows denser green zones expanding into previously gray urban areas, particularly on the city\'s periphery and along the Oued Batna corridor.',
                urban: 'The urban core (gray zones) remains dense but green patches within residential areas have multiplied.',
                periurban: 'Peri-urban agricultural lands and natural slopes show strong NDVI values (0.4–0.6), indicating healthy seasonal vegetation in May 2026.',
                month: 'May 2026',
                satellite: 'Sentinel-2 / Landsat',
                ndviScale: 'NDVI ranges from -1 to +1. Values above 0.4 indicate healthy dense vegetation. Values near 0 indicate bare soil or urban surfaces. Negative values indicate water or built surfaces.'
            }
        }
    },
    {
        id: 6, code: '06',
        name: 'Béjaïa', nameAr: 'بجاية', nameFr: 'Béjaïa',
        region: 'mediterranean',
        capital: 'Béjaïa',
        altitude: '0–2000m', rainfall: '700mm/year',
        climate: 'Mediterranean coastal, mountainous Kabylie',
        iconicTree: 'Cork Oak',
        description: 'Stunning Kabylie coastline with the Gulf of Béjaïa. Famous for ancient olive groves central to community life, and extensive cork oak forests in the mountains.',
        treeIds: [1, 3, 23, 38, 19],
        hasNDVI: false
    },
    {
        id: 7, code: '07',
        name: 'Biskra', nameAr: 'بسكرة', nameFr: 'Biskra',
        region: 'steppe',
        capital: 'Biskra',
        altitude: '124m', rainfall: '150mm/year',
        climate: 'Arid, very hot summers, mild winters',
        iconicTree: 'Date Palm',
        description: 'The "Queen of the Ziban" — famous for its exceptional Deglet Nour dates. Sits at the foot of the Aurès Mountains where the steppe meets the Sahara.',
        treeIds: [1, 15, 23],
        hasNDVI: false
    },
    {
        id: 8, code: '08',
        name: 'Béchar', nameAr: 'بشار', nameFr: 'Béchar',
        region: 'sahara',
        capital: 'Béchar',
        altitude: '800m', rainfall: '<50mm/year',
        climate: 'Arid Saharan, elevated desert plateau',
        iconicTree: 'Date Palm',
        description: 'Western Saharan gateway. Elevated desert plateau with palm groves and ancient caravan routes linking Algeria to West Africa.',
        treeIds: [15],
        hasNDVI: false
    },
    {
        id: 9, code: '09',
        name: 'Blida', nameAr: 'البليدة', nameFr: 'Blida',
        region: 'mediterranean',
        capital: 'Blida',
        altitude: '240m', rainfall: '700mm/year',
        climate: 'Mediterranean, lush Mitidja plain',
        iconicTree: 'Atlas Cedar',
        description: 'Known as the "City of Roses". Sits at the foot of the Tell Atlas with the fertile Mitidja plain. Famous for Chréa National Park where Atlas Cedars dominate the landscape.',
        treeIds: [3, 1, 23, 38, 44, 19],
        hasNDVI: false
    },
    {
        id: 10, code: '10',
        name: 'Bouira', nameAr: 'البويرة', nameFr: 'Bouira',
        region: 'mediterranean',
        capital: 'Bouira',
        altitude: '600m', rainfall: '600mm/year',
        climate: 'Sub-humid Mediterranean, mountainous',
        iconicTree: 'Atlas Cedar',
        description: 'Mountainous Kabylie wilaya with dense cedar and oak forests. Important cereal and fruit production in the valleys.',
        treeIds: [3, 1, 38, 23, 19],
        hasNDVI: false
    },
    {
        id: 11, code: '11',
        name: 'Tamanrasset', nameAr: 'تمنراست', nameFr: 'Tamanrasset',
        region: 'sahara',
        capital: 'Tamanrasset',
        altitude: '1373m', rainfall: '<20mm/year',
        climate: 'Hyper-arid high altitude Sahara',
        iconicTree: 'Saharan Cypress (endemic)',
        description: 'Deep in the Sahara — home to the Hoggar Mountains and Tuareg culture. Contains the Tassili N\'Ajjer National Park where the endemic Saharan Cypress (Cupressus dupreziana) grows.',
        treeIds: [15],
        hasNDVI: false,
        special: 'Contains the endemic Saharan Cypress — one of the rarest trees in the world'
    },
    {
        id: 12, code: '12',
        name: 'Tébessa', nameAr: 'تبسة', nameFr: 'Tébessa',
        region: 'steppe',
        capital: 'Tébessa',
        altitude: '820m', rainfall: '300mm/year',
        climate: 'Semi-arid, cold winters, important alfa zones',
        iconicTree: 'Aleppo Pine',
        description: 'Eastern border wilaya with Tunisia. Important esparto grass (alfa) production zone and ancient Roman ruins at Tébessa city.',
        treeIds: [1, 5, 25],
        hasNDVI: false
    },
    {
        id: 13, code: '13',
        name: 'Tlemcen', nameAr: 'تلمسان', nameFr: 'Tlemcen',
        region: 'mediterranean',
        capital: 'Tlemcen',
        altitude: '850m', rainfall: '500mm/year',
        climate: 'Mediterranean highland, Tlemcen Mountains',
        iconicTree: 'Aleppo Pine',
        description: 'The "Pearl of the West". Elegant blend of Berber and Andalusian culture. Tlemcen Mountains covered in Mediterranean forest with limestone rocks and diverse flora.',
        treeIds: [1, 23, 38, 19, 44],
        hasNDVI: false
    },
    {
        id: 14, code: '14',
        name: 'Tiaret', nameAr: 'تيارت', nameFr: 'Tiaret',
        region: 'steppe',
        capital: 'Tiaret',
        altitude: '1000m', rainfall: '350mm/year',
        climate: 'Semi-arid high plateau, important livestock zone',
        iconicTree: 'Aleppo Pine',
        description: 'Known as the "Horse Capital" of Algeria. Vast high plateau steppe, important for sheep farming and esparto grass. Cold winters with occasional snow.',
        treeIds: [1, 5, 25, 44],
        hasNDVI: false
    },
    {
        id: 15, code: '15',
        name: 'Tizi Ouzou', nameAr: 'تيزي وزو', nameFr: 'Tizi Ouzou',
        region: 'mediterranean',
        capital: 'Tizi Ouzou',
        altitude: '193m', rainfall: '800mm/year',
        climate: 'Sub-humid Mediterranean, Greater Kabylie',
        iconicTree: 'Cork Oak',
        description: 'Heart of Greater Kabylie. Djurdjura Mountains with dense cedar and oak forests. Cork oak sustainably harvested in the mountains, supporting local industries.',
        treeIds: [3, 1, 38, 23, 19, 44],
        hasNDVI: false
    },
    {
        id: 16, code: '16',
        name: 'Alger', nameAr: 'الجزائر', nameFr: 'Alger',
        region: 'mediterranean',
        capital: 'Algiers',
        altitude: '0–400m', rainfall: '650mm/year',
        climate: 'Mediterranean coastal, capital city',
        iconicTree: 'London Plane',
        description: 'The capital and most populous wilaya. Perched on hills above the Bay of Algiers. Urban forests, botanical gardens, and the iconic Casbah. London Plane trees line the main boulevards.',
        treeIds: [1, 3, 23, 38, 44, 19, 31],
        hasNDVI: false
    },
    {
        id: 17, code: '17',
        name: 'Djelfa', nameAr: 'الجلفة', nameFr: 'Djelfa',
        region: 'steppe',
        capital: 'Djelfa',
        altitude: '1200m', rainfall: '300mm/year',
        climate: 'Semi-arid, largest wilaya in Hauts Plateaux',
        iconicTree: 'Aleppo Pine',
        description: 'The largest steppe wilaya in Algeria. Enormous pastoral lands with millions of sheep. Chott Hodna salt lake sits within its borders.',
        treeIds: [1, 5, 25],
        hasNDVI: false
    },
    {
        id: 18, code: '18',
        name: 'Jijel', nameAr: 'جيجل', nameFr: 'Jijel',
        region: 'mediterranean',
        capital: 'Jijel',
        altitude: '0–1200m', rainfall: '900mm/year',
        climate: 'Humid Mediterranean, one of Algeria\'s rainiest',
        iconicTree: 'Algerian Fir (endemic)',
        description: 'One of the rainiest wilayas in Algeria. Contains Djebel Babor — home to the critically endangered Algerian Fir (Abies numidica), found nowhere else on Earth. Dense cork oak and cedar forests.',
        treeIds: [3, 1, 38, 19],
        hasNDVI: false,
        special: 'Home to the endemic Algerian Fir (Abies numidica) on Djebel Babor — a critically endangered species'
    },
    {
        id: 19, code: '19',
        name: 'Sétif', nameAr: 'سطيف', nameFr: 'Sétif',
        region: 'steppe',
        capital: 'Sétif',
        altitude: '1100m', rainfall: '400mm/year',
        climate: 'Sub-humid to semi-arid, productive plateau',
        iconicTree: 'Aleppo Pine',
        description: 'Economic capital of eastern Algeria. Fertile plateau renowned for grain production. Borders both the Mediterranean mountains and the steppe.',
        treeIds: [1, 3, 23, 25, 5],
        hasNDVI: false
    },
    {
        id: 20, code: '20',
        name: 'Saïda', nameAr: 'سعيدة', nameFr: 'Saïda',
        region: 'steppe',
        capital: 'Saïda',
        altitude: '780m', rainfall: '320mm/year',
        climate: 'Semi-arid plateau, western Hauts Plateaux',
        iconicTree: 'Aleppo Pine',
        description: 'Western high plateau wilaya with important Aleppo Pine forests. Known for viticulture heritage and pastoral lands.',
        treeIds: [1, 5, 23],
        hasNDVI: false
    },
    {
        id: 21, code: '21',
        name: 'Skikda', nameAr: 'سكيكدة', nameFr: 'Skikda',
        region: 'mediterranean',
        capital: 'Skikda',
        altitude: '0–900m', rainfall: '750mm/year',
        climate: 'Mediterranean coastal with lush hinterland',
        iconicTree: 'Cork Oak',
        description: 'Important port city on the Mediterranean. Rich cork oak forests in the hinterland. Major industrial and petrochemical hub with significant coastal biodiversity.',
        treeIds: [1, 3, 38, 23, 19],
        hasNDVI: false
    },
    {
        id: 22, code: '22',
        name: 'Sidi Bel Abbès', nameAr: 'سيدي بلعباس', nameFr: 'Sidi Bel Abbès',
        region: 'mediterranean',
        capital: 'Sidi Bel Abbès',
        altitude: '476m', rainfall: '400mm/year',
        climate: 'Semi-humid Mediterranean, Macta plain',
        iconicTree: 'Olive Tree',
        description: 'Located in the Macta plain near Oran. Important agricultural region with extensive olive groves and vineyards. Gateway to the Tell Atlas.',
        treeIds: [1, 23, 44, 5],
        hasNDVI: false
    },
    {
        id: 23, code: '23',
        name: 'Annaba', nameAr: 'عنابة', nameFr: 'Annaba',
        region: 'mediterranean',
        capital: 'Annaba',
        altitude: '0–600m', rainfall: '650mm/year',
        climate: 'Mediterranean coastal, northeast Algeria',
        iconicTree: 'Cork Oak',
        description: 'Algeria\'s steel city and eastern Mediterranean gateway. El Kala National Park nearby hosts extraordinary biodiversity including cork oak forests and wetlands.',
        treeIds: [1, 3, 38, 23, 19, 44],
        hasNDVI: false
    },
    {
        id: 24, code: '24',
        name: 'Guelma', nameAr: 'قالمة', nameFr: 'Guelma',
        region: 'mediterranean',
        capital: 'Guelma',
        altitude: '300m', rainfall: '600mm/year',
        climate: 'Sub-humid Mediterranean, fertile valleys',
        iconicTree: 'Olive Tree',
        description: 'Fertile agricultural wilaya with olive groves and citrus orchards. Seybouse River valley supports rich riparian vegetation.',
        treeIds: [1, 23, 38, 44],
        hasNDVI: false
    },
    {
        id: 25, code: '25',
        name: 'Constantine', nameAr: 'قسنطينة', nameFr: 'Constantine',
        region: 'mediterranean',
        capital: 'Constantine',
        altitude: '650m', rainfall: '550mm/year',
        climate: 'Sub-humid, dramatic gorge city',
        iconicTree: 'Aleppo Pine',
        description: 'The "City of Bridges" — built on a dramatic rocky plateau cut by the Rhumel gorge. Eastern capital of Algeria with important urban green spaces.',
        treeIds: [1, 3, 23, 44, 19],
        hasNDVI: false
    },
    {
        id: 26, code: '26',
        name: 'Médéa', nameAr: 'المدية', nameFr: 'Médéa',
        region: 'mediterranean',
        capital: 'Médéa',
        altitude: '920m', rainfall: '600mm/year',
        climate: 'Sub-humid Tell Atlas, mountainous',
        iconicTree: 'Atlas Cedar',
        description: 'Mountainous wilaya in the Tell Atlas. Forests of cedar and oak cover the slopes. Important fruit production, especially apples and cherries at altitude.',
        treeIds: [3, 1, 38, 23, 44],
        hasNDVI: false
    },
    {
        id: 27, code: '27',
        name: 'Mostaganem', nameAr: 'مستغانم', nameFr: 'Mostaganem',
        region: 'mediterranean',
        capital: 'Mostaganem',
        altitude: '180m', rainfall: '400mm/year',
        climate: 'Mediterranean coastal, northwestern Algeria',
        iconicTree: 'Stone Pine',
        description: 'Coastal Mediterranean wilaya with beautiful beaches and significant viticulture heritage. Stone Pine groves along the coast.',
        treeIds: [1, 38, 23, 44],
        hasNDVI: false
    },
    {
        id: 28, code: '28',
        name: "M'Sila", nameAr: 'المسيلة', nameFr: "M'Sila",
        region: 'steppe',
        capital: "M'Sila",
        altitude: '450m', rainfall: '250mm/year',
        climate: 'Semi-arid, Hodna basin',
        iconicTree: 'Aleppo Pine',
        description: 'Central steppe wilaya in the Hodna basin. Important cereal production and pastoral lands. Salt lake (Chott El Hodna) is a Ramsar wetland site.',
        treeIds: [1, 5, 25],
        hasNDVI: false
    },
    {
        id: 29, code: '29',
        name: 'Mascara', nameAr: 'معسكر', nameFr: 'Mascara',
        region: 'mediterranean',
        capital: 'Mascara',
        altitude: '600m', rainfall: '450mm/year',
        climate: 'Mediterranean to semi-arid, transition zone',
        iconicTree: 'Olive Tree',
        description: 'Known for its exceptional olive oil production and wine heritage. Borders the Mediterranean hills and the western steppe plateau.',
        treeIds: [1, 23, 38, 44, 5],
        hasNDVI: false
    },
    {
        id: 30, code: '30',
        name: 'Ouargla', nameAr: 'ورقلة', nameFr: 'Ouargla',
        region: 'sahara',
        capital: 'Ouargla',
        altitude: '141m', rainfall: '<40mm/year',
        climate: 'Hyper-arid Saharan, oil industry hub',
        iconicTree: 'Date Palm',
        description: 'Major oil industry center in the northern Sahara. Important oasis city with vast palm groves. Hassi Messaoud oil field nearby.',
        treeIds: [15],
        hasNDVI: false
    },
    {
        id: 31, code: '31',
        name: 'Oran', nameAr: 'وهران', nameFr: 'Oran',
        region: 'mediterranean',
        capital: 'Oran',
        altitude: '0–450m', rainfall: '350mm/year',
        climate: 'Mediterranean coastal, second largest city',
        iconicTree: 'London Plane',
        description: 'Algeria\'s second largest city and western Mediterranean hub. Important port and commercial center with a rich Andalusian cultural heritage. London Plane trees shade the city\'s main avenues.',
        treeIds: [1, 23, 44, 38, 31],
        hasNDVI: false
    },
    {
        id: 32, code: '32',
        name: 'El Bayadh', nameAr: 'البيض', nameFr: 'El Bayadh',
        region: 'steppe',
        capital: 'El Bayadh',
        altitude: '1310m', rainfall: '250mm/year',
        climate: 'High altitude semi-arid steppe',
        iconicTree: 'Aleppo Pine',
        description: 'High elevation western steppe wilaya. Important sheep farming and esparto grass zones. Borders the northern Sahara.',
        treeIds: [1, 5, 25],
        hasNDVI: false
    },
    {
        id: 33, code: '33',
        name: 'Illizi', nameAr: 'إليزي', nameFr: 'Illizi',
        region: 'sahara',
        capital: 'Illizi',
        altitude: '560m', rainfall: '<10mm/year',
        climate: 'Hyper-arid, Tassili N\'Ajjer plateau',
        iconicTree: 'Saharan Cypress (endemic)',
        description: 'Home to the Tassili N\'Ajjer National Park — a UNESCO World Heritage Site with prehistoric rock art and the rarest tree on earth: the Saharan Cypress (Cupressus dupreziana).',
        treeIds: [15],
        hasNDVI: false,
        special: 'UNESCO World Heritage — Tassili N\'Ajjer. Home to Cupressus dupreziana, one of the world\'s rarest trees'
    },
    {
        id: 34, code: '34',
        name: 'Bordj Bou Arréridj', nameAr: 'برج بوعريريج', nameFr: 'Bordj Bou Arréridj',
        region: 'steppe',
        capital: 'Bordj Bou Arréridj',
        altitude: '850m', rainfall: '400mm/year',
        climate: 'Sub-humid to semi-arid, productive plateau',
        iconicTree: 'Aleppo Pine',
        description: 'Located between the Tell Atlas and the high plateau. Important cereal farming and fruit production. Electronics industry center.',
        treeIds: [1, 3, 23, 25],
        hasNDVI: false
    },
    {
        id: 35, code: '35',
        name: 'Boumerdès', nameAr: 'بومرداس', nameFr: 'Boumerdès',
        region: 'mediterranean',
        capital: 'Boumerdès',
        altitude: '0–900m', rainfall: '700mm/year',
        climate: 'Mediterranean coastal, east of Algiers',
        iconicTree: 'Aleppo Pine',
        description: 'Coastal wilaya east of Algiers with a beautiful Mediterranean shoreline. Kabylie foothills with pine and oak forests. Important agricultural zone.',
        treeIds: [1, 3, 38, 23, 44],
        hasNDVI: false
    },
    {
        id: 36, code: '36',
        name: 'El Tarf', nameAr: 'الطارف', nameFr: 'El Tarf',
        region: 'mediterranean',
        capital: 'El Tarf',
        altitude: '0–1000m', rainfall: '800mm/year',
        climate: 'Humid Mediterranean, biodiversity hotspot',
        iconicTree: 'Cork Oak',
        description: 'The greenest wilaya of Algeria. El Kala National Park — one of North Africa\'s most important biodiversity hotspots with Mediterranean wetlands, cork oak forests, and extraordinary wildlife.',
        treeIds: [38, 1, 3, 23, 19],
        hasNDVI: false,
        special: 'El Kala National Park — North Africa\'s most biodiverse Mediterranean wetland ecosystem'
    },
    {
        id: 37, code: '37',
        name: 'Tindouf', nameAr: 'تندوف', nameFr: 'Tindouf',
        region: 'sahara',
        capital: 'Tindouf',
        altitude: '440m', rainfall: '<10mm/year',
        climate: 'Hyper-arid, extreme southwestern Sahara',
        iconicTree: 'Acacia',
        description: 'Algeria\'s most isolated wilaya bordering Mauritania and Morocco. Vast Saharan reg (rocky desert) with scattered acacia trees in dry wadis.',
        treeIds: [15],
        hasNDVI: false
    },
    {
        id: 38, code: '38',
        name: 'Tissemsilt', nameAr: 'تيسمسيلت', nameFr: 'Tissemsilt',
        region: 'steppe',
        capital: 'Tissemsilt',
        altitude: '1000m', rainfall: '400mm/year',
        climate: 'Sub-humid to semi-arid, Tell Atlas foothills',
        iconicTree: 'Aleppo Pine',
        description: 'Small mountainous wilaya between the Tell Atlas and the high plateau. Théniet El Had National Park contains important cedar forests.',
        treeIds: [3, 1, 23, 38],
        hasNDVI: false
    },
    {
        id: 39, code: '39',
        name: 'El Oued', nameAr: 'الوادي', nameFr: 'El Oued',
        region: 'sahara',
        capital: 'El Oued',
        altitude: '61m', rainfall: '<70mm/year',
        climate: 'Arid Saharan, famous underground irrigation',
        iconicTree: 'Date Palm',
        description: 'The "City of a Thousand Domes". Famous for its unique underground irrigation system (ghout) supporting date palm cultivation despite the desert environment.',
        treeIds: [15],
        hasNDVI: false,
        special: 'Unique ghout underground irrigation system — a UNESCO-recognized agricultural heritage'
    },
    {
        id: 40, code: '40',
        name: 'Khenchela', nameAr: 'خنشلة', nameFr: 'Khenchela',
        region: 'steppe',
        capital: 'Khenchela',
        altitude: '1050m', rainfall: '350mm/year',
        climate: 'Semi-arid, Aurès Mountains foothills',
        iconicTree: 'Atlas Cedar',
        description: 'Nestled in the eastern Aurès Mountains. Belezma National Park cedar forests extend into this wilaya. Cold harsh winters with significant snowfall.',
        treeIds: [3, 1, 25, 5],
        hasNDVI: false
    },
    {
        id: 41, code: '41',
        name: 'Souk Ahras', nameAr: 'سوق أهراس', nameFr: 'Souk Ahras',
        region: 'mediterranean',
        capital: 'Souk Ahras',
        altitude: '700m', rainfall: '600mm/year',
        climate: 'Sub-humid Mediterranean, Tunisian border',
        iconicTree: 'Cork Oak',
        description: 'Birthplace of Saint Augustine. Dense forests of cork oak and pine in the northern Numidian mountains. Rich biodiversity near the Tunisian border.',
        treeIds: [38, 1, 3, 23, 19],
        hasNDVI: false
    },
    {
        id: 42, code: '42',
        name: 'Tipaza', nameAr: 'تيبازة', nameFr: 'Tipaza',
        region: 'mediterranean',
        capital: 'Tipaza',
        altitude: '0–600m', rainfall: '600mm/year',
        climate: 'Mediterranean coastal, west of Algiers',
        iconicTree: 'Stone Pine',
        description: 'Roman ruins by the sea. Coastal Mediterranean wilaya west of Algiers with citrus orchards, olive groves, and stone pine along the coastline. UNESCO World Heritage archaeological site.',
        treeIds: [1, 23, 38, 44, 38],
        hasNDVI: false
    },
    {
        id: 43, code: '43',
        name: 'Mila', nameAr: 'ميلة', nameFr: 'Mila',
        region: 'mediterranean',
        capital: 'Mila',
        altitude: '750m', rainfall: '550mm/year',
        climate: 'Sub-humid Mediterranean, northeastern Algeria',
        iconicTree: 'Aleppo Pine',
        description: 'Mountainous northeastern wilaya with important Aleppo Pine and oak forests. Beni Haroun Dam — Algeria\'s largest — is located here, creating a vast reservoir ecosystem.',
        treeIds: [1, 3, 23, 38],
        hasNDVI: false
    },
    {
        id: 44, code: '44',
        name: 'Aïn Défla', nameAr: 'عين الدفلى', nameFr: 'Aïn Défla',
        region: 'mediterranean',
        capital: 'Aïn Défla',
        altitude: '200m', rainfall: '500mm/year',
        climate: 'Mediterranean, fertile Cheliff valley',
        iconicTree: 'Olive Tree',
        description: 'Fertile agricultural wilaya in the Cheliff valley. Known for fruit production, olive groves, and citrus orchards. Mediterranean forest on the northern Atlas slopes.',
        treeIds: [1, 23, 44, 38],
        hasNDVI: false
    },
    {
        id: 45, code: '45',
        name: 'Naâma', nameAr: 'النعامة', nameFr: 'Naâma',
        region: 'steppe',
        capital: 'Naâma',
        altitude: '1000m', rainfall: '250mm/year',
        climate: 'Semi-arid western steppe, pre-Saharan',
        iconicTree: 'Aleppo Pine',
        description: 'Western steppe wilaya bordering Morocco. Artisanal nomadic heritage and important pastoral lands. Transition zone between steppe and northern Sahara.',
        treeIds: [1, 5, 25],
        hasNDVI: false
    },
    {
        id: 46, code: '46',
        name: 'Aïn Témouchent', nameAr: 'عين تموشنت', nameFr: 'Aïn Témouchent',
        region: 'mediterranean',
        capital: 'Aïn Témouchent',
        altitude: '240m', rainfall: '380mm/year',
        climate: 'Mediterranean coastal, northwestern Algeria',
        iconicTree: 'Stone Pine',
        description: 'Small coastal wilaya in northwestern Algeria. Known for viticulture and fishing. Mediterranean scrubland and pine forests on the coastal hills.',
        treeIds: [1, 23, 38, 44],
        hasNDVI: false
    },
    {
        id: 47, code: '47',
        name: 'Ghardaïa', nameAr: 'غرداية', nameFr: 'Ghardaïa',
        region: 'sahara',
        capital: 'Ghardaïa',
        altitude: '468m', rainfall: '<50mm/year',
        climate: 'Arid northern Sahara, M\'Zab valley',
        iconicTree: 'Date Palm',
        description: 'UNESCO World Heritage Site. The M\'Zab Valley with its five ancient ksour (fortified cities) is an architectural masterpiece. Date palm groves in the valley floor.',
        treeIds: [15],
        hasNDVI: false,
        special: 'UNESCO World Heritage — M\'Zab Valley with unique Ibadite architecture'
    },
    {
        id: 48, code: '48',
        name: 'Relizane', nameAr: 'غليزان', nameFr: 'Relizane',
        region: 'mediterranean',
        capital: 'Relizane',
        altitude: '95m', rainfall: '380mm/year',
        climate: 'Mediterranean, lower Cheliff valley',
        iconicTree: 'Olive Tree',
        description: 'Located in the lower Cheliff valley. Important agricultural zone with cotton, citrus, and olive production. Flat fertile plains with Mediterranean woodland on surrounding hills.',
        treeIds: [1, 23, 44, 38],
        hasNDVI: false
    },

    /* ============================================================
       NEW WILAYAS — Created in 2019 reform (codes 49-58)
    ============================================================ */
    {
        id: 49, code: '49',
        name: 'Timimoun', nameAr: 'تيميمون', nameFr: 'Timimoun',
        region: 'sahara',
        capital: 'Timimoun',
        altitude: '290m', rainfall: '<20mm/year',
        climate: 'Hyper-arid, Red Sahara oasis',
        iconicTree: 'Date Palm',
        description: 'The "Red Oasis" — known for its stunning red sandstone architecture and ancient foggaras (underground irrigation channels). Vast palm groves in a spectacular desert landscape.',
        treeIds: [15],
        hasNDVI: false,
        isNew2019: true
    },
    {
        id: 50, code: '50',
        name: 'Bordj Badji Mokhtar', nameAr: 'برج باجي مختار', nameFr: 'Bordj Badji Mokhtar',
        region: 'sahara',
        capital: 'Bordj Badji Mokhtar',
        altitude: '400m', rainfall: '<15mm/year',
        climate: 'Hyper-arid deep Sahara, Mali border',
        iconicTree: 'Acacia',
        description: 'Remote southwestern wilaya bordering Mali. Trans-Saharan crossroads with ancient caravan trade routes. Sparse acacia trees in dry wadis.',
        treeIds: [15],
        hasNDVI: false,
        isNew2019: true
    },
    {
        id: 51, code: '51',
        name: 'Ouled Djellal', nameAr: 'أولاد جلال', nameFr: 'Ouled Djellal',
        region: 'steppe',
        capital: 'Ouled Djellal',
        altitude: '180m', rainfall: '150mm/year',
        climate: 'Arid pre-Saharan steppe',
        iconicTree: 'Date Palm',
        description: 'New wilaya carved from Biskra. Pre-Saharan zone famous for Deglet Nour date palm cultivation. Transition between steppe and desert.',
        treeIds: [15, 1],
        hasNDVI: false,
        isNew2019: true
    },
    {
        id: 52, code: '52',
        name: 'Béni Abbès', nameAr: 'بني عباس', nameFr: 'Béni Abbès',
        region: 'sahara',
        capital: 'Béni Abbès',
        altitude: '490m', rainfall: '<20mm/year',
        climate: 'Hyper-arid, Saoura valley oasis',
        iconicTree: 'Date Palm',
        description: 'Oasis city in the Saoura valley. White dunes of the Grand Erg Occidental nearby. Important date palm groves along the Oued Saoura.',
        treeIds: [15],
        hasNDVI: false,
        isNew2019: true
    },
    {
        id: 53, code: '53',
        name: 'In Salah', nameAr: 'عين صالح', nameFr: 'In Salah',
        region: 'sahara',
        capital: 'In Salah',
        altitude: '276m', rainfall: '<15mm/year',
        climate: 'Hyper-arid central Sahara',
        iconicTree: 'Date Palm',
        description: 'Central Saharan crossroads known as the "Navel of the Sahara". Ancient salt trade routes. Palm groves in a vast sea of sand dunes.',
        treeIds: [15],
        hasNDVI: false,
        isNew2019: true
    },
    {
        id: 54, code: '54',
        name: 'In Guezzam', nameAr: 'عين قزام', nameFr: 'In Guezzam',
        region: 'sahara',
        capital: 'In Guezzam',
        altitude: '450m', rainfall: '<10mm/year',
        climate: 'Hyper-arid, Niger border crossing',
        iconicTree: 'Acacia',
        description: 'Algeria\'s southernmost wilaya bordering Niger. Trans-Saharan road terminus. Tuareg communities with acacia trees dotting the rocky desert landscape.',
        treeIds: [15],
        hasNDVI: false,
        isNew2019: true
    },
    {
        id: 55, code: '55',
        name: 'Touggourt', nameAr: 'تقرت', nameFr: 'Touggourt',
        region: 'sahara',
        capital: 'Touggourt',
        altitude: '62m', rainfall: '<50mm/year',
        climate: 'Arid northern Sahara, palm groves',
        iconicTree: 'Date Palm',
        description: 'Ancient oasis city in the northern Sahara. Vast palm groves along the Oued Rhir valley. One of Algeria\'s most important date production zones.',
        treeIds: [15],
        hasNDVI: false,
        isNew2019: true
    },
    {
        id: 56, code: '56',
        name: 'Djanet', nameAr: 'جانت', nameFr: 'Djanet',
        region: 'sahara',
        capital: 'Djanet',
        altitude: '1000m', rainfall: '<15mm/year',
        climate: 'Hyper-arid high Sahara, Tassili plateau',
        iconicTree: 'Saharan Cypress (endemic)',
        description: 'One of Algeria\'s most spectacular destinations. Gateway to the Tassili N\'Ajjer plateau with prehistoric cave paintings and the endemic Saharan Cypress. Tuareg cultural heritage.',
        treeIds: [15],
        hasNDVI: false,
        isNew2019: true,
        special: 'Gateway to Tassili N\'Ajjer — UNESCO prehistoric rock art and endemic Saharan Cypress'
    },
    {
        id: 57, code: '57',
        name: 'El M\'Ghair', nameAr: 'المغير', nameFr: "El M'Ghair",
        region: 'sahara',
        capital: "El M'Ghair",
        altitude: '60m', rainfall: '<70mm/year',
        climate: 'Arid, Oued Righ palm groves',
        iconicTree: 'Date Palm',
        description: 'New wilaya in the Oued Righ palm grove corridor. Important date production. Flat Saharan landscape with seasonal wadis.',
        treeIds: [15],
        hasNDVI: false,
        isNew2019: true
    },
    {
        id: 58, code: '58',
        name: 'El Menia', nameAr: 'المنيعة', nameFr: 'El Menia',
        region: 'sahara',
        capital: 'El Menia',
        altitude: '398m', rainfall: '<20mm/year',
        climate: 'Hyper-arid central Sahara',
        iconicTree: 'Date Palm',
        description: 'Remote central Saharan wilaya carved from Ghardaïa. Vast desert landscape with scattered oases and important hydrocarbon reserves.',
        treeIds: [15],
        hasNDVI: false,
        isNew2019: true
    }
];

/* ================================================================
   HELPER FUNCTIONS
================================================================ */

/** Get all wilayas for a given region */
function getWilayasByRegion(regionId) {
    return wilayasData.filter(w => w.region === regionId);
}

/** Get a single wilaya by id */
function getWilayaById(id) {
    return wilayasData.find(w => w.id === id);
}

/** Get a region object by id */
function getRegionById(id) {
    return regionsData.find(r => r.id === id);
}

/** Get trees for a wilaya from treesData */
function getTreesForWilaya(wilaya) {
    if (!window.treesData || !wilaya.treeIds) return [];
    return window.treesData.filter(t => wilaya.treeIds.includes(t.id));
}

/** Get wilayas that have NDVI data */
function getWilayasWithNDVI() {
    return wilayasData.filter(w => w.hasNDVI);
}

/* Expose globally */
window.regionsData        = regionsData;
window.wilayasData        = wilayasData;
window.getWilayasByRegion = getWilayasByRegion;
window.getWilayaById      = getWilayaById;
window.getRegionById      = getRegionById;
window.getTreesForWilaya  = getTreesForWilaya;
window.getWilayasWithNDVI = getWilayasWithNDVI;