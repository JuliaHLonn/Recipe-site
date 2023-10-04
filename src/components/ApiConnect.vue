<script>

import {RouterLink, RouterView} from "vue-router"

export default {
    data() {
        return {
            list: this.getCategories(),
            categoryContainer: "side-bar"
    
        }
    },
  
    methods: {
        getCategories() {
            fetch(`https://jau22-recept-grupp6-9v8e25zt13tu.reky.se/categories`)
                .then((response) => response.json())
                .then((data) => { this.list = data })
                .catch((error) => console.log(error));
        },
        chosenCategory(category) {
console.log(category)
        }
        
    }
}

</script>

<template>
        <!-- <div> -->
        <div :class="categoryContainer">
            <p>Categories:</p>
        <ul>
            <li  v-for="category in list" >
            <!-- <a href="#" @click="chosenCategory(category.name)">{{ category.name }} ({{ category.count }})</a> -->
            <RouterLink to ="/Category" @click="chosenCategory(category.name)">{{ category.name }} ({{ category.count }})</RouterLink>
        </li>
        </ul>
        <!-- </div>
        <RouterView></RouterView>
        <div :class="result">
            här ska det vara olika divs, som kort för recept ur vald kategori och sökresultat
        </div> -->
        
    </div>
</template>



<style scoped> 
/* a {color:black}
.side-bar {
background-color: blanchedalmond;
width: 15%;
height: 40%;
border-radius: 10px;
padding: 10px;
} */
</style>