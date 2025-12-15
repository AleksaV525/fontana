const products = require("./src/_data/products.json");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/styles");

  // Generisanje stranica za svaki proizvod
  eleventyConfig.addCollection("productPages", function() {
    return products.map((product) => ({
      ...product,
      // Korigovana putanja (prema novoj logici koju ste mi dali, koristeći id)
      url: `/proizvodi/${product.id}/` 
    }));
  });

  // Ostavljam prazan blok jer je addTemplateFormats nepotreban ovde, a passthrough je dupliran.

  return {
    // KLJUČNA PROMENA OVDE: pathPrefix
    pathPrefix: "/fontana/", 
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    }
  };
};
