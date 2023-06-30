<template>
  <div id="app">
    <Nav/>
    <!--<transition  mode="out-in" enter-active-class="animate__animated animate__bounce" leave-active-class="animate__animated animate__fadeOut">-->
    <transition name="routerAnim" mode="out-in"><!-- se va la primera y muestra la siguiente -->
        <router-view/>
    </transition>
    
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
components:{
  Nav
}

}
</script>


<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

body{
  background-image: url('@/assets/star-wars-1.jpeg');
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: purple;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: teal;
}

.routerAnim-enter-active{
  animation: coming .5s;
  animation-delay: .5s;
  opacity:0
}
.routerAnim-leave-active{
  animation: going .5s;
}

@keyframes coming{
  from{
    transform: translateX(-50px);
    opacity: 0
  }
  to{
    transform: translateX(0px);
    opacity:1
  }
}

@keyframes going{
  0%{
    transform: translateX(0px);
    opacity: 1
  }
  100%{
    transform: translateX(-50px);
    opacity:0
  }
}
</style>
