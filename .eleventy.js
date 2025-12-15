const products = require("./src/_data/products.json");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/styles");

  // Generisanje stranica za svaki proizvod
  eleventyConfig.addCollection("productPages", function() {
    return products.map((product, idx) => ({
      ...product,
      url: `/products/${idx}/`
    }));
  });

  // Kreiranje stranica po proizvodu
  products.forEach((product, idx) => {
    eleventyConfig.addTemplateFormats("njk");
    eleventyConfig.addPassthroughCopy("src/img");
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    }
  };
};
