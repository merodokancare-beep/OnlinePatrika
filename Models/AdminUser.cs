namespace OnlinePatrika.Models
{
    public class AdminUser
    {
        public int Id { get; set; }
        public string Username { get; set; } = "admin";
        public string PasswordHash { get; set; } = "admin123";
        public string FullName { get; set; } = "मुख्य प्रशासक (Main Admin)";
        public string Email { get; set; } = "admin@onlinepatrika.in";
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}
