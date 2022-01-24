<template>
  <div>
    <p>Titlle : {{ album[this.j].name }}</p>
    <div class="carousel">
      <div class="buttonPochette1">
        <button v-if="this.j != 0" v-on:click="previous">
          <i class="fas fa-arrow-left"></i>
        </button>
      </div>
      <img v-bind:src="album[this.j].pochette" alt="" />
      <div class="buttonPochette2">
        <button v-if="this.j != 2" v-on:click="next">
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
    <a href="#">Voir site</a>
  </div>
</template>

<script>
export default {
  name: "carouselSpore",
  data() {
    return {
      j: 0,
      album: [
        {
          name: "Elevator",
          description: "Troisieme album 2021",
          date: "2021",
          pochette: require("../assets/ImgAlbum/Elevator.jpg"),
        },
        {
          name: "Didactique et Dictame",
          description: "Deuxieme album",
          date: "2020",
          pochette: require("../assets/ImgAlbum/Didactique_et_dictame.png"),
        },
        {
          name: "Sans Sucre Ajouté",
          description: "Premiere album",
          date: "2020",
          pochette: require("../assets/ImgAlbum/SSA.png"),
        },
      ],
    };
  },
  methods: {
    next() {
      if (this.j == 2) {
        this.j == 0;
      } else {
        this.j++;
      }
    },
    previous() {
      if (this.j == 0) {
        this.j == 2;
      } else {
        this.j--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .buttonPochette1,
  .buttonPochette2 {
    width: 60px;
    button {
        background: transparent;
        border: none;
        i {
            font-size: 1.5em;
        }
    }
  }
  img {
    width: 250px;
    height: 250px;
    margin: 25px;
  }
}
</style>
