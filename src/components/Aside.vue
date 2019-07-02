<template>
  <div class="blog-aside">
    <div
      class="aside-list"
      :style="[noHeaderTop]"
    >
      <div class="aside-item">
        <Account />
      </div>
      <div class="aside-item" />
    </div>
  </div>
</template>

<script>
  import Account from './Account'

  export default {
    components: {
      Account

    },
    props: {
      noHeaderTop: Object
    }
  }
</script>

<style>

</style>
