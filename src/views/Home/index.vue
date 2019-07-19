<template>
  <div class="all-container">
    <div class="blog-wrapper">
      <Header :scroll="scroll" />
      <div class="blog-container">
        <div class="blog-list">
          <div class="blog-list-container">
            <Title />
            <List
              v-loading="vloading"
              :data="blogs"
            />
          </div>
          <NoMessage v-if="blogCounts==0" />
        </div>
        <Aside
          :no-header-top="noHeaderTop"
          :hot="blogs.slice(0,6)"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Aside from '../../components/Aside'
  import initial from '../../mixins'
  import Header from '../../components/Header'
  import Title from './modules/Title.vue'
  import List from './modules/List'
  import NoMessage from '../../components/NoMessage'
  import { getScrollTop, getScrollHeight, getWindowHeight } from '../../utils/common'
  import { getBlogs } from '../../apis'
  export default {
    name: 'Home',
    components: { Header, Aside, NoMessage, Title, List },
    mixins: [initial],
    data() {
      return {
        count: 1,
        blogs: [],
        blogCounts: 0,
        timer: null
      }
    },
    activated() {
      this.listenerScroll()
    },
    mounted() {
      this.listenerScroll()
    },
    methods: {
      init() {
        if (this.vloading) return
        this.vloading = true
        getBlogs(this.page, this.size)
          .then(({ data }) => {
            this.vloading = false
            this.blogCounts = data.blogs.length
            this.blogs = this.blogs.concat(data.blogs)
            this.totalCount = data.count
            if (data.blogs.length <= this.size) this.page++
          })
      },
      listenerScroll() {
        window.onscroll = () => {
          // 变量t是滚动条滚动时，距离顶部的距离
          if (this.noTopTimer) {
            clearTimeout(this.noTopTimer)
          }
          this.noTopTimer = setTimeout(() => { // 节流
            var t = document.documentElement.scrollTop || document.body.scrollTop
            this.scroll = t > 300
            clearTimeout(this.noTopTimer)
          }, 100)

          if (this.timer) { clearTimeout(this.timer) }
          this.timer = setTimeout(() => {
            if (getScrollTop() + getWindowHeight() === getScrollHeight()) {
              this.init()
              clearTimeout(this.timer)
            }
          }, 250)
        }
      }
    }
  }
</script>

<style>
@import "../../assets/style/blog.css";
</style>
