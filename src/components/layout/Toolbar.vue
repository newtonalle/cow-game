<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        Vacas Sobreviventes
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li
            v-for="(navbarLink, index) in navbarLinks"
            class="nav-item"
            :key="`navbar-link-${index}`"
          >
            <router-link
              v-if="
                !navbarLink.requiresRegisteredPlayer ||
                $store.getters.hasRegistered
              "
              :class="[
                'nav-link',
                $route.name === navbarLink.routeName ? 'active' : '',
              ]"
              :to="{ name: navbarLink.routeName }"
            >
              {{ navbarLink.routeLabel }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    navbarLinks() {
      return [
        {
          routeName: "home",
          routeLabel: "Home",
          requiresRegisteredPlayer: false,
        },
        {
          routeName: this.$store.getters.getCurrentStage,
          routeLabel: "Continuar Jogo",
          requiresRegisteredPlayer: true,
        },
        {
          routeName: "register",
          routeLabel: "Novo Jogo",
          requiresRegisteredPlayer: false,
        },
        {
          routeName: "rules",
          routeLabel: "Regras",
          requiresRegisteredPlayer: false,
        },
        {
          routeName: "credits",
          routeLabel: "Créditos",
          requiresRegisteredPlayer: false,
        },
      ];
    },
  },
};
</script>

<style scoped>
.toolbar {
  background-color: red;
}
</style>