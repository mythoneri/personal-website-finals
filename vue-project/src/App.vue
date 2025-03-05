<script setup>
import HelloWorld from './components/Home.vue'
</script>

<template>
  <header>
    

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to bottom, #183425, #869b8f);
  color: #EDE6D4;
  margin: 0;
  padding: 0;
}

</style>
