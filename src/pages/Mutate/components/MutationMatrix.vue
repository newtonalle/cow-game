<template>
  <div>
    <h2>Mutações possíveis:</h2>
    <div v-for="line in Array(numberOfMutations[0]).keys()" :key="line">
      <mutation-button
        v-for="column in Array(numberOfMutations[1]).keys()"
        :key="`${line}-column-${column}`"
        :disabled="disabledButtonsMatrix[line][column]"
        @mutateAllele="mutateRandomAllele(line, column)"
      />
    </div>
    <br />
    <p
      class="fs-5"
      v-for="(mutation, index) in cowPlayer.activeMutations"
      :key="`${index}-mutation`"
    >
      {{ mutation.operator.name }}
    </p>
  </div>
</template>

<script>
import MutationButton from "./MutationButton.vue";
export default {
  components: { MutationButton },
  data: () => ({ numberOfMutations: [5, 10] }),
  computed: {
    buttonsState() {
      return this.$store.getters.getButtonsState;
    },
    cowPlayer() {
      return this.$store.getters.getCurrentCowPlayer;
    },
    gamemode() {
      return this.$store.getters.getGamemode;
    },
    possibleMutationOperators() {
      return [
        {
          fn: () => 0,
          name: (allele) => `Desfuncionalização no alelo ${allele.alleleName}`,
        },
        {
          fn: () => Math.floor(this.gamemode.baseProduction / 5),
          name: (allele) =>
            `Produção reduzida para ${Math.floor(
              this.gamemode.baseProduction / 5
            )} ml no alelo ${allele.alleleName}`,
        },
        {
          fn: (value) => value * 2,
          name: (allele) => `Produção duplicada no alelo ${allele.alleleName}`,
        },
        {
          fn: (value) => value * 3,
          name: (allele) => `Produção triplicada no alelo ${allele.alleleName}`,
        },
        {
          fn: (value) => value / 2,
          name: (allele) =>
            `Produção cortada pela metade no alelo ${allele.alleleName}`,
        },
        {
          fn: (value) => value,
          name: () => `Mutação neutra`,
        },
      ];
    },
    disabledButtonsMatrix() {
      const isButtonDisabledMatrix = new Array(this.numberOfMutations[0])
        .fill()
        .map(() => new Array(this.numberOfMutations[1]).fill(false));
      this.cowPlayer.activeMutations.forEach((mutation) => {
        isButtonDisabledMatrix[mutation.position.line][
          mutation.position.column
        ] = true;
      });
      return isButtonDisabledMatrix;
    },
  },
  methods: {
    mutateRandomAllele(line, column) {
      if (this.cowPlayer.mutationsRemaining > 0) {
        const possibleMutations = [];
        this.cowPlayer.alleles.male.forEach((allele, index) => {
          if (!allele.hasMutated) {
            possibleMutations.push({ ...allele, sex: "male", index });
          }
        });
        this.cowPlayer.alleles.female.forEach((allele, index) => {
          if (!allele.hasMutated) {
            possibleMutations.push({ ...allele, sex: "female", index });
          }
        });
        if (possibleMutations.length) {
          const alleleToMutate =
            possibleMutations[
              Math.floor(Math.random() * possibleMutations.length)
            ];
          const mutationOperator =
            this.possibleMutationOperators[
              Math.floor(Math.random() * this.possibleMutationOperators.length)
            ];

          this.$store.dispatch("applyMutation", {
            allele: alleleToMutate,
            operator: mutationOperator,
            position: { line, column },
          });
        } else {
          console.log("Todos os alelos possíveis já foram mutados!");
        }
      } else {
        console.log("Número de máximo de mutações atingido!");
      }
    },
  },
};
</script>
