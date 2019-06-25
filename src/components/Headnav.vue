<template>
  <div>
    <ul>
      <router-link to="/home"><li>首页</li></router-link>
      <router-link to="/sec"><li>二页</li></router-link>
      <router-link to="/third"><li>三页</li></router-link>
    </ul>
  </div>
</template>

<script>

// import {Mapstates} from 'vuex'
export default {
  name: 'Headnav'
}
</script>

<style scoped>
  ul{
    list-style: none;
  }
</style>
