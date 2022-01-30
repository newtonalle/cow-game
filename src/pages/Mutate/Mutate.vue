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
    <br />
    <p v-text="this.mutationMessage"></p>
    <h2>Produção dos alelos:</h2>
    <p>
      Alelo A1: {{ cowPlayer.alleles.male[0].production }}ml | Alelo A2:
      {{ cowPlayer.alleles.female[0].production }}ml
    </p>
    <p>
      Alelo B1: {{ cowPlayer.alleles.male[1].production }}ml | Alelo B2:
      {{ cowPlayer.alleles.female[1].production }}ml
    </p>
    <p>
      Alelo C1: {{ cowPlayer.alleles.male[2].production }}ml | Alelo C2:
      {{ cowPlayer.alleles.female[2].production }}ml
    </p>
    <p>
      Alelo D1: {{ cowPlayer.alleles.male[3].production }}ml | Alelo D2:
      {{ cowPlayer.alleles.female[3].production }}ml
    </p>
    <p>
      Alelo E1: {{ cowPlayer.alleles.male[4].production }}ml | Alelo E2:
      {{ cowPlayer.alleles.female[4].production }}ml
    </p>

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
import MutationMatrix from "./components/MutationMatrix.vue";
export default {
  components: { MutationMatrix },
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