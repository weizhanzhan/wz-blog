<template>
  <div class="blog-aside">
    <div
      class="aside-list"
      :style="[noHeaderTop]"
    >
      <div
        v-if="hot.length"
        class="aside-item"
      >
        <Hot :data="hot" />
      </div>
      <div class="aside-item">
        <Account />
      </div>
      <div class="aside-item noback">
        <!-- <Account /> -->
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
  import Account from './Account'
  import Hot from './Hot'
  export default {
    components: {
      Account, Hot

    },
    props: {
      noHeaderTop: Object,
      hot: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style>
</style>
