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

  <section class="gallery">
  <h2>Picture Gallery</h2> <hr>
        <p>Welcome to my Picture Gallery! <br> 
            Take a look to my photos and some moments I captured in my journey.</p>

             <div class="galleryy">
                <!-- 1:1 Aspect Ratio Group -->
                <div class="square"><img :src="family" alt="Family"></div>
                <div class="square"><img :src="photography" alt="Photography"></div>    
                <div class="square"><img :src="mi231" alt="MI231"></div>    
                <div class="square"><img :src="strings" alt="APC Strings"></div>    
                <div class="square"><img :src="msc" alt="MSC"></div>    
                <div class="square"><img :src="gmrc" alt="GMRC"></div>  
             </div>
        <h2>Mobile Photography</h2> <hr>
        <div class="galleryy">
          
                <div class="rectangle"><img :src="photography1" alt="Beach"></div>
                <div class="rectangle"><img :src="photography2" alt="Stone"></div>    
                <div class="rectangle"><img :src="photography3" alt="Falls"></div>    
                <div class="rectangle"><img :src="photography4" alt="MOA Eye"></div>    
                <div class="rectangle"><img :src="photography5" alt="Bridal Car"></div>    
                <div class="rectangle"><img :src="photography6" alt="Garden"></div>    
            </div>

   <!-- Modal for enlarged photo -->
    <div id="photoModal" class="modal">
      <span class="close">&times;</span>
      <span class="prev">&#10094;</span>
      <img class="modal-content" id="modalImg">
      <span class="next">&#10095;</span>
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
import facebook from '@/assets/images/facebook.jpg';
import instagram from '@/assets/images/instagram.jpg';
import linkedin from '@/assets/images/linkedin.jpg';
import spotify from '@/assets/images/spotify.jpg';

import family from '@/assets/images/family.jpg';
import photography from '@/assets/images/photography.jpg';
import mi231 from '@/assets/images/mi231.jpg';
import strings from '@/assets/images/strings.jpg';
import msc from '@/assets/images/msc.jpg';
import gmrc from '@/assets/images/gmrc.jpg';

import photography1 from '@/assets/images/photography1.jpg';
import photography2 from '@/assets/images/photography2.jpg';
import photography3 from '@/assets/images/photography3.jpg';
import photography4 from '@/assets/images/photography4.jpg';
import photography5 from '@/assets/images/photography5.jpg';
import photography6 from '@/assets/images/photography6.jpg';
 


</script>

<style scoped>
/* Add any necessary styling */
</style>