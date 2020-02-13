<template>
  <div>
    <h1>{{ msg }}</h1>
    <!--
      <ul>
     <li v-for="(children, index) in user['user']['children']" :key="index">
      <p>{{index}}: {{children.name}}</p>
     </li>
    </ul>-->
      <p> {{apiMsg['data']}} </p>
    <ul>
      <li v-for="(data, index) in user[0]" :key="index">
        <p> {{data}} </p>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
        user: this.getData(),
        apiMsg: this.getMsg()
    }
  },
  props: {
    msg: String
  },
  methods: {
      getData: function() {
         fetch('http://localhost:3000/applications')
         .then((res) => {
           return res.json();
         }).then((json) => {
           this.user = json;
         })
      },
      getMsg: function() {
        fetch('http://localhost:3000/')
        .then((res) => {
            return res.json();
        }).then((json) => {
            this.apiMsg = json;
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
