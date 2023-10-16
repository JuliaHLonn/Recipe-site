<template>
    <div class="commentSection">
        <div v-if="doComment" class="doComment">
            
            <div class="commentHeader"><h2>Skriv kommentar</h2></div>
            <input :disabled="isDisabled" v-model="namn" placeholder="Namn" class="nameInput">
            <p>{{ valNamn }}</p>
            <textarea :disabled="isDisabled" v-model="kommentar" placeholder="Skriv din kommentar här.." class="commentInput"></textarea> <br>
            <p>{{ valKommentar }}</p>
            
            <div class="buttonWrapper"><button @click="validate(kommentar, namn)" id="commentButton">Skicka</button></div>
        </div>
        <div v-else>
            <h2>Tack för din kommentar!</h2>
        </div>
        <div class="commentHeader"><h2>Kommentarer</h2></div>
    </div>
</template>

<script>

export default {

    data() {
        return {
            kommentar: "",
            namn: "",
            isDisabled: false,
            doComment: true,
            valNamn: "",
            valKommentar: "",


        }
    },
    methods: {
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
        },
        disableFields() {
            this.isDisabled = true;
        },
        getDateStamp() {
            const date = new Date();
            const dateStamp = date.toISOString().split('T')[0];

            return dateStamp;
        },
        validate(value1, value2) {
            if (value1 == "" && value2 == "") {
                this.valNamn = "Du behöver skriva in ditt namn";
                this.valKommentar = "Skriv en kommentar";
            }
            else if (value1 == "") {
                this.valKommentar = "Skriv en kommentar";
                this.valNamn = "";
            }
            else if (value2 == "") {
                this.valNamn = "Du behöver skriva in ditt namn";
                this.valKommentar = "";
            }
            else
                this.postComment(value1, value2)
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


.commentSection{
    margin-top:40px;
    width: 60%;
    min-width: 500px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    border: 3px dashed #EF8275;
    border-radius:20px;
    background-color: #F7B2AD;
    
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
.commentInput{
    box-sizing: border-box;
    width:100%;
    padding:10px;
    height: 100px;
    font-size:18px;
}
.nameInput{
    font-size:18px;
    width:50%;
}
.commentInput:focus{
    outline-color:#EF8275;
}
.nameInput:focus{
    outline-color:#EF8275;
}
#commentButton{
    background-color:#EF8275;
    border-color:#EF8275;
    color:#2C0E37;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 15px;
    box-shadow: inset;
    box-sizing: border-box;
    padding: 10px;
    padding-left:20px;
    padding-right:20px;
    font-size:large;
}
.buttonWrapper{
    text-align: center;
    width: 100%;
}

#commentButton:hover{
    background-color:#F7B2AD;
}
#commentButton:disabled{
    background-color: #e7ada6;
    color:rgb(138, 105, 121);
}
#commentButton:active{
    background-color:#EF8275;;
}
</style>