export default {
    data() {
        return {
            vloading: false,
            timer: null,
            scroll: false
        }
    },
    computed: {
        noHeaderTop() {
            return {
                top: this.scroll ? '10px' : '80px'
            }
        }
    },
    beforeRouteLeave(to, from, next) {
        clearTimeout(this.timer)
        next()
    },
    mounted() {
        window.onscroll = () => {
            // 变量t是滚动条滚动时，距离顶部的距离
            if (this.timer) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => { // 节流
                var t = document.documentElement.scrollTop || document.body.scrollTop
                this.scroll = t > 300
            }, 100)
        }
        this.init()
    }
}
