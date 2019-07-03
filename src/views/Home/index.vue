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
        <Aside :no-header-top="noHeaderTop" />
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
        pageSize: 10,
        currentPage: 1,
        totalPage: 1,
        blogs: [],
        searchBlog: ''
      }
    },
    computed: {
      filterBlog() {
        return this.blogs.filter(blog => {
          return blog.title.match(this.searchBlog)
        })
      }
    },
    methods: {
      init() {
        this.vloading = true
        getBlogs(this.currentPage, this.pageSize)
          .then(res => {
            this.vloading = false
            this.blogs = res.data.blogs
            this.totalPage = res.data.count
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
