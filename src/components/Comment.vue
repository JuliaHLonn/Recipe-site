<template>
    <div>
        <div v-if="doComment" class="doComment">
            <h2>Kommentarer</h2>
            <textarea :disabled="isDisabled" v-model="kommentar" placeholder="Skriv din kommentar här.."></textarea> <br>
            <input :disabled="isDisabled" v-model="namn" placeholder="Namn">
            <button @click="postComment(kommentar, namn)">Skicka</button>
        </div>
        <div v-else>
            <h2>Thank you for your comment!</h2>
        </div>
        <div v-for="com in commentList">
            <div class="showComment">
                <h3>{{ com.name }}</h3>
                <p>{{ com.comment }}</p>
                <p>{{ com.date }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    data() {
        return {
            kommentar: "",
            namn: "",
            getIt: "Get comments",
            commentList: "",
            isDisabled: false,
            doComment: true

        }
    },
    created() {
        this.getComments()
    },
    methods: {
        getFormData(kommentar, namn) {
            console.log(kommentar, namn)
        },

        postSomething(url, data) {
            const response = fetch(url, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify(data),
            });
            return response;
        },

        postComment(kommentar, namn) {
            const recipeId = this.$route.params.id;
            const url = "https://jau22-recept-grupp6-9v8e25zt13tu.reky.se/recipes/" + recipeId + "/comments";
            const data = {
                "comment": kommentar,
                "name": namn,
                "date": this.getDateStamp()
            }
            this.disableFields();
            this.postSomething(url, data).then(() => this.doComment = false)
            console.log(data.date)

        },
        disableFields() {
            this.isDisabled = true;
        },
        getDateStamp() {
            const date = new Date();
            const dateStamp = date.toISOString().split('T')[0];

            return dateStamp;
        },

        getComments() {
            const recipeId = this.$route.params.id;
            const url = "https://jau22-recept-grupp6-9v8e25zt13tu.reky.se/recipes/" + recipeId + "/comments";
            fetch(url)
                .then(response => response.json())
                .then(data => this.commentList = data)
                .catch(error => ("Error:", error));
            console.log(this.getDateStamp());
        }
    }
}
</script>

<style lang="scss" scoped>
.doComment {
    margin: 5px;
}

.showComment {
    background-color: #F6FDC3;
    border: 2px solid orange;
    padding: 2px;
    margin: 5px;
    width: 50%;
}
</style>