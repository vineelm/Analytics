using System;
using System.Collections.Generic;

namespace Analytics.WebApi.Models
{
    public class WorkLogManagement
    {
        public int Id { get; set; }

        public string WorkItemNo { get; set; }

        public string Title { get; set; }

        public DateTime? PlannedStartTime { get; set; }

        public DateTime? PlannedEndTime { get; set; }

        public double Effort { get; set; }

        public string Status { get; set; }

        public List<TaskManagement> Tasks { get; set; }
    }
}