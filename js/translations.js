/* ==========================================================================
   TRANSLATIONS & INITIAL NEWS DATASTORE (NEPALI & ENGLISH) - SIKKIM, INDIA FOCUS
   ========================================================================== */

const TRANSLATIONS = {
  np: {
    siteName: "अनलाइन् खबर पत्रिका",
    siteTagline: "निष्पक्ष र निर्भीक समाचार",
    adminPortal: "समाचार प्रशासन ड्यासबोर्ड",
    searchPlaceholder: "समाचार खोज्नुहोस्...",
    breakingLabel: "ताजा खबर",
    liveAudioNews: "रेडियो समाचार बुलेटिन",
    listenNow: "अहिले सुन्नुहोस्",
    pauseAudio: "रोक्नुहोस्",
    readMore: "पूरा पढ्नुहोस्",
    publishedDate: "प्रकाशित मिति",
    author: "संवाददाता",
    views: "पटक हेरिएको",
    share: "शेयर गर्नुहोस्",
    bookmark: "सुरक्षित गर्नुहोस्",
    relatedNews: "सम्बन्धित समाचार",
    
    // Categories / Menus
    categories: {
      all: "सबै समाचार",
      home: "गृहपृष्ठ",
      national: "राष्ट्रिय",
      state: "राज्य",
      local: "स्थानीय",
      politics: "राजनीति",
      economy: "अर्थ/व्यापार",
      sports: "खेलकुद",
      opinion: "विचार",
      video: "भिडियो",
      photoGallery: "फोटो ग्यालरी"
    },

    // Admin Labels
    admin: {
      dashboardTitle: "समाचार व्यवस्थापन तथा प्रशासन ड्यासबोर्ड",
      dashboardDesc: "नयाँ समाचार अपलोड गर्नुहोस्, भाषा र विधा चयन गरी प्रकाशन गर्नुहोस्।",
      createNewsTab: "नयाँ समाचार अपलोड",
      manageNewsTab: "सबै समाचार सूची",
      analyticsTab: "विश्लेषण र तथ्यांक",
      titleNp: "नेपाली शीर्षक (Title in Nepali)",
      titleEn: "अंग्रेजी शीर्षक (Title in English)",
      excerptNp: "नेपाली सारांश (Excerpt in Nepali)",
      excerptEn: "अंग्रेजी सारांश (Excerpt in English)",
      contentNp: "नेपाली पूरा विवरण (Content in Nepali)",
      contentEn: "अंग्रेजी पूरा विवरण (Content in English)",
      categoryLabel: "समाचार विधा (Category)",
      imageLabel: "फिचर फोटो URL (Feature Image URL)",
      uploadLocalImg: "वा कम्प्युटरबाट फोटो छान्नुहोस्",
      isBreaking: "ताजा खबर (Breaking News) मा देखाउनुहोस्",
      isFeatured: "मुख्य आकर्षक कथा (Hero Featured Story) बनाउनुहोस्",
      publishBtn: "समाचार प्रकाशित गर्नुहोस्",
      updateBtn: "समाचार अद्यावधिक गर्नुहोस्",
      publishedStatus: "प्रकाशित",
      draftStatus: "ड्राफ्ट",
      totalArticles: "कुल प्रकाशित समाचार",
      todayViews: "आजको जम्मा भ्यूज",
      breakingCount: "ताजा खबर सङ्ख्या",
      activeCategory: "सक्रिय विधाहरू",
      actions: "कार्यहरू",
      deleteConfirm: "के तपाईं यो समाचार हटाउन निश्चित हुनुहुन्छ?"
    },

    footer: {
      about: "अनलाइन् खबर पत्रिका सिक्किम र भारतको सार्वजनिक हितका लागि समयमै, सत्य-तथ्य र जिम्मेवारपूर्ण समाचार तथा सूचना प्रदान गर्न प्रतिबद्ध एक स्वतन्त्र डिजिटल समाचार मिडिया प्लेटफर्म हो।",
      quickLinks: "महत्वपूर्ण लिङ्कहरू",
      contact: "सम्पर्क",
      address: "डेभलपमेन्ट एरिया, जीवन थिङ मार्ग, ग्याङटोक - सिक्किम, पिन-७३७१०१",
      email: "v.neopaney@gmail.com",
      phone: "+९१-९८८३७०२८०७",
      copyright: "© २०८३ अनलाइन पत्रिका। सर्वअधिकार सुरक्षित।"
    }
  },

  en: {
    siteName: "Online Khabar Patrika",
    siteTagline: "Impartial & Fearless News",
    adminPortal: "Admin Dashboard",
    searchPlaceholder: "Search news...",
    breakingLabel: "BREAKING",
    liveAudioNews: "Live Radio Bulletin",
    listenNow: "Listen Now",
    pauseAudio: "Pause",
    readMore: "Read Full Article",
    publishedDate: "Published Date",
    author: "Reporter",
    views: "Views",
    share: "Share",
    bookmark: "Bookmark",
    relatedNews: "Related News",

    // Categories
    categories: {
      all: "All News",
      home: "Home",
      national: "National",
      state: "State",
      local: "Local",
      politics: "Politics",
      economy: "Economy / Business",
      sports: "Sports",
      opinion: "Opinion",
      video: "Video",
      photoGallery: "Photo Gallery"
    },

    // Admin Labels
    admin: {
      dashboardTitle: "News Content Management & Admin Portal",
      dashboardDesc: "Upload new stories, switch dual-languages, and manage publication states.",
      createNewsTab: "Upload New Story",
      manageNewsTab: "All Articles",
      analyticsTab: "Analytics Overview",
      titleNp: "Nepali Title",
      titleEn: "English Title",
      excerptNp: "Nepali Excerpt",
      excerptEn: "English Excerpt",
      contentNp: "Nepali Full Body Content",
      contentEn: "English Full Body Content",
      categoryLabel: "Category",
      imageLabel: "Feature Image URL",
      uploadLocalImg: "Or choose file from computer",
      isBreaking: "Mark as Breaking News",
      isFeatured: "Set as Hero Featured Story",
      publishBtn: "Publish Article",
      updateBtn: "Update Article",
      publishedStatus: "Published",
      draftStatus: "Draft",
      totalArticles: "Total Articles",
      todayViews: "Total Today Views",
      breakingCount: "Breaking News Items",
      activeCategory: "Active Categories",
      actions: "Actions",
      deleteConfirm: "Are you sure you want to delete this article?"
    },

    footer: {
      about: "Online Khabar Patrika is an independent digital news and media platform committed to providing timely, accurate and responsible news to readers across Sikkim, India and worldwide.",
      quickLinks: "Quick Links",
      contact: "Contact Us",
      address: "Development Area, Near Nepali Sahitya Parishad, Jeewan Theeng Marg, Gangtok - Sikkim. Pin-737101",
      email: "v.neopaney@gmail.com",
      phone: "+91-9883702807",
      copyright: "© 2026 Online Patrika. All rights reserved."
    }
  }
};

