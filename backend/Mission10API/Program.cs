using Microsoft.EntityFrameworkCore;
using Mission10API.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<BowlingLeagueContext>(options =>
    options.UseSqlite(builder.Configuration["ConnectionStrings:BowlingConnection"])
);

// give each request an instance of EF bowling repository... http gets its own object
builder.Services.AddScoped<IBowlingRepository, EFBowlingRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
