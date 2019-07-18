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
              ref="mavon"
              v-model="blog.content"
              :toolbars-flag="false"
              :ishljs="true"
              :subfield="false"
              default-open="preview"
              :navigation="true"
              @click.native="buildNavigation"
            />
          </div>
        </div>
        <Aside :no-header-top="noHeaderTop">
          <div
            id="navigation"
            class="wx_navigation"
          />
        </Aside>
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
    },
    methods: {
      init() {
        // this.vloading = true
        getDetail(this.$route.params.id)
          .then(res => {
            this.blog = res.data
            this.$nextTick(() => {
              this.buildNavigation()
            })
          })
      },
      changePage() {
        this.init()
      },
      buildNavigation() {
        // console.log(123)
        // console.log(this.$refs.mavon.d_render)
        var a = document.getElementById('navigation')
        a.innerHTML = this.$refs.mavon.d_render // mavmon根据marodown内容生成的dom

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
            console.log(node)
            node.onclick = function() {
              window.location.replace('#' + this.children[0].id)
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
        console.log(nodes)
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
