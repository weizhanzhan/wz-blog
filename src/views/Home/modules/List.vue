<template>
  <div>
    <ul class="list-wrapper">
      <li
        v-for="blog in data"
        :key="blog._id"
        class="list-item"
      >
        <div class="blog-box">
          <div class="info-box">
            <div class="info-row-meta">
              {{ blog.classify }} · {{ blog.author }} · {{ blog.date }}
            </div>
            <div
              class="info-row-title"
              @click="check(blog)"
            >
              {{ blog.title }}
            </div>
            <div class="info-row-action">
              <span>
                <i class="iconfont icon-icon-test" /> {{ blog.likes }}</span>
              <span><i class="iconfont icon-pinglun2" /> {{ blog.comment.length }}</span>
              <span><i class="iconfont icon-fenxiang" /></span>
            </div>
          </div>
          <div class="img-box">
            <img
              :src="blog.img"
              width="20"
              alt=""
            >
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      check(blog) {
        this.$router.push({ path: '/blog/' + blog._id })
      }
    }
  }
</script>

<style>
</style>
