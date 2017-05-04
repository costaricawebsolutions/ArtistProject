using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ProdWebAPI_Client.Models;
using ProdWebAPI_Client.ViewModels;

namespace ProdWebAPI_Client.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        public ActionResult Index()
        {
            ProductClient pc = new ProductClient();
            ViewBag.listProducts = pc.findAll();
            return View();
        }
        [HttpGet]
        public ActionResult Create()
        {
            return View("Create");
            
        }
        [HttpPost]
        public ActionResult Create(ProductViewModel pvm)
        {
            ProductClient pc = new ProductClient();
            pc.Create(pvm.Product);
            return RedirectToAction("Index");           

        }


        [HttpGet]
        public ActionResult Delete(int id)
        {
            ProductClient pc = new ProductClient();
            pc.Delete(id);
            return RedirectToAction("Index");     
            

        }
        [HttpGet]
        public ActionResult Edit(int id)
        {
            ProductClient pc = new ProductClient();
            ProductViewModel pvm = new ProductViewModel();
            pvm.Product = pc.find(id);
            
            return View("Edit",pvm);


        }

        [HttpPost]
        public ActionResult Edit(ProductViewModel pvm)
        {
            ProductClient pc = new ProductClient();
            pc.Edit(pvm.Product);
            return RedirectToAction("Index");

        }


    }
}