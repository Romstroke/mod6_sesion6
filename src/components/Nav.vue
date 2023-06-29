<template>
    <nav>
      <router-link class="" to="/">Home</router-link> |
      <router-link to="/personajes">Personajes</router-link> |
      <router-link to="/contacto">Contacto</router-link>
    </nav>
</template>

<script>
export default {
    name: 'nav-comp',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    nav{
        background: #fffe0e;
        
    }
</style>