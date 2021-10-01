using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MitchellCodeChallenge_WebAPI.Models
{
    public class Vehicle
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(4)]
        public int Year { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Make { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Model { get; set; }
    }
}
