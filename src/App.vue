<template>
  <div id="app">
    <div class="background-elements">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>

    <main class="min-h-screen flex items-center justify-center">
      <HomeView />
    </main>
  </div>
</template>

<script setup lang="ts">
import HomeView from './views/HomeView.vue'
</script>

<style>
#app {
  position: relative;
  min-height: 100vh;
  background-color: #f9fafb;
  overflow-x: hidden;
}

.background-elements {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(173, 216, 230, 0.5); 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  border: 2px solid rgba(173, 216, 230, 0.8); 
  animation: float 6s ease-in-out infinite;
}

.circle:nth-child(1) {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 20%;
}

.circle:nth-child(2) {
  width: 300px;
  height: 300px;
  top: 50%;
  left: 60%;
}

.circle:nth-child(3) {
  width: 150px;
  height: 150px;
  top: 80%;
  left: 30%;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

main {
  z-index: 1;
  position: relative;
}
</style>