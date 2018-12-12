using System;

namespace Analytics.WebApi.Helpers
{
    public static class Common
    {
        public static string ConvertDate(string date)
        {
            return Convert.ToDateTime(date).AddDays(1).ToString("yyyy-MM-ddT18:30:00Z");
        }

        public static string GetStartDate(string date)
        {
            date = Convert.ToDateTime(date).ToString("yyyy-MM-ddT18:30:00Z");
            DateTime formattedDate = DateTime.ParseExact(date, "yyyy-MM-ddTHH:mm:ssZ", null);

            var startDate = new DateTime(formattedDate.Year, formattedDate.Month, 1);

            return startDate.ToString("yyyy-MM-ddTHH:mm:ssZ");
        }

        public static string GetEndDate(string date)
        {
            date = Convert.ToDateTime(date).ToString("yyyy-MM-ddT18:30:00Z");
            DateTime formattedDate = DateTime.ParseExact(date, "yyyy-MM-ddTHH:mm:ssZ", null);

            var startDate = new DateTime(formattedDate.Year, formattedDate.Month, 1);
            var endDate = startDate.AddMonths(1).AddDays(-1);

            return endDate.ToString("yyyy-MM-ddTHH:mm:ssZ");
        }
    }
}