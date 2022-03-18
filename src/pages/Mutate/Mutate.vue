<template>
  <div class="d-flex flex-row">
    <sidelist-cows
      v-if="gamemode.currentGamemode === 'multiplayer'"
      origin="mutate"
    />
    <div class="d-flex flex-column">
      <div class="container-fluid text-center">
        <img src="@/assets/images/Cow.png" width="100px" height="100px" />
        <br />
        <br />
        <p class="fs-4">
          Vocês crescem e seu vaqueiro, Jorge, infelizmente teve que vender você
          e as outras vacas dele para um outro vaqueiro, e este as colocou em um
          campo para pastar que era radioativo e aumentava a chance de você
          sofrer mutações.
        </p>
        <br />
        <p class="fs-4">
          Clique nos botões abaixo para descobrir que mutações sua vaca sofreu:
        </p>
        <br />
        <mutation-matrix />
        <br />
        <allele-production-table />
        <br />
        <br />
        <button
          style="width: 200px"
          class="btn btn-primary btn-lg mt-3"
          :disabled="
            gamemode.currentGamemode === 'singleplayer' &&
            !this.$store.getters.hasGameMutated
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
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import AlleleProductionTable from "../../components/AlleleProductionTable.vue";
import SidelistCows from "../../components/SidelistCows.vue";
import MutationMatrix from "./components/MutationMatrix.vue";

export default {
  components: { MutationMatrix, AlleleProductionTable, SidelistCows },
  data: () => ({ localButtonState: [], mutationMessage: "" }),

  watch: {},

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
    buttonLabel() {
      if (
        this.$store.getters.hasGameMutated ||
        this.gamemode.currentGamemode === "singleplayer"
      ) {
        return "Resultados Finais";
      }
      return "Próxima Vaca";
    },
  },

  methods: {
    nextStage() {
      if (this.$store.getters.hasGameMutated) {
        this.$router.push({ name: "results" });
      } else {
        this.$store.dispatch("nextCow", "mutate");
        window.scroll(0, 0);
      }
    },
    backToMainMenu() {
      this.$router.push({ name: "home" });
    },
  },
  created() {
    this.$store.dispatch("setCurrentStage", "mutate");
    this.localButtonState = this.buttonsState;
  },
};
</script>