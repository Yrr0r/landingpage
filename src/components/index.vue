<template>
  <div>
    <!-- container | row -> bootstrap -->
    <section class="container">
      <div class="row panel">
        <article class="content" v-html="articleContent"></article>
      </div>
    </section>
  </div>
</template>

<script>
import about from '../assets/about.md'
import marked from 'marked'

export default {
  data(){return{
    about
  }},
  computed:{
    articleContent: function(){
      return marked(about)
    }
  }
}
</script>

<style lang="less" scoped>
.container{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.panel{
  padding: 15px;
}

@import "../assets/markdown.less";
</style>
