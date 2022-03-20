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
  if (store.getters.getGamemode.currentGamemode != 'multiplayer' && to.meta.requiresMultiplayerGame) { next({ name: 'home' }) }
  else if (!store.getters.hasGameRegistered && to.meta.requiresRegisteredGame) { next({ name: 'register' }) }
  else if (!store.getters.hasGameBorn && to.meta.requiresBornGame) { next({ name: 'home' }) }
  else if (!store.getters.hasGameMutated && to.meta.requiresMutatedGame) { next({ name: 'home' }) } else { next() }
  window.scroll(0, 0)
  store.state.game.currentCowIndex = 0
}
)

new Vue({
  router,
  render: h => h(App),
  store: store,
}).$mount('#app')
