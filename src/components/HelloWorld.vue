<template>
  <div id="hello">
    <img src="../assets/logo.png"/>
    <h1>{{ msg }}</h1>
    <p>{{ para }}</p>
    <p></p>
    <router-link to="/list">List of countries</router-link>
    <router-link to="/olympics">List of Olympic Medals by Countries</router-link>
    <router-link to="/form">Form</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
      return {
          msg: 'Welcome to My Vue.js Project',
          para: 'In this page I will show you how you can create lists from countries.'
      }
  }
}
</script>

<style scoped>
  #hello {
    background-color: #000000;
  }
  h1 {
    font-weight: normal;
    color: white;
  }
  p {
    font-weight: normal;
    color: white;
  }
  a {
    color: #42b983;
  }
  a:hover {
    color: #ffffff;
  }
</style>
