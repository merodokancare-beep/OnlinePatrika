using System.ComponentModel.DataAnnotations;

namespace OnlinePatrika.ViewModels
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "कृपया प्रयोगकर्ता नाम वा इमेल प्रविष्ट गर्नुहोस् / Please enter username")]
        public string Username { get; set; } = string.Empty;

        [Required(ErrorMessage = "कृपया पासवर्ड प्रविष्ट गर्नुहोस् / Please enter password")]
        [DataType(DataType.Password)]
        public string Password { get; set; } = string.Empty;

        public bool RememberMe { get; set; }

        public string? ReturnUrl { get; set; }
    }
}
