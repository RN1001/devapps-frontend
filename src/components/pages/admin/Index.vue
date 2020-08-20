<template>
  <div class="container">
    <div class="row">
        <div class="col-sm-3">
            <p> Manage Development Apps </p>
        </div>
        <div class="col-sm-9">
            <a href="#" class="btn btn-primary"> Add </a>
        </div>
    </div>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th> name </th>
                <th> version </th>
                <th> description </th>
                <th> operating systems </th>
                <th> </th>
                <th> </th>
            </tr>
        </thead>
        <tbody v-for="(application, index) in apps" :key="index">
            <tr>
                <td> {{application['name']}}</td>
                <td> {{application['version']}}</td>
                <td> {{application['description']}}</td>
                <div v-if="application['OS'].length > 0">
                    <td> {{application['OS']}} </td>
                </div>
                <div v-else>
                    <td> no OS </td>
                </div>
                <td> <a href="#" class="btn btn-primary"> Edit </a> </td>
                <td> <a href="#" class="btn btn-primary"> Delete </a> </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>


export default {
    name: "admin",
    data: function() {
        return {
            apps: this.getData(),
        };
    },
    components: {
       
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
    }
}
</script>

<style>

</style>