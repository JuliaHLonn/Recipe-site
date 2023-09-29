<template>
    <div onclick="getCategories()">
        <div :class="categoryContainer">
            <p>Categories:</p>
        <ul>
            <li v-for="category in list">
            <a href="#">{{ category.name }} ({{ category.count }})</a>
            </li>
        </ul>
        </div>
        
    </div>
</template>

<script>

export default {
    data() {
        return {
            list: "test",
            categoryContainer: "side-bar"
    
        }
    },
    created() {
        this.getCategories()
        
    },
    methods: {
        getCategories() {
            fetch(`https://jau22-recept-grupp6-9v8e25zt13tu.reky.se/categories`)
                .then((response) => response.json())
                .then((data) => { this.list = data })
                .catch((error) => console.log(error));
        }
        
    }
}

</script>

<style scoped> 
a {color:black}
.side-bar {
background-color: blanchedalmond;
width: 15%;
height: 40%;
border-radius: 10px;
padding: 10px;
}
</style>