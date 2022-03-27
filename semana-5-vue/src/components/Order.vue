<script>

import Cakes from "./Cakes.vue"
import DivisionBar from "./Utils/DivisionBar.vue"

export default {
    data() {
        return {
            valid_input: false,
            commits: null,
            loading: true,
            inputs: null
        }
    },
    created() {
        
        this.fetchData()
        
        
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
            onInputChange() {
                for (let input of document.querySelectorAll('input')){
                    if (input.checked){
                        this.valid_input = true
                        break
                    }
                    this.valid_input = false
                }
            },
            wrongInput() {
                console.log("test");
                console.log(document.getElementById("pop-up"));
                
            }
            
        },
}
</script>

<template>
    <section>
        <form v-if="loading===false" id="order" action="./order-form">
        <h1>Order any of these delicous and healthy cakes!</h1>
        <Cakes :cakes="commits" :inputCheck="onInputChange"/>
        <div v-if="valid_input===false">
            <button class="button" type="submit" @click="wrongInput" disabled>Order Now</button>
            <p style="color: black;" id="pop-up">Please select at least one option before submitting</p>
        </div>
        <div v-else>
            <button class="button" type="submit">Order Now</button>
        </div>
    </form>
    <h1 v-else>Loading...</h1>
    </section>
    
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
        margin: 40px 0 10px;
    }
    div {
        margin-bottom: 25px;
    }
</style>