<template>
  <div class="home page">
    <div class="container">
      <div class="photo">
        <img src="../assets/jeje.jpg" alt="">
      </div>  
      <div class="presentation">
        <div class="text">
          <span>I'm</span>
          <h1>Jeremy Tardini</h1>
          <Typed/>
          <p>"Trouve un travail qui te plait et tu ne travailleras plus..."</p>
          <span>Confucius</span>    
        </div>
        <div class="social">         
          <a href="https://www.linkedin.com/in/jeremy-tardini-2b9575226/" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="https://github.com/JeremyTar" target="_blank"><i class="fab fa-github"></i></a>
          <a href="tel:0638369414"><i class="fas fa-phone-alt"></i></a>
          <a href="mailto:jeremy.tardini@gmail.com"><i class="fas fa-at"></i></a>
          <a href="Cv.pdf"><i class="fas fa-file-alt"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Typed from "../components/Typed.vue"
export default {
  name: 'Home',
  components: {
    Typed
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "../style/Variable.scss";

.home {
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 25px;
  padding: 100px 55px 55px 55px;
  
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    overflow: scroll;
    .photo {
      height: 250px;
      width: 100%;
      min-width: 250px;
      max-width: 400px;
      border: 10px solid $primarycolor;
      padding: 10px;
      border-radius: 25px;
      box-shadow: 1px 1px 5px rgba(0,0,0, 0.3);
      img {
        height: 100%;
        width: 100%;
        border-radius: 15px;
        object-fit: cover;
      }
    }
  }
  .container::-webkit-scrollbar {
  width: 0 !important;
  }
  .presentation {
  width: 30%;
  max-width: 600px;
  min-width: 300px;
  text-align: left;
  margin: 10px 25px;
  .text {
    h1 {
      color: $primarycolor;
      font-size: 3em;
      margin: 0!important;
      font-family: 'philosopher';   
    }
    p {
      color: $secondarycolor;
      font-size: 1.2em;        
    }
    span {
      font-weight: 500;
      font-size: 1em;
      color: $secondarycolor;        
    }
  }
  .social {
    width:90%;
    display: flex;
    justify-content: space-evenly;
    margin: 25px;
    i {
      font-size: 2em;
      color: $primarycolor;
      }
    }
  }
}
</style>