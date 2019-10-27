module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'node_modules/bulma/css/bulma.min.css': 'css/bulma.min.css',
    'style.css': 'css/style.css',
    'favicon.ico': 'favicon.ico'
  });

  /**
   * 포스트에 첨부되는 이미지들은 post-img 폴더에 포스트의 경로와 동일하게 위치시키며,
   * 빌드 시 포스트들이 생성되는 동일한 위치로 복사한다.
   */
  eleventyConfig.addPassthroughCopy({ 'post-img': '.' });

  return {
    htmlTemplateEngine: 'njk'
  };
};
