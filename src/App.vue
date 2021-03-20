<template>
    <div class="p-5">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <h2>Hi! my name is Jee Jin. Welcome to my portfolio site!</h2>
    <p>This is a work in progress</p>

    <div class="row">
      <div class="col-2 d-inline-flex flex-column">
        <router-link to="/case-study">Case Study</router-link>
        <router-link to="/developer">Developer</router-link>
        <router-link to="/training">Training</router-link>
        <router-link to="/creative">Creative</router-link>

      </div>

      <div class="col-10 bg-primary">
        <router-view/>
      </div>

      <!-- <case-study/> -->
      
    </div>

    <!-- <h2>Case Study</h2>
    <ul>
      <li><a target="_blank" href="opogo.html">Opogo Case Study</a></li>
    </ul>
    
  
    <h2>Works</h2>
    <p>As an Illustrator</p>

    <p>As UI Developer</p>
    <ul>
      <li>Design System Management</li>
    </ul>
  
    <p>As Junior Product Designer</p>
    <ul>
      <li>Colors and Font Scheme</li>
      <li>Tables</li>
    </ul>
  
    <h2>CSS Tutorial Training</h2>
    <ul>
      <li><a target="_blank" href="https://slides.com/jjmok/css">CSS Basics</a></li>
      <li><a target="_blank" href="https://slides.com/jjmok/layouts-new">Flex Layouts</a></li>
      <li><a target="_blank" href="https://slides.com/jjmok/csspractices">CSS Best Practices</a></li>
    </ul>
  
    <h2>Creative</h2>
    <a target="_blank" href="https://codepen.io/JayJay89/full/OKOdma">Charles the CSS Corgi</a> -->
  </div>
</template>

<script setup>
// import CaseStudy from './components/CaseStudy.vue'
// import HelloWorld from './components/HelloWorld.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style lang="scss">
  .img-500 {
    width: 500px;
  }

  body { 
    font-family: 'Poppins', sans-serif; 
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Rubik', sans-serif;
  }
  
  .img-500 {
    width: 500px;
  }

  .img-700 {
    width: 700px;
  }
</style>