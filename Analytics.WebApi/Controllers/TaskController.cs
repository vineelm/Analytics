using Analytics.WebApi.BL;
using Analytics.WebApi.Helpers;
using System;
using System.Threading.Tasks;
using System.Web.Http;

namespace Analytics.WebApi.Controllers
{
    [RoutePrefix("api/Task")]
    public class TaskController : ApiController
    {
        [HttpGet]
        [Route("All")]
        public async Task<IHttpActionResult> All()
        {
            TaskBL wl = new TaskBL();
            return Ok(wl.GetAllTasks());
        }

        [HttpGet]
        [Route("Date")]
        public async Task<IHttpActionResult> GetTasksByDate(string date)
        {
            TaskBL wl = new TaskBL();
            return Ok(wl.GetTasksByDates(Common.GetStartDate(date), Common.GetEndDate(date)));
        }

        [HttpGet]
        [Route("GroupBy/TaskType")]
        public async Task<IHttpActionResult> GetTaskWiseData(string date = null)
        {
            if(string.IsNullOrEmpty(date))
            {
                if(DateTime.Today.Day >= 5)
                {
                    date = DateTime.Today.ToString("yyyy-MM-ddTHH:mm:ssZ");
                }
                else
                {
                    date = DateTime.Today.AddMonths(-1).ToString("yyyy-MM-ddTHH:mm:ssZ");
                }
            }

            TaskBL wl = new TaskBL();
            return Ok(wl.GetTaskWiseData(Common.GetStartDate(date), Common.GetEndDate(date)));
        }
    }
}
