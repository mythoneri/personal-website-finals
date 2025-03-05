<template>
  <header class="sticky-header">
    <nav class="nav-link">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/gallery">Gallery</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </header>
<section class="home">
  <div class="text-image-container">
    <div class="text-container">
      <h1>Hi! I'm Nerimiah Jay Ato</h1> 
      <h4>IT Student</h4> 
      <p>
        A second-year student at Asia Pacific College pursuing a Bachelor of Science in Information Technology with a specialization in Mobile and Internet Technology. <br>
        I'm a 20-year-old exploring the world of web development! Thanks for stopping by to learn about me!
      </p>
      <p>
        <i>"Small disciplines repeated with consistency every day lead to great achievements gained slowly over time." - </i>
        <b>John C. Maxwell</b>
      </p>
    </div>
    <img :src="profileImage" alt="Profile Image" class="custom-image" />
  </div>

  </section>

  <footer>
    <div class="social-buttons-container">
      <a href="https://www.facebook.com/nerimiah.jay" target="_blank">
        <img :src="facebook" alt="Facebook" width="50">
      </a>
      <a href="https://www.instagram.com/mytho.ko" target="_blank">
        <img :src="instagram" alt="Instagram" width="50">
      </a>
      <a href="https://www.linkedin.com/in/nerimiah-jay-ato-0ab386288" target="_blank">
        <img :src="linkedin" alt="LinkedIn" width="50">
      </a>
      <a href="https://open.spotify.com/user/nerimiahjayato?si=Hv2cxsbFTjCJySGU_CzeRg" target="_blank">
        <img :src="spotify" alt="Spotify" width="50">
      </a>
    </div>
    <p>&copy; 2025 Nerimiah Jay Ato. All rights reserved.</p>
  </footer>
</template>

<script setup>
import profileImage from '@/assets/images/profile.jpeg';
import facebook from '@/assets/images/facebook.jpg';
import instagram from '@/assets/images/instagram.jpg';
import linkedin from '@/assets/images/linkedin.jpg';
import spotify from '@/assets/images/spotify.jpg';
</script>

<style scoped>
/* Add any necessary styling */
</style>
