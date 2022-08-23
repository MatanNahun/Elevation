const tweeterLogic = tweeterModule();
const tweeterView = tweeterRender();

tweeterView.renderPosts(tweeterLogic.getPosts());
