<script>
import Cake from "./Cake.vue"
import Cakes from "./Cakes.vue"

export default {
    components: {
    Cake,
    Cakes
},
    data() {
        return {
            
        }
    },
}
</script>

<template>
    <form action="./orden.html">
        <label class="section" for="pasteles">Cakes</label>
            <Cakes />
        <label for="informacion" class="section">Informacion de contacto</label>
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
        <input type="submit" value="Order Now">
    </form>
</template>

<style scoped>
    ul{
        display: flex;
    }
</style>