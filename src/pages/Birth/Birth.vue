<template>
  <div>
    <h1>Nascimento de {{ cowPlayer.name }}...</h1>
    <img src="@/assets/images/Cow.png" width="100px" height="100px" />
    <h2>Alelos de origem masculina:</h2>
    <button
      :disabled="this.buttonsState.birthButtons.male"
      @click="randomizeAlleleProduction('male')"
    >
      Aleatorizar alelos do gameta masculino
    </button>
    <p
      v-for="allele in cowPlayer.alleles.male"
      :key="`${allele.alleleName}-male`"
    >
      Alelo {{ allele.alleleName }}: {{ allele.production }} ml
    </p>
    <br />
    <br />
    <h2>Alelos de origem feminina:</h2>
    <button
      :disabled="this.buttonsState.birthButtons.female"
      @click="randomizeAlleleProduction('female')"
    >
      Aleatorizar alelos do gameta feminino
    </button>
    <p
      v-for="allele in cowPlayer.alleles.female"
      :key="`${allele.alleleName}-female`"
    >
      Alelo {{ allele.alleleName }}: {{ allele.production }} ml
    </p>
    <br />
    <br />
    <h2>
      Produção total:
      {{ totalProduction }}
      ml
    </h2>
    <br />
    <br />
    <br />
    <button
      :disabled="
        !this.buttonsState.birthButtons.male ||
        !this.buttonsState.birthButtons.female
      "
      @click="nextStage"
    >
      Próxima Etapa
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  watch: {},

  computed: {
    cowPlayer() {
      return this.$store.getters.getCowPlayer;
    },
    buttonsState() {
      return this.$store.getters.getButtonsState;
    },
    totalProduction() {
      return this.$store.getters.getCowTotalProduction;
    },
  },

  methods: {
    randomizeAlleleProduction(sex) {
      this.$store.dispatch("randomizeAlleleProduction", {
        sex,
      });
      this.$store.dispatch("toggleBirthButton", sex);
    },
    nextStage() {
      this.$store.dispatch("born");
      this.$router.push({ path: "/play/mutate" });
    },
  },
};
</script>