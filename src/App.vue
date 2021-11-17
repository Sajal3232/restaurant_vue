<template>
  <div id="app">
    <compSignUp/>
  </div>
</template>

<script>
import compSignUp from './components/SignUp.vue'
export default {

components : {
  compSignUp : compSignUp
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
  margin-top: 60px;
}
</style>
