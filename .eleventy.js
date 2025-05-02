const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const eleventyImage = require("@11ty/eleventy-img");
const { JSDOM } = require("jsdom");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // watches scss & scripts directories for changes
  // (scripts in package.json declare where the compiled code goes)
  eleventyConfig.addWatchTarget("src/scss/");
  eleventyConfig.addWatchTarget("src/scripts/");

  // copies images
  eleventyConfig.addPassthroughCopy({ "src/public/": "public/" });

  // this is the synchronous shortcode and can be used in a macro
  eleventyConfig.addNunjucksShortcode("image", function (src, imageClass, alt) {
    if (!src) {
      console.error(`Missing image source`);
      return "";
    }

    if (!alt) {
      console.error(`Missing \`alt\` on image from: ${src}`);
    }

    const imagePath = `/public/usedresources/${String(src).replace(/^\//, "")}`;

    return `
      <img loading="lazy" src=${imagePath} alt="${alt}" class=${imageClass || ""} />
    `;
  });

  // this is the asynchronous shortcode (which cannot be used in a macro 😞)
  eleventyConfig.addNunjucksAsyncShortcode(
    "asyncImage",
    async function (src, imageClass, altText) {
      if (!src) {
        throw new Error(`Missing image source`);
      }

      if (altText === undefined) {
        throw new Error(`Missing \`alt\` on image from: ${src}`);
      }

      let imageData = await eleventyImage(src, {
        outputDir: "dist/public/usedresources",
        urlPath: "/public/usedresources/",
        formats: ["svg", "png", "webp", "jpeg"],
        sharpOptions: {
          animated: true,
        },
        sharpJpegOptions: {
          quality: 80,
          progressive: true,
        },
        cacheOptions: {
          duration: "1y",
          directory: ".cache",
        },
      });

      let imageAttributes = {
        alt: altText,
        class: imageClass,
        loading: "lazy",
        decoding: "async",
      };

      return eleventyImage.generateHTML(imageData, imageAttributes);
    }
  );

  // Return your Object options:
  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "src/pages",
      output: "dist",
      includes: "../layouts",
    },
  };
};
