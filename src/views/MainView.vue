<template>
  <div>
    <div class="welcome">
      <welcome-view/>
    </div>
    <div class="story">
      <story-view/>
    </div>
  </div>
</template>

<script>
import WelcomeView from '@/views/WelcomeView.vue'
import eventManger from '@/EventManger'
import StoryView from '@/views/StoryView.vue'

export default {
  name: 'MainView',
  components: { StoryView, WelcomeView },
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
      await this.$('.welcome').fadeOut(1500)
      await this.$router.push('/story')
      await this.$('.story').fadeTo(1500, 1)
      await this.sleep(1500)
      await eventManger.$emit('fadeOutStory')
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

.story {
  position: absolute;
  left: 50%;
  top: 5%;
  transform: translate(-50%, 0);
  opacity: 0;
}
</style>
