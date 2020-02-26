<template>
    <div class="container">
        <ul class="nav">
            <li class="nav-link">
                <router-link class="nav-item" to="/"> Home </router-link>
            </li>
            <li class="nav-link">
                <router-link class="nav-item" to="/portal"> Portal </router-link>
            </li>
            <li class="nav-link">
                <router-link class="nav-item" to="/login"> Login </router-link>
            </li>
            <li class="nav-link">
                <router-link class="nav-item" to="/register"> Register </router-link>
            </li>
        </ul>
        <div class="jumbotron">
            <h1> Welcome to DevApps </h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "App-header"
}
</script>
