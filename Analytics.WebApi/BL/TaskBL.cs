using System;
using System.Collections.Generic;
using Analytics.WebApi.Helpers;
using Analytics.WebApi.Models;
using Microsoft.SharePoint.Client;
using System.Linq;
using System.Text;

namespace Analytics.WebApi.BL
{
    public class TaskBL : BaseBL
    {
        public List<TaskManagement> GetAllTasks()
        {
            CamlQuery query = CamlQuery.CreateAllItemsQuery();

            var items = ExecuteQuery(TaskList.Name, query);

            List<TaskManagement> lstTaskManagement = new List<TaskManagement>();

            foreach (ListItem listItem in items)
            {
                lstTaskManagement.Add(GetTask(listItem));
            }

            return lstTaskManagement;
        }

        public List<TaskManagement> GetTasksByDates(string startDate, string endDate)
        {
            CamlQuery query = new CamlQuery();
            query.ViewXml = "<View><Query><Where>"
                                + "<And>"
                                + "<Geq><FieldRef Name='" + TaskList.ActualEndTime + "' />"
                                + "<Value Type='DateTime' IncludeTimeValue='FALSE' >" + startDate
                                + "</Value></Geq>"
                                + "<Leq><FieldRef Name='" + TaskList.ActualEndTime + "' />"
                                + "<Value Type='DateTime' IncludeTimeValue='FALSE' >" + endDate
                                + "</Value></Leq>"
                                + "</And></Where></Query></view>";

            var items = ExecuteQuery(TaskList.Name, query);

            List<TaskManagement> lstTaskManagement = new List<TaskManagement>();

            foreach (ListItem listItem in items)
            {
                lstTaskManagement.Add(GetTask(listItem));
            }

            return lstTaskManagement;
        }

        public List<TaskManagement> GetTasksByWorkItems(List<int> workItems)
        {
            CamlQuery query = new CamlQuery();

            StringBuilder sbWorkItemsQuery = new StringBuilder();

            foreach (var id in workItems)
            {
                sbWorkItemsQuery.AppendFormat("<Value Type='Lookup'>{0}</Value>", id);
            }

            query.ViewXml = "<View><Query><Where>"
                                + "<In>"
                                + "<FieldRef Name='" + TaskList.WorkItemNo + "' LookupId='TRUE' />"
                                + "<Values>"
                                + sbWorkItemsQuery
                                + "</Values>"
                                + "</In>"
                                + "</Where></Query></View>";

            var items = ExecuteQuery(TaskList.Name, query);

            List<TaskManagement> lstTaskManagement = new List<TaskManagement>();

            foreach (ListItem listItem in items)
            {
                lstTaskManagement.Add(GetTask(listItem));
            }

            return lstTaskManagement;
        }

        public List<TaskWise> GetTaskWiseData(string startDate, string endDate)
        {
            WorkLogBL bl = new WorkLogBL();
            var lstWorkLog = bl.GetWorkLogByDates(startDate, endDate);

            if (lstWorkLog != null && lstWorkLog.Any())
            {
                var lstTaskManagement = GetTasksByWorkItems(lstWorkLog.Select(q => q.Id).ToList());

                var data = (from worklog in lstWorkLog
                            join task in lstTaskManagement on worklog.Id equals task.WorkLogID
                            group task by task.TaskType into grpByTask
                            orderby grpByTask.Key
                            select new TaskWise() { Task = grpByTask.Key, Effort = grpByTask.Sum(a => a.ActualEffort) }).ToList();

                return data;
            }

            return null;
        }

        private TaskManagement GetTask(ListItem listItem)
        {
            return new TaskManagement()
            {
                Id = (int)listItem[TaskList.Id],
                WorkLogID = ((FieldLookupValue)listItem[TaskList.WorkItemNo]).LookupId,
                WorkItemNo = ((FieldLookupValue)listItem[TaskList.WorkItemNo]).LookupValue,
                Title = (string)listItem[TaskList.Title],
                TaskType = (string)listItem[TaskList.TaskType],
                ActualStartTime = (DateTime?)listItem[TaskList.ActualStartTime],
                ActualEndTime = (DateTime?)listItem[TaskList.ActualEndTime],
                ActualEffort = (double)listItem[TaskList.ActualEffort],
                Status = (string)listItem[TaskList.Status],
                AssignedToID = ((FieldUserValue)listItem[TaskList.AssignedTo]).LookupId,
                AssignedTo = ((FieldUserValue)listItem[TaskList.AssignedTo]).LookupValue
            };
        }
    }
}