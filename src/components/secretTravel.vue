<template>
    <div id="secretTravel"></div>
</template>

<script>
import gsap from "gsap"

export default {
    name:"secretTravel",
    mounted() {
        gsap.set('#secretTravel', {perspective:500});

        const n = 50; //number of divs

        for (let i=0; i<n; i++){  
            let b = document.createElement('div');  
            b.classList.add('box');       
            console.log(document.querySelector('#secretTravel'));
            document.querySelector('#secretTravel').appendChild(b);
            
            gsap.set(b, {
                color:'#fff',
                z:2000,
                width:"10%", //adjust as needed to avoid space between divs
                height:'110%',
                rotationY:i/n*(360),
                transformOrigin:String("50% 50% -1000%"),
                backgroundImage: 'url(https://assets.codepen.io/721952/pano.jpg)',
                backgroundPosition:i*-318+'px -220px',
                });  
            }
        window.onmousemove = (e)=>{
        gsap.to('.box', {duration:0.6, rotationY:(i)=>180+i/n*360+360*(e.clientX/window.innerWidth) }); // TO DO: add vertical movement
        }
    },
}
</script>

<style lang="scss" scoped>
#secretTravel {
    width: 100%;
    height: 100%;
    overflow:hidden; 
}


div, img {
  position:absolute;
  user-select: none;
  overflow:hidden;  
}

</style>
