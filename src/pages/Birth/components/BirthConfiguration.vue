<template>
  <div class="container-fluid text-center">
    <h1>Produção dos gametas de {{ cowPlayer.name }}:</h1>
    <birth-allele-configuration sex="male" />
    <birth-allele-configuration sex="female" />
  </div>
</template>

<script>
import BirthAlleleConfiguration from "./BirthAlleleConfiguration.vue";

export default {
  components: { BirthAlleleConfiguration },
  computed: {
    gamemode() {
      return this.$store.getters.getGamemode;
    },
    cowPlayer() {
      return this.$store.getters.getCurrentCowPlayer;
    },
    buttonsState() {
      return this.$store.getters.getButtonsState;
    },
    totalProduction() {
      return this.$store.getters.getCowTotalProduction;
    },
  },
};
</script>