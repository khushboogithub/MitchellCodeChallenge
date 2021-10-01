using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MitchellCodeChallenge_WebAPI.Models
{
    public class VehicleDbContext : DbContext
    {
        public VehicleDbContext(DbContextOptions<VehicleDbContext> options):base(options)
        {

        }

        public DbSet<Vehicle> Vehicles { get; set; }

    }
}
