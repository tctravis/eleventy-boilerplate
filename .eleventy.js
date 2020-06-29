const htmlmin = require("html-minifier");
//const pluginSass = require("eleventy-plugin-sass");

module.exports = function(eleventyConfig) {

      // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath.indexOf(".html") > -1) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  //eleventyConfig.addPlugin(pluginSass, {});

  //eleventyConfig.addPassthroughCopy({ "src/site/css" });

  return {
    templateFormats: ["md", "njk", "html", "liquid", "css"],
    dir: {
      data: "_includes/data",
      includes: "_includes/templates",
      input: "src/site",
      output: "dist"
    }
  };
  
};