<template>
  <div class="welcome">
    <loading-component/>
    <start-button-component/>
  </div>
</template>

<script>

import LoadingComponent from '@/components/LoadingComponent.vue'
import StartButtonComponent from '@/components/WelcomeStartButtonComponent.vue'
import eventManger from '@/EventManger'

export default {
  name: 'WelcomeView',
  components: { StartButtonComponent, LoadingComponent },
  created () {
    eventManger.$on('isPageChange', val => {
      this.pageChange()
    })
  },
  data () {
    return {
    }
  },
  methods: {
    sleep (d) {
      return new Promise((resolve) => setTimeout(resolve, d))
    },
    async pageChange () {
      this.$('.welcome').fadeTo(1500, 0)
      await this.sleep(1500)
      await this.$router.push('/story')
    }
  }
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
