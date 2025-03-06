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
      <h4>IT Student &nbsp; | &nbsp; UI Designer &nbsp; | &nbsp; Web Developer</h4>
      <p>
        A second-year student at Asia Pacific College pursuing a Bachelor of Science in Information Technology with a specialization in Mobile and Internet Technology. <br>
        I'm a 20-year-old exploring the world of web development! Thanks for stopping by to learn about me!
      </p>
      <p class="quote">
        "Small disciplines repeated with consistency every day lead to great achievements gained slowly over time." -
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
/* Typewriter Animation */
@keyframes typing {
  0% {
    width: 0;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

/* Apply the animation */
.text-container h4 {
  font-size: 28px;
  margin-bottom: 5px;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid #EDE6D4; /* Cursor effect */
  width: 0;
  animation: typing 3s steps(20, end) infinite, blink 0.6s infinite;
}
.quote {
  font-style: italic;
  font-size: 16px;
  color: #444; /* Dark gray for readability */
  text-align: center;
  margin-top: 15px;
  margin-left: 25px;
  padding: 30px;
  border-left: 5px solid #22a961; /* Green left border for emphasis */
  border-radius: 10px;
  background: #f9f9f9; /* Light gray background */
  display: inline-block;
  max-width: 80%;
  opacity: 0; /* Start hidden */
  transform: translateY(20px); /* Start slightly below */
  animation: fadeInUp 1s ease-out forwards;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.quote:hover {
  transform: translateY(-10px) scale(1.05); /* Move up & slightly enlarge */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25); /* Stronger shadow */
  background: #f1f1f1; /* Slightly darker background */
  border-left-color: #1c8b4d; /* Darker green for emphasis */
}


/* Animation Keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
  @media (max-width: 768px) {
  .text-container h4 {
    font-size: 18px;  /* Slightly smaller for better fit */
    line-height: 1.4; /* Improves readability */
    margin-bottom: 8px; /* Adds spacing below */
  }
}
</style>
