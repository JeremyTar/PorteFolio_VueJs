<template>
    <div id="secretTravel">
        <secretTravel></secretTravel>
        <div class="mapContain">
            <img src="../assets/TMB/map_montblanc.png" alt=" Circuit tour du mont blanc" id="map">
            <i class="fas fa-map-pin houches"></i>
            <i class="fas fa-map-pin posthouches"></i>
            <i class="fas fa-map-pin contamines"></i>
            <i class="fas fa-map-pin bonnati"></i>
            <i class="fas fa-map-pin feret"></i>
            <i class="fas fa-map-pin arpette"></i>
            <i class="fas fa-map-pin posarpette"></i>
            <i class="fas fa-map-pin postarpette2"></i>
        </div>
    </div>
</template>

<script>
import secretTravel from "../components/secretTravel.vue"
export default {
    name:"Secret",
    components: {
        secretTravel,
    },
    mounted() {

    }
}
</script>

<style lang="scss" scoped>
#secretTravel {
    width: 100%;
    height: 100%;
}
.mapContain {
    position: absolute;
    right: 25px;
    bottom: 25px;
    #map {
    width: 300px;
    height: 300px;
    transform: rotateX(30deg);
    }
    #map:hover {
        transform: scale(1.5);
    }
    .houches {
        position: absolute;
        left:111px;
        top: 150px;
        color: red
    }
}

.box {
    z-index: 15;
}

</style>
