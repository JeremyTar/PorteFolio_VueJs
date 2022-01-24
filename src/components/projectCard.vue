<template>
    <div class="Project-card">
        <img :src="url" alt="photos des projets">
          <div class="text">
            <p>{{ name }}</p>
            <p>{{ activity }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'projectCard',
  props: {
    name: String,
    activity: String,
    url: String,
  },
}
</script>

<style scoped>

.Project-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: 30%;
  min-width: 300px;
  max-width: 500px;
  height: 40%;
  border-radius: 15px;
  background-color: rgba(255,255,255, 0.02);
  background: rgba( 255, 255, 255, 0.02 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 15px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.Project-card img {
  width:100%;
  height: 80%;
  border-radius: 15px;
  height:80%;
  object-fit: cover;
}

.Project-card .text {
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 20%;
  color: green;
  font-size: 1.5em;
}
</style>