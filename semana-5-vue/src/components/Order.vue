<script>

import Cakes from "./Cakes.vue"
import DivisionBar from "./Utils/DivisionBar.vue"

export default {
    components: {
    Cakes,
    DivisionBar
},
    data() {
        return {
            
        }
    },
}
</script>

<template>
    <form id="order" action="./order-form">
        <h1>Order any of these delicous and healthy cakes!</h1>
        <Cakes />
        <button class="button" type="submit">Order Now</button>
        <DivisionBar />
    </form>
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