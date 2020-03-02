<template>
    <div class="container">
        <ul class="nav">
            <li class="nav-link">
                <router-link class="nav-item" to="/"> Home </router-link>
            </li>
            <li class="nav-link">
                <router-link class="nav-item" to="/portal"> Portal </router-link>
            </li>
            <li v-if="userLoggedIn() === false" class="nav-link">
                <router-link class="nav-item" to="/login"> Login </router-link>
            </li>
            <li v-else>
            </li>
            <li v-if="userLoggedIn() === false" class="nav-link">
                <router-link class="nav-item" to="/register"> Register </router-link>
            </li>
            <li v-else>
            </li>
            <li v-if="username() !== null" class="nav-link">
                <router-link class="nav-item" to="/"> {{username()}}'s Account </router-link>
            </li>
            <li v-else>
            </li>
            <li v-if="userLoggedIn() === true">
                <a href="#" class="nav-link" v-on:click="logout"> Logout </a>
            </li>
        </ul>
        <div class="jumbotron">
            <h1> Welcome to DevApps </h1>
        </div>
    </div>
</template>

<script>
    import {logout, isLoggedIn, getUsername} from "../../service/authService";

export default {
    name: "App-header",
    methods: {
        logout: function() {
            logout();
            this.$router.push({name: 'home'});
            window.location.reload();
        },
        userLoggedIn: function () {
            return isLoggedIn();
        },
        username: function () {
            return getUsername();
        }
    }
}
</script>
