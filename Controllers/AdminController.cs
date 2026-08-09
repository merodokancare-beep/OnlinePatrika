using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlinePatrika.Data;
using OnlinePatrika.Models;
using OnlinePatrika.ViewModels;

namespace OnlinePatrika.Controllers
{
    public class AdminController : Controller
    {
        private readonly ApplicationDbContext _db;
        private readonly IWebHostEnvironment _env;

        public AdminController(ApplicationDbContext db, IWebHostEnvironment env)
        {
            _db = db;
            _env = env;
        }

        // GET: /Admin or /Admin/Index
        public async Task<IActionResult> Index(string lang = "np")
        {
            lang = string.IsNullOrEmpty(lang) ? (Request.Cookies["PatrikaLang"] ?? "np") : lang;

            var articles = await _db.Articles.Include(a => a.Category).OrderByDescending(a => a.CreatedAtAd).ToListAsync();
            var categories = await _db.Categories.OrderBy(c => c.DisplayOrder).ToListAsync();

            var viewModel = new AdminDashboardViewModel
            {
                CurrentLang = lang,
                Articles = articles,
                TotalArticles = articles.Count,
                TotalViews = articles.Sum(a => a.ViewsCount),
                BreakingCount = articles.Count(a => a.IsBreaking),
                ActiveCategoriesCount = categories.Count,
                UploadModel = new ArticleUploadViewModel { Categories = categories }
            };

            return View(viewModel);
        }

        // POST: /Admin/Upload
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Upload([Bind(Prefix = "UploadModel")] ArticleUploadViewModel model)
        {
            if (ModelState.IsValid)
            {
                string imageUrl = model.ImageUrl;

                // Process local file upload if provided
                if (model.ImageFile != null && model.ImageFile.Length > 0)
                {
                    string uploadsFolder = Path.Combine(_env.WebRootPath, "uploads");
                    if (!Directory.Exists(uploadsFolder))
                    {
                        Directory.CreateDirectory(uploadsFolder);
                    }

                    string uniqueFileName = Guid.NewGuid().ToString() + "_" + Path.GetFileName(model.ImageFile.FileName);
                    string filePath = Path.Combine(uploadsFolder, uniqueFileName);

                    using (var fileStream = new FileStream(filePath, FileMode.Create))
                    {
                        await model.ImageFile.CopyToAsync(fileStream);
                    }

                    imageUrl = "/uploads/" + uniqueFileName;
                }

                if (string.IsNullOrEmpty(imageUrl))
                {
                    imageUrl = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800";
                }

                // If marked as featured, unfeature others
                if (model.IsFeatured)
                {
                    var existingFeatured = await _db.Articles.Where(a => a.IsFeatured).ToListAsync();
                    foreach (var f in existingFeatured)
                    {
                        f.IsFeatured = false;
                    }
                }

                var article = new Article
                {
                    TitleNp = model.TitleNp,
                    TitleEn = string.IsNullOrEmpty(model.TitleEn) ? model.TitleNp : model.TitleEn,
                    ExcerptNp = model.ExcerptNp,
                    ExcerptEn = string.IsNullOrEmpty(model.ExcerptEn) ? model.ExcerptNp : model.ExcerptEn,
                    ContentNp = model.ContentNp,
                    ContentEn = string.IsNullOrEmpty(model.ContentEn) ? model.ContentNp : model.ContentEn,
                    CategoryId = model.CategoryId,
                    ImageUrl = imageUrl,
                    Author = string.IsNullOrEmpty(model.Author) ? "विशेष संवाददाता / Special Reporter" : model.Author,
                    IsBreaking = model.IsBreaking,
                    IsFeatured = model.IsFeatured,
                    IsPublished = true,
                    DateBs = "२०८३ श्रावण २४, शनिबार",
                    CreatedAtAd = DateTime.Now
                };

                _db.Articles.Add(article);
                await _db.SaveChangesAsync();

                TempData["SuccessMessage"] = "समाचार सफलतापुर्वक SQLite डाटाबेसमा अपलोड गरियो! / Article saved to SQLite DB successfully!";
                return RedirectToAction(nameof(Index));
            }

            // Reload model if validation failed
            model.Categories = await _db.Categories.OrderBy(c => c.DisplayOrder).ToListAsync();
            var articles = await _db.Articles.Include(a => a.Category).OrderByDescending(a => a.CreatedAtAd).ToListAsync();
            
            var vm = new AdminDashboardViewModel
            {
                CurrentLang = Request.Cookies["PatrikaLang"] ?? "np",
                Articles = articles,
                TotalArticles = articles.Count,
                TotalViews = articles.Sum(a => a.ViewsCount),
                BreakingCount = articles.Count(a => a.IsBreaking),
                ActiveCategoriesCount = model.Categories.Count,
                UploadModel = model
            };

            return View("Index", vm);
        }

        // POST: /Admin/ToggleBreaking/5
        [HttpPost]
        public async Task<IActionResult> ToggleBreaking(int id)
        {
            var article = await _db.Articles.FindAsync(id);
            if (article != null)
            {
                article.IsBreaking = !article.IsBreaking;
                await _db.SaveChangesAsync();
                TempData["SuccessMessage"] = "ताजा खबर स्थिति अद्यावधिक गरियो / Breaking status updated";
            }
            return RedirectToAction(nameof(Index));
        }

        // POST: /Admin/Delete/5
        [HttpPost]
        public async Task<IActionResult> Delete(int id)
        {
            var article = await _db.Articles.FindAsync(id);
            if (article != null)
            {
                _db.Articles.Remove(article);
                await _db.SaveChangesAsync();
                TempData["SuccessMessage"] = "समाचार सफलतापूर्वक हटाइयो / Article deleted successfully";
            }
            return RedirectToAction(nameof(Index));
        }
    }
}
