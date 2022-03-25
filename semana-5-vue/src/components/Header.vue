

<template>
    <section class="header">
        <nav>
            <ul>
                <li>
                    <a href="./index.html"><img src="../assets/images/cake.png" alt="Logo"></a>
                </li>
                <li>
                    <a href="./index.html#menu"><h3>Shop</h3></a>
                </li>
                <li>
                    <a href="./contactanos.html"><h3>Contact</h3></a>
                </li>
            </ul>
        </nav>
        <nav id="fix">
            <ul>
                <li>
                    <a href="./login"><h3>Account</h3></a>
                </li>
                <li>
                    <img src="../assets/images/shopping-cart.png" alt="shopping-cart">
                </li>
            </ul>
        </nav>
    </section>
    
</template>

<style scoped>
    :root{
          --light-gray-font: rgb(120,115,85);
          --chocolate-background-color: #231C09;
          --header-background: #FFFDD4;
          --chocolate-font: rgb(82,76,50);
    }
    .header{
        width: 100%;
        display: flex;
        background-color: var(--header-background);
        justify-content: space-between;
        padding: 10px;

    }

    header nav {
        text-align: center;
    }

    .header ul{
        background-color: var(--header-background);
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-right: 30px;
    }

    ul li{
        margin: 5px 10px;
    }


    img {
        height: 30px;
    }

    a {
        color: var(--chocolate-font);
        text-decoration: none;
    }


    
</style>