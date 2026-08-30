using Microsoft.EntityFrameworkCore;
using OnlinePatrika.Models;

namespace OnlinePatrika.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Category> Categories { get; set; } = null!;
        public DbSet<Article> Articles { get; set; } = null!;
        public DbSet<AdminUser> AdminUsers { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Seed Admin User
            modelBuilder.Entity<AdminUser>().HasData(
                new AdminUser
                {
                    Id = 1,
                    Username = "admin",
                    PasswordHash = "admin123",
                    FullName = "मुख्य प्रशासक (Main Admin)",
                    Email = "admin@onlinepatrika.in",
                    UpdatedAt = new DateTime(2026, 8, 8)
                }
            );

            // Seed Categories matching required website menus
            modelBuilder.Entity<Category>().HasData(
                new Category { Id = 1, NameNp = "राष्ट्रिय", NameEn = "National", Slug = "national", DisplayOrder = 1 },
                new Category { Id = 2, NameNp = "राज्य", NameEn = "State", Slug = "state", DisplayOrder = 2 },
                new Category { Id = 3, NameNp = "अर्थ/व्यापार", NameEn = "Economy / Business", Slug = "economy", DisplayOrder = 3 },
                new Category { Id = 4, NameNp = "खेलकुद", NameEn = "Sports", Slug = "sports", DisplayOrder = 4 },
                new Category { Id = 5, NameNp = "विचार", NameEn = "Opinion", Slug = "opinion", DisplayOrder = 5 },
                new Category { Id = 6, NameNp = "भिडियो", NameEn = "Video", Slug = "video", DisplayOrder = 6 },
                new Category { Id = 7, NameNp = "फोटो ग्यालरी", NameEn = "Photo Gallery", Slug = "photo-gallery", DisplayOrder = 7 }
            );

            // Seed Sample Dual-Language Articles per Menu Category
            modelBuilder.Entity<Article>().HasData(
                new Article
                {
                    Id = 1,
                    CategoryId = 1, // National
                    TitleNp = "सिक्किममा अत्याधुनिक डिजिटल भुक्तानी र राष्ट्रिय पूर्वाधार प्रविधि सञ्चालनमा",
                    TitleEn = "Advanced National Digital Payments & Infrastructure Launched in Sikkim",
                    ExcerptNp = "सिक्किम सरकार र डिजिटल प्रविधि क्षेत्रको सहकार्यमा सुरक्षित राष्ट्रिय पूर्वाधारको शुभारम्भ गरिएको छ।",
                    ExcerptEn = "In collaboration with government and tech sectors, a secure national digital infra was unveiled today in Sikkim.",
                    ContentNp = "ग्याङटोक — सिक्किममा प्रविधि र वित्तीय कारोबारलाई थप पारदर्शी र आधुनिक बनाउन नयाँ राष्ट्रिय डिजिटल भुक्तानी प्रणाली सञ्चालनमा आएको छ। सूचना प्रविधि विभागले अत्याधुनिक पूर्वाधार विकासको घोषणा गरेको हो।",
                    ContentEn = "GANGTOK — In a landmark step toward transparency and technological elevation, a new digital payment infrastructure has been officially launched in Sikkim, India.",
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
                    CategoryId = 2, // State / Region
                    TitleNp = "सिक्किमका जिल्लाहरूमा प्रादेशिक विकास योजना र सडक पूर्वाधार विस्तार तीव्र",
                    TitleEn = "Regional Infrastructure and Road Network Expansion Accelerated Across Sikkim Districts",
                    ExcerptNp = "सिक्किम राज्य सरकारले ग्याङटोक, नाम्ची, मङ्गन र गेजिङ जोड्ने नयाँ राजमार्ग परियोजना सञ्चालनमा ल्याएको छ।",
                    ExcerptEn = "Sikkim state government has launched major regional connectivity and Highway development projects.",
                    ContentNp = "सिक्किम — सिक्किम राज्य सरकारले प्रादेशिक विकास योजनालाई थप प्रभावकारी बनाउन भौतिक पूर्वाधार, पर्यटन र स्वास्थ्य सेवा सुदृढीकरण कार्यक्रम लागू गरेको छ।",
                    ContentEn = "SIKKIM — The state government of Sikkim has initiated coordinated development agendas to upgrade regional roads, eco-tourism, and public health facilities.",
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
                    CategoryId = 2, // State
                    TitleNp = "स्थानीय निकायहरूमा डिजिटल नागरिक सेवा सुदृढ, गाउँ-गाउँमा आधुनिक ई-गभर्नेन्स",
                    TitleEn = "Digital Governance Strengthened Across Sikkim Local Bodies & Panchayats",
                    ExcerptNp = "स्थानीय पञ्चायत तथा नगर निकायहरूबाट अनलाइन प्रणालीमार्फत द्रुत सेवा प्रवाह गर्न नयाँ प्रविधि जडान।",
                    ExcerptEn = "Local panchayats and municipal bodies adopt digital e-governance solutions for faster service delivery.",
                    ContentNp = "ग्याङटोक — स्थानीय तहमा सेवाग्राहीको चाप नियन्त्रण गर्न र पारदर्शी ढङ्गले काम सम्पन्न गर्न ई-गभर्नेन्स सेवा विस्तार गरिएको छ।",
                    ContentEn = "GANGTOK — Municipalities and panchayats across Sikkim have introduced paperless e-governance systems to enhance citizen convenience.",
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
                    CategoryId = 2, // State
                    TitleNp = "सिक्किम विधान सभामा हरित विकास तथा औद्योगिक प्रवर्धन विधेयक सर्वसम्मत पारित",
                    TitleEn = "Sikkim Legislative Assembly Unanimously Passes Green Development Bill",
                    ExcerptNp = "विधान सभाको आजको बैठकले राज्यको दीर्घकालीन विकास र हरित उद्योगका लागि महत्वपूर्ण विधेयक पास गरेको छ।",
                    ExcerptEn = "The Sikkim Legislative Assembly has unanimously approved the key green development governance bill today.",
                    ContentNp = "सिक्किम — सिक्किम विधान सभाको बैठकले राष्ट्रिय हरित पूर्वाधार तथा औद्योगिक प्रवर्धन विधेयक २०८३ सर्वसम्मतले पारित गरेको छ। सभामुखले निर्णयार्थ पेस गर्नुभएको उक्त विधेयकमाथि सबै दलका विधायकहरूले सहमति जनाएका हुन्।",
                    ContentEn = "SIKKIM — The Sikkim Legislative Assembly has passed the landmark Sustainable Infrastructure and Green Development Bill 2026 with unanimous support.",
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
                    CategoryId = 3, // Economy / Business
                    TitleNp = "भारतीय सेयर बजार (BSE/NSE) मा उत्साह, सिक्किमको जैविक उत्पादन र पर्यटन क्षेत्रमा आकर्षण",
                    TitleEn = "Indian Markets (BSE/NSE) Rally as Sikkim Organic & Hospitality Sectors Flourish",
                    ExcerptNp = "साताको कारोबारमा भारतीय बजार परिसूचक उच्च अंकले बढेर लगानीकर्ताहरूमा उत्साह छाएको छ।",
                    ExcerptEn = "The Indian stock market indices surged significantly, driven by strong investor confidence in clean energy and tourism.",
                    ContentNp = "सिक्किम — भारतीय सेयर बजार (BSE Sensex र Nifty) मा आज उच्च वृद्धि भएको छ। सिक्किमको जैविक कृषि उत्पादन, जलविद्युत् र पर्यटन उद्योगमा लगानीकर्ताको आकर्षण तीव्र रूपमा बढेको छ।",
                    ContentEn = "SIKKIM — Indian stock indices jumped today as investor sentiment turned strongly bullish toward renewable energy, organic agri-business, and Sikkim tourism.",
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
                    CategoryId = 4, // Sports
                    TitleNp = "सिक्किम राज्य क्रिकेट टोली राष्ट्रिय सिरिजको फाइनलमा प्रवेश, सानदार विजय",
                    TitleEn = "Sikkim State Cricket Team Reaches National Tournament Final with Brilliant Victory",
                    ExcerptNp = "उत्कृष्ट बलिङ र ब्याटिङको मद्दतले सिक्किम टोलीले प्रतिस्पर्धीलाई पराजित गर्दै फाइनल यात्रा तय गरेको हो।",
                    ExcerptEn = "With stellar batting and disciplined bowling, Sikkim Cricket Team outclassed rivals to book a historic final spot.",
                    ContentNp = "सिक्किम — राष्ट्रिय टी-२० शृङ्खलाअन्तर्गत आज भएको सेमिफाइनल खेलमा सिक्किमको टोलीले सानदार जित हासिल गर्दै फाइनलको यात्रा तय गरेको छ।",
                    ContentEn = "SIKKIM — The Sikkim Cricket Team sealed a sensational victory in the T20 tournament semifinals today to lock their spot in the grand final.",
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
                    CategoryId = 5, // Opinion
                    TitleNp = "जलवायु परिवर्तन र कञ्चनजङ्घा संरक्षण: सिक्किमको वातावरणीय नेतृत्वको मोडल",
                    TitleEn = "Climate Action & Protecting Mt. Kanchenjunga: Sikkim's Environmental Leadership",
                    ExcerptNp = "हिमाली पारिस्थितिक प्रणाली र कञ्चनजङ्घा क्षेत्रमा तीव्र गतिमा भइरहेको जैविक संरक्षणबारे विशेष विश्लेषण।",
                    ExcerptEn = "An insightful analysis on protecting Himalayan ecology, glaciers around Mt. Kanchenjunga, and sustainable green policies.",
                    ContentNp = "हाम्रो सिक्किम राज्य अद्वितीय प्राकृतिक सौन्दर्य र कञ्चनजङ्घा हिमश्रृङ्खलाको काखमा अवस्थित छ। वातावरणीय संरक्षण र जैविक खेतीमा सिक्किमले विश्वमञ्चमा नेतृत्वदायी भूमिका निर्वाह गर्दै आएको छ।",
                    ContentEn = "Sikkim stands at the heart of the majestic Mt. Kanchenjunga region. Climate resilience and organic environmental conservation pose vital policy models for the world.",
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
                    CategoryId = 6, // Video
                    TitleNp = "सिक्किमका हिमाल, गुम्बा र संस्कृतिको विशेष भिडियो डकुमेन्ट्री (विशेष भिडियो)",
                    TitleEn = "Exclusive Video Documentary: Exploring Sikkim's Scenic Lakes, Monasteries & Heritage",
                    ExcerptNp = "सोङ्गो ताल, गुरुडोङमार र रुमटेक गुम्बाको मनमोहक दृश्यावलोकन प्रस्तुत गर्ने भिडियो रिर्पोट।",
                    ExcerptEn = "A stunning video report highlighting the breathtaking beauty of Tsomgo Lake, Gurudongmar, and Sikkim's heritage.",
                    ContentNp = "सिक्किम — सिक्किमको अद्वितीय प्राकृतिक दृश्य तथा सांस्कृतिक सम्पदालाई विश्वसामु चिनाउन निर्माण गरिएको विशेष भिडियो सार्वजनिक गरिएको छ।",
                    ContentEn = "SIKKIM — A newly produced high-definition video documentary exploring Sikkim's natural wonders and cultural heritage has been released today.",
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
                    CategoryId = 7, // Photo Gallery
                    TitleNp = "सिक्किमका मनमोहक हिमश्रृङ्खला र लोकसंस्कृति (विशेष फोटो ग्यालरी)",
                    TitleEn = "Visual Splendor: High-Resolution Photo Gallery of Scenic Sikkim",
                    ExcerptNp = "सिक्किमका प्रसिद्ध पर्यटकीय गन्तव्य, कञ्चनजङ्घा दृश्य र चाडपर्वका मनमोहक तस्विर सङ्ग्रह।",
                    ExcerptEn = "A rich photo collection showcasing snow-capped Kanchenjunga peaks, vibrant festivals, and Sikkim landscapes.",
                    ContentNp = "सिक्किम — राज्यका उत्कृष्ट फोटोग्राफरहरूले खिचेका मनमोहक तस्विरहरूको विशेष फोटो ग्यालरी सङ्गालो।",
                    ContentEn = "SIKKIM — Explore an exclusive gallery featuring breathtaking landscape photography from across Sikkim, India.",
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
