<template>
  <div class='game-details'>
    <div class="game-container">
      <div v-for="(game, index) in details" :key="index">
        <div>
          <img class="game-img" :src="game.src" alt="">
          <div class="game-description-bd"></div>
          <div class="game-info">
            <h2>{{game.title}}</h2>
            <h2>$ {{game.price}}</h2>
            <h5>
              <font-awesome-icon :icon="['fas', 'thumbs-up']" /> {{game.likes}}
            </h5>
          </div>
          <div class="game-description">
            <p>{{game.description}}</p>
          </div>
          <div class="like-dislike-btn">
            <button class='button' @click="updateLike()">{{likeOrDislike}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >

import VideoGamesService from "@/services/video-games-service";

export default {
  name: 'game-details',
  mounted() {
    this.getGameDetails(this.$route.params.id);
    this.checkLikeOrDislike();
  },
  methods: {
    updateLike() {
      if (sessionStorage.getItem(this.id) === null) {
        let data = {
          likes: this.details[0].likes + 1
        };

        VideoGamesService.update(this.id, data)
          .then(() => {
            this.likeOrDislike = 'Remove Like';
            sessionStorage.setItem(this.id, this.id);
            this.getGameDetails(this.$route.params.id);
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        console.log(this.id === sessionStorage.getItem(this.id))
        if (this.id === sessionStorage.getItem(this.id)) {
          console.log(this.details[0].likes)
          let data = {
            likes: this.details[0].likes - 1
          };

          VideoGamesService.update(this.id, data)
            .then(() => {
              this.likeOrDislike = 'Like';
              sessionStorage.removeItem(this.id);
              this.getGameDetails(this.$route.params.id);
            })
            .catch(e => {
              console.log(e);
            });
        }
      }
    },
    getGameDetails(id) {
      VideoGamesService.findOne(id)
        .then(response => {
          let gameData = {
            id: response.data.id,
            title: response.data.title,
            description: response.data.description,
            src: response.data.image,
            price: response.data.price,
            likes: response.data.likes
          };
          this.details = [];
          this.details.push(gameData);
        }).catch(e => { console.log(e); });
    },
    checkLikeOrDislike() {
      if (sessionStorage.getItem(this.id) === null) {
        this.likeOrDislike = "Like";
      } else {
        if (sessionStorage.getItem(this.id) === this.id) {
          this.likeOrDislike = "Remove Like";
        } else {
          this.likeOrDislike = "Like";
        }
      }
    }
  },
  data() {
    return {
      details: [],
      likeOrDislike: '',
      id: this.$route.params.id
    }
  }
}
</script>

<style scoped>
.game-container {
  display: inline-block;
  position: relative;
  width: 400px;
  min-width: 400px;
  height: 750px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
  margin: 30px;
}

.game-img {
  max-width: 100%;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.game-description-bd {
  background-image: linear-gradient(0deg, #3f5efb, #fc466b);
  border-radius: 30px;
  position: absolute;
  top: 55%;
  left: -5px;
  height: 75%;
  width: 120%;
  transform: skew(19deg, -9deg);
}

.game-description {
  position: absolute;
  color: #fff;
  font-weight: 900;
  left: 30px;
  bottom: 5%;
}

.like-dislike-btn {
  position: absolute;
  color: #fff;
  right: 30px;
  bottom: 2%;
  padding: 10px 20px;
  border: 1px solid #fff;
}

.like-dislike-btn:hover {
  background: rebeccapurple;
}

.like-dislike-btn a {
  color: #fff;
}

.button {
  cursor: pointer;
  border: 1px solid #3498db;
  background-color: transparent;
  height: 35px;
  width: 100px;
  color: #F08080;
  font-size: 1.0em;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);
}

.game-info {
  position: absolute;
  color: #fff;
  left: 30px;
  bottom: 25.5%;
}

body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  background-color: #eee;
  min-height: 100vh;
}
</style>
