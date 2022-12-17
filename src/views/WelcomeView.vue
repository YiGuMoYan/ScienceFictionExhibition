<template>
  <div class="welcome">
    <loading-component/>
    <start-button-component/>
  </div>
</template>

<script>

import LoadingComponent from '@/components/LoadingComponent.vue'
import StartButtonComponent from '@/components/StartButtonComponent.vue'

export default {
  name: 'WelcomeView',
  components: { StartButtonComponent, LoadingComponent }
}
</script>

<style scoped>
.welcome {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
