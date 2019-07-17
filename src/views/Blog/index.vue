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
              > <i class="iconfont icon-back6" />{{ blog.title }}</a>
            </div>
            <mavon-editor
              ref="test"
              v-model="blog.content"
              :toolbars-flag="true"
              :ishljs="true"
              :subfield="true"
              default-open="preview"
              :navigation="true"
              @click.native="test"
            />
          </div>
        </div>
        <Aside :no-header-top="noHeaderTop" />
      </div>
    </div>
    <div id="test" />
  </div>
</template>

<script>
  import { getDetail } from '../../apis'
  import Aside from '../../components/Aside'
  import initial from '../../mixins'
  import Header from '../../components/Header'

  export default {
    name: 'BlogDetail',
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
      window.scrollTo(0, 0)
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
      console.log(123)
      this.$nextTick(() => {
        console.log(this.$refs.test)
      })
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
      },
      test(e) {
        console.log(this.$refs.test.$refs.navigationContent, this.$refs.test.d_render)
        var a = document.getElementById('test')
        a.innerHTML = this.$refs.test.d_render

        const nodes = a.children
        if (nodes.length) {
          for (let i = 0; i < nodes.length; i++) {
            judageH(nodes[i], i, nodes)
          }
        }
        function judageH(node, i, nodes) {
          const reg = /^H[1-6]{1}$/
          if (!reg.exec(node.tagName)) {
            node.style.display = 'none'
          } else {
            node.onclick = function() {
              console.log(this.children[0].id)
              window.location.href = '#' + this.children[0].id
              // const vShowContent = $vm.$refs.vShowContent
              // const vNoteEdit = $vm.$refs.vNoteEdit
              // if ($vm.s_subfield) {
              //   // 双栏
              //   if ($vm.s_preview_switch) {
              //     // 编辑预览
              //     vNoteEdit.scrollTop = vShowContent.children[i].offsetTop * (vNoteEdit.scrollHeight - vNoteEdit.offsetHeight) / (vShowContent.scrollHeight - vShowContent.offsetHeight)
              //   } else {
              //     // todo 编辑
              //   }
              // } else {
              //   // 单栏
              //   if ($vm.s_preview_switch) {
              //     // 预览
              //     vShowContent.scrollTop = vShowContent.children[i].offsetTop
              //   } else {
              //     // todo 编辑
              //   }
              // }
            }
          }
        }
      }
    }
  }
</script>

<style>
@import "../../assets/style/blog.css";
.v-note-wrapper .v-note-panel.shadow {
  box-shadow: none !important;
}
</style>
