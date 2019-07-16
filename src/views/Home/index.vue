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
        </div>
        <!-- <Aside :no-header-top="noHeaderTop" /> -->
      </div>
    </div>
  </div>
</template>

<script>
  import { getBlogs } from '../../apis'
  import Aside from '../../components/Aside'
  import initial from '../../mixins'
  import Header from '../../components/Header'
  export default {
    components: { Header, Aside },
    // inject:['app'],
    mixins: [initial],
    data() {
      return {
        size: 10,
        page: 1,
        totalCount: 0,
        count: 1,
        blogs: [],

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
      // 滚动条在Y轴上的滚动距离
      function getScrollTop() {
        var scrollTop = 0; var bodyScrollTop = 0; var documentScrollTop = 0
        if (document.body) {
          bodyScrollTop = document.body.scrollTop
        }
        if (document.documentElement) {
          documentScrollTop = document.documentElement.scrollTop
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop
        return scrollTop
      }

      // 文档的总高度

      function getScrollHeight() {
        var scrollHeight = 0; var bodyScrollHeight = 0; var documentScrollHeight = 0
        if (document.body) {
          bodyScrollHeight = document.body.scrollHeight
        }
        if (document.documentElement) {
          documentScrollHeight = document.documentElement.scrollHeight
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight
        return scrollHeight
      }

      // 浏览器视口的高度

      function getWindowHeight() {
        var windowHeight = 0
        if (document.compatMode === 'CSS1Compat') {
          windowHeight = document.documentElement.clientHeight
        } else {
          windowHeight = document.body.clientHeight
        }
        return windowHeight
      }

      window.onscroll = () => {
        if (this.timer) { clearTimeout(this.timer) }
        this.timer = setTimeout(() => {
          if (getScrollTop() + getWindowHeight() === getScrollHeight()) {
            // this.init()
            console.log('已经到最底部了！!')
          }
        }, 250)
      }
    },
    methods: {
      init() {
        if (this.vloading) return
        this.vloading = true
        getBlogs(this.page, this.size)
          .then(res => {
            console.log(res)
            this.vloading = false
            this.page++
            this.blogs = res.data.blogs
            this.totalCount = res.data.count
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
