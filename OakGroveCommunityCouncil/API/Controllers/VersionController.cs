using Asp.Versioning;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

/// <summary>
/// Metadata about this API
/// </summary>
[ApiController]
[Route("[controller]")]
[ApiVersion(Constants.ApiVersion1)]
public sealed class VersionController : ControllerBase
{
    /// <summary>
    /// Retrieve the current API version
    /// </summary>
    /// <remarks>
    /// There will always be an API version in each request, else the request will be auto-rejected before it reaches an
    /// endpoint
    /// </remarks>
    [HttpGet]
    public ContentHttpResult GetVersion()
    {
        return TypedResults.Text(ControllerContext.HttpContext.ApiVersioningFeature.RequestedApiVersion!.ToString(),
            statusCode: StatusCodes.Status200OK);
    }
}