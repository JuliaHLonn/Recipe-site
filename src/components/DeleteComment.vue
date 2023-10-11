<template>
    <div>
        <button @click="deleteComments()">{{ deleteButton }}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            deleteButton: "Delete"
        }
    },
    methods: {
        deleteComments() {
            this.deleteSomething(this.commentList)
        },
        deleteSomething(data) {
            const recipeId = this.$route.params.id;
            const url = "https://jau22-recept-grupp6-9v8e25zt13tu.reky.se/recipes/" + recipeId + "/comments";
            const response = fetch(url, {
                method: "DELETE",
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
        }
    }
}
</script>

<style lang="scss" scoped></style>