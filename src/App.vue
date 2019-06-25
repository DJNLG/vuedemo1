<template>
  <div id="app">
    <Headnav></Headnav>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
import Headnav from './components/Headnav'
export default {
  components: {Headnav},
  component: {Headnav},
  name: 'App'
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
