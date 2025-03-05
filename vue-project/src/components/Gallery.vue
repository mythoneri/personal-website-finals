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
    <h2>Picture Gallery</h2>
    <hr>
    <p>Welcome to my Picture Gallery! <br> 
      Take a look at my photos and some moments I captured in my journey.</p>

    <div class="galleryy">
      <div 
        v-for="(image, index) in images.slice(0, 6)" 
        :key="index" 
        class="square" 
        @click="showImage(index)"
      >
        <img :src="image" :alt="'Image ' + (index + 1)">
      </div>
    </div>

    <h2>Mobile Photography</h2>
    <hr>
    <div class="galleryy">
      <div 
        v-for="(image, index) in images.slice(6)" 
        :key="index + 6" 
        class="rectangle" 
        @click="showImage(index + 6)"
      >
        <img :src="image" :alt="'Photography ' + (index + 1)">
      </div>
    </div>

    <!-- Modal -->
    <div v-if="modalVisible" class="modal" @click.self="closeModal">
      <span class="close" @click="closeModal">&times;</span>
      <span class="prev" @click="prevImage">&#10094;</span>
      <img class="modal-content" :src="modalImg">
      <span class="next" @click="nextImage">&#10095;</span>
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
import { ref, onMounted, onUnmounted } from 'vue';

// Import images
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

// Reactive state for modal
const modalVisible = ref(false);
const modalImg = ref('');
const currentIndex = ref(0);

const images = ref([
  family, photography, mi231, strings, msc, gmrc,
  photography1, photography2, photography3, photography4, photography5, photography6
]);

// Show the modal with selected image
const showImage = (index) => {
  modalImg.value = images.value[index];
  currentIndex.value = index;
  modalVisible.value = true;
};

// Close modal
const closeModal = () => {
  modalVisible.value = false;
};

// Navigate to previous image
const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
  modalImg.value = images.value[currentIndex.value];
};

// Navigate to next image
const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
  modalImg.value = images.value[currentIndex.value];
};

// Keyboard navigation
const handleKeydown = (event) => {
  if (!modalVisible.value) return;
  if (event.key === 'ArrowLeft') prevImage();
  if (event.key === 'ArrowRight') nextImage();
  if (event.key === 'Escape') closeModal();
};

// Attach event listeners
onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>


<style scoped>
.modal {
  display: flex; /* Ensures modal appears when active */
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
}

.modal-content {
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease-in-out;
}

.close, .prev, .next {
  position: absolute;
  color: white;
  font-size: 45px;
  cursor: pointer;
  user-select: none;
  padding: 15px;
  border-radius: 50%;
}

.close {
  top: 20px;
  right: 30px;
  font-size: 50px;
}

.prev, .next {
  top: 50%;
}

.prev {
  left: 30px;
}

.next {
  right: 30px;
}

.close:hover, .prev:hover, .next:hover {
  transform: scale(1.1);
}

/* Mobile-Friendly Adjustments */
@media (max-width: 768px) {
  .modal-content {
    max-width: 95%;
    max-height: 80%;
  }

  .close, .prev, .next {
    font-size: 35px;
    padding: 12px;
  }

  .prev {
    left: 15px;
  }

  .next {
    right: 15px;
  }
}


</style>