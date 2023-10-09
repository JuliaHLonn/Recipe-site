<template>
    <div>
        <div v-if="doComment">
            <h2>Kommentarer</h2>
            <textarea :disabled="isDisabled" v-model="kommentar" placeholder="Skriv din kommentar här.."></textarea> <br>
            <input :disabled="isDisabled" v-model="namn" placeholder="Namn">
            <button @click="postComment(kommentar,namn)">Skicka</button>
        </div>
        <div v-else>
            <h2>Thank you for your comment!</h2>
        </div>
        <h1 @click="getComments">{{ getIt }}</h1>
        <div v-for="com in commentList">
            <h3>{{ com.comment }} {{ com.name }}</h3>
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
    methods: {
        getFormData(kommentar, namn){
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
        /* Måste ta in id på receptet som man är i och skicka med det i post och get funktionen mellan recipes och comment*/
        postComment(kommentar, namn) {
            const url = "https://jau22-recept-grupp6-9v8e25zt13tu.reky.se/recipes/6513f70c99612c970cb37b4c/comments"
            const data = {
                "comment": kommentar,
                "name": namn
            }
            this.disableFields();
            this.postSomething(url, data).then(()=> this.doComment = false)
            
        },
        disableFields(){
            this.isDisabled = true;
        },
        getComments() {
            fetch('https://jau22-recept-grupp6-9v8e25zt13tu.reky.se/recipes/6513f70c99612c970cb37b4c/comments')
                .then(response => response.json())
                .then(data => this.commentList = data)
                .catch(error => ("Error:", error));
        }
    }
}
</script>

<style lang="scss" scoped></style>