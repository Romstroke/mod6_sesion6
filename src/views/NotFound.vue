<template>
    <div class="container">
        <h1>La página que buscas no existe.</h1>
        <!-- <router-link to="/" class="ruta">Ir a Home</router-link> -->
        <button click="$router.push('/')"></button>
    </div>
    
</template>

<script>
export default {
    name: 'notfound-view',
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
.container{
    color: #fffe0e;
}

.ruta{
    color: #fffe0e;
    text-decoration: none;
}
    
</style>