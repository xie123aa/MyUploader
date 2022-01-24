<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        defaultActive: this.$route.name
      }
    },
    methods: {
      redirectUrl(val){
        this.$router.push(val);
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .my-container {
    margin: 0 auto;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .my-header {
    background-color: deepskyblue;
    height: 20px;
    font-size: large;
    display: flex;
    justify-content:center;
    align-items:center;
  }
  .my-main {
    margin: 1em 1em;
  }
</style>
