<template>
  <div class="home-page">
    <div class="container-fluid text-center">
      <div class="bg-light border rounded-3">
        <h1 class="display-5 fw-bold">Vacas Sobreviventes</h1>
        <p class="fs-3">O Jogo de sobrevivência de vacas</p>
      </div>
      <img src="@/assets/images/Cow.png" width="100px" height="100px" />
      <br />
      <br />
      <button
        style="width: 200px"
        :disabled="!this.$store.getters.hasRegistered"
        @click="redirect($store.getters.getCurrentStage)"
        type="button"
        class="btn btn-primary btn-lg mt-3"
      >
        Continuar jogo
      </button>
      <br />
      <button
        style="width: 200px"
        @click="redirect('register')"
        type="button"
        class="btn btn-primary btn-lg mt-3"
      >
        Novo Jogo
      </button>
      <br />
      <button
        style="width: 200px"
        @click="redirect('rules')"
        type="button"
        class="btn btn-primary btn-lg mt-3"
      >
        Regras
      </button>
      <br />
      <button
        style="width: 200px"
        @click="redirect('credits')"
        type="button"
        class="btn btn-primary btn-lg mt-3"
      >
        Créditos
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    redirect(name) {
      this.$router.push({ name });
    },
  },
};
</script>