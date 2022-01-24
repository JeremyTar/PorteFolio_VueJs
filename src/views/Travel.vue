<template>
  <div class="travel page">
    <h1>This is an Travel page</h1>
    <div class="container">
      <div>
        <div>
          <p>Paris-amsterdam</p>
          <span></span>
          <p>Loreum fdopwkdopzk opdkzwpok wopdk owpk dwkwp</p>
          <ul>
            <li>600km</li>
            <li>6jours</li>
            <li>Participant : Leon de Bruxelle</li>
          </ul>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/vCptYU_F2T0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div>
        <div>
          <p>Island</p>
          <span></span>
          <p>Loreum fdopwkdopzk opdkzwpok wopdk owpk dwkwp</p>
          <ul>
            <li>100km</li>
            <li>10jours</li>
            <li>Participant : Leon de Bruxelle</li>
          </ul>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XM4yWdng-xs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div>
        <div>
          <p>GR30</p>
          <span></span>
          <p>Loreum fdopwkdopzk opdkzwpok wopdk owpk dwkwp</p>
          <ul>
            <li>100km</li>
            <li>10jours</li>
            <li>Participant : Leon de Bruxelle</li>
          </ul>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/d4PhlcMyhlw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div>
        <div>
          <p>TMB</p>
          <span></span>
          <p>Loreum fdopwkdopzk opdkzwpok wopdk owpk dwkwp</p>
          <ul>
            <li>100km</li>
            <li>10jours</li>
            <li>Participant : Leon de Bruxelle</li>
          </ul>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/FnMBIdVVvq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
   
    
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Travel',
  components: {
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 80%;
  overflow: scroll;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

}
.container::-webkit-scrollbar {
    width: 0 !important
}
</style>