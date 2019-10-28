/**
 * Eleventy 설정 파일
 *
 * 함수에 넘어오는 인자(eleventyConfig)를 통해 여러 설정 관련 api를 실행할 수 있다.
 * 반환하는 객체에 여러 설정 값을 지정할 수 있다.
 *
 * 문서 : https://www.11ty.io/docs/config/
 */
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'node_modules/bulma/css/bulma.min.css': 'css/bulma.min.css',
    'src/css/style.css': 'css/style.css',
    'src/favicon.ico': 'favicon.ico'
  });

  return {
    dir: {
      input: 'src',
      includes: '_includes'
    },
    htmlTemplateEngine: 'njk'
  };
};
