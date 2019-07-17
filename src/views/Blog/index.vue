<template>
  <div class="all-container">
    <div class="blog-wrapper">
      <Header :scroll="scroll" />
      <div class="blog-container">
        <div class="blog-list">
          <div class="blog-list-container">
            <div class="list-header">
              <a
                class="link-tab title"
                @click="$router.back()"
              >  <i class="iconfont icon-back6" />{{ blog.title }}</a>
            </div>
            <mavon-editor
              v-model="blog.content"
              :toolbars-flag="false"
              :ishljs="true"
              :subfield="false"
              default-open="preview"
            />
          </div>
        </div>
        <Aside :no-header-top="noHeaderTop" />
      </div>
    </div>
  </div>
</template>

<script>
  import { getDetail } from '../../apis'
  import Aside from '../../components/Aside'
  import initial from '../../mixins'
  import Header from '../../components/Header'

  export default {
    components: { Header, Aside },
    // inject:['app'],
    mixins: [initial],
    data() {
      return {
        blog: {}
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
      }
    },
    methods: {
      init() {
        // this.vloading = true
        getDetail(this.$route.params.id)
          .then(res => {
            console.log(res)
            this.blog = res.data
          })
      },
      changePage() {
        this.init()
      }
    }
  }
</script>

<style>
@import "../../assets/style/blog.css";
.v-note-wrapper .v-note-panel.shadow{
  box-shadow: none !important
}
</style>
