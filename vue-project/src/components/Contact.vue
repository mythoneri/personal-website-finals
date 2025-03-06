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
  <!-- Contact Section -->
  <section class="contact">
    <h2>Contact Me</h2>
    <hr />
    <p>Feel free to reach out through my social media or email.</p>

    <div class="contact-cards-container">
      <h3 class="heading">
        <span class="material-symbols-outlined"> info </span>
        Contact Options
      </h3>
      <div class="contact-cards-grid">
        <div class="contact-card">
          <span class="material-symbols-outlined">alternate_email</span>
          <h4>Email Address</h4>
          <p>
            <a href="mailto:ndato@student.apc.edu.ph">ndato@student.apc.edu.ph</a>
          </p>
        </div>
        <div class="contact-card">
          <span class="material-symbols-outlined">phone</span>
          <h4>Phone Number</h4>
          <p>09932607977</p>
        </div>
        <div class="contact-card">
          <span class="material-symbols-outlined">location_on</span>
          <h4>Address</h4>
          <p>Taguig City</p>
        </div>
      </div>
    </div>

    <div class="comment-section">
    <h3>Leave a Comment</h3>
    <form @submit.prevent="submitComment">
      <input v-model="name" type="text" placeholder="Your Name" required />
      <textarea v-model="comment" placeholder="Your Comment" required></textarea>
      <button type="submit">Submit</button>
    </form>

    <h3>Comments</h3>
    <ul>
      <li v-for="c in comments" :key="c.id">
        <strong>{{ c.name }}</strong>: {{ c.comment }}
      </li>
    </ul>
  </div>

    
  </section> <!-- Properly closed section -->

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

import { ref, onMounted } from 'vue';
import { supabase } from '@/lib/supabaseClient';

const name = ref('');
const comment = ref('');
const comments = ref([]);

const fetchComments = async () => {
  const { data, error } = await supabase.from('comments').select('*').order('created_at', { ascending: false });
  if (!error) comments.value = data;
};

const submitComment = async () => {
  if (!name.value || !comment.value) return;

  const { error } = await supabase.from('comments').insert([
    { name: name.value, comment: comment.value }
  ]);

  if (!error) {
    name.value = '';
    comment.value = '';
    fetchComments();
  }
};

onMounted(fetchComments);


</script>


<style scoped>
.contact-cards-container {
    max-width: 100%;
    margin: auto;
    text-align: center;
    padding: 20px;
    background: #EDE6D4;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.contact-cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
}

.contact-card {
    background: linear-gradient(to bottom, #869b8f, #ffffff);    
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
}

.heading {
    font-size: 20px;
    color: #183425;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.contact-card:hover {
    transform: scale(1.05);
}

.contact-card span {
    font-size: 3rem;
    color: #183425;
}
.contact-card h4  {
    font-size: 1.5rem;
    font-weight: bold;
    color: #183425;

}
.contact-card p, .contact-card a {
    font-size: 1rem;
    margin-top: 10px;
    font-weight: bold;
    color: #183425;
}

/* Suggestions Section */
.comment-section {
  max-width: 1200px;
  margin: 20px auto;
  padding: 30px;
  background: linear-gradient(to bottom, #dad7c7, #a7b09a);
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
}

h3 {
  font-size: 24px;
  font-weight: bold;
  color: #2d3b2d;
  margin-bottom: 15px;
}

label {
  font-size: 18px;
  font-weight: bold;
  color: #2d3b2d;
  display: block;
  text-align: left;
  margin-top: 15px;
}

input, textarea {
  width: 1170px;
  margin: 10px 0;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #2d3b2d;
}

textarea {
  resize: none;
  min-height: 100px;
}

input:focus, textarea:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.15);
}

button {
  width: 100%;
  background: #fdf7e3;
  color: #2d3b2d;
  font-size: 18px;
  font-weight: bold;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-top: 15px;
}

button:hover {
  background: #ebe1c8;
  transform: scale(1.02);
}

.comment-list {
  margin-top: 20px;
  padding: 15px;
  background: linear-gradient(to bottom, #c1c7b8, #919a87);
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: rgba(255, 255, 255, 0.9);
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  color: #2d3b2d; /* Ensure text is dark and readable */
}

li strong {
  display: block;
  font-size: 18px;
  color: #183425; /* Darker text for names */
}

li p {
  font-size: 16px;
  color: #2d3b2d; /* Ensure contrast with the background */
  margin-top: 5px;
}


/* Responsive Design */
@media (max-width: 768px) {
  .comment-section {
    padding: 20px;
  }

  h2 {
    font-size: 22px;
  }

  input, textarea {
    font-size: 14px;
    padding: 10px;
  }

  button {
    font-size: 16px;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  #suggestions {
    padding: 20px;
  }

  #suggestions h2 {
    font-size: 22px;
  }

  #suggestions input,
  #suggestions textarea {
    font-size: 14px;
  }

  #suggestions button {
    font-size: 16px;
  }
}



</style>
