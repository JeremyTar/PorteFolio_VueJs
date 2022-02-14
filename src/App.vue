<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" title="home"><img src="./assets/icone/resume.png" class="icones"></router-link>
      <router-link to="/cv" title="resume"><img src="./assets/icone/cv.png" class="icones"></router-link>
      <router-link to="/project" title="my projects"><img src="./assets/icone/project-management.png" class="icones"></router-link>
      <router-link to="/travel" title="my travel"><img src="./assets/icone/landscape.png" class="icones"></router-link>
    </div>
    <img src="./assets/background.jpg" alt="Background mountain" class="background">
    <!-- <router-link to="/secret" title="Let's TMB" class="goToTmb"><i class="fas fa-mountain"></i></router-link> -->
    <router-view/>
  </div>
</template>

<script>
</script>


<style lang="scss">
@import "./style/mixin.scss";

#app {
  text-align: center;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  #nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    @include transparent__card;
    @media (min-width: 860px) {
      flex-direction: column;
      z-index: 2;
      top: 150px;
      left: 75px;
      width: 7%;
      min-width: 95px;
      height: 60%;
      padding: 30px;
      .icones {
        width: 75px;
        height: 75px;
        z-index: 2;
      } 
    }
    @media (min-width: 426px) and (max-width: 859px) {
      z-index: 2;
      left: 60px;
      right: 60px;
      top: 20px;
      height: 80px;
      padding: 30px;
      .icones {
        width: 70px;
        height: 70px;
        z-index: 2;
      } 
    }
    @media (max-width: 425px) {
      z-index: 2;
      left: 25px;
      right: 25px;
      top: 35px;
      height: 75px;
      padding: 15px;
      .icones {
        width: 50px;
        height: 50px;
        z-index: 2;
      }
    }
  }
  .background {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
  }
}

.goToTmb {
  position: absolute;
  right: 0;
  bottom: 0;
  i{ 
    font-size: 1.5em;
    color : black;
  }
}


/* Class for views card */


.page {
  @include transparent__card;
  position: absolute;
  margin: 25px;
  padding: 55px;
}
@media (min-width: 860px) {
  .page {
    top: 50px;
    bottom: 50px;
    right: 50px;
    left: 170px;
  }
}
@media (min-width: 426px) and (max-width: 859px) {
  .page {
    bottom: 20px;
    top: 105px;
    left: 0;
    right: 0;
    bottom: 10px;
  }
}
@media (max-width: 425px) {
  .page {
    top: 105px;
    left: -25px;
    right: -25px;
    bottom: 5px;
  }
}

</style>
