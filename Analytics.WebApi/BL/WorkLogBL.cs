using System;
using System.Collections.Generic;
using System.Configuration;
using Analytics.WebApi.Helpers;
using Analytics.WebApi.Models;
using Microsoft.SharePoint.Client;
using System.Linq;

namespace Analytics.WebApi.BL
{
    public class WorkLogBL : BaseBL
    {
        public List<WorkLogManagement> GetAllWorkLog()
        {
            CamlQuery query = CamlQuery.CreateAllItemsQuery();

            var items = ExecuteQuery(WorkLogList.Name, query);

            List<WorkLogManagement> lstWorkLogManagement = new List<WorkLogManagement>();

            foreach (ListItem listItem in items)
            {
                lstWorkLogManagement.Add(GetWorkLog(listItem));
            }

            return lstWorkLogManagement;
        }

        public List<WorkLogManagement> GetWorkLogByDates(string startDate, string endDate, bool loadTasks = false)
        {
            CamlQuery query = new CamlQuery();
            query.ViewXml = "<View><Query><Where>"
                                + "<And>"
                                + "<Geq><FieldRef Name='" + WorkLogList.PlannedEndTime + "' />"
                                + "<Value Type='DateTime' IncludeTimeValue='FALSE' >" + startDate
                                + "</Value></Geq>"
                                + "<Leq><FieldRef Name='" + WorkLogList.PlannedEndTime + "' />"
                                + "<Value Type='DateTime' IncludeTimeValue='FALSE' >" + endDate
                                + "</Value></Leq>"
                                + "</And></Where></Query></view>";

            var items = ExecuteQuery(WorkLogList.Name, query);
            
            List<WorkLogManagement> lstWorkLogManagement = new List<WorkLogManagement>();
            List<TaskManagement> lstTasks = new List<TaskManagement>();

            foreach (ListItem listItem in items)
            {                            
                lstWorkLogManagement.Add(GetWorkLog(listItem));
            }

            if (loadTasks)
            {
                if (lstWorkLogManagement != null && lstWorkLogManagement.Any())
                {
                    TaskBL taskBL = new TaskBL();
                    lstTasks = taskBL.GetTasksByWorkItems(lstWorkLogManagement.Select(q => q.Id).ToList());

                    if (lstTasks != null && lstTasks.Any())
                    {
                        foreach (WorkLogManagement workLog in lstWorkLogManagement)
                        {
                            workLog.Tasks = lstTasks.Where(q => q.WorkLogID == workLog.Id).ToList();
                        }
                    }
                }
            }

            return lstWorkLogManagement;
        }

        private WorkLogManagement GetWorkLog(ListItem listItem)
        {
            return new WorkLogManagement()
            {
                Id = (int)listItem[WorkLogList.Id],
                WorkItemNo = (string)listItem[WorkLogList.WorkItemNo],
                Title = (string)listItem[WorkLogList.Title],
                PlannedStartTime = (DateTime?)listItem[WorkLogList.PlannedStartTime],
                PlannedEndTime = (DateTime?)listItem[WorkLogList.PlannedEndTime],
                Effort = (double)listItem[WorkLogList.Effort],
                Status = (string)listItem[WorkLogList.Status]
            };
        }
    }    
}