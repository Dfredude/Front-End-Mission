<script>
export default {
    created() {
        this.orders = this.$store.state.orders
        console.log(this.$store.state.orders);
    },
    computed: {
        orders () {
            return this.$store.state.orders
        }
    }
}
</script>

<template>
    <section>
        <h1>Pending orders:</h1>
        <div id="orders" :key="name" v-for="{ name, phone, cakes } in orders">
            <h2>{{ name }}</h2>
            <h3>{{ phone }}</h3>
            <h4 :key="cake" v-for="cake in cakes">{{ cake }}</h4>
        </div>
    </section>
</template>

<style scoped>
    h1, h2, h3, h4{
        color: black;
    }

    h1 {
        font-size: 4rem;
    }

    .orders {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

</style>