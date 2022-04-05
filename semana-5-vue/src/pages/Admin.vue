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
        <h1>Incoming Orders</h1>
        <div id="orders">
            <table>
                <thead>
                    <th>Order ID <img class="icon" src="../assets/images/down-arrow.png" alt="down arrow"> </th>
                    <th>Customer <img class="icon" src="../assets/images/down-arrow.png" alt="down arrow"> </th>
                    <th>Order <img class="icon" src="../assets/images/down-arrow.png" alt="down arrow"> </th>
                    <th>Price <img class="icon" src="../assets/images/down-arrow.png" alt="down arrow"> </th>
                    <th>Order Status <img class="icon" src="../assets/images/down-arrow.png" alt="down arrow"> </th>
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
        /* color: var(--chocolate-background-color); */
        color: var(--chocolate-font)
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

    .icon {
        width: 12px;
    }

    table{
        margin-top: 30px;
        border-collapse: collapse;
    }

    th {
        border-bottom: 1px solid black;
    }
    th, td {
        padding: 10px 20px;
    }
    
    

</style>