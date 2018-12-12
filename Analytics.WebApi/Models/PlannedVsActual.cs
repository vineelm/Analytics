namespace Analytics.WebApi.Models
{
    public class PlannedVsActual
    {
        public string WorkItemNo { get; set; }

        public double PlannedEffort { get; set; }

        public double ActualEffort { get; set; }
    }
}