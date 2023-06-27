using Domain;
using Microsoft.EntityFrameworkCore;

namespace Dal
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=staff;Trusted_Connection=true;TrustServerCertificate=true;");
        }
        
        public DbSet<Staff>? Stafflist { get; set; }
    }
}

