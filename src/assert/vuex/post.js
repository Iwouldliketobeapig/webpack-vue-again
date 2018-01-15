import axios from 'axios';

const modulePost = {
  state: {
    posts: {}
  },
  mutations: {
    posts (list) {
      state.posts = list;
    }
  },
  actions: {
    posts (context) {
      axios.get('/api/v2/posts')
      .then(res => {
        context.commit(`posts(${res.data.data})`);
      })
    }
  }
}

export default modulePost;