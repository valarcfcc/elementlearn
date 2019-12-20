import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import routes from "./element"
import click from "./click"
import input from "./input"
import watch from "./watch"
Vue.use(Router)

export default new Router({
  routes: [
    ...routes,
    ...click,
    ...input,
    ...watch,
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }

  ]

})
