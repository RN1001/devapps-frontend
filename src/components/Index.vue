<template>
  <div>
    <h1>{{ msg }}</h1>
      <p> {{apiMsg}} </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
        apiMsg: this.getMsg()
    }
  },
  props: {
    msg: String
  },
  methods: {
      getMsg: function() {
        fetch('http://localhost:3000/')
        .then((res) => {
            return res.json();
        }).then((json) => {
            this.apiMsg = json['data'];
        });
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
