<template>
  <div class="carousel">
    <div class="menu">
      <div class="current_img">
        <img v-bind:src="compagny[this.i].logo" />
      </div>
      <div class="current_text">
        <div class="current_text_info">
            <h4 class="compagnyName">{{ compagny[this.i].name }}<span>{{ compagny[i].contract}}</span></h4>
            <p>{{compagny[this.i].localisation}}</p>
        </div>
        <p class="compagnyDescription">{{ compagny[this.i].description }}</p>
      </div>
    </div>
    <div class="button">
        <button v-if="this.i != 0" v-on:click="previousXp()" class="previous"><i class="fas fa-arrow-left"></i></button>
        <button v-if="this.i != 4" v-on:click="nextXp()" class="next"><i class="fas fa-arrow-right"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "carouselXp",
  mounted () {
  },
  data() {
    return {
      i: 0,
      compagny: [
        {
          id: 1,
          name: "B'up",
          description: "Salle d'escalade crée par Benoit Heinz et Stéphane Julien, deux ancien compétiteur qui ont pour vocation de démocratiser le monde de la grimpe ainsi que l'ensemble des plaisirs procurés par cette discipline.",
          localisation: "Clermont-Ferrand, 63000",
          logo: require("../assets/ImgLogo/BUP_logo.png"),
          contract: "CDI"
        },
        {
          id: 2,
          name: "CCI de Paris",
          description: "Chambre du commerce et de l'industrie, cette entité a pour but d'aide les entrepreuneur dans leur démarches. Qu'elles soient administratives, stratégiques, opérationnelles ou bien même juridiques.",
          localisation: "Paris, 75010",
          logo: require("../assets/ImgLogo/CCI_logo.png"),
          contract: "CDD"
        },
        {
          id: 3,
          name: "Nespresso",
          description: "Entreprise apartenent au groupe Nestlé et qui à pour but de proposer du café d'exception à ses consomateurs. Riche en process de qualités c'est engagé que cette entreprise promouvoie la caféologie et son art.",
          localisation: "Lieusaint, 77127",
          logo: require("../assets/ImgLogo/nespresso.png"),
          contract: "CDI"
        },
        {
          id: 4,
          name: "SDA, Lagardère Retails",
          description: "Societe de distribution de marques international au seins de Aéroport et gare. Représantante de marques de grand noms tel que : Nespresso, Mariage Frere, Starbucks, Relay, Hermes, etc ... que lagadère Retails se porte garante de la qualité de ses employés  ",
          localisation: "Orly, 94310",
          logo: require("../assets/ImgLogo/lagardere_travel.png"),
          contract: "CDI"
        },
        {
          id: 5,
          name: "Tissot",
          description: "Maison d'éditions de documents juridique et immobilier depuis 1965, tissot à pour but de proposer aux agents immobiliers ainsi que particuleirs des documents juridiquement à jours et compréhensible pour tous",
          localisation: "Paris, 75005",
          logo: require("../assets/ImgLogo/tissot.png"),
          contract: "Alternance"
        },
      ],
    };
  },
  methods: {
    nextXp() {
      if (this.i == 4) {
        return
      }
      this.i++;
    },
    previousXp() {
      if(this.i == 0) {
        return
      }
      this.i--;     
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/police.scss";
@import "../style/Variable.scss";

p{
  font-family: "roboto";
  font-size: 1.2em;
  color: $secondarycolor;
}

.carousel {
  display: flex;
  flex-direction: column;
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center; 
    .current_text_info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h4 {
            font-size: 1.2em;
        }
        span {
            margin: 0 5px;
            font-size: 0.6em;
            font-style: italic;
        }
    }
    .current_img {
      height: 75px;
    }
  }
}
.button {
  display: flex;
  width: 70%;
  justify-content: space-around;
  margin: auto;
  button {
    background: transparent;
    font-size: 1.3em;
    border: none;
  }
}
</style>