<template>
  <div class="blog-topnav-wrapper">
    <header :class="['main-header',scroll?'no-header':'']" />
  </div>
</template>

<script>
  export default {
    props: {
      scroll: Boolean
    }
  }
</script>

<style>
</style>
