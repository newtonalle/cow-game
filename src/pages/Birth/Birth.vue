<template>
  <div class="d-flex flex-row">
    <sidelist-cows v-if="gamemode.currentGamemode === 'multiplayer'" />
    <div class="d-flex flex-column">
      <birth-header />
      <birth-configuration />
      <button class="btn btn-primary" @click="nextStage">
        {{ buttonLabel }}
      </button>
      <br />
    </div>
  </div>
</template>


<script>
import BirthHeader from "./components/BirthHeader";
import SidelistCows from "./components/SidelistCows";
import BirthConfiguration from "./components/BirthConfiguration";

export default {
  components: { BirthHeader, SidelistCows, BirthConfiguration },
  data: () => ({}),
  methods: {
    nextStage() {
      if (this.$store.getters.hasGameBorn) {
        this.$router.push({ name: "resume" });
      } else {
        this.$store.dispatch("nextCow", "birth");
      }
    },
  },
  computed: {
    gamemode() {
      return this.$store.getters.getGamemode;
    },
    buttonLabel() {
      if (this.$store.getters.hasGameBorn) {
        return "Próxima Etapa";
      }
      return "Próxima Vaca";
    },
  },
};
</script>
