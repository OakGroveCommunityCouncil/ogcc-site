using System.ComponentModel.DataAnnotations;

namespace API.Options;

/// <summary>
/// Configuration options
/// </summary>
public sealed record ApiOptions
{
    /// <summary>
    /// Section in configuration file where these options must be located
    /// </summary>
    public const string SectionName = "ApiOptions";

    /// <summary>
    /// API version
    /// </summary>
    [Required]
    [MinLength(1)]
    public required string Version { get; init; }
}