<script>
export default {
    data() {
        return {
            submitted: false
        }
    },
    created() {
        this.cakes = this.$store.getters.cache
        this.$store.commit('resetCache')
    },
    methods: {
        submit() {
            const order = this.getInput()
            let valid_input = true;
            for (let item in order){
                console.log(order[item])
                if (order[item] === '' && item != "comments"){
                    valid_input = false  
                    break 
                }
            }
            if (valid_input){
                this.$store.commit('addOrder', order)
                this.submitted = true
            } else {
                const span = document.getElementsByTagName('span')[0]
                span.innerHTML = 'Please fill out the form!'
            }
            
        },
        getInput(){
            const [name, phone, e_mail, comments] = document.querySelectorAll("input")
            const cakes = this.cakes
            return {
                name : name.value,
                phone : phone.value,
                e_mail : e_mail.value,
                cakes : cakes,
                comments : comments.value
            }
        }
    },
    computed: {
        submitted: {
            get() {
                return this.submitted
            },
            set(bool) {
                this.submitted = bool
            }
        }
    }
    
}

</script>

<template>
    <div v-if="submitted === false ">
        <ul id="info-de-cliente" name="informacion" class="select">
            <li>
                <label for="nombre">Nombre</label>
                <input name="nombre" required>
            </li>
            <li>
                <label for="telefono">Telefono</label>
                <input name="telefono" required>
            </li>
            <li>
                <label for="e-mail">e-mail</label>
                <input type="email" name="e-mail" required>
            </li>
            <li>
                <label for="comentarios">Comentarios</label>
                <input id="comentarios-de-la-orden" type="text" name="comentarios">
            </li>
        </ul>
        <label class="cakes" for="cakes">Your order summary:</label>
            <div class="cake" v-bind:key="cake" v-for="cake of cakes">
                <h3>{{ cake }}</h3>
                <h3>$5</h3>
            </div>
        <button class="button" type="submit" v-on:click="submit">Order Now</button>
        <span></span>
    </div>
    <div v-else>
        <h1>Order placed! Thank you for your purchase</h1>
    </div>
    
</template>

<style scoped>
    div {
        display: flex;   
        flex-direction: column;
        align-items: center;
        color: black;
    }
    ul {
        display: flex;
        padding: 0;
        flex-direction: column;
        justify-content:space-around;
        align-items: center;
        height: 250px;
    }

    li {
        display: inherit;
        flex-direction: column;
        width: 150pt;
        color: black;
    }

    .cakes {
        margin: 15px 0 5px;
        font-size:xx-large;
        color: var(--chocolate-font);
    }

    .cake {
        display: flex;
        flex-direction: row;
        width: 600px;
        justify-content: space-between;
    }

    div>h3 {
        margin: 10px 0;
    }
    button {
        margin-top: 10px;
    }

    span {
        margin-top: 20px;
    }

</style>