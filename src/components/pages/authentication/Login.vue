<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <form>
                    <div class="form-group row">
                        <label for="username"> Username </label>
                        <input type="text" class="form-control" id="username" required/>
                    </div>
                    <div class="form-group row">
                        <label for="password"> Password </label>
                        <input type="password" class="form-control" id="password" required/>
                    </div>
                    <div class="form-group row">
                        <button type="button" v-on:click="userLogin()" class="btn btn-secondary"> Login </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "login",
        data: function() {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            userLogin: function() {
                axios.post('http://localhost:3000/login', {

                });
            }
        }
    }
</script>
