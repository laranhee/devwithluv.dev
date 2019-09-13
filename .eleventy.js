module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'node_modules/bulma/css/bulma.min.css': 'css/bulma.min.css',
    'favicon.ico': 'favicon.ico'
  });

  return {
    htmlTemplateEngine: 'njk'
  };
};
