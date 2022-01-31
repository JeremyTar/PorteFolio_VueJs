<template>
    <div class="travelCard">
        <div class="description">
            <h2>{{ this.name }}</h2>
            <p>{{ this.description }}</p>



        </div>
        <div class="video">
            <span v-html="this.youtube"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: "travelCard",
    props: {
        name: String,
        iframe: Object,
        distance: String,
        particpant: Array,
        description: String,
        youtube: String,
    },
    mounted() {

    },
}
</script>

<style lang="scss" scoped>
@import "../style/mixin.scss";
@import "../style/Variable.scss";

.travelCard {
    @include transparent__card;
    width: 100%;
    max-width: 700px;
    min-width: 300px;
    height: 100%;
    max-height: 500px;
    min-height: 350px;
    margin: 15px;
}

h2 {
    font-family: 'philosopher';
    color: $primarycolor;
}
h2::before {
    content: "";
    width: 75px;
    height: 3px;
    position: absolute;
    top: 45px;
    background-color: $primarycolor ;
}

p {
    font-family: 'roboto';
}
</style>