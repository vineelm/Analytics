using Microsoft.SharePoint.Client;
using System;
using System.Configuration;

namespace Analytics.WebApi.BL
{
    public class BaseBL
    {
        public ListItemCollection ExecuteQuery(string listName, CamlQuery query)
        {
            try
            {
                ClientContext context = new ClientContext(ConfigurationManager.AppSettings["SPSite"]);

                List list = context.Web.Lists.GetByTitle(listName);

                ListItemCollection items = list.GetItems(query);

                context.Load(items);
                context.ExecuteQuery();

                return items;
            }
            catch (Exception ex)
            {

            }

            return null;
        }
    }
}