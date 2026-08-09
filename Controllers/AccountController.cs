using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using OnlinePatrika.ViewModels;
using System.Security.Claims;

namespace OnlinePatrika.Controllers
{
    public class AccountController : Controller
    {
        // GET: /Account/Login
        [HttpGet]
        public IActionResult Login(string? returnUrl = null)
        {
            if (User.Identity?.IsAuthenticated == true)
            {
                return RedirectToAction("Index", "Admin");
            }

            var model = new LoginViewModel
            {
                ReturnUrl = returnUrl ?? Url.Action("Index", "Admin")
            };
            return View(model);
        }

        // POST: /Account/Login
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            // Default Admin Credentials: Username: admin, Password: admin123
            if ((model.Username.Trim().Equals("admin", StringComparison.OrdinalIgnoreCase) || 
                 model.Username.Trim().Equals("admin@onlinepatrika.com", StringComparison.OrdinalIgnoreCase)) &&
                (model.Password == "admin123" || model.Password == "patrika2026" || model.Password == "admin"))
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, model.Username),
                    new Claim(ClaimTypes.Role, "Admin"),
                    new Claim("FullName", "मुख्य प्रशासक (Main Admin)")
                };

                var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

                var authProperties = new AuthenticationProperties
                {
                    IsPersistent = model.RememberMe,
                    ExpiresUtc = DateTimeOffset.UtcNow.AddHours(8)
                };

                await HttpContext.SignInAsync(
                    CookieAuthenticationDefaults.AuthenticationScheme,
                    new ClaimsPrincipal(claimsIdentity),
                    authProperties);

                TempData["SuccessMessage"] = "सफलतापूर्वक लगइन गरियो! / Welcome to Admin Dashboard!";

                if (!string.IsNullOrEmpty(model.ReturnUrl) && Url.IsLocalUrl(model.ReturnUrl))
                {
                    return Redirect(model.ReturnUrl);
                }
                return RedirectToAction("Index", "Admin");
            }

            ModelState.AddModelError(string.Empty, "अमान्य प्रयोगकर्ता नाम वा पासवर्ड! / Invalid username or password!");
            return View(model);
        }

        // POST: /Account/Logout
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            TempData["SuccessMessage"] = "सफलतापूर्वक लगआउट गरियो / Logged out successfully";
            return RedirectToAction("Index", "Home");
        }
    }
}
