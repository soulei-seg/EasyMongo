<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Title msg="Easy Mongo Project"/>
  </div>
</template>

<script>
import Title from './components/Accueil.vue'

export default {
  name: 'app',
  components: {
    Title
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
