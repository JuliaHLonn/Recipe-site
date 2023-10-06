<template>
    <div>
{{ recipe.title }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            recipe: {}
        }
    },
    created() {
        const recipeId = this.$route.params.id;
        this.fetchItemById(recipeId)

    },
    methods: {
        fetchItemById(id) {
            fetch(`https://jau22-recept-grupp6-9v8e25zt13tu.reky.se/recipes/${id}`)
                .then(response => response.json())
                .then(data => this.recipe = data)
                .catch(error => ("Error:", error));
        },
    }
}
</script>

<style scoped></style>