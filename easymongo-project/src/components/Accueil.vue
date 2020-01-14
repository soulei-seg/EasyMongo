<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Bienvenue cher utilisateur.
    </p>
    <h3>Interactions possibles</h3>
    <ul>
      <li><a href="" target="_blank" rel="noopener">importer</a></li>
      <li><a href="http://localhost:8080/bill" rel="noopener">tester</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
