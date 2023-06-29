<template>
    <div class="container">
        <h1>Contacto</h1>
        <p>Para contactarnos puedes escribirnos</p>
        <form action="">
            <div class="input_group">
                <label for="">Nombre completo</label>
                <input type="text">
            </div>
            <div class="input_group">
                 <label for="">Correo electrónico</label>
            <input type="text">
            </div>
            <div class="input_group">
                <label for="">Mensaje</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button>Enviar</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'contacto-view',
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
        width: 60%;
        margin: 0 auto;
        color: whitesmoke;
    }
    .input_group{
        display: flex;
        flex-direction: column;
        text-align: start;
    }
    .input_group input{
        width: 60%;
    }
    button{
        background: #29b129;
        color: whitesmoke;
        display: inline-block;
        width: 20%;
        text-align: center;
        padding: 7px;
    }
</style>