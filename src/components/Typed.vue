<template>
  <div class="Typed">
    <vue-typed-js :strings="['Fullstack Developer', 'Walker', 'Coach Immobilier', 'Climber', 'Porteur de projets', 'BeatMarker']"
                  :typeSpeed="75"
                  :backSpeed="55"
                  :backDelay="1500"
                  :loop="true">
      <p>a <span class="typing"></span></p>
    </vue-typed-js>
  </div>
</template>

<script>
export default {
  name: 'Typed',
}
</script>

<style lang="scss" scoped>
@import "../style/Variable.scss";

p {
  margin: 10ox 0!important;
  font-family: "robot";
  span{
    color: $primarycolor;
    font-family: 'philosopher';
    font-size: 2em;
    font-weight: 800;
  }
}
</style>