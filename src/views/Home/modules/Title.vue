<template>
  <div class="list-header">
    <a
      v-for="title in titleList"
      :key="title.id"
      :class="['link-tab',activeTitle===title.id?'active':'']"
      @click="activeTitle = title.id"
    >{{ title.title }}</a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        titleList: [
          { id: 1, title: '全部' },
          { id: 2, title: '杂谈' },
          { id: 3, title: 'Plan' }
        ],
        activeTitle: 1
      }
    }
  }
</script>

<style>
</style>
