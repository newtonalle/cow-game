<template>
  <div>
    <h2>Mutações:</h2>
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
  data: () => ({ numberOfMutations: [5, 5] }),
  computed: {
    buttonsState() {
      return this.$store.getters.getButtonsState;
    },
    cowPlayer() {
      return this.$store.getters.getCowPlayer;
    },
    possibleMutationOperators() {
      //new Array(5).fill(new Array(5).fill(false))
      return [
        {
          fn: () => 0,
          name: (allele) => `Desfuncionalização no alelo ${allele.alleleName}`,
        },
        {
          fn: () => Math.floor(this.cowPlayer.baseProduction / 5),
          name: (allele) =>
            `Produção reduzida para ${Math.floor(
              this.cowPlayer.baseProduction / 5
            )} ml no alelo ${allele.alleleName}`,
        },
        {
          fn: () => this.cowPlayer.baseProduction,
          name: (allele) =>
            `Produção alterada para ${this.cowPlayer.baseProduction} ml no alelo ${allele.alleleName}`,
        },
        {
          fn: () => this.cowPlayer.baseProduction * 2,
          name: (allele) =>
            `Produção alterada para ${
              this.cowPlayer.baseProduction * 2
            } ml no alelo ${allele.alleleName}`,
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

      //   let loopAlleleMutation = true;
      //   while (loopAlleleMutation === true) {
      //     let index = Math.floor(Math.random() * 5); // Index = Any number from 0 to 4 (5 indexes)
      //     let indexLetters = ["A", "B", "C", "D", "E"];
      //     let mutationType = Math.floor(Math.random() * 8); // MutationType = Any number from 0 to 7 (8 types)
      //     let amount;
      //     let multiplyingFactor;
      //     let randomSex = Math.floor(Math.random() * 2) + 1; // randomSex = 1 or 2 (2 types)
      //     let sex;
      //     let hasMutated;
      //     if (this.cowPlayer.mutationsRemaining <= 0) {
      //       this.mutationMessage = "Número de mutações alcançado!";
      //       loopAlleleMutation = false;
      //     } else {
      //       switch (
      //         randomSex // Randomizer system for allele sex
      //       ) {
      //         case 1:
      //           sex = "Male";
      //           hasMutated = this.cowPlayer.alleles.male[index].hasMutated;
      //           break;
      //         case 2:
      //           sex = "Female";
      //           hasMutated = this.cowPlayer.alleles.female[index].hasMutated;
      //           break;
      //         default:
      //           console.log("Error in randomizer for randomSex: ", randomSex);
      //           break;
      //       }
      //       if (!hasMutated) {
      //         // Check if allele has already been mutated
      //         switch (
      //           mutationType // Randomizer system for allele mutation type
      //         ) {
      //           case 0:
      //             amount = 500; // Production set to 500ml
      //             console.log("Production set to 500ml");
      //             this.mutationMessage = "Produção alterada para 500ml no alelo ";
      //             break;
      //           case 1:
      //             amount = 1000; // Production set to 1000ml
      //             console.log("Production set to 1000ml");
      //             this.mutationMessage =
      //               "Produção alterada para 1000ml no alelo ";
      //             break;
      //           case 2:
      //             amount = 100; // Production decreased to 100ml
      //             console.log("Production decreased to 100ml");
      //             this.mutationMessage = "Produção caiu para 100ml no alelo ";
      //             break;
      //           case 3:
      //             amount = 0; // Allele dysfunctionalization
      //             console.log("Allele dysfunctionalization");
      //             this.mutationMessage = "Desfuncionalização no alelo ";
      //             break;
      //           case 4:
      //             multiplyingFactor = 0.5; // Production halved
      //             console.log("Production halved");
      //             this.mutationMessage = "Produção cortada pela metade no alelo ";
      //             break;
      //           case 5:
      //             multiplyingFactor = 2; // Production doubled
      //             console.log("Production doubled");
      //             this.mutationMessage = "Produção duplicada no alelo ";
      //             break;
      //           case 6:
      //             multiplyingFactor = 3; // Production triplicated
      //             console.log("Production triplicated");
      //             this.mutationMessage = "Produção triplicada no alelo ";
      //             break;
      //           case 7:
      //             multiplyingFactor = 1; // Neutral mutation
      //             console.log("Neutral mutation");
      //             this.mutationMessage = "Mutação neutra";
      //             break;
      //           default:
      //             console.log(
      //               "Error in randomizer for mutationType: ",
      //               mutationType
      //             );
      //             this.mutationMessage = "Erro no sistema";
      //             break;
      //         }
      //         console.log(
      //           "MT: ",
      //           mutationType,
      //           "A: ",
      //           amount,
      //           "MF: ",
      //           multiplyingFactor
      //         );
      //         if (mutationType != 7) {
      //           this.mutationMessage =
      //             this.mutationMessage + indexLetters[index] + randomSex;
      //         }

      //         if (mutationType < 4) {
      //           // Check to see if the mutation type uses setAlleleProduction or multiplyAlleleProduction
      //           this.$store.dispatch("setAlleleProduction", {
      //             index,
      //             amount,
      //             sex,
      //           });
      //         } else {
      //           this.$store.dispatch("multiplyAlleleProduction", {
      //             index,
      //             multiplyingFactor,
      //             sex,
      //           });
      //         }
      //         this.$store.dispatch("toggleMutationButton", { line, column });
      //         loopAlleleMutation = false;
      //       } else {
      //         console.log("This allele already mutated in this lifetime!");
      //       }
      // }
      // }
    },
  },
};
</script>
