<template>
  <div class="container-fluid text-center">
    <img src="@/assets/images/Cow.png" width="100px" height="100px" />
    <h1>Crie sua vaca!</h1>
    <br />
    <p>Nome da vaca:</p>
    <input v-model="name" type="text" placeholder="Nome" />
    <br />
    <br />
    <p>Número de genes responsáveis pela produção de leite:</p>
    <input v-model="numberOfGenes" type="number" placeholder="N° de genes" />
    <br />
    <br />
    <button
      class="btn btn-primary btn-lg mt-3"
      :disabled="!this.name"
      @click="createCow"
    >
      Confirmar vaca
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
    numberOfGenes: 5,
  }),
  watch: {},

  computed: {},

  methods: {
    createCow() {
      this.$store.dispatch("resetState");
      this.$store.dispatch("registerCow", {
        name: this.name,
        numberOfGenes: this.numberOfGenes,
      });
      this.$router.push({ name: "birth" });
    },
  },
};
</script>