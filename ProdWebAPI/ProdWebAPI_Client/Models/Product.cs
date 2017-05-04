using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace ProdWebAPI_Client.Models
{
    public class Product
    {
        [Required]
        [Display(Name = "Name")]
        public string name { get; set; }

        [Display(Name = "Description")]
        public string description { get; set; }

        [Display(Name = "Category")]
        public string category { get; set; }

        [Display(Name = "Price")]
        public decimal price { get; set; }

        [Display(Name = "Id")]
        public int id { get; set; }
    }
}