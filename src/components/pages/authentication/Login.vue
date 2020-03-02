<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <form>
                    <div class="form-group row">
                        <label for="username"> Username </label>
                        <input type="text" v-model="username" class="form-control" id="username" required/>
                    </div>
                    <div class="form-group row">
                        <label for="password"> Password </label>
                        <input type="password" v-model="password" class="form-control" id="password" required/>
                    </div>
                    <div class="form-group row">
                        <button type="button" v-on:click="userLogin()" class="btn btn-secondary"> Login </button>
                    </div>
                </form>
                <p> {{response}} </p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {setToken} from "../../../service/authService";


    export default {
        name: "login",
        data: function() {
            return {
                username: "",
                password: "",
                response: ""
            }
        },
        methods: {
            userLogin: function() {
                axios.post('http://localhost:3000/login', {
                    username: this.username,
                    password: this.password
                }).then((response) => {
                    setToken(response['data']);
                    // stupidly has to reload to be authenticated...
                    this.$router.push({name: "portal"});
                    window.location.reload();
                }).catch(() => {
                    this.response = "Could not log in, invalid credentials";
                })
            }
        }
    }
</script>
