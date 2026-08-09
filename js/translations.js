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
      main: "मुख्य समाचार",
      politics: "राजनीति",
      economy: "अर्थतन्त्र",
      tech: "सूचना प्रविधि",
      sports: "खेलकुद",
      entertainment: "मनोरञ्जन",
      opinion: "विचार / टिप्पणी",
      world: "अन्तर्राष्ट्रिय",
      health: "स्वास्थ्य र जीवनशैली",
      pradesh: "प्रदेश / स्थानीय"
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
      address: "काठमाडौँ, नेपाल",
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
      main: "Main Stories",
      politics: "Politics",
      economy: "Economy",
      tech: "Technology",
      sports: "Sports",
      entertainment: "Entertainment",
      opinion: "Opinion & Editorial"
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
      address: "Kathmandu, Nepal",
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
    category: "tech",
    isBreaking: true,
    isFeatured: true,
    views: 1450,
    author: "सुमन पोखरेल / Suman Pokharel",
    dateBs: "२०८३ श्रावण २४, शनिबार",
    dateAd: "August 8, 2026",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    title: {
      np: "नेपालमा अत्याधुनिक डिजिटल भुक्तानी र एआई प्रविधि सञ्चालनमा, अर्थतन्त्रमा नयाँ क्रान्ति",
      en: "Advanced Digital Payments & AI Ecosystem Launched in Nepal, Fueling New Economic Era"
    },
    excerpt: {
      np: "नेपाल सरकार र निजी क्षेत्रको सहकार्यमा सुरक्षित राष्ट्रिय डिजिटल संरचना र डिजिटल पूर्वाधारको शुभारम्भ गरिएको छ।",
      en: "In collaboration with government and private sectors, a secure national digital infra and AI ecosystem was unveiled today."
    },
    content: {
      np: `काठमाडौँ — नेपालमा प्रविधि र वित्तीय कारोबारलाई थप पारदर्शी र आधुनिक बनाउन नयाँ राष्ट्रिय एआई र डिजिटल भुक्तानी प्रणाली सञ्चालनमा आएको छ। 
      
      आज आयोजित उच्चस्तरीय डिजिटल समिटमा सूचना तथा सञ्चार प्रविधि मन्त्रालयले अत्याधुनिक एआई पूर्वाधार विकासको घोषणा गरेको हो। यस प्रणालीले वित्तीय क्षेत्र, स्वास्थ्य सेवा, शिक्षा र सरकारी सेवा प्रवाहलाई द्रुत र नागरिकमैत्री बनाउने अपेक्षा गरिएको छ।
      
      विशेषज्ञहरूका अनुसार यो कदमले नेपाली युवा जनशक्तिलाई स्वदेशमै रोजगार तथा प्रविधि आविष्कारका अवसरहरू सिर्जना गर्नेछ।`,
      en: `KATHMANDU — In a landmark step toward transparency and technological elevation, a new national AI & payment infrastructure has been officially launched in Nepal.
      
      Announced at the High-Level Digital Summit today, the initiative promises to streamline government services, financial transaction systems, healthcare, and education access across all 77 districts.
      
      Industry leaders believe this major milestone will boost tech job opportunities for Nepali youth within the country.`
    }
  },
  {
    id: "art-102",
    category: "politics",
    isBreaking: true,
    isFeatured: false,
    views: 980,
    author: "निर्मला श्रेष्ठ / Nirmala Shrestha",
    dateBs: "२०८३ श्रावण २४, शनिबार",
    dateAd: "August 8, 2026",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop",
    title: {
      np: "संसद्‌मा राष्ट्रिय विकास तथा पूर्वाधार बजेट विधेयक सर्वसम्मत पारित",
      en: "Parliament Unanimously Passes National Infrastructure Development Bill"
    },
    excerpt: {
      np: "प्रतिनिधिसभाको आजको बैठकले समृद्ध नेपाल निर्माणका लागि महत्वपूर्ण विकास विधेयक पास गरेको छ।",
      en: "The House of Representatives has unanimously approved the key national development bill today."
    },
    content: {
      np: `काठमाडौँ — प्रतिनिधिसभाको बैठकले राष्ट्रिय पूर्वाधार तथा औद्योगिक प्रवर्धन विधेयक २०८३ सर्वसम्मतले पारित गरेको छ। 
      
      सभामुखले निर्णयार्थ पेस गर्नुभएको उक्त विधेयकमाथि सबै राजनीतिक दलका सांसदहरूले सहमति जनाएका हुन्। विधेयक पारित भएसँगै निर्माणाधीन राजमार्ग, जलविद्युत् आयोजना र विमानस्थल निर्माण कार्यले गति लिनेछ।`,
      en: `KATHMANDU — The House of Representatives has passed the landmark Infrastructure and Industrial Development Bill 2026 with unanimous support from all major parliamentary parties.
      
      The bill aims to accelerate national highways, mega hydropower projects, and international airport expansions.`
    }
  },
  {
    id: "art-103",
    category: "economy",
    isBreaking: false,
    isFeatured: false,
    views: 1210,
    author: "रामबहादुर थापा / Ram Thapa",
    dateBs: "२०८३ श्रावण २३, शुक्रबार",
    dateAd: "August 7, 2026",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    title: {
      np: "नेपालको सेयर बजार नेप्से परिसूचकमा उछाल, पर्यटन र जलविद्युत् क्षेत्र अग्रस्थानमा",
      en: "Nepal Stock Exchange (NEPSE) Rallies as Tourism and Hydropower Stocks Soar"
    },
    excerpt: {
      np: "साताको अन्तिम कारोबार दिन नेप्से परिसूचक उच्च अंकले बढेर लगानीकर्ताहरूमा उत्साह छाएको छ।",
      en: "The NEPSE index surged significantly on the closing day of the trading week, driven by strong investor confidence."
    },
    content: {
      np: `काठमाडौँ — नेपाल स्टक एक्सचेन्ज (नेप्से) परिसूचकमा आज ५५ अंकको वृद्धि भएको छ। 
      
      नेपाल राष्ट्र बैंकको सकारात्मक मौद्रिक नीति पुनरावलोकन र बैंकहरूको ब्याजदर घट्दो क्रममा रहेकाले लगानीकर्ताको आकर्षण बढेको विश्लेषण गरिएको छ। विशेष गरी हाइड्रोपावर र बैंकिङ उपसमूहमा उच्च कारोबार भएको छ।`,
      en: `KATHMANDU — The Nepal Stock Exchange (NEPSE) index jumped 55 points today as investor sentiment turned strongly bullish.
      
      Analysts attribute the market rally to favorable monetary policy adjustments by Nepal Rastra Bank and decreasing interest rates across commercial banks.`
    }
  },
  {
    id: "art-104",
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
      np: `काठमाडौँ — अन्तर्राष्ट्रिय टी-२० शृङ्खलाअन्तर्गत आज भएको सेमिफाइनल खेलमा नेपाली टोलीले सानदार जित हासिल गर्दै फाइनलको यात्रा तय गरेको छ।
      
      नेपाली अलराउन्डरको विष्फोटक ब्याटिङ र तीव्र गतिका बलरहरूको धारिलो बलिङसामु विपक्षी टोली धराशयी बनेको थियो। क्रिकेट समर्थकहरूले देशैभर विजय उत्सव मनाएका छन्।`,
      en: `KATHMANDU — The Nepali Men's Cricket Team sealed a sensational victory in the T20 International Series semifinals today to lock their spot in the grand final.
      
      A brilliant all-round display by Nepal's top order and pace bowlers earned high praise from global cricket experts.`
    }
  },
  {
    id: "art-105",
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
      np: `हाम्रो देश नेपाल विश्वकै अद्वितीय प्राकृतिक सौन्दर्य र सर्वोच्च शिखर सगरमाथाको देश हो। तर पछिल्लो समय जलवायु परिवर्तनका कारण हाम्रा हिमालहरू काला चट्टानमा परिणत हुने खतरा बढेको छ।
      
      संसारभरिका विकसित राष्ट्रहरूले उत्सर्जन गर्ने कार्बनको नकारात्मक असर हाम्रा निर्दोष हिमाली बासिन्दाहरूले भोग्नुपरेको छ। अब नेपालले अन्तर्राष्ट्रिय जलवायु शिखर सम्मेलनमा स्पष्ट अडान राख्नुपर्छ।`,
      en: `Nepal stands at the heart of the world's most majestic mountains. However, climate change poses an existential threat as Himalayan glaciers melt at unprecedented rates.
      
      Nepal must spearhead global advocacy at upcoming international climate summits to secure climate compensation and green investments.`
    }
  }
];
