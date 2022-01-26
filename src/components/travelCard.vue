<template>
    <div class="travelCard">
        <div class="description">
            <p>{{ this.name }}</p>
            <p>{{ this.description }}</p>


        </div>
        <div class="video">
            <p>test video</p>
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

</style>