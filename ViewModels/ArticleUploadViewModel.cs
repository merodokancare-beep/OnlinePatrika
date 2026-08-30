using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;
using OnlinePatrika.Models;

namespace OnlinePatrika.ViewModels
{
    public class ArticleUploadViewModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "नेपाली शीर्षक आवश्यक छ / Nepali Title is required")]
        [Display(Name = "नेपाली शीर्षक / Nepali Title")]
        public string TitleNp { get; set; } = string.Empty;

        [Display(Name = "अंग्रेजी शीर्षक / English Title")]
        public string? TitleEn { get; set; }

        [Display(Name = "नेपाली सारांश / Nepali Excerpt")]
        public string? ExcerptNp { get; set; }

        [Display(Name = "अंग्रेजी सारांश / English Excerpt")]
        public string? ExcerptEn { get; set; }

        [Required(ErrorMessage = "नेपाली पूरा समाचार आवश्यक छ / Nepali Content is required")]
        [Display(Name = "नेपाली पूरा समाचार / Nepali Content")]
        public string ContentNp { get; set; } = string.Empty;

        [Display(Name = "अंग्रेजी पूरा समाचार / English Content")]
        public string? ContentEn { get; set; }

        [Required(ErrorMessage = "कृपया विधा चयन गर्नुहोस् / Select Category")]
        [Display(Name = "समाचार विधा / Category")]
        public int CategoryId { get; set; }

        [Display(Name = "फिचर फोटो URL / Image URL")]
        public string? ImageUrl { get; set; }

        [Display(Name = "कम्प्युटरबाट फोटो अपलोड गर्नुहोस् / Local Image Upload")]
        public IFormFile? ImageFile { get; set; }

        [Display(Name = "संवाददाताको नाम / Author Name")]
        public string? Author { get; set; } = "विशेष संवाददाता / Special Reporter";

        [Display(Name = "ताजा खबर मा देखाउनुहोस् / Breaking News")]
        public bool IsBreaking { get; set; } = true;

        [Display(Name = "मुख्य आकर्षक कथा बनाउनुहोस् / Hero Featured Story")]
        public bool IsFeatured { get; set; } = false;

        public List<Category> Categories { get; set; } = new List<Category>();
    }

    public class AdminDashboardViewModel
    {
        public int TotalArticles { get; set; }
        public int TotalViews { get; set; }
        public int BreakingCount { get; set; }
        public int ActiveCategoriesCount { get; set; }

        public List<Article> Articles { get; set; } = new List<Article>();
        public ArticleUploadViewModel UploadModel { get; set; } = new ArticleUploadViewModel();
        public ChangeCredentialsViewModel ChangeCredentialsModel { get; set; } = new ChangeCredentialsViewModel();
        public string CurrentAdminUsername { get; set; } = "admin";
        public string CurrentLang { get; set; } = "np";
    }
}
