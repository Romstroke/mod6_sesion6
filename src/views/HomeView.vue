<template>
  <div class="container">
    <img src="@/assets/Star_Wars_Logo.svg.png" alt="" srcset="">
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 80vh;
    margin: 0 auto;

  }

  img{
    width: 100%;
  }

</style>