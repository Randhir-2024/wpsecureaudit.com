module.exports = function(eleventyConfig) {
  // Pass through copy for the CMS admin directory and uploaded assets
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/favicon.svg");

  // Date formatting filter
  eleventyConfig.addFilter("postDate", (dateObj) => {
    const d = new Date(dateObj);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[d.getMonth()]} ${d.getFullYear()}`;
  });

  // Folder-based Collections definitions
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });
  eleventyConfig.addCollection("guides", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/guides/*.md");
  });
  eleventyConfig.addCollection("advisories", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/advisories/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
