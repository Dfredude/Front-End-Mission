<template>
    <section>
        <div class="left-container">
            <div class="container-down">
                <h4>PASTRY FROM KRISTI</h4>
                <h2>FRESH BAKED TO YOUR DOOR</h2>
                <p>Bringing the smell and taste of your favorite pancakes to your door. By fresh we mean natural...</p>
                <a href="/#order"><button>Shop All Pastries</button></a>
                
            </div>
        </div>
        <div class="right-container">
            <img src="../assets/images/trending-bakery.jpg" alt="Trends">
        </div>
    </section>
</template>

<style scoped>


:root{
          --light-gray-font: rgb(120,115,85);
          --chocolate-background-color: #231C09;
          --header-background: #FFFDD4;
          --chocolate-font: rgb(82,76,50);
    }

    section {
        font-size: 0;
        background-color: var(--chocolate-background-color) ;
        width: 100%;
        height: 450px;
    }
    section>*{
        font-size: medium;
    }

    section>div {
        display: inline-block;
        height: 100%;
        box-sizing: border-box;
        padding: 10px;
        vertical-align: top;
    }

    .left-container{
        width: 35%;
        position: relative;
    } 

    h2 {
        font-weight: 1000;
    }

    h4 {
        color: #926EE4;
    }

    .right-container{
        width: 65%;
        /* text-align: center; */
    }

    img{
        display: block;
        width: 80%;
        max-width: 800px;
        margin: 10px auto;
        max-height: 90%;
        border-radius: 25px;
    }

    .container-down {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: absolute;
        bottom: 60px;
        height: 60%;
        left: 20px;
        margin: 0px 0 0 4vw;
    }

    button {
        background: none;
        padding: 10px;
        color: white;
        width: 200px;
        font-size: large;
        border-radius: 20px;
        border: 1px solid white;
    }

</style>