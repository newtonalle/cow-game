<template>
  <div class="container-fluid text-center">
    <img src="@/assets/images/Cow.png" width="100px" height="100px" />
    <h1>Como Funciona:</h1>
    <h3>
      Esse jogo foi criado para ensinar alunos como mutações genéticas
      funcionam, de uma forma divertida e intuitiva, onde você pode criar sua
      própria vaca e depender da sua sorte para sobreviver.
    </h3>
    <br />
    <h3>
      As regras do jogo são bem básicas, você terá que nascer e passar pela sua
      vida e no final dela ter leite o suficiente para alimentar suas proles.
    </h3>
    <br />
    <h3>
      O Jogo salva automáticamente, então não se preocupe de perder progresso ao
      sair ou mudar de páginas, para voltar no estágio atual do jogo apenas
      pressione em "Continuar Jogo", se você não tiver criado uma vaca ainda
      pressione em novo jogo e crie uma.
    </h3>
    <br />
    <button @click="backToMainMenu" class="btn btn-primary btn-lg mt-3">
      Menu principal
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    backToMainMenu() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>