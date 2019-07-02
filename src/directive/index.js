
import vLoading from './Loading'

vLoading.install = function(Vue) {
    Vue.directive('loading', vLoading)
}

export default vLoading
