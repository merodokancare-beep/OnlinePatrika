using System.ComponentModel.DataAnnotations;

namespace OnlinePatrika.ViewModels
{
    public class ChangeCredentialsViewModel
    {
        [Required(ErrorMessage = "हालको पासवर्ड आवश्यक छ / Current password is required")]
        [DataType(DataType.Password)]
        [Display(Name = "हालको पासवर्ड (Current Password)")]
        public string CurrentPassword { get; set; } = string.Empty;

        [Required(ErrorMessage = "नयाँ प्रयोगकर्ता नाम आवश्यक छ / New username is required")]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "प्रयोगकर्ता नाम कम्तीमा ३ अक्षरको हुनुपर्छ / Username must be at least 3 characters")]
        [Display(Name = "नयाँ प्रयोगकर्ता नाम (New Username)")]
        public string NewUsername { get; set; } = string.Empty;

        [Required(ErrorMessage = "नयाँ पासवर्ड आवश्यक छ / New password is required")]
        [StringLength(100, MinimumLength = 4, ErrorMessage = "पासवर्ड कम्तीमा ४ अक्षरको हुनुपर्छ / Password must be at least 4 characters")]
        [DataType(DataType.Password)]
        [Display(Name = "नयाँ पासवर्ड (New Password)")]
        public string NewPassword { get; set; } = string.Empty;

        [Required(ErrorMessage = "पासवर्ड पुष्टि गर्नुहोस् / Confirm new password is required")]
        [DataType(DataType.Password)]
        [Compare("NewPassword", ErrorMessage = "नयाँ पासवर्ड र पुष्टि पासवर्ड मेल खाएनन् / Passwords do not match")]
        [Display(Name = "नयाँ पासवर्ड पुष्टि गर्नुहोस् (Confirm New Password)")]
        public string ConfirmPassword { get; set; } = string.Empty;
    }
}
