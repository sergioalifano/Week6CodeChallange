using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Week6Code_Challange.Startup))]
namespace Week6Code_Challange
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
