<template>
  <div id="app" class="container">
    <compHeader/>
    <router-view></router-view>
  </div>
</template>

<script>
import compHeader from './components/Header.vue'
export default {
components : {
  compHeader
}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

body{
  padding: 0;
  margin: 0;
}
</style>
