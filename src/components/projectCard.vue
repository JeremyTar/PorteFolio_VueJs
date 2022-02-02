<template>
    <div class="Project-card">
        <img :src="url" alt="photos des projets">
          <div class="text">
            
            <a :href="link"><p>{{ name }}</p></a>
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
    link: String,
  },
}
</script>

<style lang="scss" scoped>
@import "../style/mixin.scss";
@import "../style/Variable.scss";

.Project-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: 30%;
  min-width: 300px;
  max-width: 500px;
  height: 40%;
  margin-top: 50px;
  @include transparent__card;
  padding: 15px;
  transition: 0.5s ease;
  cursor: pointer;
}
.Project-card:hover {
  transform: scale(1.2);
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
  color: $primarycolor;
  font-size: 1.5em;
  font-family: 'roboto';
}
</style>