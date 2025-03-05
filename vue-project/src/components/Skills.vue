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
  <!-- Skills Section -->
    <section class="skills">
        <h2>IT Experience & Skills</h2> <hr>

   
    <div class="container">
        <div class="timelinee-wrapper">
            <div class="timelinee-box">
                <div class="circle"></div>
                <div class="date">
                    <span class="material-symbols-outlined">
                        calendar_month</span> November 2023 - September 2024
                </div>
                <h3>Sound System Crew</h3>
                <p>Operates the audio and video system for Christian meeting, and handles the Zoom meeting.</p>
            </div>
        
            <div class="timelinee-box">
                <div class="circle"></div>
                <div class="date">
                    <span class="material-symbols-outlined">
                        calendar_month</span> February 2024
                </div>
                <h3>MSC Speaker</h3>
                <p>Virtually taught the basics of Microsoft Sway to a section of approximately 25 students.</p>
            </div>
        
            <div class="timelinee-box">
                <div class="circle"></div>
                <div class="date">
                    <span class="material-symbols-outlined">
                        calendar_month</span> August 2024 - November 2024
                </div>
                <a href="https://www.figma.com/design/zj1PamP9YZvYF8KNS9Z9at/Mythian?node-id=0-1&t=8Gg7uXoD085DR1XQ-1" target="_blank"><h3>UI Designer</h3></a>
                <p>For Mobile Programming class project, I worked on 'The Barangay App' in a two-team collaboration.</p>
            </div>
        
            <div class="timelinee-box">
                <div class="circle"></div>
                <div class="date">
                    <span class="material-symbols-outlined">
                        calendar_month</span> August 2024 - November 2024
                </div>
                <a href="https://www.figma.com/design/cmM0CRAJpLdzYGUsD4pGwf/FINAL-RAMQUEST-HIGH-FIDELITY?node-id=0-1&t=8XyrQMMo0gdeQptP-1" target="_blank"><h3>UI Designer</h3></a>
                <p>For UI/UX Design and Programming class, I contributed the idea project to a 7-member group collaboration called 'RAMQUEST'.</p>
            </div>
        </div>
  
    
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
</script>

<style scoped>
/* Add page-specific styles */
</style>
