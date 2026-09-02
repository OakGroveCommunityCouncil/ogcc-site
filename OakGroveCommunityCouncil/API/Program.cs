using API.Options;
using Asp.Versioning;
using Asp.Versioning.ApiExplorer;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace API;

public class Program
{
    public static void Main(string [] args)
    {
        WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

        builder.Services.AddControllers();
        builder.Services.AddAuthorization();
        builder.Services.AddApiVersioning(opt =>
            {
                opt.AssumeDefaultVersionWhenUnspecified = false; // version must always be provided
                opt.ApiVersionReader = new HeaderApiVersionReader(Constants.VersionHeaderName);
            })
            .AddApiExplorer(opt =>
                // version format will be like "v1" (but the actual version over the wire will just be the integer)
            {
                opt.GroupNameFormat = "'v'V";
            })
            .AddOpenApi();

        builder.Services.AddOptionsWithValidateOnStart<ApiOptions>()
            .ValidateDataAnnotations()
            .Bind(builder.Configuration.GetSection(ApiOptions.SectionName));

        WebApplication app = builder.Build();

        app.MapControllers();

        if (app.Environment.IsDevelopment())
        {
            app.MapOpenApi()
                .WithDocumentPerVersion(); // support versions of the API

            app.UseSwaggerUI(options =>
            {
                foreach (ApiVersionDescription description in app.DescribeApiVersions())
                {
                    options.SwaggerEndpoint(
                        $"/openapi/{description.GroupName}.json", // add each version at the path exported by ASP.NET
                        description.GroupName);
                }
            });
        }

        app.UseAuthorization();

        app.Run();
    }
}