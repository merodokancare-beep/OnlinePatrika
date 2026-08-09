using OnlinePatrika.Models;

namespace OnlinePatrika.ViewModels
{
    public class HomeViewModel
    {
        public string CurrentLang { get; set; } = "np";
        public string SelectedCategorySlug { get; set; } = "all";
        public string SearchQuery { get; set; } = string.Empty;

        public Article? HeroArticle { get; set; }
        public List<Article> BreakingNews { get; set; } = new List<Article>();
        public List<Article> TrendingArticles { get; set; } = new List<Article>();
        public List<Article> Articles { get; set; } = new List<Article>();
        public List<Category> Categories { get; set; } = new List<Category>();
    }
}
