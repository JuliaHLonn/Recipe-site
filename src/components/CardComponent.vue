<template>
    <div>
        <ul class="list">
            <li v-for="recipe in listOfRecipe" class="recipe" @click="clickMethod(recipe)">
                <h4>
                    Name: {{ recipe.title }}
                </h4>

                <p>
                    rating: {{ recipe.ratings }}
                </p>

                <p>
                    tiden: {{ recipe.timeInMins }} minuter
                </p>


                <img class="image" :src="recipe.imageUrl" alt="imageName">

                <p>
                    Ingredienser: {{ recipe.ingredients.length }}
                </p>


            </li>


        </ul>

    </div>
</template>

<script>
export default {
    data() {
        return {
            listOfRecipe: []


        };
    }, created() {
        this.fetchMethod();
    },
    methods: {
        fetchMethod() {
            fetch('https://jau22-recept-grupp6-9v8e25zt13tu.reky.se/recipes')
                .then(response => response.json())
                .then(data => this.listOfRecipe = data)
                .catch(error => ("Error:", error));
        },
        
        
        clickMethod(item) {
            window.alert(`you click ${item.title}`)
        }

    }
}
</script>

<style scoped>
.list {
    list-style: none;
   
}

.image {
    width: 50px;
    height: 50px;
}

.recipe {
    border: 1px solid black;
    cursor: pointer;
    margin: 30px;
    text-align: center;
}


</style>