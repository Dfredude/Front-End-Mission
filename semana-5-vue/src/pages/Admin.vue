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
        <div id="orders">
            <table>
                <thead>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Order</th>
                    <th>Price</th>
                    <th>Order Status</th>
                </thead>
                <tbody>
                    <tr :key="name" v-for="{ name, phone, cakes } in orders">
                        <td>{{ phone }}</td>
                        <td>{{ name }}</td>
                        <td><h4 :key="cake" v-for="cake in cakes">{{ cake }}</h4></td>
                        <td>$5</td>
                        <td>Pending</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<style scoped>
    *, h1, h2, h3, h4{
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

    table, td, th{
        border: 1px solid black;
    }
    

</style>