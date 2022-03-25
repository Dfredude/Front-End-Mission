<script setup>
import Header from './components/Header.vue'
import Order from './components/Order.vue';
import Footer from './components/Footer.vue'
import Trends from './components/Trends.vue'

</script>

<template>
  <div>
  <Header></Header>
  <Trends />
  <Order></Order>
  <Footer></Footer>
  <main>
    
  </main>
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



</style>
