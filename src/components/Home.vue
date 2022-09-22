<template>
  <div class="games">
    <div class="game-inner">
      <div class="game-card">
        <img :src="game.src" class="game-card-img"/>
        <span @click="gameDetails(game.id)">
           {{ game.title }} | ${{ game.price}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  props: ['game'],
  methods: {
    gameDetails(id) {
      this.$router.push({name: 'game-details', params: { id: id }})
    }
  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    background: #303030;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .game-inner {
    padding-top: 5%;
  }

  .game-card {
    position: relative;
    width: 250px;
    height: 350px;
    overflow: hidden;
    transition: 0.3s;
    cursor: pointer;
    clip-path: polygon(90% 0, 100% 7%, 100% 100%, 0 100%, 0 0);
  }

  .game-card:hover {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }

  .game-card-img {
    position: absolute;
    width: auto;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.1);
    transition: inherit;
  }

  .game-card-img:hover {
    transform: translate(-50%, -50%) scale(1);
  }

  .game-card span {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: darkslateblue;
    padding: 10px 20px;
    color: #ffffff;
    text-transform: uppercase;
    font-family: sans-serif;
    font-weight: 700;
    font-style: italic;
    transition: inherit;
  }

  .game-card:hover span {
    padding: 10px 30px;
    background: rebeccapurple;
  }
</style>
