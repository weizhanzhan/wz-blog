<template>
  <div id="app">
    <keep-alive :include="keepRoutes">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        keepRoutes: ['Home']
      }
    }
  }
</script>

<style>
</style>
