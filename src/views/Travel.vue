<template>
  <div class="travel page">
    <h1>This is an Travel page</h1>
    <div class="container">
      <travelCard v-for="travel in travels" :key="travel.id"
      v-bind:name="travel.name"
      v-bind:iframe="travel.iframe"
      v-bind:distance="travel.distance"
      v-bind:description="travel.description"
      v-bind:participant="travel.participant"
      v-bind:youtube="travel.youtube"
      ></travelCard>
    </div>
  </div>
</template>

<script>
import travelCard from "../components/travelCard.vue";

export default {
  name: 'Travel',
  components: {
    travelCard,
  },
  data() {
    return {
      travels: [
        {
          id: 1,
          name: "Paris-Amsterdam",
          distance: "600Km",
          description: "De paris à amsterdam en velo, 6 jours",
          participants: ["Maxime pichot", "Jeremy Tardini"],
          youtube: `<iframe width="560" height="315" src="https://www.youtube.com/embed/vCptYU_F2T0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        },
        {
          id: 2,
          name: "Island - Laugavegur",
          distance: "55km",
          description: "Trek de 55km réalisé en 6 jours",
          participants: ["Maxime pichot", "Jeremy Tardini", "Julien Duquesne", "Melinda Sayasith"],
          youtube: `<iframe width="560" height="315" src="https://www.youtube.com/embed/XM4yWdng-xs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        },
        {
          id: 3,
          name: "Gr30 - tour des lac d'auvergne",
          distance: "180km",
          description: "Trek de 9 jours autous des 11 lacs d'auvergne",
          participants: ["Maxime Schlique", "Coralie Germe", "Jeremy Tardini", "Melinda Sayasith"],
          youtube: `<iframe width="560" height="315" src="https://www.youtube.com/embed/d4PhlcMyhlw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        },
        {
          id: 4,
          name: "Tour du Mont-blanc",
          distance: "177km",
          description: "Le tour du mont-blanc en 9 jours",
          participants: ["Yannick Morin","Guillaum Tardini", "Ian Tardini","Melinda Sayasith", "Jeremy Tardini"],
          youtube: `<iframe width="560" height="315" src="https://www.youtube.com/embed/FnMBIdVVvq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        },
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../style/Variable.scss";

.container {
  width: 100%;
  height: 80%;
  overflow: scroll;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

}
.container::-webkit-scrollbar {
    width: 0 !important;
}

h1 {
  font-family: 'philosopher';
  color: $primarycolor
}


</style>