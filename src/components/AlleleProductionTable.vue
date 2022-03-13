<template>
  <div>
    <h2>Produção dos alelos:</h2>
    <div class="container">
      <div class="row">
        <div class="col">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Alelos de origem masculina</th>
                <th scope="col">Produção</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="allele in cowPlayer.alleles.male"
                :key="`male-${allele.alleleName}`"
              >
                <th>{{ allele.alleleName }}</th>
                <td>{{ allele.production }}ml</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Alelos de origem feminina</th>
                <th scope="col">Produção</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="allele in cowPlayer.alleles.female"
                :key="`female-${allele.alleleName}`"
              >
                <th>{{ allele.alleleName }}</th>
                <td>{{ allele.production }}ml</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cowPlayer() {
      return this.$store.getters.getCurrentCowPlayer;
    },
    genes() {
      const genes = [];
      for (let index = 0; index < this.cowPlayer.alleles.male.length; index++) {
        const line = {
          male: this.cowPlayer.alleles.male[index],
          female: this.cowPlayer.alleles.female[index],
        };
        genes.push(line);
      }

      return genes;
    },
  },
};
</script>