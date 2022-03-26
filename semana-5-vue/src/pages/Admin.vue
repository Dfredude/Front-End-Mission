<script>
export default {
    created() {
        this.cakes = this.$store.state.cakes
        console.log(this.$store.state.cakes);
    },
    computed: {
        cakes () {
            return this.$store.state.cakes
        }
    }
}
</script>

<template>
    <section>
        <h1>Pending orders:</h1>
        <div id="orders" :key="cake" v-for="cake in cakes">
            <h2>{{ cake }}</h2>
            <h4>$20 USD</h4>
        </div>
    </section>
</template>

<style scoped>
    h1, h2, h4{
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