import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/World'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // サブディレクトリがある場合ベースに設定する
  base: '/vue-test/',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/world',
      component: Test
    }
  ]
})
