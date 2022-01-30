<template>
  <div>
    <h1>
      A produção total de {{ cowPlayer.name }} foi de
      {{ totalProduction }}
      ml
    </h1>
    <br />
    <br />
    <h3 v-text="this.message"></h3>
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
    playAgain() {
      this.$router.push({ path: "/" });
    },
  },
  created() {
    if (this.$store.getters.getCowTotalProduction >= 6000) {
      this.message =
        "O leite produzido por sua vaca foi o suficiente para alimentar e criar proles saudáveis, você ganhou o jogo!";
    } else {
      this.message =
        "O leite produzido por sua vaca não foi o suficiente para alimentar e criar proles saudáveis, portanto suas proles cresceram fracas e desnutridas, você perdeu o jogo!";
    }
  },
};
</script>