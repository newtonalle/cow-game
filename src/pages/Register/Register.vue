<template>
  <div>
    <h1>Nomeie sua vaca!</h1>
    <br />
    <input v-model="name" type="text" placeholder="Nome" />
    <br />
    <input v-model="numberOfAlleles" type="number" placeholder="N° de alelos" />
    <br />
    <button :disabled="!this.name" @click="setName">Confirmar nome</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
    numberOfAlleles: 5,
  }),
  watch: {},

  computed: {},

  methods: {
    setName() {
      this.$store.dispatch("resetState");
      this.$store.dispatch("registerCow", {
        name: this.name,
        numberOfAlleles: this.numberOfAlleles,
      });
      this.$router.push({ path: "/" });
    },
  },
};
</script>