<template>
    <div class="container">
        <h2> {{ formName }} </h2>
        <div class="row">
            <div class="col-sm-6">
                <form>
                    <p>
                        <label for="username"> Username </label>
                        <input v-model="username" id="username">
                    </p>
                    <p>
                        <label for="password"> Password </label>
                        <input v-model="password" id="password">
                    </p>
                    <p>
                        <label for="age"> Age </label>
                        <input v-model="age" id="age">
                    </p>
                    <p>
                        <label for="firstname"> Firstname </label>
                        <input v-model="firstname" id="firstname">
                    </p>
                    <p>
                        <label for="lastname"> Lastname </label>
                        <input v-model="lastname" id="lastname">
                    </p>
                </form>
            </div>
            <div class="col-sm-6">
                <section>
                    <h4>You entered: </h4>
                    <p> Username: {{username}} </p>
                    <p> Password: {{password}} </p>
                    <p> Age: {{age}} </p>
                    <p> {{getFullName()}}  </p>
                    <p> {{msg()}} </p>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Register",
    data: function() {
        return {
            username: "",
            password: "",
            age: "",
            firstname: "",
            lastname: ""
        };
    },
    methods: {
        getFullName: function() {
            return this.firstname + " " + this.lastname;
        },
        msg: function() {
            return `${this.username} ${this.password}`;
        },
    },
    props: {
        formName: String
    }
}
</script>
