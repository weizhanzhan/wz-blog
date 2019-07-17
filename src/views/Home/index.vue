<template>
  <div class="all-container">
    <div class="blog-wrapper">
      <Header :scroll="scroll" />
      <div class="blog-container">
        <div class="blog-list">
          <div class="blog-list-container">
            <div class="list-header">
              <a class="link-tab active">全部</a>
              <a class="link-tab">杂谈</a>
              <a class="link-tab">计划</a>
            </div>
            <ul
              v-loading="vloading"
              class="list-wrapper"
            >
              <li
                v-for="(blog,index) in filterBlog"
                :key="index"
                class="list-item"
              >
                <div class="blog-box">
                  <div class="info-box">
                    <div class="info-row-meta">
                      {{ blog.author }} · {{ blog.classify }} · {{ blog.date }}
                    </div>
                    <div
                      class="info-row-title"
                      @click="check(blog)"
                    >
                      {{ blog.title }}
                    </div>
                    <div class="info-row-action">
                      <span><i class="iconfont icon-icon-test" /> {{ blog.likes }}</span>
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
          <NoMessage v-if="blogCounts==0" />
        </div>
        <Aside :no-header-top="noHeaderTop" />
      </div>
    </div>
  </div>
</template>

<script>
  import Aside from '../../components/Aside'
  import initial from '../../mixins'
  import Header from '../../components/Header'
  import NoMessage from '../../components/NoMessage'
  import { getScrollTop, getScrollHeight, getWindowHeight } from '../../utils/common'
  import { getBlogs } from '../../apis'
  export default {
    components: { Header, Aside, NoMessage },
    // inject:['app'],
    mixins: [initial],
    data() {
      return {
        count: 1,
        blogs: [],
        blogCounts: 0,
        searchBlog: '',
        timer: null
      }
    },
    computed: {
      filterBlog() {
        return this.blogs.filter(blog => {
          return blog.title.match(this.searchBlog)
        })
      }
    },
    mounted() {
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
            // console.log('已经到最底部了！!')
          }
        }, 250)
      }
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
      changePage() {
        this.init()
      },
      check(blog) {
        this.$router.push({ path: '/blog/' + blog._id })
      }
    }
  }
</script>

<style>
@import "../../assets/style/blog.css";
</style>
