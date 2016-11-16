<template>
  <header>
    <h1><router-link to="/">RANDOM APPS</router-link></h1>
  </header>
</template>

<script>
  export default {}
</script>

<style>
  header {
    background: lightgreen;
    width: 100%;
    height: 46px;
  }

  header h1 {
    margin-top: 0;
    font-weight: bold;
  }

  header h1 a {
    color: lightcoral !important;
    text-decoration: none !important;
  }
</style>