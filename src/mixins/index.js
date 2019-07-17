export default {
    data() {
        return {
            vloading: false,
            noTopTimer: null,
            scroll: false,
            size: 10,
            page: 1,
            totalCount: 0
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
        // window.onscroll = () => {

        //     // 变量t是滚动条滚动时，距离顶部的距离
        //     if (this.noTopTimer) {
        //         clearTimeout(this.noTopTimer)
        //     }
        //     this.noTopTimer = setTimeout(() => { // 节流
        //         console.log(12)
        //         var t = document.documentElement.scrollTop || document.body.scrollTop
        //         this.scroll = t > 300
        //     }, 100)
        // }
        this.init()
    }
}
