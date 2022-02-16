<template>
  <div class="cv page">
    <h1>Mon parcours</h1>
    <div id="Ligne" v-on:scroll="SeeScroll()">
      <h2 class="commerceTitle titleApparition">Commerce</h2>
      <section class="commerce AddApparitionBlock">
        <div class="ligneCommerce"></div>
        <div class="commerce_graduate1">
          <i class="fas fa-user-graduate"></i>
          <p>BTS : Management des Unitées Commerciales</p>
        </div>
        <div class="commerce_graduate2">
          <i class="fas fa-user-graduate"></i>
          <p>BTS : Negociation et relation client</p>
        </div>
        <div class="commerce_xp AddApparitionCardRight">
          <h3>Expériences profesionnelles</h3>
          <carouselXp></carouselXp>
        </div>
        <div class="commerce_projects">
          <h3>Projects</h3>
          <div class="commerce_projects_selfcare">
            <a href="https://jeremytar.github.io/Selfcare-Immobilier/"
              ><img
                src="../assets/ImgLogo/selfcare.png"
                alt="logo sci"
                width="150"
                height="150"
            /></a>
            <div class="commerce_projects_selfcare_description">
              <h5>Selfcare immobiler</h5>
              <p>
                Selfcare immobilier est une entreprise de coaching immobilier
                situé à Clermont-ferrand.
              </p>
            </div>
          </div>
        </div>
      </section>
      <h2 class="musiqueTitle">Musique</h2>
      <section class="musique">
        <div class="ligneMusique"></div>
        <div class="musique_creation">
          <h3>Creation</h3>
          <carouselSpore></carouselSpore>
        </div>
        <div class="musique_techno">
          <h3>Techno</h3>
          <carouselTechno></carouselTechno>
        </div>
      </section>
      <h2 class="itTitle">IT</h2>
      <section class="it">
        <div class="ligneIt"></div>
        <div class="it_graduate">
          <h3>Graduate</h3>
          <div>
            <a href="https://openclassrooms.com/fr"
              ><img src="../assets/ImgLogo/OC.png" alt="logo OpenClassroom"
            /></a>
            <p>Diplome de devellopeur web : RNCP de niveau 5</p>
          </div>
        </div>

        <div>
          <h2>Frontend</h2>
          <div>
            
          </div>

        </div>


        <div class="it_skills">
          <h3>Skills</h3>
          <div class="skillsContenair">
            <div class="database">
              <i class="fas fa-database"></i>
              <p>Base de données et ORM</p>
              <div class="expand">
                <!-- <button v-on:click="showDB()">
                  <i class="fas fa-expand-alt"></i>
                </button> -->
              </div>
            </div>
            <div class="backend">
              <i class="fas fa-server"></i>
              <p>Backend</p>
                <!-- <button v-on:click="showBack()">
                  <i class="fas fa-expand-alt"></i>
                </button> -->
            </div>
            <div class="frontend">
              <i class="fas fa-laptop"></i>
              <p>Frontend</p>
              <div class="expand">
                <!-- <button v-on:click="showFront()">
                  <i class="fas fa-expand-alt"></i>
                </button> -->
              </div>
            </div>
          </div>
          <div class="database_skills" v-if="this.showDivDB == true">
            <ul>
              <li><img src="../assets/ImgLogo/mongodb.png" alt="logo Mongo DB" /></li>
              <li><img src="../assets/ImgLogo/Mysql.png" alt="" /></li>
            </ul>
            <button v-on:click="showDB()"><i class="fas fa-expand-alt"></i></button>
          </div>
          <div class="backSkills" v-if="this.showDivBack == true">
            <ul>
              <li><img src="../assets/ImgLogo/nodejs.png" alt="" /></li>
              <li><img src="../assets/ImgLogo/typeOrm.png" alt="" /></li>
              <li><img src="../assets/ImgLogo/prisma.png" alt="" /></li>
            </ul>
          </div>
          <div class="frontSkills" v-if="this.showDivFront == true">
            <ul>
              <li><img src="../assets/ImgLogo/angular.png" alt="" /></li>
              <li><img src="../assets/ImgLogo/Vuejs.png" alt="" /></li>
              <li><img src="../assets/ImgLogo/sass.png" alt="" /></li>
              <li><img src="../assets/ImgLogo/bootstrap.png" alt="" /></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import carouselXp from "../components/carrouselXp.vue";
