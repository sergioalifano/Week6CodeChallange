using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;

namespace Week6Code_Challange.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return PartialView();
        }

        [HttpGet]
        public ActionResult Work()
        {
            ViewBag.Message = "Your application description page.";

            return PartialView();
        }

        public ActionResult Careers()
        {
            return PartialView();
        }

        [HttpGet]
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return PartialView();
        }

        [HttpPost]
        public ActionResult Contact(Models.Contact contactForm)
        {
            //add the form to the db
            try
            {
                //1.create data context
                Models.ContatctFormEntities db = new Models.ContatctFormEntities();

                //2. Add obj to the table
                db.Contacts.Add(contactForm);

                //3.save
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                ViewBag.Error = ex.Message;
                return PartialView("Error");
            }
            return PartialView("Thanks");
        }


        public ActionResult Thanks()
        {
            return PartialView();
        }
        public ActionResult Who()
        {
            return PartialView();
        }

        public ActionResult What()
        {
            return PartialView();
        }
        public ActionResult Why()
        {
            return PartialView();
        }
        public ActionResult How()
        {
            return PartialView();
        }
        public ActionResult Where()
        {
            return PartialView();
        }
    }
}