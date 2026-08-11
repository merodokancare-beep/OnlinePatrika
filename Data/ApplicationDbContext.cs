using Microsoft.EntityFrameworkCore;
using OnlinePatrika.Models;

namespace OnlinePatrika.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Category> Categories { get; set; } = null!;
        public DbSet<Article> Articles { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Seed Categories matching required website menus
            modelBuilder.Entity<Category>().HasData(
                new Category { Id = 1, NameNp = "राष्ट्रिय", NameEn = "National", Slug = "national", DisplayOrder = 1 },
                new Category { Id = 2, NameNp = "राज्य", NameEn = "State", Slug = "state", DisplayOrder = 2 },
                new Category { Id = 3, NameNp = "स्थानीय", NameEn = "Local", Slug = "local", DisplayOrder = 3 },
                new Category { Id = 4, NameNp = "राजनीति", NameEn = "Politics", Slug = "politics", DisplayOrder = 4 },
                new Category { Id = 5, NameNp = "अर्थ/व्यापार", NameEn = "Economy / Business", Slug = "economy", DisplayOrder = 5 },
                new Category { Id = 6, NameNp = "खेलकुद", NameEn = "Sports", Slug = "sports", DisplayOrder = 6 },
                new Category { Id = 7, NameNp = "विचार", NameEn = "Opinion", Slug = "opinion", DisplayOrder = 7 },
                new Category { Id = 8, NameNp = "भिडियो", NameEn = "Video", Slug = "video", DisplayOrder = 8 },
                new Category { Id = 9, NameNp = "फोटो ग्यालरी", NameEn = "Photo Gallery", Slug = "photo-gallery", DisplayOrder = 9 }
            );

            // Seed Sample Dual-Language Articles per Menu Category
            modelBuilder.Entity<Article>().HasData(
                new Article
                {
                    Id = 1,
                    CategoryId = 1, // National
                    TitleNp = "नेपालमा अत्याधुनिक डिजिटल भुक्तानी र राष्ट्रिय पूर्वाधार प्रविधि सञ्चालनमा",
                    TitleEn = "Advanced National Digital Payments & Infrastructure Launched in Nepal",
                    ExcerptNp = "नेपाल सरकार र निजी क्षेत्रको सहकार्यमा सुरक्षित राष्ट्रिय डिजिटल संरचना र पूर्वाधारको शुभारम्भ गरिएको छ।",
                    ExcerptEn = "In collaboration with government and private sectors, a secure national digital infra was unveiled today.",
                    ContentNp = "सिक्किम — नेपालमा प्रविधि र वित्तीय कारोबारलाई थप पारदर्शी र आधुनिक बनाउन नयाँ राष्ट्रिय डिजिटल भुक्तानी प्रणाली सञ्चालनमा आएको छ। सूचना तथा सञ्चार प्रविधि मन्त्रालयले अत्याधुनिक पूर्वाधार विकासको घोषणा गरेको हो।",
                    ContentEn = "SIKKIM — In a landmark step toward transparency and technological elevation, a new national payment infrastructure has been officially launched in Nepal.",
                    ImageUrl = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200",
                    Author = "सुमन पोखरेल / Suman Pokharel",
                    ViewsCount = 1450,
                    IsBreaking = true,
                    IsFeatured = true,
                    IsPublished = true,
                    DateBs = "२०८३ श्रावण २४, शनिबार",
                    CreatedAtAd = new DateTime(2026, 8, 8)
                },
                new Article
                {
                    Id = 2,
                    CategoryId = 2, // State / Province
                    TitleNp = "सातै प्रदेशमा प्रादेशिक विकास योजना र पूर्वाधार विस्तार तीव्र रूपमा अघि बढ्दै",
                    TitleEn = "Provincial Development Plans and Infrastructure Expansion Accelerated Across All 7 Provinces",
                    ExcerptNp = "प्रदेश सरकारहरूले स्थानीय समृद्धि र प्रादेशिक सडक सञ्जाल जोड्ने नयाँ परियोजना सञ्चालनमा ल्याएका छन्।",
                    ExcerptEn = "Provincial governments have launched major regional connectivity and infrastructure development projects.",
                    ContentNp = "सिक्किम — सातै प्रदेश सरकारहरूले प्रादेशिक विकास योजनालाई थप प्रभावकारी बनाउन भौतिक पूर्वाधार र स्वास्थ्य सेवा सुदृढीकरण कार्यक्रम लागू गरेका छन्।",
                    ContentEn = "SIKKIM — Provincial governments across Nepal have initiated coordinated development agendas to upgrade regional roads and public health facilities.",
                    ImageUrl = "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800",
                    Author = "निर्मला श्रेष्ठ / Nirmala Shrestha",
                    ViewsCount = 1120,
                    IsBreaking = false,
                    IsFeatured = false,
                    IsPublished = true,
                    DateBs = "२०८३ श्रावण २४, शनिबार",
                    CreatedAtAd = new DateTime(2026, 8, 8)
                },
                new Article
                {
                    Id = 3,
                    CategoryId = 3, // Local
                    TitleNp = "स्थानीय तहहरूमा डिजिटल नागरिक सेवा सुदृढ, गाउँ-गाउँमा आधुनिक प्रविधि",
                    TitleEn = "Digital Public Services Strengthened Across Local Bodies to Empower Villages",
                    ExcerptNp = "स्थानीय पालिका तथा वडाहरूबाट अनलाइन प्रणालीमार्फत द्रुत सेवा प्रवाह गर्न नयाँ प्रविधि जडान।",
                    ExcerptEn = "Local municipalities and wards adopt digital e-governance solutions for faster service delivery.",
                    ContentNp = "पोखरा — स्थानीय तहमा सेवाग्राहीको चाप नियन्त्रण गर्न र पारदर्शी ढङ्गले काम सम्पन्न गर्न ई-गभर्नेन्स सेवा विस्तार गरिएको छ।",
                    ContentEn = "POKHARA — Municipalities across the region have introduced paperless e-governance systems to enhance citizen convenience.",
                    ImageUrl = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800",
                    Author = "हरि शर्मा / Hari Sharma",
                    ViewsCount = 890,
                    IsBreaking = false,
                    IsFeatured = false,
                    IsPublished = true,
                    DateBs = "२०८३ श्रावण २३, शुक्रबार",
                    CreatedAtAd = new DateTime(2026, 8, 7)
                },
                new Article
                {
                    Id = 4,
                    CategoryId = 4, // Politics
                    TitleNp = "संसद्‌मा राष्ट्रिय विकास तथा सुशासन विधेयक सर्वसम्मत पारित",
                    TitleEn = "Parliament Unanimously Passes National Infrastructure & Governance Development Bill",
                    ExcerptNp = "प्रतिनिधिसभाको आजको बैठकले समृद्ध नेपाल निर्माणका लागि महत्वपूर्ण विकास विधेयक पास गरेको छ।",
                    ExcerptEn = "The House of Representatives has unanimously approved the key national governance bill today.",
                    ContentNp = "सिक्किम — प्रतिनिधिसभाको बैठकले राष्ट्रिय पूर्वाधार तथा औद्योगिक प्रवर्धन विधेयक २०८३ सर्वसम्मतले पारित गरेको छ। सभामुखले निर्णयार्थ पेस गर्नुभएको उक्त विधेयकमाथि सबै राजनीतिक दलका सांसदहरूले सहमति जनाएका हुन्।",
                    ContentEn = "SIKKIM — The House of Representatives has passed the landmark Infrastructure and Industrial Development Bill 2026 with unanimous support.",
                    ImageUrl = "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800",
                    Author = "रमेश खड्का / Ramesh Khadka",
                    ViewsCount = 980,
                    IsBreaking = true,
                    IsFeatured = false,
                    IsPublished = true,
                    DateBs = "२०८३ श्रावण २४, शनिबार",
                    CreatedAtAd = new DateTime(2026, 8, 8)
                },
                new Article
                {
                    Id = 5,
                    CategoryId = 5, // Economy / Business
                    TitleNp = "नेपालको सेयर बजार नेप्से परिसूचकमा उछाल, व्यापार र उद्योग क्षेत्र अग्रस्थानमा",
                    TitleEn = "Nepal Stock Exchange (NEPSE) Rallies as Trade and Hydropower Stocks Soar",
                    ExcerptNp = "साताको अन्तिम कारोबार दिन नेप्से परिसूचक उच्च अंकले बढेर लगानीकर्ताहरूमा उत्साह छाएको छ।",
                    ExcerptEn = "The NEPSE index surged significantly on the closing day of the trading week, driven by strong investor confidence.",
                    ContentNp = "सिक्किम — नेपाल स्टक एक्सचेन्ज (नेप्से) परिसूचकमा आज ५५ अंकको वृद्धि भएको छ। नेपाल राष्ट्र बैंकको सकारात्मक मौद्रिक नीति पुनरावलोकन र बैंकहरूको ब्याजदर घट्दो क्रममा रहेकाले लगानीकर्ताको आकर्षण बढेको छ।",
                    ContentEn = "SIKKIM — The Nepal Stock Exchange (NEPSE) index jumped 55 points today as investor sentiment turned strongly bullish.",
                    ImageUrl = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800",
                    Author = "रामबहादुर थापा / Ram Thapa",
                    ViewsCount = 1210,
                    IsBreaking = false,
                    IsFeatured = false,
                    IsPublished = true,
                    DateBs = "२०८३ श्रावण २३, शुक्रबार",
                    CreatedAtAd = new DateTime(2026, 8, 7)
                },
                new Article
                {
                    Id = 6,
                    CategoryId = 6, // Sports
                    TitleNp = "नेपाली क्रिकेट टोली अन्तर्राष्ट्रिय सिरिजको फाइनलमा प्रवेश, विश्व कीर्तिमान कायम",
                    TitleEn = "Nepali National Cricket Team Reaches International Series Final with Record Win",
                    ExcerptNp = "उत्कृष्ट बलिङ र ब्याटिङको मद्दतले नेपालले बलियो प्रतिस्पर्धीलाई पराजित गर्दै कीर्तिमान बनाएको हो।",
                    ExcerptEn = "With stellar batting and disciplined bowling, Nepal outclassed rival teams to set a historic international record.",
                    ContentNp = "सिक्किम — अन्तर्राष्ट्रिय टी-२० शृङ्खलाअन्तर्गत आज भएको सेमिफाइनल खेलमा नेपाली टोलीले सानदार जित हासिल गर्दै फाइनलको यात्रा तय गरेको छ।",
                    ContentEn = "SIKKIM — The Nepali Men's Cricket Team sealed a sensational victory in the T20 International Series semifinals today to lock their spot in the grand final.",
                    ImageUrl = "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800",
                    Author = "अभिषेक क्षेत्री / Abhishek Chhetri",
                    ViewsCount = 2100,
                    IsBreaking = true,
                    IsFeatured = false,
                    IsPublished = true,
                    DateBs = "२०८३ श्रावण २२, बिहीबार",
                    CreatedAtAd = new DateTime(2026, 8, 6)
                },
                new Article
                {
                    Id = 7,
                    CategoryId = 7, // Opinion
                    TitleNp = "जलवायु परिवर्तन र हिमाल बचाउने अभियान: नेपालले विश्वमञ्चमा नेतृत्व लिनुपर्ने समय",
                    TitleEn = "Climate Action & Protecting the Himalayas: Nepal's Global Leadership Moment",
                    ExcerptNp = "हिमाली क्षेत्रमा तीव्र गतिमा पग्लिरहेको हिउँ र यसले पारिरहेको वातावरणीय प्रभावबारे विशेष विश्लेषण।",
                    ExcerptEn = "An insightful analysis on rapidly melting Himalayan glaciers and urgent sustainable climate policies.",
                    ContentNp = "हाम्रो देश नेपाल विश्वकै अद्वितीय प्राकृतिक सौन्दर्य र सर्वोच्च शिखर सगरमाथाको देश हो। तर पछिल्लो समय जलवायु परिवर्तनका कारण हाम्रा हिमालहरू काला चट्टानमा परिणत हुने खतरा बढेको छ।",
                    ContentEn = "Nepal stands at the heart of the world's most majestic mountains. However, climate change poses an existential threat as Himalayan glaciers melt at unprecedented rates.",
                    ImageUrl = "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800",
                    Author = "डा. रीता गुरुङ / Dr. Rita Gurung",
                    ViewsCount = 740,
                    IsBreaking = false,
                    IsFeatured = false,
                    IsPublished = true,
                    DateBs = "२०८३ श्रावण २१, बुधबार",
                    CreatedAtAd = new DateTime(2026, 8, 5)
                },
                new Article
                {
                    Id = 8,
                    CategoryId = 8, // Video
                    TitleNp = "नेपालका हिमाल, संस्कृति र सम्पदाको विशेष भिडियो डकुमेन्ट्री (विशेष भिडियो)",
                    TitleEn = "Exclusive Video Documentary: Exploring Nepal's Majestic Landscapes & Culture",
                    ExcerptNp = "सगरमाथा क्षेत्र, पोखरा र अन्नपूर्ण सर्किटको मनमोहक दृश्यावलोकन प्रस्तुत गर्ने भिडियो रिर्पोट।",
                    ExcerptEn = "A stunning video report highlighting the breathtaking beauty of Mt. Everest and Annapurna Circuit.",
                    ContentNp = "सिक्किम — नेपालको अद्वितीय प्राकृतिक दृश्य तथा सांस्कृति सम्पदालाई विश्वसामु चिनाउन निर्माण गरिएको विशेष भिडियो सार्वजनिक गरिएको छ।",
                    ContentEn = "SIKKIM — A newly produced high-definition video documentary exploring Nepal's natural wonders has been released today.",
                    ImageUrl = "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800",
                    Author = "अनलाइन पत्रिका भिडियो डेस्क / Video Desk",
                    ViewsCount = 1890,
                    IsBreaking = false,
                    IsFeatured = false,
                    IsPublished = true,
                    DateBs = "२०८३ श्रावण २०, मङ्गलबार",
                    CreatedAtAd = new DateTime(2026, 8, 4)
                },
                new Article
                {
                    Id = 9,
                    CategoryId = 9, // Photo Gallery
                    TitleNp = "नेपालका उत्कृष्ट प्राकृतिक सौन्दर्य तथा संस्कृति (विशेष फोटो ग्यालरी)",
                    TitleEn = "Visual Splendor: High-Resolution Photo Gallery of Scenic Nepal",
                    ExcerptNp = "नेपालका प्रसिद्ध पर्यटकीय गन्तव्य, हिमश्रृङ्खला र लोकसंस्कृतिका मनमोहक दृश्य सङ्ग्रह।",
                    ExcerptEn = "A rich photo collection showcasing snow-capped mountains, vibrant festivals, and landscapes.",
                    ContentNp = "सिक्किम — देशका विभिन्न भूभागका उत्कृष्ट फोटोग्राफरहरूले खिचेका मनमोहक तस्विरहरूको फोटो ग्यालरी सङ्गालो।",
                    ContentEn = "SIKKIM — Explore an exclusive gallery featuring breathtaking landscape photography from across Nepal.",
                    ImageUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800",
                    Author = "अनलाइन पत्रिका फोटो ग्यालरी डेस्क / Photo Desk",
                    ViewsCount = 1530,
                    IsBreaking = false,
                    IsFeatured = false,
                    IsPublished = true,
                    DateBs = "२०८३ श्रावण १९, सोमबार",
                    CreatedAtAd = new DateTime(2026, 8, 3)
                }
            );
        }
    }
}
