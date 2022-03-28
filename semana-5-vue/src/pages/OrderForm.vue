<script>
export default {
    data() {
        return {
            submitted: false
        }
    },
    created() {
        this.cakes = this.$store.getters.cache
        console.log(this.cakes);
    },
    methods: {
        submit() {
            const order = this.getInput()
            this.$store.commit('addOrder', order)
            this.submitted = true
            
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
            <div>
                <h3 v-bind:key="cake" v-for="cake of cakes">{{ cake }}</h3>
            </div>
        <button class="button" type="submit" v-on:click="submit">Order Now</button>
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
        width: 15vw;
        color: black;
    }

    .cakes {
        margin: 15px 0 5px;
        display: flex;
        flex-direction: column;
        font-size:xx-large;
        color: var(--chocolate-font);
    }

    div>h3 {
        margin: 10px 0;
    }
    button {
        margin-top: 10px;
    }

</style>