import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import hljs from "highlight.js"
import 'highlight.js/styles/atom-one-dark.css';
import {
  Carousel,
  CarouselItem,
  Timeline,
  TimelineItem,
  Card,
  Input,
  Drawer,
  Button
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './css/index.scss'

Vue.config.productionTip = false
// 定义自定义指令 highlight 代码高亮
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
   hljs.highlightBlock(block)
  })
 })
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)
Vue.component(Timeline.name, Timeline)
Vue.component(TimelineItem.name, TimelineItem)
Vue.component(Card.name, Card)
Vue.component(Input.name, Input)
Vue.component(Drawer.name, Drawer)
Vue.component(Button.name, Button)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
