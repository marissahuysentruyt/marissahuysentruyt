const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const eleventyImage = require('@11ty/eleventy-img');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // watches scss directory & copies it into dist/css 
  eleventyConfig.addWatchTarget('src/scss/');
  eleventyConfig.addPassthroughCopy('css/');
  
  // watches & copies JS files
  eleventyConfig.addWatchTarget('src/scripts/');
  eleventyConfig.addPassthroughCopy({ 'src/scripts': 'scripts' });

  // copies images
  eleventyConfig.addPassthroughCopy({ 'src/public/' : 'public/' });

  // this is the synchronous shortcode, but the individiual words of the alt text
  // comes in as individual attributes on the image element? but not if you 
  // console.log the imageAttributes data
  // eleventyConfig.addNunjucksShortcode("image", function(src, imageClass, alt) {
  //   if (alt === undefined) {
  //     throw new Error(`Missing \`alt\` on image from: ${src}`);
  //   }

  //   let imageAttributes = {
  //     urlPath: 'public/usedresources/' + `${src}`,
  //     altText: `${alt}`,
  //     class: `${imageClass}`
  //   };
    
  //   console.log(imageAttributes)

	// 	return `
  //     <img src=${imageAttributes.urlPath} alt=${imageAttributes.altText} class=${imageAttributes.class} />
  //   `;
	// });

   // this is the asynchronous shortcode (which cannot be used in a macro 😞)
   eleventyConfig.addNunjucksAsyncShortcode("image", async  function(src, imageClass, altText) {
    if (altText === undefined) {
      throw new Error(`Missing \`alt\` on image from: ${src}`);
    }

    let imageData = await eleventyImage(src, {
      outputDir: 'dist/public/usedresources',
      urlPath: '/public/usedresources/',
      formats: ['svg', 'png', 'jpeg']
    })

    let imageAttributes = {
      alt: `${altText}`,
      class: `${imageClass}`, 
      loading: 'lazy', 
      decoding: 'async'
    };

		return eleventyImage.generateHTML(imageData, imageAttributes);
	});

  // Return your Object options:
  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "src/pages",
      output: "dist",
      includes: "../layouts",
    }
  }
};
