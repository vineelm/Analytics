using System;
using System.Collections.Generic;
using Analytics.WebApi.BL;
using Analytics.WebApi.Helpers;
using System.Threading.Tasks;
using System.Web.Http;
using System.Linq;
using Analytics.WebApi.Models;

namespace Analytics.WebApi.Controllers
{
    [RoutePrefix("api/Graph")]
    public class GraphController : ApiController
    {
        [HttpGet]
        [Route("PlannedVsActual")]
        public async Task<IHttpActionResult> GetPlannedVsActual(string startDate = null, string endDate = null)
        {
            if (string.IsNullOrEmpty(startDate))
            {
                if (DateTime.Today.Day >= 5)
                {
                    startDate = DateTime.Today.ToString("yyyy-MM-ddTHH:mm:ssZ");
                }
                else
                {
                    startDate = DateTime.Today.AddMonths(-1).ToString("yyyy-MM-ddTHH:mm:ssZ");
                }
            }

            WorkLogBL wl = new WorkLogBL();

            List<WorkLogManagement> lstData = wl.GetWorkLogByDates(Common.GetStartDate(startDate), Common.GetEndDate(startDate), true);

            if (lstData != null && lstData.Any())
            {
                var data = (from taskLog in lstData
                            select new PlannedVsActual()
                            {
                                WorkItemNo = taskLog.WorkItemNo.ToString(),
                                PlannedEffort = taskLog.Effort,
                                ActualEffort = taskLog.Tasks.Where(q => q.WorkLogID == taskLog.Id).Sum(q => q.ActualEffort)
                            }).ToList();

                return Ok(data);
            }
            return null;
        }
    }
}