import carouselSpore from "../components/carrouselSpore.vue";
import carouselTechno from "../components/carrouselTechno.vue"

export default {
  name: "Cv",
  components: {
    carouselXp,
    carouselSpore,
    carouselTechno,
  },
  data() {
    return {
      showDivDB: false,
      showDivBack: false,
      showDivFront: false,
    };
  },
  methods: {
    SeeScroll() {
      let DivScroll = document.getElementById("Ligne");
      let x = DivScroll.scrollTop;
      console.log(x);
      if (x <= 30) {
        document
          .querySelector(".musiqueTitle")
          .classList.remove("titleApparition");
        document
          .querySelector(".musique")
          .classList.remove("AddApparitionBlock");
        document
          .querySelector(".musique_creation")
          .classList.remove("AddApparitionCardRight");
        document
          .querySelector(".musique_techno")
          .classList.remove("AddApparitionCardLeft");
        document.querySelector(".itTitle").classList.remove("titleApparition");
        document.querySelector(".it").classList.remove("AddApparitionBlock");
        document
          .querySelector(".it_graduate")
          .classList.remove("AddApparitionCardRight");
        document
          .querySelector(".it_skills")
          .classList.remove("AddApparitionCardLeft");
      }
      if (x >= 150) {
        document
          .querySelector(".commerce_projects")
          .classList.add("AddApparitionCardLeft");
      }
      if (x >= 600) {
        document
          .querySelector(".musiqueTitle")
          .classList.add("titleApparition");
        document.querySelector(".musique").classList.add("AddApparitionBlock");
        document
          .querySelector(".musique_creation")
          .classList.add("AddApparitionCardRight");
        document
          .querySelector(".musique_techno")
          .classList.add("AddApparitionCardLeft");
      }
      if (x >= 1300) {
        document.querySelector(".itTitle").classList.add("titleApparition");
        document.querySelector(".it").classList.add("AddApparitionBlock");
        document
          .querySelector(".it_graduate")
          .classList.add("AddApparitionCardRight");
        document
          .querySelector(".it_skills")
          .classList.add("AddApparitionCardLeft");
      }
    },
    showDB() {
      let datadiv = document.querySelector(".database_skills");
      if (this.showDivDB == true) {
        this.showDivDB == false;
        datadiv.classList.remove("itSkills");
      } else {
        this.showDivDB == true;
        datadiv.classList.add("itSkills");
      }
    },
    showBack() {
      console.log(this.showDivBack)
      if (this.showDivBack == false) {
        this.showDivBack == true
        console.log(this.showDivBack)
      }
      else {        
        this.showDivBack == true
        console.log(this.showDivBack)
      }
    },
      showFront() {
      console.log(this.showDivFront)
      if (this.showDivFront == true){
        this.showDivFront == false
        console.log(this.showDivFront)
      }
      else {        
        this.showDivFront == true
        console.log(this.showDivFront)

      }
    }
  },
};
</script>


<style lang="scss" scoped>
@import "../style/mixin.scss";
@import "../style/keyframes.scss";
@import "../style/police.scss";
@import "../style/Variable.scss";

