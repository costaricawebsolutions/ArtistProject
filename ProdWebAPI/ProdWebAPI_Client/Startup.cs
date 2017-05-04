using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ProdWebAPI_Client.Startup))]
namespace ProdWebAPI_Client
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
