<template>
  <div class="text-center">
    <h1>Resumo das vacas:</h1>
    <br />
    <table class="table">
      <thead>
        <tr>
          <th>Posição</th>
          <th>Nome</th>
          <th>Produção</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(cowPlayer, index) in sortedCowPlayers"
          :key="`cowPlayer-${index}`"
        >
          <th>{{ index + 1 }}°</th>
          <td>{{ cowPlayer.name }}</td>
          <td>{{ totalProduction(cowPlayer) }} ml</td>
        </tr>
      </tbody>
    </table>
    <br />
    <br />
    <button
      @click="continueGame"
      style="width: 200px"
      class="btn btn-primary btn-lg mt-3"
    >
      Continuar Jogo
    </button>
    <br />
    <button
      @click="backToMainMenu"
      style="width: 200px"
      class="btn btn-primary btn-lg mt-3"
    >
      Menu principal
    </button>
    <br />
    <br />
  </div>
</template>

<script>
import { calculateCowProduction } from "../../helpers/index.js";
export default {
  computed: {
    sortedCowPlayers() {
      return this.$store.getters.getSortedCowPlayers;
    },
  },
  methods: {
    totalProduction(cowPlayer) {
      return calculateCowProduction(cowPlayer);
    },

    continueGame() {
      this.$router.push({ name: "mutate" });
    },

    backToMainMenu() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>