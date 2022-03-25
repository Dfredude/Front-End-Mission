<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'  
  export default {
    data() {
      return {
        cart: []
      }
    },
    components: {
      Header,
      Footer
    }
  }


</script>

<template>
  <div>
    <Header/>
    <main>
      <router-view></router-view>
    </main>
    <Footer/>
  
  </div>
</template>

<style>

  @font-face {
    font-family: "Algreya";
    src: url("./assets/fonts/Alegreya-VariableFont_wght.ttf");
  }

  :root{
          --light-gray-font: rgb(120,115,85);
          --chocolate-background-color: #231C09;
          --header-background: #FFFDD4;
          --chocolate-font: rgb(82,76,50);
    }

  * {
      /* font-family: Arial, Helvetica, sans-serif; */
      font-family: Alegreya, sans-serif;
      margin: 0;
    }

  body {
      background-color: var(--header-background)  ;
      color: #FFFEFF;
  }

  h2 {
    font-size: xx-large;
  }

  button {
    cursor: pointer;
  }

  .button {
        background: var(--chocolate-background-color);
        padding: 10px;
        color: white;
        width: 200px;
        font-size: large;
        border-radius: 20px;
        border: 1px solid white;
    }

  a {
        color: var(--chocolate-font);
        text-decoration: none;
    }



</style>
