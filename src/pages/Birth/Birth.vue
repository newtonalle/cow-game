<template>
  <div class="d-flex flex-row">
    <sidelist-cows
      v-if="gamemode.currentGamemode === 'multiplayer'"
      origin="birth"
    />
    <div class="d-flex flex-column">
      <birth-header />
      <birth-configuration />
      <div class="text-center">
        <br />
        <h2>
          Produção total:
          {{ totalProduction }}
          ml
        </h2>
        <br />
        <button
          class="btn btn-primary btn-lg mt-3"
          style="width: 200px"
          :disabled="
            gamemode.currentGamemode === 'singleplayer' &&
            !this.$store.getters.hasGameBorn
          "
          @click="nextStage"
        >
          {{ buttonLabel }}
        </button>
        <br />
        <button
          @click="backToMainMenu"
          style="width: 200px"
          class="btn btn-primary btn-lg mt-3"
        >
          Menu principal
        </button>
      </div>
      <br />
      <br />
    </div>
  </div>
</template>


<script>
import BirthHeader from "./components/BirthHeader";
import SidelistCows from "../../components/SidelistCows";
import BirthConfiguration from "./components/BirthConfiguration";

export default {
  components: { BirthHeader, SidelistCows, BirthConfiguration },
  data: () => ({}),
  methods: {
    nextStage() {
      if (this.$store.getters.hasGameBorn) {
        if (this.gamemode.currentGamemode === "singleplayer") {
          this.$router.push({ name: "mutate" });
        } else {
          this.$router.push({ name: "resume" });
        }
      } else {
        this.$store.dispatch("nextCow", "birth");
        window.scroll(0, 0);
      }
    },
    backToMainMenu() {
      this.$router.push({ name: "home" });
    },
  },
  computed: {
    gamemode() {
      return this.$store.getters.getGamemode;
    },
    buttonLabel() {
      if (
        this.$store.getters.hasGameBorn ||
        this.gamemode.currentGamemode === "singleplayer"
      ) {
        return "Próxima Etapa";
      }
      return "Próxima Vaca";
    },
    totalProduction() {
      return this.$store.getters.getCowTotalProduction;
    },
  },
  created() {
    this.$store.dispatch("setCurrentStage", "birth");
  },
};
</script>