.Cv {
  width: 500px;
  height: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1,
h2,
h3 {
  font-size: 2em;
  color: $primarycolor;
  font-family: "philosopher";
}
p,
li {
  color: $secondarycolor;
  font-family: "roboto";
  font-size: 1em;
}
#Ligne {
  width: 90%;
  height: 75%;
  overflow: scroll;
  margin: auto;
  h2 {
    opacity: 0;
  }
  h3 {
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* BLOCK COMMERCE */

  .commerce {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 0.2fr) 1fr 0.2fr 0.1fr;
    grid-column-gap: 0px;
    grid-row-gap: 20px;
    opacity: 0;
    .commerce_graduate1 {
      display: flex;
      align-items: center;
      position: relative;
      left: 50px;
      grid-area: 1 / 1 / 2 / 2;
      @include transparent__card;
      i {
        margin: 0 15px;
        font-size: 1.5em;
      }
    }
    .commerce_graduate1::before,
    .commerce_graduate2::before {
      content: "";
      width: 55px;
      height: 5px;
      background-color: $primarycolor;
      z-index: 5;
      margin-left: -15px;
      margin-right: 15px;
    }
    .commerce_graduate2 {
      display: flex;
      align-items: center;
      position: relative;
      left: 50px;
      grid-area: 2 / 1 / 2 / 2;
      @include transparent__card;
      i {
        margin: 0 15px;
        font-size: 1.5em;
      }
    }
    .commerce_xp {
      position: relative;
      left: -50px;
      grid-area: 3 / 3 / 3 / 4;
      @include transparent__card;
      opacity: 0;
      padding: 15px;
    }
    .commerce_projects {
      position: relative;
      left: 50px;
      grid-area: 4 / 1 / 4 / 2;
      @include transparent__card;
      border: 1px solid rgba(255, 255, 255, 0.18);
      opacity: 0;
      .commerce_projects_selfcare {
        display: flex;
        flex-direction: column;
        .commerce_projects_selfcare_description {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          h5 {
            font-size: 1.5em;
            margin: 0;
            color: $secondarycolor;
            font-family: "athene";
          }
        }
      }
    }
    .ligneCommerce {
      width: 32px;
      grid-area: 1 / 2 / 7 / 3;
      background-color: $primarycolor;
      margin: 15px auto;
      z-index: 2;
      clip-path: polygon(0 0, 50% 5%, 100% 0, 100% 95%, 50% 100%, 0% 95%);
    }
  }

  /* BLOCK MUSIQUE */

  .musique {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 0.5fr 1fr;
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    opacity: 0;
    .musiqueTitle {
      opacity: 0;
    }
    .ligneMusique {
      width: 32px;
      background-color: $primarycolor;
      margin: 15px auto;
      z-index: 2;
      clip-path: polygon(0 0, 50% 10%, 100% 0, 100% 90%, 50% 100%, 0% 90%);
      grid-area: 1 / 2 / 5 / 3;
    }
    .musique_creation {
      position: relative;
      @include transparent__card;
      grid-area: 2 / 1 / 2 / 1;
      opacity: 0;
      left: 50px;
    }
    .musique_techno {
      position: relative;
      @include transparent__card;
      grid-area: 1 / 3 / 1 / 3;
      opacity: 0;
      left: -50px;
    }
  }

  /* BLOCK IT */

  .it {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    opacity: 0;
    .itTitle {
      opacity: 0;
    }
    .ligneIt {
      width: 32px;
      background-color: $primarycolor;
      margin: 15px auto;
      z-index: 2;
      clip-path: polygon(0 0, 50% 10%, 100% 0, 100% 90%, 50% 100%, 0% 90%);
      grid-area: 1 / 2 / 5 / 3;
    }
    .it_graduate {
      position: relative;
      left: -50px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      grid-area: 1 / 3 / 1 / 3;
      opacity: 0;
      @include transparent__card;
      img {
        width: 80%;
        margin: auto;
      }
    }
    .it_skills {
      position: relative;
      left: 50px;
      grid-area: 2 / 1 / 2 / 1;
      opacity: 0;
      @include transparent__card;
      .skillsContenair {
        display: flex;
        flex-wrap: wrap;
        .database,
        .backend,
        .frontend {
          width: 33%;
          i {
            font-size: 1.5em;
          }
          ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0;
          }
          img {
            width: 90%;
          }
        }
        .backend::before {
          content: "";
          position: absolute;
          left: 32%;
          top: 25%;
          bottom: 10%;
          width: 3px;
          background-color: $secondarycolor;
          margin: 10px;
        }
        .backend::after {
          content: "";
          position: absolute;
          right: 32%;
          top: 25%;
          bottom: 10%;
          width: 3px;
          background-color: $secondarycolor;
          margin: 10px;
        }
      }
    }
  }
}

.database_skills {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: scale(0);
  background: $primarycolor;
  z-index: -1;
}

#Ligne::-webkit-scrollbar {
  width: 0 !important;
}

/* ANIMATION */

.titleApparition {
  animation: apparitionTitle 1s ease-in-out forwards;
}

.AddApparitionBlock {
  animation: apparitionBlock 1.5s ease forwards;
}

.AddApparitionCardRight {
  animation: apparitionCardRight 2s ease forwards;
}

.AddApparitionCardLeft {
  animation: apparitionCardLeft 2s ease forwards;
}

.itSkills {
  animation: 1s skillsIt forwards;
}
</style>
