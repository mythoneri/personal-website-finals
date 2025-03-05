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
    <h2>Leave a Comment</h2>
    <form @submit.prevent="submitComment">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required class="form-control" />
      </div>
      <div class="form-group">
        <label for="comment">Comment:</label>
        <textarea id="comment" v-model="comment" required class="form-control"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <div v-if="submissionStatus" class="mt-2">
        {{ submissionStatus }}
      </div>
    </form>

    <h2>Comments</h2>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <strong>{{ comment.name }}</strong>: {{ comment.message }}
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
import { supabase } from '../lib/supabaseClient'

// Initialize Supabase

const comments = ref([]);
const name = ref('');
const comment = ref('');
const submissionStatus = ref(null);
const tableName = 'comments';

// Fetch comments from Supabase
const getComments = async () => {
  try {
    const { data, error } = await supabase.from(tableName).select().order('created_at', { ascending: false });
    if (error) throw error;
    comments.value = data || [];
  } catch (err) {
    console.error('Error fetching comments:', err);
  }
};

// Submit new comment
const submitComment = async () => {
  submissionStatus.value = 'Submitting...';

  if (!name.value.trim() || !comment.value.trim()) {
    submissionStatus.value = 'Please fill out both fields.';
    return;
  }

  try {
    const { error } = await supabase.from(tableName).insert([{ name: name.value, message: comment.value }]);
    if (error) {
      console.error('Error inserting comment:', error);
      submissionStatus.value = 'Error submitting comment. Please try again.';
    } else {
      submissionStatus.value = 'Comment submitted successfully!';
      name.value = '';
      comment.value = '';
      getComments(); // Refresh comments list
    }
  } catch (err) {
    console.error('An unexpected error occurred:', err);
    submissionStatus.value = 'An unexpected error occurred. Please try again later.';
  }
};

// Fetch comments on mount
onMounted(getComments);

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
  margin-top: 20px;
  text-align: left;
}

.comment {
  border-top: 1px solid #ddd;
  padding: 10px 0;
}

.comment p {
  margin: 5px 0;
}

.guestbook-container {
  background-color: #f8f7f2;
  border: 2px solid #562123;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px; 
  margin: 0 auto;
}

.guestbook-container .header {
  text-align: center;
  margin-bottom: 20px;
}

.guestbook-container .header .title-container {
  font-size: 24px;
  font-weight: bold;
  color: #562123;
}

.guestbook-container form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.guestbook-container input, .guestbook-container textarea {
  padding: 10px;
  border: 1px solid #562123;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
}

.guestbook-container button {
  background-color: #562123;
  color: #f8f7f2;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.guestbook-container button:hover {
  background-color: #6c3a32;
}

.container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-top: 50px; 
}

.guestbook-container form p {
  text-align: left; 
  font-weight: bold;
  color: #562123;
  margin-bottom: 20px;
}

.guestbook-container input,
.guestbook-container textarea {
  display: block;  
  text-align: left; 
}

.guestbook-container input {
  margin-bottom: 15px; 
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
