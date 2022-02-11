<template>
  <div class="container-fluid text-center">
    <img src="@/assets/images/Cow.png" width="100px" height="100px" />
    <p class="fs-3">
      Os gametas que darão origem a você estão prestes a serem formados, torça
      para que os alelos dos gametas correspondentes a produção de leite sejam
      bons para você, já que você dependerá deles para alimentar suas proles
      mais tarde em sua vida!
    </p>
    <h1>Produção dos gametas de {{ cowPlayer.name }}:</h1>
    <h2>Alelos de origem masculina:</h2>
    <button
      class="btn btn-primary btn-lg mt-3"
      :disabled="this.buttonsState.birthButtons.male"
      @click="randomizeAlleleProduction('male')"
    >
      Aleatorizar alelos do gameta masculino
    </button>
    <br />
    <br />
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
      class="btn btn-primary btn-lg mt-3"
      :disabled="this.buttonsState.birthButtons.female"
      @click="randomizeAlleleProduction('female')"
    >
      Aleatorizar alelos do gameta feminino
    </button>
    <br />
    <br />
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
      class="btn btn-primary btn-lg mt-3"
      :disabled="
        !this.buttonsState.birthButtons.male ||
        !this.buttonsState.birthButtons.female
      "
      @click="nextStage"
    >
      Próxima Etapa
    </button>
    <br />
    <br />
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
      this.$router.push({ name: "mutate" });
    },
  },
  created() {
    this.$store.dispatch("setCurrentStage", "birth");
  },
};
</script>