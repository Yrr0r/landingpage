<template>
  <div id="app">

    <!-- bootstrap-vue 的导航栏 -->
    <!-- https://bootstrap-vue.js.org/docs/components/nav -->
    <b-navbar toggleable="lg" type="dark" variant="yrr0r" fixed="top">
      <b-navbar-brand to="/">Yrr0r</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <!-- 顶部横幅里的链接, b-nav-item -->
          <b-nav-item to="https://www.yrr0r.net" >博客</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- 正文 -->
    <index />

    <footer>
      <p class="friends">
        友链: 
        <!-- <b-link v-for="f in friends" :key="f.text" :to="f.url">{{f.text}}</b-link> -->
        <b-link to="#">我自己</b-link>
        <b-link to="https://amaki-aria.github.io">Amaki Aria</b-link>
      </p>
      <p>Yrr0r. With love.</p>
    </footer>
  </div>
</template>

<script>
import index from './components/index.vue'
//import friends from './assets/friends.json'

export default {
  name: 'App',
  components: {
    index
  },
  /*data(){return{
    friends
  }}*/
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

footer{
  text-align: center;
  p{
    line-height: normal;
    margin: 0.8rem;
  }
  p.friends a{
    margin: 0.5rem;
  }
}

// bootstrap variant
.bg-yrr0r{
  background-color: rgba(0, 0, 0, 0.5);
  // background-color: rgba(56, 56, 56, 0.92) !important; 我
  backdrop-filter: saturate(180%) blur(5px); // 来加个特技(我这只有 chrome 有效果)
}

// 网站名
.nav-brand{
  &:hover{

  }
  &:active{

  }
}

// 导航链接
.nav-link{
  &:hover{

  }
  &:active{
    
  }
}

</style>
