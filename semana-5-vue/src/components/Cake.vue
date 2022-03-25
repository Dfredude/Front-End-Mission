
<script>
export default {
    props: {
        tag: String,
        url: String
    },
    created() {
        console.log(this.props)
    },
}

</script>

<template>
    <li>
        <label :for="tag">{{ tag }}</label>
        <input :name="tag" type="checkbox">
        <img :src="url">
    </li>
</template>

<style scoped>
    li {
        width: 100px;
    }
    img {
        width: 100px;
    }
</style>