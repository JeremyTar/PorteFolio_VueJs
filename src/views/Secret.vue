<template>
    <div>
        <div class="mapContain">
            <img src="../assets/TMB/map_montblanc.png" alt=" Circuit tour du mont blanc" id="map">
        </div>
    </div>
</template>

<script>
export default {
    name:"Secret"

}
</script>

<style scoped>
.mapContain {
    position: absolute;
    right: 25px;
    bottom: 25px;
}
#map {
    width: 300px;
    height: 300px;
    transform: scale(1.5);
}
</style>
