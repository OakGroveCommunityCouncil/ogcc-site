using API.Controllers;
using Asp.Versioning;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using NUnit.Framework;

namespace API.Tests;

[TestFixture]
public sealed class VersionControllerTests
{
    [Test]
    public void GetVersion_Always_ReturnsRequestedApiVersion()
    {
        // ARRANGE
        const int apiVersion = 123; // not a real version but doesn't matter - that is enforced outside this controller
        VersionController controller = new();
        controller.ControllerContext = new ControllerContext
        {
            HttpContext = new DefaultHttpContext()
        };
        controller.ControllerContext.HttpContext.ApiVersioningFeature.RequestedApiVersion = new ApiVersion(apiVersion);

        // ACT
        ContentHttpResult actionResult = controller.GetVersion();

        // ASSERT
        Assert.That(actionResult, Is.Not.Null);
        Assert.That(actionResult.StatusCode, Is.EqualTo(StatusCodes.Status200OK));
        Assert.That(actionResult.ResponseContent, Is.EqualTo(apiVersion.ToString()));
    }
}