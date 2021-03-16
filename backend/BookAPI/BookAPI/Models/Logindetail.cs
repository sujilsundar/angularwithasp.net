using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BookAPI.Models
{
    public class Logindetail
    {
        [Key]
        public int LoginID { get; set; }
        [Required]
        [Column(TypeName ="nvarchar(20)")]
        public string UserName { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(20)")]
        public string Password { get; set; }

    }
}
