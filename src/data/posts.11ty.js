class posts {
  data() {
    return {
      permalink: 'posts.json',
      eleventyExcludeFromCollections: true
    };
  }

  render(data) {
    const output = data.collections.all.map(post => {
      return {
        title: post.data.title,
        url: `https://devwithluv.dev${post.url}`,
        content: post.templateContent
      };
    });
    return JSON.stringify(output, undefined, 2);
  }
}

module.exports = posts;
