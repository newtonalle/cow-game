<template>
  <div class="container-fluid text-center">
    <img src="@/assets/images/Cow.png" width="100px" height="100px" />
    <br />
    <h1>Resultados:</h1>
    <br />
    <h2>
      A produção total de {{ cowPlayer.name }} foi de {{ totalProduction }} ml
    </h2>
    <br />
    <h3 v-text="this.message"></h3>
    <br />
    <button
      style="width: 200px"
      @click="backToMainMenu"
      class="btn btn-primary btn-lg mt-3"
    >
      Menu principal
    </button>
    <br />
    <button
      style="width: 200px"
      @click="playAgain"
      class="btn btn-primary btn-lg mt-3"
    >
      Jogar novamente
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({ message: "" }),
  watch: {},

  computed: {
    cowPlayer() {
      return this.$store.getters.getCowPlayer;
    },
    totalProduction() {
      return this.$store.getters.getCowTotalProduction;
    },
  },

  methods: {
    backToMainMenu() {
      this.$router.push({ name: "home" });
    },
    playAgain() {
      this.$router.push({ name: "register" });
    },
  },
  created() {
    this.$store.dispatch("setCurrentStage", "results");
    if (this.$store.getters.getCowTotalProduction >= 6000) {
      this.message =
        "O leite produzido por sua vaca foi o suficiente para alimentar e criar proles saudáveis!";
    } else {
      this.message =
        "O leite produzido por sua vaca não foi o suficiente para alimentar e criar proles saudáveis, portanto suas proles cresceram fracas e desnutridas!";
    }
  },
};
</script>