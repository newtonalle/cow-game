<template>
  <div class="text-center">
    <img src="@/assets/images/Cow.png" width="100px" height="100px" />
    <h1>{{ title }}</h1>
    <br />
    <div v-if="gamemode.currentGamemode === 'multiplayer'">
      <table class="table">
        <thead>
          <tr>
            <th style="width: 33%">Posição</th>
            <th style="width: 33%">Nome</th>
            <th style="width: 33%">Produção</th>
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
      <h1>{{ sortedCowPlayers[0].name }} ganhou o jogo!</h1>
    </div>
    <div v-if="gamemode.currentGamemode === 'singleplayer'">
      <h2>{{ totalProduction(gamemode.cowPlayers[0]) }} ml</h2>
      <br />
      <h3 v-text="this.message"></h3>
    </div>
    <br />
    <br />
    <button
      style="width: 200px"
      @click="playAgain"
      class="btn btn-primary btn-lg mt-3"
    >
      Jogar novamente
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
  data: () => ({
    message: "",
  }),
  computed: {
    sortedCowPlayers() {
      return this.$store.getters.getSortedCowPlayers;
    },
    gamemode() {
      return this.$store.getters.getGamemode;
    },
    title() {
      let titles = {
        multiplayer: "Produção final das vacas:",
        singleplayer: "Produção final da vaca:",
      };

      return titles[this.gamemode.currentGamemode];
    },
  },
  methods: {
    totalProduction(cowPlayer) {
      return calculateCowProduction(cowPlayer);
    },

    playAgain() {
      this.$router.push({ name: "register" });
    },

    backToMainMenu() {
      this.$router.push({ name: "home" });
    },
  },
  created() {
    if (this.totalProduction(this.gamemode.cowPlayers[0]) >= 6000) {
      this.message =
        "A produção da sua vaca foi o suficiente para criar proles boas e saudáveis...";
    } else {
      this.message =
        "A produção da sua vaca não foi o suficiente para criar suas proles, portanto elas cresceram fracas e desnutridas...";
    }

    this.$store.dispatch("setCurrentStage", "results");
  },
};
</script>