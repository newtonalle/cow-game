<template>
  <div
    class="
      d-flex
      flex-column
      align-items-stretch
      flex-shrink-0
      bg-white
      overflow-scroll
    "
    style="width: 380px; height: 600px"
  >
    <a
      href="/"
      class="
        d-flex
        align-items-center
        flex-shrink-0
        p-3
        link-dark
        text-decoration-none
        border-bottom
      "
    >
      <span class="fs-5 fw-semibold">Vacas</span>
    </a>
    <div
      v-for="(cowPlayer, index) in gamemode.cowPlayers"
      :key="`${cowPlayer.name}-${index}`"
      @click="changeCurrentCow(index)"
      class="list-group list-group-flush border-bottom scrollarea"
    >
      <a
        href="#"
        :class="[
          index === gamemode.currentCowIndex ? 'active' : undefined,
          'list-group-item',
          'list-group-item-action',
          'py-3',
          'lh-tight',
        ]"
        aria-current="true"
      >
        <div class="d-flex w-100 align-items-center justify-content-between">
          <strong class="mb-1">{{ cowPlayer.name }}</strong>
          <small v-if="cowPlayer.born">Nasceu</small>
        </div>
        <div class="col-10 mb-1 small">
          Produção de {{ totalProduction(cowPlayer) }} ml
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import { calculateCowProduction } from "../../../helpers/index.js";

export default {
  computed: {
    gamemode() {
      return this.$store.getters.getGamemode;
    },
  },
  methods: {
    changeCurrentCow(index) {
      this.$store.dispatch("setCurrentCowIndex", index);
    },
    totalProduction(cowPlayer) {
      return calculateCowProduction(cowPlayer);
    },
  },
};
</script>