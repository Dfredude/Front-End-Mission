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
        <Cakes />
        <button class="button" type="submit">Order Now</button>
        <DivisionBar />
    </form>
</template>

<style scoped>
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