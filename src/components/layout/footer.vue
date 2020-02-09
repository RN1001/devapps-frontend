<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <p> &copy; Raihaan Nazir {{date}} </p>
            </div>
            <div class="col-sm-6">
                <h2> DevApps </h2>
                <p> This is a website to access development tools </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "App-footer",
    data() {
        return {
            date: new Date().getFullYear()
        }
    },
}
</script>