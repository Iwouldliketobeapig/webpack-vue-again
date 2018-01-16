import axios from 'axios';

const modulePost = {
  state: {
    posts: {}
  },
  getters: {
    getPosts: state => {
      return state.posts
    }
  },
  mutations: {
    posts (state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    posts (context, options) {
      axios.get('/api/v2/posts', {
        params: options
      })
      .then(res => {
        context.commit(`posts`, res.data.data);
      })
    }
  }
}

export default modulePost;