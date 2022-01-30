import Home from './pages/Home/Home.vue'
import Rules from './pages/Rules/Rules.vue'
import Birth from './pages/Birth/Birth.vue'
import Mutate from './pages/Mutate/Mutate.vue'
import Register from './pages/Register/Register.vue'
import Credits from './pages/Credits/Credits.vue'
import Results from './pages/Results/Results.vue'

export default [
    { path: '/', alias: ['/home'], component: Home, name: "home" },
    { path: '/rules', component: Rules },
    { path: '/register', component: Register, name: "register" },
    { path: '/play/birth', component: Birth, meta: { requiresRegisteredPlayer: true } },
    { path: '/play/mutate', component: Mutate, meta: { requiresBornPlayer: true } },
    { path: '/credits', component: Credits },
    { path: '/results', component: Results, meta: { requiresMutatedPlayer: true } },

]