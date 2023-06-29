<template>
    <div class="container">
        <div v-if="personaje">
            <div class="titulo">Nombre:</div>
            <div class="contenido">{{personaje.name}}</div>
            <div class="titulo">Genero:</div>
            <div class="contenido">{{personaje.gender}}</div>
            <div class="titulo">Altura:</div>
            <div class="contenido">{{personaje.height}}</div>
            <div class="titulo">Número de películas:</div>
            <div class="contenido">{{personaje.films.length}}</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'personaje-view',
    props: {
        id:{
            type: String,
            required:true
        },
    },
    data: function(){
        return {
            personaje: null,
        }
    },
    // computed: {},
    methods: {
        getPersonaje(){
            axios.get(`https://swapi.dev/api/people/${this.id}`)
            .then(result =>{
                console.log(result)
                this.personaje =result.data
            }).catch(error => console.log(error))
        }
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.getPersonaje()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .container{
        width: 40%;
        margin: 30px auto;
        border: 2px solid #747474;
        text-align: center;
    }
    .titulo{
        background: #747474;
        color: #fffe0e;
        padding: 15px;
    }
    .contenido{
        color: white;
        padding: 15px;
        background: black;
    }
</style>