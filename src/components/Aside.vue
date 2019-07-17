<template>
  <div class="blog-aside">
    <div
      class="aside-list"
      :style="[noHeaderTop]"
    >
      <div class="aside-item">
        <Account />
      </div>
      <div class="aside-item noback">
        <Eyes />
      </div>
    </div>
  </div>
</template>

<script>
  import Account from './Account'
  import Eyes from './Eyes'
  export default {
    components: {
      Account, Eyes

    },
    props: {
      noHeaderTop: Object
    }
  }
</script>

<style>

</style>
