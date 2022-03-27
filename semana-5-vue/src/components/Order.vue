<script>

import Cakes from "./Cakes.vue"
import DivisionBar from "./Utils/DivisionBar.vue"

export default {
    data() {
        return {
            valid_input: false,
            commits: null,
            loading: true
        }
    },
    created() {
        
        this.fetchData()
        // this.input()
    },
    components: {
        Cakes,
        DivisionBar
    },
    methods: {
            async fetchData() {
                 const response = await fetch("https://my-cake-server.herokuapp.com/api/allcakes")
                 this.commits = await response.json()
                 this.loading = false
                },
            async input() {
                
            }
        },
}
</script>

<template>
    <form v-if="loading===false" id="order" action="./order-form">
        <h1>Order any of these delicous and healthy cakes!</h1>
        <Cakes :cakes="commits"/>
        <button v-if="validinput===false" class="button" type="submit" disabled>Order Now</button>
        <button v-else class="button" type="submit">Order Now</button>
        <DivisionBar />
    </form>
    <h1 v-else>Loading...</h1>
</template>

<style scoped>
    h1{
        color: black;
        margin: 3vh;
    }
    
    ul{
        display: flex;
    }

    form {
        text-align: center;
    }

    button {
        margin: 40px 0;
    }
</style>