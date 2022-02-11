<template>
  <div class="container-fluid text-center">
    <img src="@/assets/images/Cog.png" width="200px" height="200px" />
    <h1>Desenvolvimento:</h1>
    <h3>Marco Antônio Campanário Sampaio</h3>
    <h3>Marina Ferraz Sampaio</h3>
    <h3>Lupe Furtado Alle</h3>
    <h1>Programação:</h1>
    <h3>Newton Furtado Alle</h3>
    <br />
    <button
      style="width: 200px"
      @click="backToMainMenu"
      class="btn btn-primary btn-lg mt-3"
    >
      Menu principal
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    backToMainMenu() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>