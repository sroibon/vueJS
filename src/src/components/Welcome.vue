<template>
    <div id="welcome">
        <h1>Welcome to  RAs</h1>
      <h3>
        <router-link to="/anagram-checker">Anagram Checker</router-link>
        <p>Know if your string is an anagram</p>
      </h3>
      <h3>
        <router-link to="/location-checker">Location Checker</router-link>
        <p>Check your coordinates (whats's your location!)</p>
      </h3>
    </div>
</template>

<script>
  export default {}
</script>

<style>
  #welcome {
    height: 100%;
  }

  #welcome p {
  	margin: 0;
  	padding: 0;
  }
</style>