<template>
    <div>
        <p>Logiciel : {{ techno[this.j].name }}</p>
        <div class="carousel">
            <img v-bind:src="techno[this.j].logo" alt="logo techno" />
            <p>{{ techno[this.j].description }}</p>
            <div class="button">
                <button v-if="this.j != 1" v-on:click="next">
                <i class="fas fa-arrow-right"></i>
                </button>
                <button v-if="this.j != 0" v-on:click="previous">
                <i class="fas fa-arrow-left"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "carouselTechno",
  data() {
    return {
      j: 0,
      techno: [
        {
          name: "Ableton",
          description: "Ableton est un logiciel MAO (composition assité par ordinateur) adapté pour le live et la production musicale.",
          logo: require("../assets/ImgLogo/Ableton-Logo.png"),
        },
        {
          name: "Traktor",
          description: "Traktor est une référence parmis les logiciel de djing. Utilisable avec controlleur et/ou platine.",
          pochette: require("../assets/ImgLogo/traktor.png"),
        },
      ],
    };
  },
  methods: {
    next() {
        this.j++;
    },
    previous() {
        this.j--;
    },
  },
};
</script>

<style lang="scss" scoped>
p {
    font-family: "roboto";
    font-size: 1em;
}
.carousel {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
    button {
        background: transparent;
        border: none;
        margin: 10px;
        i {
            font-size: 1.5em;
        }
  }
  img {
    margin: 25px;
  }
}
</style>
