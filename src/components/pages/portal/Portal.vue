<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h4> Programming runtime's </h4>
            </div>
            <div class="col-sm-12">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th></th>
                            <th> name </th>
                            <th> version </th>
                            <th> description </th>
                            <th> operating systems </th>
                        </tr>
                    </thead>
                    <tbody v-for="(application, index) in apps" :key="index">
                        <tr>
                            <div v-if="application.url != null">
                                <td> <button class="btn btn-primary" v-on:click="(toUrl(application.url))">open</button> </td>
                            </div>
                            <div v-else>
                                <td> Not available</td>
                            </div>
                            <td> {{application['name']}}</td>
                            <td> {{application['version']}}</td>
                            <td> {{application['description']}}</td>
                            <div v-if="application['OS'].length > 0">
                                <td> {{application['OS']}} </td>
                            </div>
                            <div v-else>
                                <td> no OS </td>
                            </div>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Portal",
        data: function() {
            return {
                url: "",
                apps: this.getData(),
            }
        },

        methods: {
            getData: function() {
                fetch('http://localhost:3000/applications')
                    .then((res) => {
                        return res.json();
                    }).then((json) => {
                    this.apps = json;
                })
            },
            toUrl: function(url) {
                window.open(url);
            }
        },
    }
</script>

<style scoped>

</style>
