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

            // Seed Categories
            modelBuilder.Entity<Category>().HasData(
                new Category { Id = 1, NameNp = "मुख्य समाचार", NameEn = "Main Stories", Slug = "main", DisplayOrder = 1 },
                new Category { Id = 2, NameNp = "राजनीति", NameEn = "Politics", Slug = "politics", DisplayOrder = 2 },
                new Category { Id = 3, NameNp = "अर्थतन्त्र", NameEn = "Economy", Slug = "economy", DisplayOrder = 3 },
                new Category { Id = 4, NameNp = "सूचना प्रविधि", NameEn = "Technology", Slug = "tech", DisplayOrder = 4 },
                new Category { Id = 5, NameNp = "खेलकुद", NameEn = "Sports", Slug = "sports", DisplayOrder = 5 },
                new Category { Id = 6, NameNp = "मनोरञ्जन", NameEn = "Entertainment", Slug = "entertainment", DisplayOrder = 6 },
                new Category { Id = 7, NameNp = "विचार / टिप्पणी", NameEn = "Opinion", Slug = "opinion", DisplayOrder = 7 },
                new Category { Id = 8, NameNp = "अन्तर्राष्ट्रिय", NameEn = "World", Slug = "world", DisplayOrder = 8 },
                new Category { Id = 9, NameNp = "स्वास्थ्य र जीवनशैली", NameEn = "Health", Slug = "health", DisplayOrder = 9 },
                new Category { Id = 10, NameNp = "प्रदेश / स्थानीय", NameEn = "Pradesh", Slug = "pradesh", DisplayOrder = 10 }
            );

            // Seed Sample Dual-Language Articles
            modelBuilder.Entity<Article>().HasData(
                new Article
                {
                    Id = 1,
                    CategoryId = 4, // Tech
                    TitleNp = "नेपालमा अत्याधुनिक डिजिटल भुक्तानी र एआई प्रविधि सञ्चालनमा, अर्थतन्त्रमा नयाँ क्रान्ति",
                    TitleEn = "Advanced Digital Payments & AI Ecosystem Launched in Nepal, Fueling New Economic Era",
                    ExcerptNp = "नेपाल सरकार र निजी क्षेत्रको सहकार्यमा सुरक्षित राष्ट्रिय डिजिटल संरचना र एआई पूर्वाधारको शुभारम्भ गरिएको छ।",
                    ExcerptEn = "In collaboration with government and private sectors, a secure national digital infra and AI ecosystem was unveiled today.",
                    ContentNp = "काठमाडौँ — नेपालमा प्रविधि र वित्तीय कारोबारलाई थप पारदर्शी र आधुनिक बनाउन नयाँ राष्ट्रिय एआई र डिजिटल भुक्तानी प्रणाली सञ्चालनमा आएको छ। सूचना तथा सञ्चार प्रविधि मन्त्रालयले अत्याधुनिक एआई पूर्वाधार विकासको घोषणा गरेको हो।",
                    ContentEn = "KATHMANDU — In a landmark step toward transparency and technological elevation, a new national AI & payment infrastructure has been officially launched in Nepal. Announcing the initiative at the High-Level Digital Summit, stakeholders highlighted its economic benefits.",
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
                    CategoryId = 2, // Politics
                    TitleNp = "संसद्‌मा राष्ट्रिय विकास तथा पूर्वाधार बजेट विधेयक सर्वसम्मत पारित",
                    TitleEn = "Parliament Unanimously Passes National Infrastructure Development Bill",
                    ExcerptNp = "प्रतिनिधिसभाको आजको बैठकले समृद्ध नेपाल निर्माणका लागि महत्वपूर्ण विकास विधेयक पास गरेको छ।",
                    ExcerptEn = "The House of Representatives has unanimously approved the key national development bill today.",
                    ContentNp = "काठमाडौँ — प्रतिनिधिसभाको बैठकले राष्ट्रिय पूर्वाधार तथा औद्योगिक प्रवर्धन विधेयक २०८३ सर्वसम्मतले पारित गरेको छ। सभामुखले निर्णयार्थ पेस गर्नुभएको उक्त विधेयकमाथि सबै राजनीतिक दलका सांसदहरूले सहमति जनाएका हुन्।",
                    ContentEn = "KATHMANDU — The House of Representatives has passed the landmark Infrastructure and Industrial Development Bill 2026 with unanimous support from all major parliamentary parties.",
                    ImageUrl = "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800",
                    Author = "निर्मला श्रेष्ठ / Nirmala Shrestha",
                    ViewsCount = 980,
                    IsBreaking = true,
                    IsFeatured = false,
                    IsPublished = true,
                    DateBs = "२०८३ श्रावण २४, शनिबार",
                    CreatedAtAd = new DateTime(2026, 8, 8)
                },
                new Article
                {
                    Id = 3,
                    CategoryId = 3, // Economy
                    TitleNp = "नेपालको सेयर बजार नेप्से परिसूचकमा उछाल, पर्यटन र जलविद्युत् क्षेत्र अग्रस्थानमा",
                    TitleEn = "Nepal Stock Exchange (NEPSE) Rallies as Tourism and Hydropower Stocks Soar",
                    ExcerptNp = "साताको अन्तिम कारोबार दिन नेप्से परिसूचक उच्च अंकले बढेर लगानीकर्ताहरूमा उत्साह छाएको छ।",
                    ExcerptEn = "The NEPSE index surged significantly on the closing day of the trading week, driven by strong investor confidence.",
                    ContentNp = "काठमाडौँ — नेपाल स्टक एक्सचेन्ज (नेप्से) परिसूचकमा आज ५५ अंकको वृद्धि भएको छ। नेपाल राष्ट्र बैंकको सकारात्मक मौद्रिक नीति पुनरावलोकन र बैंकहरूको ब्याजदर घट्दो क्रममा रहेकाले लगानीकर्ताको आकर्षण बढेको छ।",
                    ContentEn = "KATHMANDU — The Nepal Stock Exchange (NEPSE) index jumped 55 points today as investor sentiment turned strongly bullish following monetary policy updates.",
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
                    Id = 4,
                    CategoryId = 5, // Sports
                    TitleNp = "नेपाली क्रिकेट टोली अन्तर्राष्ट्रिय सिरिजको फाइनलमा प्रवेश, विश्व कीर्तिमान कायम",
                    TitleEn = "Nepali National Cricket Team Reaches International Series Final with Record Win",
                    ExcerptNp = "उत्कृष्ट बलिङ र ब्याटिङको मद्दतले नेपालले बलियो प्रतिस्पर्धीलाई पराजित गर्दै कीर्तिमान बनाएको हो।",
                    ExcerptEn = "With stellar batting and disciplined bowling, Nepal outclassed rival teams to set a historic international record.",
                    ContentNp = "काठमाडौँ — अन्तर्राष्ट्रिय टी-२० शृङ्खलाअन्तर्गत आज भएको सेमिफाइनल खेलमा नेपाली टोलीले सानदार जित हासिल गर्दै फाइनलको यात्रा तय गरेको छ।",
                    ContentEn = "KATHMANDU — The Nepali Men's Cricket Team sealed a sensational victory in the T20 International Series semifinals today to lock their spot in the grand final.",
                    ImageUrl = "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800",
                    Author = "अभिषेक क्षेत्री / Abhishek Chhetri",
                    ViewsCount = 2100,
                    IsBreaking = true,
                    IsFeatured = false,
                    IsPublished = true,
                    DateBs = "२०८३ श्रावण २२, बिहीबार",
                    CreatedAtAd = new DateTime(2026, 8, 6)
                }
            );
        }
    }
}
