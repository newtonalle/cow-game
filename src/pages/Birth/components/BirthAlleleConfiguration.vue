<template>
  <div>
    <h2>{{ title }}:</h2>
    <button
      class="btn btn-primary btn-lg mt-3"
      :disabled="cowPlayer.birthed[sex]"
      @click="randomizeAlleleProduction"
    >
      {{ buttonLabel }}
    </button>
    <br />
    <br />
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50%">Alelo</th>
            <th scope="col" style="width: 50%">Produção</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="allele in cowPlayer.alleles[sex]"
            :key="`male-${allele.alleleName}`"
          >
            <th>{{ allele.alleleName }}</th>
            <td>{{ allele.production }}ml</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: { sex: { required: true, type: String } },
  computed: {
    cowPlayer() {
      return this.$store.getters.getCurrentCowPlayer;
    },
    title() {
      const titles = {
        male: "Alelos de origem masculina",
        female: "Alelos de origem feminina",
      };
      return titles[this.sex];
    },
    buttonLabel() {
      const buttonLabels = {
        male: "Aleatorizar alelos do gameta masculino",
        female: "Aleatorizar alelos do gameta feminino",
      };
      const activeButtonLabels = {
        male: "Alelos do gameta masculino foram aleatorizados",
        female: "Alelos do gameta feminino foram aleatorizados",
      };
      if (this.cowPlayer.birthed[this.sex]) {
        return activeButtonLabels[this.sex];
      }
      return buttonLabels[this.sex];
    },
  },
  methods: {
    randomizeAlleleProduction() {
      this.$store.dispatch("randomizeAlleleProduction", {
        sex: this.sex,
      });
    },
  },
};
</script>