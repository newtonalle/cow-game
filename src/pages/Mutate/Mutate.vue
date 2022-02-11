<template>
  <div class="container-fluid text-center">
    <img src="@/assets/images/Cow.png" width="100px" height="100px" />
    <br />
    <br />
    <p class="fs-4">
      Vocês crescem e seu vaqueiro, Jorge, infelizmente teve que vender você e
      as outras vacas dele para um outro vaqueiro, e este as colocou em um campo
      para pastar que era radioativo e aumentava a chance de você sofrer
      mutações.
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
      class="btn btn-primary btn-lg mt-3"
      :disabled="this.cowPlayer.mutationsRemaining > 0"
      @click="showFinalResults"
    >
      Resultados Finais
    </button>
    <br />
    <br />
  </div>
</template>

<script>
import AlleleProductionTable from "../../components/AlleleProductionTable.vue";
import MutationMatrix from "./components/MutationMatrix.vue";
export default {
  components: { MutationMatrix, AlleleProductionTable },
  data: () => ({ localButtonState: [], mutationMessage: "" }),

  watch: {},

  computed: {
    cowPlayer() {
      return this.$store.getters.getCowPlayer;
    },
    buttonsState() {
      return this.$store.getters.getButtonsState;
    },
  },

  methods: {
    showFinalResults() {
      this.$router.push({ name: "results" });
    },
  },
  created() {
    this.$store.dispatch("setCurrentStage", "mutate");
    this.localButtonState = this.buttonsState;
  },
};
</script>