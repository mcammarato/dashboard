using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Dashboard.Models
{
    public interface IApiServiceConfig
    {
        string ApiUser { get; }
        string ApiToken { get; }
    }
        
    class ApiSerivceConfig : IApiServiceConfig
    {
        public string ApiUser { get; set; }
        public string ApiToken { get; set; }

        public ApiSerivceConfig()
        {
            ApiUser = System.Configuration.ConfigurationManager.AppSettings[""];

            var obj = new ApiSerivceConfig();
            obj.ApiUser = "USER";
            obj.ApiToken = "TOKEN";
            new TestService(obj);
        }
    }

    public class TestService
    {
        public TestService(IApiServiceConfig config)
        {
            //config.ApiUser
        }
    }
}