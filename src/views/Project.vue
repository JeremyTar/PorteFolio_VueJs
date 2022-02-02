<template>
  <div class="project page">
    <h1>My <strong>project</strong></h1>
    <div class="container">
      <projectCard
        v-for="project in projects"
        v-bind:key="project.id"
        v-bind:url="project.url"
        v-bind:activity="project.activity"
        v-bind:name="project.name"
        v-bind:link="project.link"
      ></projectCard>
    </div>
  </div>
</template>

<script>
import projectCard from "../components/projectCard.vue"
// @ is an alias to /src
export default {
  name: 'Project',
  components: {
    projectCard
  },  
  props: {

  },
  data() {
    return {
      projects: [
        {
        id: 1,
        url: require("../assets/ImgProject/selfcare.png"),
        activity: "Immobilier",
        name: "SelfcareImmobilier",
        link: "www.selfacreimmobilier.fr"
        },
        {
        id: 2,
        url: require("../assets/ImgProject/portefolio.png"),
        activity: "Perso",
        name: "Portefolio",
        link: "www.sayadini.fr/jeremy_tardini"
        },
      ] 
    }
     
  }
};




</script>

<style lang="scss" scoped>
@import "../style/Variable.scss";

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: auto;
  padding: 0;
}

.project h1 {
  color: $primarycolor;
  font-family: 'philosopher';
}
</style>