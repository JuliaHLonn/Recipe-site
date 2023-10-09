<template>
    <div>
{{ recipe.title }}

    </div>
    
    <ShowRating :rating="recipe.avgRating"></ShowRating>
    <SetRating :recipeId="recipe._id"></SetRating>
   
    
</template>

<script>
import SetRating from './SetRating.vue'
import ShowRating from './ShowRating.vue';

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
    },
    components:{
    SetRating,
    ShowRating
}
}
</script>

<style scoped></style>