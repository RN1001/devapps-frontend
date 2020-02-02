<template>
    <div class="test">
        <h2> {{ formName }} </h2>
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
        </form>
        <section>
            <h4>You entered: </h4>
            <p> Username: {{username}} </p>
            <p> Password: {{password}} </p>
            <p> Age: {{age}} </p>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Test',
    data: function() {
        return {
            username: "",
            password: "",
            age: "" 
        };
    },
    props: {
        formName: String
    }
}
</script>

<style scoped>
    form {
        border: 1px solid black
    }

    form > #id {
        border-radius: 5px;
    }
</style>