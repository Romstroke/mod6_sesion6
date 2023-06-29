<template>
    <div class="container">
        <h1>Personajes</h1>
        <button @click="getData">Mostrar personajes</button>
       
        <div v-if="loading">
            Cargando...
        </div>
        <div class="container_character">
           <button class="btn_personajes" v-for="(personaje,index) in personajes" :key="index" @click="redirect(personaje.url)">{{personaje.name}}</button>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'

export default {
    name: 'personajes-view',
    // props: {},
    data: function(){
        return {
            page:1,
            personajes:[],
            loading: false
        }
    },
    // computed: {},
    methods: {
        async getData(){
           try{
                this.loading= true;

                let json = await axios.get(`https://swapi.dev/api/people?page=${this.page}`)
                console.log(json)
                let results = json.data.results

                results.forEach(personaje => {
                    this.personajes.push(personaje)
                });

                this.page++
                this.loading =false;
           } 
           catch(error){
               console.log(error)
           }

        },
        redirect(url){
            // console.log(url)
            let index = ((url).match(/\d+/))[0];
            // console.log(index)
            this.$router.push(`/personaje/${index}`)
        }
    }
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
        text-align: center;
    }
    .container_character{
        gap: 2px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 90%;
        margin: 0 auto;
        /* text-align: center; */
    }
    .btn_personajes{
        border: 1px solid white;
        color:#fffe0e;
        background-color: black;
    }

</style>