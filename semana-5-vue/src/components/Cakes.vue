<script>

    export default {
        data() {
            return {
                commits: null
            }
        },
        created() {
            this.fetchData()
        },
        methods: {
            async fetchData() {
                 const response = await fetch("https://my-cake-server.herokuapp.com/api/allcakes")
                 this.commits = await response.json()
                 console.log(this.commits);
                }
        },
    }

</script>

<template>
    <ul class="cakes">
        <li v-for="{ id, name, thumbnail} of commits " :key="id">
            <label :for="name">{{ name }}</label>
            <img :src="thumbnail">
            <div>
                <h4>Add to cart</h4>
                <label class="container">
                    <input :name="name" type="checkbox">
                    <span class="checkmark"></span>
                </label>
            </div>
        </li>
    </ul>
</template>

<style scoped>

:root{
          --light-gray-font: rgb(120,115,85);
          --chocolate-background-color: #231C09;
          --header-background: #FFFDD4;
          --chocolate-font: rgb(82,76,50);
    }

    .cakes {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    

    img {
        height: 170px;
    }

    li {
        display: flex;
        justify-content: space-around;
        margin: 10px 5px;
        padding: 20px;
        background-color: #BC6868;
        flex-direction: column;
        color: var(--header-background);
        list-style: none;
        border-radius: 25px;
        width: 250px;
        height: 250px;
        text-align: center;
        /* box-shadow: 0 0 10px 10px var(--chocolate-background-color); */
    }

    li>div>* {
        display: inline-block;
        margin: 10px 10px 0;
        vertical-align: top;
    }

    label {
        font-size: large;
        color: white;
    }

    .container {
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

    .container:hover input ~ .checkmark {
    background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark {
    background-color: #2196F3;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    }

    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {
    display: block;
    }

    /* Style the checkmark/indicator */
    .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    }

</style>