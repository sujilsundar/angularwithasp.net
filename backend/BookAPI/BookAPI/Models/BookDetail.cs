using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BookAPI.Models
{
    public class BookDetail
    {
        [Key]
        public int BookDetailId { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string BookTitle { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string IsbnNumber { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string AuthorName { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string BookCategory{ get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string PublisherName { get; set; }
    }
}
