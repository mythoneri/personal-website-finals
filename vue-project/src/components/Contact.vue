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

    <div id="suggestions" class="container guestbook-container">
      <div class="header">
        <div class="title-container">
          <h2>Suggestions</h2> <br>
      </div>
      <form @submit.prevent="addSuggest">
        <div>
          <p>
            <strong>Name:</strong> <br>
            <input type="text" v-model="guestName" placeholder="Enter your name" required />
          </p>
          <p>
            <strong>Suggestions:</strong> <br>
            <textarea v-model="guestSuggest" placeholder="Write your suggestions here" rows="4" required></textarea>
          </p>
          <div class="clearfix">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <div class="comment-section">
        <div v-for="suggest in Suggestions" :key="suggest.id" class="suggest">
          <p><strong>{{ suggest.name }}</strong></p>
          <p>{{ suggest.message }}</p>
        </div>
      </div>
    </div>
    </div> <!-- Properly closed div -->
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
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xcdboqdwkycagrzzrfrk.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || 'your-supabase-key-here'; // Ensure fallback for debugging
const supabase = createClient(supabaseUrl, supabaseKey);

const guestName = ref('');
const guestSuggest = ref('');
const Suggestions = ref([]);

const fetchSuggestions = async () => {
  try {
    const { data, error } = await supabase.from('suggestions').select('*');
    if (error) throw error;
    Suggestions.value = data || [];
  } catch (error) {
    console.error('Error fetching suggestions:', error.message);
  }
};

const addSuggest = async () => {
  if (!guestName.value || !guestSuggest.value) {
    alert('Please fill out both fields.');
    return;
  }

  try {
    const { error } = await supabase.from('suggestions').insert([
      { name: guestName.value, message: guestSuggest.value }
    ]);

    if (error) throw error;

    // Fetch latest suggestions after insert
    fetchSuggestions();

    // Reset form
    guestName.value = '';
    guestSuggest.value = '';
  } catch (error) {
    console.error('Error adding suggestion:', error.message);
  }
};

onMounted(fetchSuggestions);

defineExpose({
  guestName,
  guestSuggest,
  addSuggest
});


</script>


<style>
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
#suggestions {
  background: linear-gradient(to bottom, #fdf7e3, #b8c4b1);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  max-width: 1200px; /* Set a fixed max-width */
  width: 100%; /* Ensure it is responsive */
  margin: 30px auto;
}

/* Fixing form elements */
#suggestions form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 1180px;
}

#suggestions input,
#suggestions textarea {
  width: 100%; /* Make sure input fields do not exceed the form width */
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  color: #2d3b2d;
  outline: none;
  transition: background 0.3s ease-in-out;
}

#suggestions button {
  width: 100%;
  max-width: 200px; /* Prevent button from stretching */
  align-self: center; /* Center the button */
}

/* Header */
#suggestions .header {
  text-align: left;
  margin-bottom: 20px;
}

#suggestions h2 {
  font-size: 26px;
  font-weight: bold;
  color: #2d3b2d;
}

/* Form Fields */
#suggestions form p {
  font-weight: bold;
  color: #2d3b2d;
  font-size: 18px;
}


#suggestions input::placeholder,
#suggestions textarea::placeholder {
  color: #666;
}

#suggestions input:focus,
#suggestions textarea:focus {
  background: rgba(255, 255, 255, 0.7);
}

/* Submit Button */
#suggestions button {
  width: 100%;
  background: #fdf7e3;
  color: #2d3b2d;
  font-size: 18px;
  font-weight: bold;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

#suggestions button:hover {
  background: #ebe1c8;
}

/* Comment Section */
.comment-section {
  margin-top: 20px;
  width: 1200px;
}

.suggest {
  background: rgba(255, 255, 255, 0.5);
  padding: 15px;
  border-left: 5px solid #2d3b2d;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.suggest p {
  margin: 5px 0;
  color: #2d3b2d;
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
