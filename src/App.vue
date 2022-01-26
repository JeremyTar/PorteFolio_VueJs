<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" title="home"><img src="./assets/icone/resume.png" class="icones"></router-link>
      <router-link to="/cv" title="resume"><img src="./assets/icone/cv.png" class="icones"></router-link>
      <router-link to="/project" title="my projects"><img src="./assets/icone/project-management.png" class="icones"></router-link>
      <router-link to="/travel" title="my travel"><img src="./assets/icone/landscape.png" class="icones"></router-link>
    </div>
    <img src="./assets/background.jpg" alt="Background mountain" class="background">
    <router-link to="/secret" title="Let's TMB" class="goToTmb"><i class="fas fa-mountain"></i></router-link>
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
    flex-direction: column;
    justify-content: space-evenly;
    z-index: 0;
    position: absolute;
    top: 150px;
    left: 100px;
    padding: 30px;
    width: 175px;
    height: 60%;
    @include transparent__card;
    .icones {
      width: 75px;
      height: 75px;
      z-index: 2;
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
  top: 80px;
  left: 280px;
  width: 80%;
  height: 80%;
}
</style>
