<script>
export default {
    created() {
        let params = window.location.href.slice(window.location.href.search("order-form")).split('?')[1]
        this.cakes = params.split('&').map((cake) => {
            return cake.split('=')[0]
        })
        this.cakes = this.cakes.map((cake)=>{
            return `${cake.replace(/\+/g, ' ')}`
        })
        console.log(this.cakes);       
    },
    
}

</script>

<template>
    <form action="./place-order">
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
        <label class="big" for="cakes">Your order summary:</label>
            <h3 v-bind:key="cake" v-for="cake of cakes">{{ cake }}</h3>
        <button class="button" type="submit">Order Now</button>
    </form>
    
</template>

<style scoped>
    form {
        display: flex;   
        flex-direction: column;
        align-items: center;
        color: black;
    }
    ul {
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

    .big {
        font-size:xx-large;
        color: var(--chocolate-font);
    }
</style>