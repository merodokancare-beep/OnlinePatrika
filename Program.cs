using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.EntityFrameworkCore;
using OnlinePatrika.Data;
using OnlinePatrika.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

// Register ApplicationDbContext with SQLite connection
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? "Data Source=OnlinePatrika.db";
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite(connectionString));

// Add Cookie Authentication
builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.LoginPath = "/Account/Login";
        options.LogoutPath = "/Account/Logout";
        options.AccessDeniedPath = "/Account/Login";
        options.ExpireTimeSpan = TimeSpan.FromHours(8);
    });

var app = builder.Build();

// Ensure SQLite Database Schema & Seed Data exist on startup
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    
    // Auto-reset database if categories/articles need to be updated to Sikkim/India content
    bool needsReset = false;
    try
    {
        needsReset = !dbContext.Categories.Any() || dbContext.Categories.Count() != 7 || dbContext.Articles.Any(a => a.TitleNp.Contains("नेपालमा") || (a.ContentEn != null && a.ContentEn.Contains("in Nepal")));
    }
    catch
    {
        needsReset = true;
    }

    if (needsReset)
    {
        dbContext.Database.EnsureDeleted();
    }
    dbContext.Database.EnsureCreated();

    // Ensure default AdminUser exists
    if (!dbContext.AdminUsers.Any())
    {
        dbContext.AdminUsers.Add(new AdminUser
        {
            Username = "admin",
            PasswordHash = "admin123",
            FullName = "मुख्य प्रशासक (Main Admin)",
            Email = "admin@onlinepatrika.in",
            UpdatedAt = DateTime.UtcNow
        });
        dbContext.SaveChanges();
    }
}

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
