<template>
    <div class="text-image-container">
            <div class="text-container">
            <h1>Hi! I'm Nerimiah Jay Ato</h1> 
            <h4>IT Student</h4> 
            <p>A second-year student at Asia Pacific College pursuing a Bachelor of Science in Information Technology with a specialization in Mobile and Internet Technology. <br>
            I'm a 20-year-old exploring the world of web development! Thanks for stopping by to learn about me!
            </p>
            <p><i>""Small disciplines repeated with consistency every day lead to great achievements gained slowly over time." - </i><b>John C. Maxwell</b></p>
             </div>
            <img :src="profileImage" alt="Profile Image"  class="custom-image"/>
        </div>
</template>

<script setup>
import profileImage from '@/assets/images/profile.jpeg';
</script>


<style>
.apples{
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
    }</style>   