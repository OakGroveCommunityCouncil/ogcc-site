namespace API;

public class Program
{
    public static void Main(string [] args)
    {
        WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

        builder.Services.AddAuthorization();
        builder.Services.AddOpenApi();

        WebApplication app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.MapOpenApi("/swagger/v1/swagger.json"); // add OpenAPI output at path expected by SwaggerUI

            app.UseSwaggerUI();
        }

        app.UseAuthorization();

        app.Run();
    }
}