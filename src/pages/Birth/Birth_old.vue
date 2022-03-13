<template>
  <div class="container-fluid text-center">
    <div v-if="gamemode.currentGamemode.name === 'singleplayer'">
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
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Alelo</th>
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
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Alelo</th>
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
        style="width: 200px"
        class="btn btn-primary btn-lg mt-3"
        :disabled="
          !this.buttonsState.birthButtons.male ||
          !this.buttonsState.birthButtons.female
        "
        @click="nextStage"
      >
        Próxima Etapa
      </button>
    </div>
    <div v-if="gamemode.currentGamemode.name === 'multiplayer'">
      <img src="@/assets/images/Cow.png" width="100px" height="100px" />
      <p class="fs-3">
        Os gametas que darão origem a você estão prestes a serem formados, torça
        para que os alelos dos gametas correspondentes a produção de leite sejam
        bons para você, já que você dependerá deles para alimentar suas proles
        mais tarde em sua vida!
      </p>
      <h1>
        Produção dos gametas de
        {{
          gamemode.multiplayer.cowPlayers[gamemode.multiplayer.currentCowIndex]
            .name
        }}:
      </h1>
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
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Alelo</th>
              <th scope="col">Produção</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="allele in gamemode.multiplayer.cowPlayers[
                gamemode.multiplayer.currentCowIndex
              ].alleles.male"
              :key="`male-${allele.alleleName}`"
            >
              <th>{{ allele.alleleName }}</th>
              <td>{{ allele.production }}ml</td>
            </tr>
          </tbody>
        </table>
      </div>
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
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Alelo</th>
              <th scope="col">Produção</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="allele in gamemode.multiplayer.cowPlayers[
                gamemode.multiplayer.currentCowIndex
              ].alleles.female"
              :key="`female-${allele.alleleName}`"
            >
              <th>{{ allele.alleleName }}</th>
              <td>{{ allele.production }}ml</td>
            </tr>
          </tbody>
        </table>
      </div>
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
        style="width: 200px"
        class="btn btn-primary btn-lg mt-3"
        :disabled="
          !this.buttonsState.birthButtons.male ||
          !this.buttonsState.birthButtons.female
        "
        @click="nextStage"
      >
        Próxima Etapa
      </button>
    </div>
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
export default {
  data: () => ({}),
  watch: {},

  computed: {
    gamemode() {
      return this.$store.getters.getGamemode;
    },
    cowPlayer() {
      return this.$store.getters.getCurrentCowPlayer;
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

    backToMainMenu() {
      this.$router.push({ name: "home" });
    },
  },
  created() {
    this.$store.dispatch("setCurrentStage", "birth");
  },
};
</script>