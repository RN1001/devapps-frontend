<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h4> Programming IDE's </h4>
            </div>
        </div>
        <div class="row">
            <div v-for="(application, index) in apps" :key="index">
                <div class="col-sm-4 col-md-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">{{application['name']}}</h5>
                            <p class="card-text">Description: {{application['description']}}.</p>
                                <p>Version: {{application['version']}}</p>
                                <hr>
                                <div v-if="application['OS'].length > 0">
                                    <p> Available </p> 
                                      <div v-if="application['url']">
                                <a v-bind:href="application['url']" class="btn btn-primary">Download</a>
                                </div>
                                <div v-else>
                                </div>
                                </div>
                            <div v-else>
                                <p> Not Available </p>
                            </div>
                        </div>
                    </div>
                </div>
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
