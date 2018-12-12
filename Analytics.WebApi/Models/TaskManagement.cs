using System;

namespace Analytics.WebApi.Models
{
    public class TaskManagement
    {
        public int Id { get; set; }

        public int WorkLogID { get; set; }

        public string WorkItemNo { get; set; }

        public string Title { get; set; }

        public string TaskType { get; set; }

        public DateTime? ActualStartTime { get; set; }

        public DateTime? ActualEndTime { get; set; }

        public double ActualEffort { get; set; }

        public string Status { get; set; }

        public string AssignedTo { get; set; }

        public int AssignedToID { get; set; }
    }
}