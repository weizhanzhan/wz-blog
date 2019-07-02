
import index from './index.vue'
import Vue from 'vue'

var vLoading = {
    bind: (el, binding) => {
        var loadingElement = document.createElement('div')
        var Loading = Vue.extend(index)
        var load = new Loading().$mount()

        el.loadingElement = load.$el

        if (binding.value) {
            var position = el.style.position
            if (position === 'relative' || position === 'absolute') { el.style.position = position } else { el.style.position = 'relative' }

            el.appendChild(load.$el)
        } else {
            if (loadingElement.parentNode !== null) {
                loadingElement.parentNode.removeChild(loadingElement)
            }
        }
    },
    update: (el, binding) => {
        if (binding.value) {
            if (el.loadingElement.parentNode === null) {
                var position = el.style.position
                if (position === 'relative' || position === 'absolute') { el.style.position = position } else { el.style.position = 'relative' }
                el.appendChild(el.loadingElement)
            }
            } else {
                if (el === el.loadingElement.parentNode) {
                    el.removeChild(el.loadingElement)
            }
        }
    },
    unbind: (el) => {
        if (el.loadingElement.parentNode === el) {
            el.removeChild(el.loadingElement)
        }
        el.loadingElement = null
    }
}

export default vLoading
