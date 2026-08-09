using System.ComponentModel.DataAnnotations;

namespace OnlinePatrika.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string NameNp { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string NameEn { get; set; } = string.Empty;

        [Required]
        [MaxLength(50)]
        public string Slug { get; set; } = string.Empty;

        public int DisplayOrder { get; set; }

        public ICollection<Article> Articles { get; set; } = new List<Article>();
    }
}
