<template>
    <div>
        <div class="commentHeader"><h2>Kommentarer</h2></div>
        <div v-for="com in commentList" class="commentsWrapper">
            <div class="showComment">
                <h3>{{ com.name }}</h3>
                <p>{{ com.comment }}</p>
                <p>{{ com.createdAt.split('T')[0] }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                commentList: ""
            }
            
        },
        created() {
        this.getComments()
    },
    methods: {
        getComments() {
            const recipeId = this.$route.params.id;
            const url = "https://jau22-recept-grupp6-9v8e25zt13tu.reky.se/recipes/" + recipeId + "/comments";
            fetch(url)
                .then(response => response.json())
                .then(data => this.commentList = data)
                .catch(error => ("Error:", error));
            
        }
    }
    }
</script>

<style lang="scss" scoped>
.showComment {
    background-color: white;
    border: 3px solid #EF8275;
    border-radius:10px;
    padding: 10px;
    margin-left:auto;
    margin-right: auto;
    width: 70%;
    margin-bottom: 15px;
    font-size: 18px;;
}
.showComment h3 {
    width:100%;
    border-bottom:2px solid #EF8275;
}

.commentHeader{
    width:100%;
    background-color: #EF8275;
    text-align: center;
}
.commentHeader h2{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color:#F9DB6D;
    padding:10px; 
}
</style>