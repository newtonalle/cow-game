<template>
  <div class="container-fluid text-center">
    <img src="@/assets/images/Cow.png" width="100px" height="100px" />
    <br />
    <br />
    <h1>Modo de jogo: {{ this.currentGamemode.label }}</h1>
    <br />
    <div v-if="this.currentGamemode.name === 'singleplayer'">
      <p>Nome da vaca:</p>
      <input v-model="name" type="text" placeholder="Nome" />
      <br />
      <br />
      <p>Número de genes responsáveis pela produção de leite:</p>
      <input v-model="numberOfGenes" type="number" placeholder="N° de genes" />
      <br />
      <br />
      <button
        style="width: 320px"
        class="btn btn-primary btn-lg mt-3"
        :disabled="
          !this.name || this.numberOfGenes < 3 || this.numberOfGenes > 26
        "
        @click="createCow"
      >
        Confirmar vaca
      </button>
      <br />
    </div>
    <div v-if="this.currentGamemode.name === 'multiplayer'">
      <br />
      <p>Nome dos jogadores:</p>
      <input
        style="margin-right: 10px"
        v-model="name"
        type="text"
        placeholder="Nome"
      />
      <button
        :disabled="this.name === '' || this.cowPlayers.length > 1000"
        @click="createMultiplayerCow"
        class="btn btn-primary"
      >
        Inserir Nome
      </button>
      <br />
      <br />
      <p
        v-for="(cowPlayer, index) of this.cowPlayers"
        :key="`${cowPlayer.name}-${index}`"
      >
        {{ cowPlayer.name }}
        <span
          style="cursor: pointer; font-weight: 700; color: red"
          @click="removeMultiplayerCow(index)"
          >x</span
        >
      </p>
      <br />
      <p>Número de genes responsáveis pela produção de leite das vacas:</p>
      <input v-model="numberOfGenes" type="number" placeholder="N° de genes" />
      <br />
      <br />
      <button
        style="width: 320px"
        class="btn btn-primary btn-lg mt-3"
        :disabled="
          this.cowPlayers.length < 2 ||
          this.numberOfGenes < 3 ||
          this.numberOfGenes > 26
        "
        @click="createGame"
      >
        Confirmar jogo
      </button>
      <br />
    </div>
    <button
      style="width: 320px"
      class="btn btn-primary btn-lg mt-3"
      @click="toggleGamemode"
    >
      Alternar Modo de Jogo
    </button>
    <br />
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
    currentGamemode: {
      name: "singleplayer",
      label: "Um Jogador",
    },
    numberOfGenes: 5,
    cowPlayers: [],
  }),
  watch: {},

  computed: {
    gamemode() {
      return this.$store.getters.getGamemode;
    },
  },

  methods: {
    createCow() {
      this.$store.dispatch("registerGame", {
        cowPlayers: [
          {
            birthed: {
              male: false,
              female: false,
            },
            activeMutations: [],
            born: false,
            name: this.name,
            mutationsRemaining: 0,
            alleles: {
              male: [],
              female: [],
            },
          },
        ],
        numberOfGenes: this.numberOfGenes,
      });
      this.$router.push({ name: "birth" });
    },

    createMultiplayerCow() {
      for (let index = 0; index < this.cowPlayers.length; index++) {
        if (this.cowPlayers[index].name === this.name) {
          alert(`O nome "${this.name}" já existe!`);
          this.name = "";
          return 0;
        }
      }
      this.cowPlayers.push({
        birthed: {
          male: false,
          female: false,
        },
        activeMutations: [],
        born: false,
        name: this.name,
        mutationsRemaining: 0,
        alleles: {
          male: [],
          female: [],
        },
      });
      this.name = "";
    },

    removeMultiplayerCow(index) {
      this.cowPlayers.splice(index, 1);
    },

    createGame() {
      this.$store.dispatch("registerGame", {
        cowPlayers: this.cowPlayers,
        numberOfGenes: this.numberOfGenes,
        gamemode: this.currentGamemode.name,
      });
      this.$router.push({ name: "birth" });
    },

    toggleGamemode() {
      if (this.currentGamemode.name === "multiplayer") {
        this.currentGamemode = {
          name: "singleplayer",
          label: "Um Jogador",
        };
      } else {
        this.currentGamemode = {
          name: "multiplayer",
          label: "Multijogador Local",
        };
      }
    },
  },
};
</script>