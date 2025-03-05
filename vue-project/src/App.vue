<template>
  <div id="app">
    <nav>
      <router-link to="/"></router-link>
      <router-link to="/about"></router-link>
      <router-link to="/skills"></router-link>
      <router-link to="/gallery"></router-link>
      <router-link to="/contact"></router-link>

    </nav>

    <router-view />
  </div>
</template>

<script setup>
 import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const comments = ref([])
async function getComments() {
  const { data, error } = await supabase.from('comments').select()
  if (!error && data) {
    comments.value = data
  }
}

onMounted(() => {
  getComments()
})
</script>

<style scoped>

</style>
