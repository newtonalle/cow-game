import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import routes from './routes'

import store from './store/index'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log('Before each on route', to, from, next)
  if (!store.getters.hasRegistered && to.meta.requiresRegisteredPlayer) { next({ name: 'register' }) }
  else if (!store.getters.hasBorn && to.meta.requiresBornPlayer) { next({ name: 'home' }) }
  else if (!store.getters.hasMutated && to.meta.requiresMutatedPlayer) { next({ name: 'home' }) } else { next() }
}
)

new Vue({
  router,
  render: h => h(App),
  store: store,
}).$mount('#app')
