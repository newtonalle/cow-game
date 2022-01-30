<template>
  <div>
    <p>História e motivo das mutações acontecerem</p>
    <br />
    <br />
    <img src="@/assets/images/Cow.png" width="100px" height="100px" />
    <br />
    <br />
    <mutation-matrix />
    <br />
    <allele-production-table />
    <br />
    <br />
    <button
      :disabled="this.cowPlayer.mutationsRemaining > 0"
      @click="showFinalResults"
    >
      Resultados Finais
    </button>
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
      this.$router.push("/results");
    },
  },
  created() {
    this.localButtonState = this.buttonsState;
  },
};
</script>