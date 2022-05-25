import { createApp } from 'vue'
import App from './App'
// 폴더 안의 index라는 이름의 파일을 찾아서 우선 적용하기 때문에 생략 가능
import router from './routes'
import store from './store'
import loadImage from './plugins/loadImage'

createApp(App)
  .use(router)    //$route, $router
  .use(store)     // $store
  .use(loadImage) // $loadImage
  .mount('#app')