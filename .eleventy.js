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

  /**
   * 포스트에 첨부되는 이미지들은 post-img 폴더에 포스트의 경로와 동일하게 위치시키며,
   * 빌드 시 포스트들이 생성되는 동일한 위치로 복사한다.
   */
  eleventyConfig.addPassthroughCopy({ 'src/post-img': '.' });

  return {
    dir: {
      input: 'src',
      includes: '_includes'
    },
    htmlTemplateEngine: 'njk'
  };
};
