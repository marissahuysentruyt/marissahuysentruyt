const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const eleventyImage = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // watches scss directory & copies it into dist/css 
  eleventyConfig.addWatchTarget('src/scss/');
  eleventyConfig.addPassthroughCopy('css/');

  // copies images
  eleventyConfig.addPassthroughCopy({ 'src/public/' : 'public/'});

  eleventyConfig.addShortcode("image", async function(src, alt, sizes) {
		let metadata = await eleventyImage(src, {
			urlPath: "/public/usedresources",
      outputDir: "./img/",
		});

		let imageAttributes = {
			alt,
			sizes,
			loading: "lazy",
			decoding: "async",
		};

		// You bet we throw an error on a missing alt (alt="" works okay)
		return eleventyImage.generateHTML(metadata, imageAttributes);
	});

  // Return your Object options:
  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "src/pages",
      output: "dist",
      layouts: "../layouts",
    }
  }
};
