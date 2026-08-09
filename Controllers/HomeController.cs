using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlinePatrika.Data;
using OnlinePatrika.ViewModels;

namespace OnlinePatrika.Controllers
{
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext _db;

        public HomeController(ApplicationDbContext db)
        {
            _db = db;
        }

        // GET: / or /Home/Index?category=tech&lang=en
        public async Task<IActionResult> Index(string category = "all", string q = "", string? lang = null)
        {
            // Store language in Cookie if explicitly provided in query, otherwise read from Cookie
            if (!string.IsNullOrEmpty(lang))
            {
                Response.Cookies.Append("PatrikaLang", lang, new CookieOptions { Expires = DateTimeOffset.Now.AddYears(1) });
            }
            else
            {
                lang = Request.Cookies["PatrikaLang"] ?? "np";
            }

            var categories = await _db.Categories.OrderBy(c => c.DisplayOrder).ToListAsync();
            var articlesQuery = _db.Articles.Include(a => a.Category).Where(a => a.IsPublished).AsQueryable();

            // Filter by Category Menu
            if (!string.IsNullOrEmpty(category) && category != "all")
            {
                articlesQuery = articlesQuery.Where(a => a.Category != null && a.Category.Slug == category);
            }

            // Filter by Search Term
            if (!string.IsNullOrEmpty(q))
            {
                string queryLower = q.ToLower();
                articlesQuery = articlesQuery.Where(a =>
                    a.TitleNp.ToLower().Contains(queryLower) ||
                    (a.TitleEn != null && a.TitleEn.ToLower().Contains(queryLower)) ||
                    (a.ExcerptNp != null && a.ExcerptNp.ToLower().Contains(queryLower)) ||
                    (a.ExcerptEn != null && a.ExcerptEn.ToLower().Contains(queryLower)));
            }

            var allArticles = await articlesQuery.OrderByDescending(a => a.CreatedAtAd).ToListAsync();
            var breakingNews = await _db.Articles.Where(a => a.IsPublished && a.IsBreaking).OrderByDescending(a => a.CreatedAtAd).ToListAsync();
            var heroStory = await _db.Articles.Include(a => a.Category).FirstOrDefaultAsync(a => a.IsPublished && a.IsFeatured) ?? allArticles.FirstOrDefault();

            var viewModel = new HomeViewModel
            {
                CurrentLang = lang,
                SelectedCategorySlug = category,
                SearchQuery = q,
                Categories = categories,
                Articles = allArticles,
                BreakingNews = breakingNews,
                HeroArticle = heroStory,
                TrendingArticles = allArticles.Where(a => heroStory == null || a.Id != heroStory.Id).Take(4).ToList()
            };

            return View(viewModel);
        }

        // GET: /Home/Detail/1
        public async Task<IActionResult> Detail(int id, string? lang = null)
        {
            if (!string.IsNullOrEmpty(lang))
            {
                Response.Cookies.Append("PatrikaLang", lang, new CookieOptions { Expires = DateTimeOffset.Now.AddYears(1) });
            }
            else
            {
                lang = Request.Cookies["PatrikaLang"] ?? "np";
            }

            var article = await _db.Articles.Include(a => a.Category).FirstOrDefaultAsync(a => a.Id == id);
            if (article == null)
            {
                return NotFound();
            }

            // Increment views count in SQLite DB
            article.ViewsCount += 1;
            await _db.SaveChangesAsync();

            ViewBag.CurrentLang = lang;
            ViewBag.RelatedArticles = await _db.Articles.Where(a => a.CategoryId == article.CategoryId && a.Id != article.Id).Take(3).ToListAsync();

            return View(article);
        }

        // POST: /Home/SetLanguage
        [HttpPost]
        public IActionResult SetLanguage(string lang, string returnUrl)
        {
            Response.Cookies.Append("PatrikaLang", lang, new CookieOptions { Expires = DateTimeOffset.Now.AddYears(1) });
            if (!string.IsNullOrEmpty(returnUrl) && Url.IsLocalUrl(returnUrl))
            {
                return Redirect(returnUrl);
            }
            return RedirectToAction(nameof(Index));
        }
    }
}
