<template>
  <main id="app">
    <section class="nav-bar">
      <NavBar></NavBar>
    </section>
    <section class="games" v-if="this.$route.name === 'home'">
      <Game
          v-for="game in games"
          :key="game.title"
          :game="game"
      />
    </section>
    <section class="game-details" v-if="this.$route.name === 'game-details'">
      <GameDetails></GameDetails>
    </section>
  </main>
</template>

<script>
import Game from '@/components/Home.vue'
import NavBar from "@/components/NavBar"
import GameDetails from "@/components/GameDetails"
import VideoGamesService from "@/services/video-games-service";

export default {
  name: 'App',
  components: {
    NavBar,
    Game,
    GameDetails
  },
  mounted() {
    this.getAllVideoGames();
  },
  methods: {
    gameDetails() {
      this.$router.push({name: 'game-details', params: { gameId: 2 }})
    },
    getAllVideoGames () {
      VideoGamesService.getAll()
          .then(response => {
            for (let i = 0; i < response.data.length; i++) {
              let allGamesData = {
                id: response.data[i].id,
                title: response.data[i].title,
                description: response.data[i].description,
                src: response.data[i].image,
                price: response.data[i].price,
                likes: response.data[i].likes
              };

              this.games.push(allGamesData);
            }
          }).catch(e => { console.log(e); });
    }
  },
  data () {
    return {
      games: []
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'montseratt', sans-serif;
  }
  main {
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: #EEE;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-bar {
    background-color:#990000;
    position:fixed;
    z-index:1; /*Add this*/
    width:100%;
    height:50px;
    text-align:center;
    vertical-align:middle;
    line-height:50px;
    top:0px;
  }
</style>
