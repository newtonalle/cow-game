<template>
  <div id="app">
    <toolbar />
    <div style="padding-top: 50px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Toolbar from "./components/layout/Toolbar.vue";
export default {
  components: { Toolbar },
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
body {
  margin: 0 !important;
}
</style>
