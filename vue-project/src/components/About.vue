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
  <!-- About Section -->
    <section class="about">
        <h2>About Me</h2> <hr>
        <p>"People know me as <b>Mito</b>, and I’m often described as an introvert. Despite my quiet nature, I have a deep passion for creativity and self-expression. I’m also into sports, enjoying badminton, basketball, table tennis, and volleyball. Playing sports helps me stay active and challenge myself in different ways. 
        <br>
        Music is another big part of my life — I can play several instruments, including the bandurria, octavina, piano, guitar, and ukulele. I also enjoy composing and arranging my own music, with seven original pieces written (though unreleased).
        In addition, I have a passion for mobile photography, especially nature photography. Capturing moments and telling stories through images allows me to appreciate the beauty of the world in a unique way.
        </p>
      
      <div class="container">
    
        <div class="hobbies-container">
          <h3 class="heading">
              <span class="material-symbols-outlined">interests</span>
              Hobbies and Interests
          </h3>
      
          <div class="hobbies-grid">
              <div class="hobby-card">
                  <span class="material-symbols-outlined">sports</span>
                  <p>Sports</p>
              </div>
      
              <div class="hobby-card">
                  <span class="material-symbols-outlined">photo_camera</span>
                  <p>Photography</p>
              </div>
      
              <div class="hobby-card">
                  <span class="material-symbols-outlined">album</span>
                  <p>Listening to Music</p>
              </div>
      
              <div class="hobby-card">
                  <span class="material-symbols-outlined">piano</span>
                  <p>Plays Musical Instruments</p>
              </div>
      
              <div class="hobby-card">
                  <span class="material-symbols-outlined">book_5</span>
                  <p>Reading</p>
              </div>
      
              <div class="hobby-card">
                  <span class="material-symbols-outlined">exercise</span>
                  <p>Home Workout & Jogging</p>
              </div>
          </div>
      </div>
      

    <div class="timeline-wrapper"> <!--Making a timeline for Education and IT Experience-->
      <div class="timeline-row">
          
          <div class="timeline-col">
              <h2 class="heading">
                <span class="material-symbols-outlined">
                  school
                  </span>
                  Education <hr> <!--Education Information-->
              </h2>
              <div class="timeline-box">
                <div class="content-box">
                    <div class="date">
                      <span class="material-symbols-outlined">
                        calendar_month
                        </span>
                        2016 - 2020
                        <h3>Junior High School - Dr. Arcadio Santos National High School </h3>
                        <p>- One of the Top 10 student from Grade 7 to 10 <br>
                           - Grade 10: With Honors </p>
                    </div>

                    <div class="date">
                      <span class="material-symbols-outlined">
                        calendar_month
                        </span>
                        2020 - 2022
                        <h3>Senior High School - Sen. Renato “Compañero” Cayetano Memorial Science and Technology High School</h3>
                        <p>- Science, Technology, Engineering, and Mathematics (STEM) Strand <br>
                          - Two years consistent With Honors
                        </p>
                    </div>

                    <div class="date">
                      <span class="material-symbols-outlined">
                        calendar_month
                        </span>
                        2023 - Present
                        <h3>College - Asia Pacific College</h3>
                        <p>- Bachelor of Science in Information Technology with a specialization in Mobile and Internet Technology.</p>
                        <h3>Student Organization</h3>
                        <p><i> - Executive Director of Documentation Committee Asia Pacific College - Microsoft Community (APC-MSC)</i></p>
                        <p><i> - Octavina Player of Asia Pacific College Strings (APC Strings)</i></p>
                    </div>
                </div>
            </div>
          </div>
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
