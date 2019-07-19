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
              :navigation="false"
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
      // this.$nextTick(function() {
      //   window.addEventListener('scroll', this.onScroll)
      // })

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
      onScroll() {
        const scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        // 586、1063分别为第二个和第三个锚点对应的距离
        console.log(scrolled)
        // if (scrolled >= 1063) {
        //   this.steps.active = 2
        // } else if (scrolled < 1063 && scrolled >= 586) {
        //   this.steps.active = 1
        // } else {
        //   this.steps.active = 0
        // }
      },
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
        var a = document.getElementById('navigation')
        a.innerHTML = this.$refs.mavon.d_render // mavmon根据marodown内容生成的dom

        const nodes = a.children
        var newDoms = []

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
            node.classList.add('navigator-item')

            const nodeArr = node.innerHTML.split('</a>')
            const id = nodeArr[0].replace(/[^0-9]+/g, '')
            const content = nodeArr[1]

            var childs = node.childNodes
            for (var index = childs.length - 1; index >= 0; index--) {
              node.removeChild(childs[index])
            }

            const a = document.createElement('a')
            a.id = '_' + id
            a.innerHTML = content
            node.appendChild(a)
            // console.log(id, content, node.tagName)
            node.onclick = function() {
              window.location.replace('#' + this.children[0].id)
            }
            newDoms.push(node)
          }
        }
        const sliceDoms = [] // 归类好的节点树

        newDoms.forEach((dom, i) => { // 把标题归类 每部分的标题组合到一起
          const level = dom.tagName.substr(1)
          const upLevel = newDoms[i - 1] ? newDoms[i - 1].tagName.substr(1) : ''

          if (upLevel) {
            if (level > upLevel) {
              sliceDoms[sliceDoms.length - 1].push(dom)
            } else if (level > sliceDoms[sliceDoms.length - 1][0].tagName.substr(1)) {
              sliceDoms[sliceDoms.length - 1].push(dom)
            } else {
              sliceDoms.push([dom])
            }
          } else {
            sliceDoms.push([dom])
          }
        })
        sliceDoms.forEach(doms => {
          const thisTitleMaxId = doms[0].tagName.substr(1)
          doms.forEach(dom => {
            const domHeadingLevel = dom.tagName.substr(1) - thisTitleMaxId + 1
            dom.classList.add('heading_' + domHeadingLevel)
            console.log(domHeadingLevel)
          })
        })
        console.log(sliceDoms)
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
