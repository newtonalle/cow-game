<template>
  <div>
    <h2>Produção dos alelos:</h2>
    <br />
    <p class="fs-5" v-for="(gene, index) of genes" :key="`gene-${index}`">
      Alelo {{ gene.male.alleleName }}: {{ gene.male.production }}ml | Alelo
      {{ gene.female.alleleName }}: {{ gene.female.production }}ml
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    cowPlayer() {
      return this.$store.getters.getCowPlayer;
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