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

   
    <div class="containerr">
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

        <div class="tech-stacks">
        <div class="card">
            <h2>Frontend Development</h2>
            <p><img :src="html" alt="HTML" class="skills-icon">HTML</p>
            <p><img :src="css" alt="CSS" class="skills-icon">CSS</p>
            <p><img :src="js" alt="JavaScript" class="skills-icon">JavaScript</p>
            <p><img :src="vue" alt="Vue.js" class="skills-icon">Vue.js</p>
        </div>

        <div class="card">
            <h2>Backend Development</h2>
            <p><img :src="supabase" alt="Supabase" class="skills-icon">Supabase</p>
            <p><img :src="java" alt="Java" class="skills-icon">Java</p>
            <p><img :src="python" alt="Python" class="skills-icon">Python</p>
        </div>

        <div class="card">
            <h2>Design & Prototyping</h2>
            <p><img :src="figma" alt="Figma" class="skills-icon">Figma</p>
        </div>

        <div class="card">
            <h2>DevOps & Deployment</h2>
            <p><img :src="vercel" alt="Vercel" class="skills-icon">Vercel</p>
        </div>

        <div class="card">
            <h2>Artificial Intelligence Tools</h2>
            <p><img :src="chatgpt" alt="ChatGPT" class="skills-icon">ChatGPT</p>
            <p><img :src="gemini" alt="Gemini" class="skills-icon">Gemini</p>
            <p><img :src="copilot" alt="Microsoft Copilot" class="skills-icon">Microsoft Copilot</p>
        </div>

        <div class="card">
            <h2>Version Control & Collaboration</h2>
            <p><img :src="github" alt="GitHub" class="skills-icon">GitHub</p>
        </div>

        <div class="card">
            <h2>Database Management</h2>
            <p><img :src="mariadb" alt="MariaDB" class="skills-icon">MariaDB</p>
        </div>

        <div class="card">
            <h2>Resources</h2>
            <a href="https://fonts.google.com/icons?selected=Material+Symbols+Outlined" target="_blank">
                Link for Icons
            </a> <br>
            <a href="https://www.youtube.com/shorts/0lixmdXwE9Q" target="_blank">
                Link for Icon in Website
            </a> <br>
            <a href="https://www.w3schools.com/css/css_grid_container.asp" target="_blank">
                Link for Grid Containers
            </a>
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
import html from '@/assets/icons/html.png';
import css from '@/assets/icons/css.png';
import js from '@/assets/icons/js.png';
import vue from '@/assets/icons/vue.png';
import supabase from '@/assets/icons/supabase.png';
import java from '@/assets/icons/java.png';
import python from '@/assets/icons/python.png';
import figma from '@/assets/icons/figma.png';
import vercel from '@/assets/icons/vercel.png';
import chatgpt from '@/assets/icons/chatgpt.png';
import gemini from '@/assets/icons/gemini.png';
import copilot from '@/assets/icons/copilot.png';
import github from '@/assets/icons/github.png';
import mariadb from '@/assets/icons/mariadb.png';




</script>

<style scoped>
/* Default Styles */
.skills-icon {
  width: 30px; /* Default size */
  height: 30px;
  margin-right: 10px;
  vertical-align: middle;
}

/* Card text */
.card p {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #010100;
  margin: 5px 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .skills-icon {
    width: 25px; /* Slightly smaller */
    height: 25px;
    margin-right: 8px;
  }

  .card p {
    font-size: 14px; /* Reduce font size */
  }
}

@media (max-width: 480px) {
  .skills-icon {
    width: 20px; /* Smaller for very small screens */
    height: 20px;
    margin-right: 5px;
  }

  .card p {
    font-size: 12px; /* Reduce text size for better fit */
    flex-direction: column; /* Stack icon and text */
    text-align: center;
  }
}


/* Timeline */
.timelinee-wrapper {
  display: grid;
  gap: 20px;
  padding: 20px;
  max-width: 800px;
  margin: auto;
  position: relative;
}

.timelinee-box {
  background: linear-gradient(to bottom, #EDE6D4, #869b8f);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 80%;
  margin: auto; /* Center the box */
}

.timelinee-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

a {
  text-decoration: none;
  color: #010100;
}

a:hover {
  text-decoration: underline;
}

.circle {
  width: 20px;
  height: 20px;
  background: #22a961;
  border-radius: 50%;
  position: absolute;
  top: 23px;
  left: -10px;
}

/* Adjust text sizes */
.timelinee-box h3 {
  font-size: 24px;
  margin-bottom: 5px;
  color: #183425;
}

.timelinee-box p {
  font-size: 14px;
  color: #010100;
}

/* Responsive Design */
@media (max-width: 768px) {
  .timelinee-wrapper {
    grid-template-rows: auto;
    padding: 15px;
  }

  .timelinee-box {
    width: 95%; /* Make it wider on smaller screens */
    text-align: center;
    padding: 15px;
  }

  .circle {
    left: 50%;
    transform: translateX(-50%);
  }
}

@media (max-width: 480px) {
  .timelinee-box {
    width: 100%; /* Full width for extra small screens */
    padding: 12px;
  }

  .timelinee-box h3 {
    font-size: 18px;
  }

  .timelinee-box p {
    font-size: 12px;
  }

  .circle {
    width: 15px;
    height: 15px;
    top: 18px;
  }
}

</style>
