using Analytics.WebApi.BL;
using Analytics.WebApi.Helpers;
using System.Threading.Tasks;
using System.Web.Http;

namespace Analytics.WebApi.Controllers
{
    [RoutePrefix("api/WorkLog")]
    public class WorkLogController : ApiController
    {        
        [HttpGet]
        [Route("All")]
        public async Task<IHttpActionResult> All()
        {
            WorkLogBL wl = new WorkLogBL();
            return Ok(wl.GetAllWorkLog());
        }

        [HttpPost]
        [Route("Dates")]
        public async Task<IHttpActionResult> WorkLogByDates(string date)
        {
            WorkLogBL wl = new WorkLogBL();

            return Ok(wl.GetWorkLogByDates(Common.GetStartDate(date), Common.GetEndDate(date)));
        }
    }
}
