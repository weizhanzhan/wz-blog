import axios from 'axios'
axios.defaults.baseURL = 'http://111.231.59.56:5000/api'

/*  获取博客列表*/
export const getBlogs = (nowpage, pagesize) => axios.get('/blog?nowpage=' + nowpage + '&&pagesize=' + pagesize)

/*  获取博客详情 */
export const getDetail = id => axios.get('/blog/getblog/' + id)
