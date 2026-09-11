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

// Ensure SQLite Database Schema & Seed Data exist on startup without wiping existing data
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    
    // Creates database schema and default seeds if DB does not exist yet (never deletes existing records)
    dbContext.Database.EnsureCreated();

    // Ensure default AdminUser exists if table is empty
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
