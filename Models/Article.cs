using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OnlinePatrika.Models
{
    public class Article
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(300)]
        public string TitleNp { get; set; } = string.Empty;

        [MaxLength(300)]
        public string? TitleEn { get; set; }

        [MaxLength(800)]
        public string? ExcerptNp { get; set; }

        [MaxLength(800)]
        public string? ExcerptEn { get; set; }

        [Required]
        public string ContentNp { get; set; } = string.Empty;

        public string? ContentEn { get; set; }

        [Required]
        public int CategoryId { get; set; }

        [ForeignKey("CategoryId")]
        public Category? Category { get; set; }

        [MaxLength(500)]
        public string ImageUrl { get; set; } = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800";

        [MaxLength(100)]
        public string Author { get; set; } = "विशेष संवाददाता / Special Reporter";

        public int ViewsCount { get; set; } = 0;

        public bool IsBreaking { get; set; } = false;

        public bool IsFeatured { get; set; } = false;

        public bool IsPublished { get; set; } = true;

        [MaxLength(100)]
        public string DateBs { get; set; } = "२०८३ श्रावण २४, शनिबार";

        public DateTime CreatedAtAd { get; set; } = DateTime.Now;
    }
}
