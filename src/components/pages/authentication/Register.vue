<template>
    <div class="container">
        <h2> {{ formName }} </h2>
        <div class="row">
            <div class="col-sm-6">
                <form>
                    <div class="form-group row">
                        <label for="username"> Username </label>
                        <input class="form-control" v-model="username" id="username" required>
                    </div>
                    <div class="form-group row">
                        <label for="password"> Password </label>
                        <input class="form-control" type="password" v-model="password" id="password" required>
                    </div>
                    <div class="form-group row">
                        <label for="confirmPassword"> Confirm Password </label>
                        <input class="form-control" type="password" v-model="confirmPassword" id="confirmPassword" required>
                    </div>
                    <div class="form-group row">
                        <label for="firstname"> Firstname </label>
                        <input class="form-control" v-model="firstname" id="firstname" required>
                    </div>
                    <div class="form-group row">
                        <label for="lastname"> Lastname </label>
                        <input class="form-control" v-model="lastname" id="lastname" required>
                    </div>
                    <div class="form-group row">
                        <button type="button" v-on:click="registerAccount()" class="btn btn-secondary"> Register </button>
                    </div>
                </form>
            </div>
            <div class="col-sm-6">
                <section>
                    <h4>Are these details correct?: </h4>
                    <p> Username: {{username}} </p>
                    <p :style="passwordColour"> Password: {{comparePasswords()}}</p>
                    <p> Your name: {{getFullName()}}  </p>
                    <br>
                    <div v-if="response['data'] != null">
                        {{response['data']}}
                    </div>
                    <div  v-else>
                        {{response}}
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

export default {
    name: "Register",
    data: function() {
        return {
            username: "",
            password: "",
            confirmPassword: "",
            age: "",
            firstname: "",
            lastname: "",
            passwordColour: {
                color: "white",
            },
            response: ""
        };
    },
    methods: {
        getFullName: function() {
            return this.firstname + " " + this.lastname;
        },
        comparePasswords: function() {
            if (this.password === "" || this.confirmPassword === "") {
                this.passwordColour.color = "white";
                return "";
            } else {
                if (this.password === this.confirmPassword) {
                    this.passwordColour.color = "green";
                    return "Passwords match!"
                } else {
                    this.passwordColour.color = "red";
                    return "Passwords don't match!"
                }
            }
        },
        registerAccount: function() {
            axios.post('http://localhost:3000/register', {
                username: this.username,
                password: this.password,
                firstname: this.firstname,
                lastname: this.lastname
            }).then((response) => {
                this.response = response;
            }).catch(() => {
                this.response = 'This username is already taken';
            });
        }
    },
    props: {
        formName: String
    }
}
</script>

