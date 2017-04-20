using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Dashboard.Controllers
{
    public class HomeController : Controller
    {
        // Dash View
        public ActionResult DashHome()
        {
            return View();
        }

        // Pocket Call 
        public JsonResult PocketCall()
        {
            Pocket p = new Pocket();

            return Json(p.GetPocketData(), JsonRequestBehavior.AllowGet);
        }
        // Weather Call
        public JsonResult WeatherCall()
        {
            Weather w = new Weather();

            return Json(w.GetWeatherData(), JsonRequestBehavior.AllowGet);
        }
        // Habitica Call
        public JsonResult HabiticaCall()
        {
            Habitica h = new Habitica();

            return Json(h.GetHabiticaData(), JsonRequestBehavior.AllowGet);
        }
    }
}