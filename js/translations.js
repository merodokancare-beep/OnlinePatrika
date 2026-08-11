/* ==========================================================================
   TRANSLATIONS & INITIAL NEWS DATASTORE (NEPALI & ENGLISH)
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
      about: "अनलाइन पत्रिका नेपालको आधुनिक, निष्पक्ष र भरपर्दो डिजिटल समाचार माध्यम हो। हामी विश्वासी समाचार, विश्लेषण र विचार सम्प्रेषण गर्दछौं।",
      quickLinks: "महत्वपूर्ण लिङ्कहरू",
      contact: "सम्पर्क",
      address: "सिक्किम, नेपाल",
      email: "info@onlinepatrika.com.np",
      phone: "+९७७-१-४५६७८९०",
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
      about: "Online Patrika is Nepal's modern, impartial, and trusted digital news platform bringing reliable news, analysis, and insights daily.",
      quickLinks: "Quick Links",
      contact: "Contact Us",
      address: "Sikkim, Nepal",
      email: "info@onlinepatrika.com.np",
      phone: "+977-1-4567890",
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
      np: "नेपालमा अत्याधुनिक डिजिटल भुक्तानी र राष्ट्रिय पूर्वाधार प्रविधि सञ्चालनमा",
      en: "Advanced National Digital Payments & Infrastructure Launched in Nepal"
    },
    excerpt: {
      np: "नेपाल सरकार र निजी क्षेत्रको सहकार्यमा सुरक्षित राष्ट्रिय डिजिटल संरचना र पूर्वाधारको शुभारम्भ गरिएको छ।",
      en: "In collaboration with government and private sectors, a secure national digital infra was unveiled today."
    },
    content: {
      np: `सिक्किम — नेपालमा प्रविधि र वित्तीय कारोबारलाई थप पारदर्शी र आधुनिक बनाउन नयाँ राष्ट्रिय डिजिटल भुक्तानी प्रणाली सञ्चालनमा आएको छ। 
      
      आज आयोजित उच्चस्तरीय डिजिटल समिटमा सूचना तथा सञ्चार प्रविधि मन्त्रालयले अत्याधुनिक पूर्वाधार विकासको घोषणा गरेको हो।`,
      en: `SIKKIM — In a landmark step toward transparency and technological elevation, a new national payment infrastructure has been officially launched in Nepal.`
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
      np: "सातै प्रदेशमा प्रादेशिक विकास योजना र पूर्वाधार विस्तार तीव्र रूपमा अघि बढ्दै",
      en: "Provincial Development Plans and Infrastructure Expansion Accelerated Across All 7 Provinces"
    },
    excerpt: {
      np: "प्रदेश सरकारहरूले स्थानीय समृद्धि र प्रादेशिक सडक सञ्जाल जोड्ने नयाँ परियोजना सञ्चालनमा ल्याएका छन्।",
      en: "Provincial governments have launched major regional connectivity and infrastructure development projects."
    },
    content: {
      np: `सिक्किम — सातै प्रदेश सरकारहरूले प्रादेशिक विकास योजनालाई थप प्रभावकारी बनाउन भौतिक पूर्वाधार र स्वास्थ्य सेवा सुदृढीकरण कार्यक्रम लागू गरेका छन्।`,
      en: `SIKKIM — Provincial governments across Nepal have initiated coordinated development agendas to upgrade regional roads and public health facilities.`
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
      np: "स्थानीय तहहरूमा डिजिटल नागरिक सेवा सुदृढ, गाउँ-गाउँमा आधुनिक प्रविधि",
      en: "Digital Public Services Strengthened Across Local Bodies to Empower Villages"
    },
    excerpt: {
      np: "स्थानीय पालिका तथा वडाहरूबाट अनलाइन प्रणालीमार्फत द्रुत सेवा प्रवाह गर्न नयाँ प्रविधि जडान।",
      en: "Local municipalities and wards adopt digital e-governance solutions for faster service delivery."
    },
    content: {
      np: `पोखरा — स्थानीय तहमा सेवाग्राहीको चाप नियन्त्रण गर्न र पारदर्शी ढङ्गले काम सम्पन्न गर्न ई-गभर्नेन्स सेवा विस्तार गरिएको छ।`,
      en: `POKHARA — Municipalities across the region have introduced paperless e-governance systems to enhance citizen convenience.`
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
      np: "संसद्‌मा राष्ट्रिय विकास तथा सुशासन विधेयक सर्वसम्मत पारित",
      en: "Parliament Unanimously Passes National Infrastructure & Governance Development Bill"
    },
    excerpt: {
      np: "प्रतिनिधिसभाको आजको बैठकले समृद्ध नेपाल निर्माणका लागि महत्वपूर्ण विकास विधेयक पास गरेको छ।",
      en: "The House of Representatives has unanimously approved the key national governance bill today."
    },
    content: {
      np: `सिक्किम — प्रतिनिधिसभाको बैठकले राष्ट्रिय पूर्वाधार तथा औद्योगिक प्रवर्धन विधेयक २०८३ सर्वसम्मतले पारित गरेको छ। 
      
      सभामुखले निर्णयार्थ पेस गर्नुभएको उक्त विधेयकमाथि सबै राजनीतिक दलका सांसदहरूले सहमति जनाएका हुन्।`,
      en: `SIKKIM — The House of Representatives has passed the landmark Infrastructure and Industrial Development Bill 2026 with unanimous support.`
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
      np: "नेपालको सेयर बजार नेप्से परिसूचकमा उछाल, व्यापार र उद्योग क्षेत्र अग्रस्थानमा",
      en: "Nepal Stock Exchange (NEPSE) Rallies as Trade and Hydropower Stocks Soar"
    },
    excerpt: {
      np: "साताको अन्तिम कारोबार दिन नेप्से परिसूचक उच्च अंकले बढेर लगानीकर्ताहरूमा उत्साह छाएको छ।",
      en: "The NEPSE index surged significantly on the closing day of the trading week, driven by strong investor confidence."
    },
    content: {
      np: `सिक्किम — नेपाल स्टक एक्सचेन्ज (नेप्से) परिसूचकमा आज ५५ अंकको वृद्धि भएको छ।`,
      en: `SIKKIM — The Nepal Stock Exchange (NEPSE) index jumped 55 points today as investor sentiment turned strongly bullish.`
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
      np: "नेपाली क्रिकेट टोली अन्तर्राष्ट्रिय सिरिजको फाइनलमा प्रवेश, विश्व कीर्तिमान कायम",
      en: "Nepali National Cricket Team Reaches International Series Final with Record-Breaking Win"
    },
    excerpt: {
      np: "उत्कृष्ट बलिङ र ब्याटिङको मद्दतले नेपालले बलियो प्रतिस्पर्धीलाई पराजित गर्दै कीर्तिमान बनाएको हो।",
      en: "With stellar batting and disciplined bowling, Nepal outclassed rival teams to set a historic international record."
    },
    content: {
      np: `सिक्किम — अन्तर्राष्ट्रिय टी-२० शृङ्खलाअन्तर्गत आज भएको सेमिफाइनल खेलमा नेपाली टोलीले सानदार जित हासिल गर्दै फाइनलको यात्रा तय गरेको छ।`,
      en: `SIKKIM — The Nepali Men's Cricket Team sealed a sensational victory in the T20 International Series semifinals today.`
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
      np: "जलवायु परिवर्तन र हिमाल बचाउने अभियान: नेपालले विश्वमञ्चमा नेतृत्व लिनुपर्ने समय",
      en: "Climate Action & Protecting the Himalayas: Nepal's Global Leadership Moment"
    },
    excerpt: {
      np: "हिमाली क्षेत्रमा तीव्र गतिमा पग्लिरहेको हिउँ र यसले पारिरहेको वातावरणीय प्रभावबारे विशेष विश्लेषण।",
      en: "An insightful analysis on rapidly melting Himalayan glaciers and urgent sustainable climate policies."
    },
    content: {
      np: `हाम्रो देश नेपाल विश्वकै अद्वितीय प्राकृतिक सौन्दर्य र सर्वोच्च शिखर सगरमाथाको देश हो। तर पछिल्लो समय जलवायु परिवर्तनका कारण हाम्रा हिमालहरू काला चट्टानमा परिणत हुने खतरा बढेको छ।`,
      en: `Nepal stands at the heart of the world's most majestic mountains. However, climate change poses an existential threat as Himalayan glaciers melt.`
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
      np: "नेपालका हिमाल, संस्कृति र सम्पदाको विशेष भिडियो डकुमेन्ट्री (विशेष भिडियो)",
      en: "Exclusive Video Documentary: Exploring Nepal's Majestic Landscapes & Culture"
    },
    excerpt: {
      np: "सगरमाथा क्षेत्र, पोखरा र अन्नपूर्ण सर्किटको मनमोहक दृश्यावलोकन प्रस्तुत गर्ने भिडियो रिर्पोट।",
      en: "A stunning video report highlighting the breathtaking beauty of Mt. Everest and Annapurna Circuit."
    },
    content: {
      np: `सिक्किम — नेपालको अद्वितीय प्राकृतिक दृश्य तथा सांस्कृति सम्पदालाई विश्वसामु चिनाउन निर्माण गरिएको विशेष भिडियो सार्वजनिक गरिएको छ।`,
      en: `SIKKIM — A newly produced high-definition video documentary exploring Nepal's natural wonders has been released today.`
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
      np: "नेपालका उत्कृष्ट प्राकृतिक सौन्दर्य तथा संस्कृति (विशेष फोटो ग्यालरी)",
      en: "Visual Splendor: High-Resolution Photo Gallery of Scenic Nepal"
    },
    excerpt: {
      np: "नेपालका प्रसिद्ध पर्यटकीय गन्तव्य, हिमश्रृङ्खला र लोकसंस्कृतिका मनमोहक दृश्य सङ्ग्रह।",
      en: "A rich photo collection showcasing snow-capped mountains, vibrant festivals, and landscapes."
    },
    content: {
      np: `सिक्किम — देशका विभिन्न भूभागका उत्कृष्ट फोटोग्राफरहरूले खिचेका मनमोहक तस्विरहरूको फोटो ग्यालरी सङ्गालो।`,
      en: `SIKKIM — Explore an exclusive gallery featuring breathtaking landscape photography from across Nepal.`
    }
  }
];
