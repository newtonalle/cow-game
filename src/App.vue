<template>
  <div id="app" style="margin-bottom: 10px">
    <h2 style="text-align: center">
      I-+-+-+-+-+-+-+- Vacas Sobreviventes -+-+-+-+-+-+-+-I
    </h2>
    <a href="">Voltar ao menu principal</a>
    <h1 style="font-weight: bold">
      ---------------------------------------------------------
    </h1>
    <router-view></router-view>
    <h1 style="font-weight: bold">
      ---------------------------------------------------------
    </h1>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
