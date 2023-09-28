<template>
    <div onclick="getCategories()">
        <p>Categories:</p>
        <ul>
            <li v-for="category in list">
            <a href="#">{{ category.name }} ({{ category.count }})</a>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {
            list: "test"
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

<style scoped> a {color:black}</style>