// Initial Seed Articles with Dual-Language Content
const INITIAL_ARTICLES = [
  {
    id: "art-101",
    category: "national",
    isBreaking: true,
    isFeatured: true,
    views: 1450,
    author: "सुमन पोखरेल / Suman Pokharel",
    dateBs: "२०८३ श्रावण २४, शनिबार",
    dateAd: "August 8, 2026",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    title: {
      np: "सिक्किममा अत्याधुनिक डिजिटल भुक्तानी र राष्ट्रिय पूर्वाधार प्रविधि सञ्चालनमा",
      en: "Advanced National Digital Payments & Infrastructure Launched in Sikkim"
    },
    excerpt: {
      np: "सिक्किम सरकार र डिजिटल प्रविधि क्षेत्रको सहकार्यमा सुरक्षित राष्ट्रिय पूर्वाधारको शुभारम्भ गरिएको छ।",
      en: "In collaboration with government and tech sectors, a secure national digital infra was unveiled today in Sikkim."
    },
    content: {
      np: `ग्याङटोक — सिक्किममा प्रविधि र वित्तीय कारोबारलाई थप पारदर्शी र आधुनिक बनाउन नयाँ राष्ट्रिय डिजिटल भुक्तानी प्रणाली सञ्चालनमा आएको छ। 
      
      आज आयोजित उच्चस्तरीय डिजिटल समिटमा सूचना प्रविधि विभागले अत्याधुनिक पूर्वाधार विकासको घोषणा गरेको हो।`,
      en: `GANGTOK — In a landmark step toward transparency and technological elevation, a new digital payment infrastructure has been officially launched in Sikkim, India.`
    }
  },
  {
    id: "art-102",
    category: "state",
    isBreaking: false,
    isFeatured: false,
    views: 1120,
    author: "निर्मला श्रेष्ठ / Nirmala Shrestha",
    dateBs: "२०८३ श्रावण २४, शनिबार",
    dateAd: "August 8, 2026",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop",
    title: {
      np: "सिक्किमका जिल्लाहरूमा प्रादेशिक विकास योजना र सडक पूर्वाधार विस्तार तीव्र",
      en: "Regional Infrastructure and Road Network Expansion Accelerated Across Sikkim Districts"
    },
    excerpt: {
      np: "सिक्किम राज्य सरकारले ग्याङटोक, नाम्ची, मङ्गन र गेजिङ जोड्ने नयाँ राजमार्ग परियोजना सञ्चालनमा ल्याएको छ।",
      en: "Sikkim state government has launched major regional connectivity and Highway development projects."
    },
    content: {
      np: `सिक्किम — सिक्किम राज्य सरकारले प्रादेशिक विकास योजनालाई थप प्रभावकारी बनाउन भौतिक पूर्वाधार, पर्यटन र स्वास्थ्य सेवा सुदृढीकरण कार्यक्रम लागू गरेको छ।`,
      en: `SIKKIM — The state government of Sikkim has initiated coordinated development agendas to upgrade regional roads, eco-tourism, and public health facilities.`
    }
  },
  {
    id: "art-103",
    category: "local",
    isBreaking: false,
    isFeatured: false,
    views: 890,
    author: "हरि शर्मा / Hari Sharma",
    dateBs: "२०८३ श्रावण २३, शुक्रबार",
    dateAd: "August 7, 2026",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    title: {
      np: "स्थानीय निकायहरूमा डिजिटल नागरिक सेवा सुदृढ, गाउँ-गाउँमा आधुनिक ई-गभर्नेन्स",
      en: "Digital Governance Strengthened Across Sikkim Local Bodies & Panchayats"
    },
    excerpt: {
      np: "स्थानीय पञ्चायत तथा नगर निकायहरूबाट अनलाइन प्रणालीमार्फत द्रुत सेवा प्रवाह गर्न नयाँ प्रविधि जडान।",
      en: "Local panchayats and municipal bodies adopt digital e-governance solutions for faster service delivery."
    },
    content: {
      np: `ग्याङटोक — स्थानीय तहमा सेवाग्राहीको चाप नियन्त्रण गर्न र पारदर्शी ढङ्गले काम सम्पन्न गर्न ई-गभर्नेन्स सेवा विस्तार गरिएको छ।`,
      en: `GANGTOK — Municipalities and panchayats across Sikkim have introduced paperless e-governance systems to enhance citizen convenience.`
    }
  },
  {
    id: "art-104",
    category: "politics",
    isBreaking: true,
    isFeatured: false,
    views: 980,
    author: "रमेश खड्का / Ramesh Khadka",
    dateBs: "२०८३ श्रावण २४, शनिबार",
    dateAd: "August 8, 2026",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop",
    title: {
      np: "सिक्किम विधान सभामा हरित विकास तथा औद्योगिक प्रवर्धन विधेयक सर्वसम्मत पारित",
      en: "Sikkim Legislative Assembly Unanimously Passes Green Development Bill"
    },
    excerpt: {
      np: "विधान सभाको आजको बैठकले राज्यको दीर्घकालीन विकास र हरित उद्योगका लागि महत्वपूर्ण विधेयक पास गरेको छ।",
      en: "The Sikkim Legislative Assembly has unanimously approved the key green development governance bill today."
    },
    content: {
      np: `सिक्किम — सिक्किम विधान सभाको बैठकले राष्ट्रिय हरित पूर्वाधार तथा औद्योगिक प्रवर्धन विधेयक २०८३ सर्वसम्मतले पारित गरेको छ। 
      
      सभामुखले निर्णयार्थ पेस गर्नुभएको उक्त विधेयकमाथि सबै दलका विधायकहरूले सहमति जनाएका हुन्।`,
      en: `SIKKIM — The Sikkim Legislative Assembly has passed the landmark Sustainable Infrastructure and Green Development Bill 2026 with unanimous support.`
    }
  },
  {
    id: "art-105",
    category: "economy",
    isBreaking: false,
    isFeatured: false,
    views: 1210,
    author: "रामबहादुर थापा / Ram Thapa",
    dateBs: "२०८३ श्रावण २३, शुक्रबार",
    dateAd: "August 7, 2026",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    title: {
      np: "भारतीय सेयर बजार (BSE/NSE) मा उत्साह, सिक्किमको जैविक उत्पादन र पर्यटन क्षेत्रमा आकर्षण",
      en: "Indian Markets (BSE/NSE) Rally as Sikkim Organic & Hospitality Sectors Flourish"
    },
    excerpt: {
      np: "साताको कारोबारमा भारतीय बजार परिसूचक उच्च अंकले बढेर लगानीकर्ताहरूमा उत्साह छाएको छ।",
      en: "The Indian stock market indices surged significantly, driven by strong investor confidence in clean energy and tourism."
    },
    content: {
      np: `सिक्किम — भारतीय सेयर बजार (BSE Sensex र Nifty) मा आज उच्च वृद्धि भएको छ।`,
      en: `SIKKIM — Indian stock indices jumped today as investor sentiment turned strongly bullish toward renewable energy, organic agri-business, and Sikkim tourism.`
    }
  },
  {
    id: "art-106",
    category: "sports",
    isBreaking: true,
    isFeatured: false,
    views: 2100,
    author: "अभिषेक क्षेत्री / Abhishek Chhetri",
    dateBs: "२०८३ श्रावण २२, बिहीबार",
    dateAd: "August 6, 2026",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop",
    title: {
      np: "सिक्किम राज्य क्रिकेट टोली राष्ट्रिय सिरिजको फाइनलमा प्रवेश, सानदार विजय",
      en: "Sikkim State Cricket Team Reaches National Tournament Final with Brilliant Victory"
    },
    excerpt: {
      np: "उत्कृष्ट बलिङ र ब्याटिङको मद्दतले सिक्किम टोलीले प्रतिस्पर्धीलाई पराजित गर्दै फाइनल यात्रा तय गरेको हो।",
      en: "With stellar batting and disciplined bowling, Sikkim Cricket Team outclassed rivals to book a historic final spot."
    },
    content: {
      np: `सिक्किम — राष्ट्रिय टी-२० शृङ्खलाअन्तर्गत आज भएको सेमिफाइनल खेलमा सिक्किमको टोलीले सानदार जित हासिल गर्दै फाइनलको यात्रा तय गरेको छ।`,
      en: `SIKKIM — The Sikkim Cricket Team sealed a sensational victory in the T20 tournament semifinals today to lock their spot in the grand final.`
    }
  },
  {
    id: "art-107",
    category: "opinion",
    isBreaking: false,
    isFeatured: false,
    views: 740,
    author: "डा. रीता गुरुङ / Dr. Rita Gurung",
    dateBs: "२०८३ श्रावण २१, बुधबार",
    dateAd: "August 5, 2026",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop",
    title: {
      np: "जलवायु परिवर्तन र कञ्चनजङ्घा संरक्षण: सिक्किमको वातावरणीय नेतृत्वको मोडल",
      en: "Climate Action & Protecting Mt. Kanchenjunga: Sikkim's Environmental Leadership"
    },
    excerpt: {
      np: "हिमाली पारिस्थितिक प्रणाली र कञ्चनजङ्घा क्षेत्रमा तीव्र गतिमा भइरहेको जैविक संरक्षणबारे विशेष विश्लेषण।",
      en: "An insightful analysis on protecting Himalayan ecology, glaciers around Mt. Kanchenjunga, and sustainable green policies."
    },
    content: {
      np: `हाम्रो सिक्किम राज्य अद्वितीय प्राकृतिक सौन्दर्य र कञ्चनजङ्घा हिमश्रृङ्खलाको काखमा अवस्थित छ। वातावरणीय संरक्षण र जैविक खेतीमा सिक्किमले विश्वमञ्चमा नेतृत्वदायी भूमिका निर्वाह गर्दै आएको छ।`,
      en: `Sikkim stands at the heart of the majestic Mt. Kanchenjunga region. Climate resilience and organic environmental conservation pose vital policy models for the world.`
    }
  },
  {
    id: "art-108",
    category: "video",
    isBreaking: false,
    isFeatured: false,
    views: 1890,
    author: "अनलाइन पत्रिका भिडियो डेस्क / Video Desk",
    dateBs: "२०८३ श्रावण २०, मङ्गलबार",
    dateAd: "August 4, 2026",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
    title: {
      np: "सिक्किमका हिमाल, गुम्बा र संस्कृतिको विशेष भिडियो डकुमेन्ट्री (विशेष भिडियो)",
      en: "Exclusive Video Documentary: Exploring Sikkim's Scenic Lakes, Monasteries & Heritage"
    },
    excerpt: {
      np: "सोङ्गो ताल, गुरुडोङमार र रुमटेक गुम्बाको मनमोहक दृश्यावलोकन प्रस्तुत गर्ने भिडियो रिर्पोट।",
      en: "A stunning video report highlighting the breathtaking beauty of Tsomgo Lake, Gurudongmar, and Sikkim's heritage."
    },
    content: {
      np: `सिक्किम — सिक्किमको अद्वितीय प्राकृतिक दृश्य तथा सांस्कृतिक सम्पदालाई विश्वसामु चिनाउन निर्माण गरिएको विशेष भिडियो सार्वजनिक गरिएको छ।`,
      en: `SIKKIM — A newly produced high-definition video documentary exploring Sikkim's natural wonders and cultural heritage has been released today.`
    }
  },
  {
    id: "art-109",
    category: "photo-gallery",
    isBreaking: false,
    isFeatured: false,
    views: 1530,
    author: "अनलाइन पत्रिका फोटो ग्यालरी डेस्क / Photo Desk",
    dateBs: "२०८३ श्रावण १९, सोमबार",
    dateAd: "August 3, 2026",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    title: {
      np: "सिक्किमका मनमोहक हिमश्रृङ्खला र लोकसंस्कृति (विशेष फोटो ग्यालरी)",
      en: "Visual Splendor: High-Resolution Photo Gallery of Scenic Sikkim"
    },
    excerpt: {
      np: "सिक्किमका प्रसिद्ध पर्यटकीय गन्तव्य, कञ्चनजङ्घा दृश्य र चाडपर्वका मनमोहक तस्विर सङ्ग्रह।",
      en: "A rich photo collection showcasing snow-capped Kanchenjunga peaks, vibrant festivals, and Sikkim landscapes."
    },
    content: {
      np: `सिक्किम — राज्यका उत्कृष्ट फोटोग्राफरहरूले खिचेका मनमोहक तस्विरहरूको विशेष फोटो ग्यालरी सङ्गालो।`,
      en: `SIKKIM — Explore an exclusive gallery featuring breathtaking landscape photography from across Sikkim, India.`
    }
  }
];
