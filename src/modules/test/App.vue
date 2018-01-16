<template>
  <div class="index" slot="content">
    <img class="index-icon" src="./imgs/index.png"/>
    <button @click="getPosts">这是一个测试按钮</button>
    {{postList}}
  </div>
</template>
<script>
  import './css/test.scss';
  import { mpaGetters, mapActions } from 'vuex';
  export default {
    name: 'index',
    data () {
      return {}
    },
    computed: {
      postList () {
        return this.$store.state.post
      }
    },
    methods: {
      getPosts () {
        this.$store.dispatch('posts', {
          embed: 'user',
          start: 30
        });
      }
    }
  };

</script>
<style lang="scss">
  .index{
    display: flex;
    margin: 60px 0px;
    flex-direction: column;
    align-items: center;
    &-icon{
      height: 200px;
      margin-bottom: 20px;
    }
  }
</style>