import Home from './pages/Home/Home.vue'
import Rules from './pages/Rules/Rules.vue'
import Birth from './pages/Birth/Birth.vue'
import Mutate from './pages/Mutate/Mutate.vue'
import Register from './pages/Register/Register.vue'
import Resume from './pages/Resume/Resume.vue'
import Credits from './pages/Credits/Credits.vue'
import Results from './pages/Results/Results.vue'

export default [
    { path: '/', alias: ['/home'], component: Home, name: 'home' },
    { path: '/rules', component: Rules, name: 'rules' },
    { path: '/register', component: Register, name: 'register' },
    { path: '/resume', component: Resume, meta: { requiresBornGame: true, requiresMultiplayerGame: true }, name: 'resume' },
    { path: '/credits', component: Credits, name: 'credits' },
    { path: '/play/birth', component: Birth, meta: { requiresRegisteredGame: true }, name: 'birth' },
    { path: '/play/mutate', component: Mutate, meta: { requiresBornGame: true }, name: 'mutate' },
    { path: '/results', component: Results, meta: { requiresMutatedGame: true }, name: 'results' },

]
