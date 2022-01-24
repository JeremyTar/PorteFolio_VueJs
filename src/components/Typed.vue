<template>
  <div class="Typed">
    <vue-typed-js :strings="['Fullstack Developer', 'Walker', 'Coach Immobilier', 'Climber', 'Porteur de projets', 'BeatMarker']"
                  :typeSpeed="75"
                  :backSpeed="55"
                  :backDelay="1500"
                  :loop="true">
      <h2>a <span class="typing"></span></h2>
    </vue-typed-js>
  </div>
</template>

<script>
export default {
  name: 'Typed',
}
</script>

<style scoped>
h2 {
  margin: 0!important;
  font-family: "robot";
}
span{
  color: #157F1F;
  font-family: 'philosopher';
}
</style>