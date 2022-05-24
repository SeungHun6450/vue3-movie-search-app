import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'

export default createRouter({
  // Hash, History mode로 구분가능, 여기서는 History모드를 사용
  // https://google.com/#/search 같은 #을 이용
  history: createWebHashHistory(),
  // pages
  routes: [
    {
      // '/'은 메인 페이지를 의미
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    }
  ]
})