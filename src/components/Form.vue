<template>
    <div id="form">
        <img src="../assets/form.png"/>
        <h1>This is a form</h1>
        <label>Name:</label><br>
        <input type="text" v-model="myname" placeholder="Your name" /><br><br>
        <label>E-mail Address:</label><br>
        <input type="email" v-model="myemail" placeholder="Your email address" /><br><br>
        <button v-on:click="submit">Submit</button>
    </div>
</template>

<script>
    export default {
        name: "Form",
        data () {
            return {
                myname: '',
                myemail: ''
            }
        },
        methods: {
            submit: function() {
                alert("Your name: " + this.myname
                    + "\nYour e-mail address: " + this.myemail);
            }
        }
    }
</script>

<style scoped>
    #form {
        background-color: #ffa500;
    }
    h1 {
        font-weight: normal;
        color: white;
    }
    label {
        font-weight: bold;
        color: white;
    }
    input {
        border-color: #ffa500;
    }
    input:hover {
        border-color: #000000;
    }
    input:active {
        border-color: #ffffff;
    }
    button {
        background-color: #ffa500;
        border-color: #ffa500;
        color: white;
    }
</style>
