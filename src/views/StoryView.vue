<template>
  <div class="main story">
    <div class="card" id="main">
      <div class="card2">
        <div class="title"><h1 class="h1">Hello~</h1></div>
        <story-first-component id="first" v-if="step === 1"/>
        <story-second-component v-else-if="step === 2"/>
      </div>
    </div>
  </div>
</template>

<script>

import StoryFirstComponent from '@/components/StoryFirstComponent.vue'
import eventManger from '@/EventManger'
import StorySecondComponent from '@/components/StorySecondComponent.vue'

export default {
  name: 'StoryView',
  components: { StorySecondComponent, StoryFirstComponent },
  created () {
    this.init()
    eventManger.$on('changeSecond', val => {
      this.translate()
    })
    eventManger.$on('calcHeight', val => {
      this.cardAnimate(val)
    })
  },
  data () {
    return {
      step: 1
    }
  },
  methods: {
    sleep (d) {
      return new Promise((resolve) => setTimeout(resolve, d))
    },
    init () {
      this.$(document).ready(() => {
        this.$('.story').fadeTo(1000, 1)
        this.$('.card').css('box-shadow', '0 0 30px 1px rgba(0, 255, 117, 0.30)')
        this.$('.card2').css({ transform: 'scale(0.98, 0.99)', borderRadius: '20px' })
        this.$('.title').fadeTo(1500, 1)
      })
    },
    async translate () {
      this.$(document).ready(() => {
        console.log(this.$('story-first-component').size)
        this.$('#first').fadeTo(1000, 0)
        this.$('.main').css('top', '30px')
      })
      this.step = 2
    },
    async cardAnimate (val) {
      this.$(document).ready(() => {
        this.$('.main').css('height', val + 'px')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.card {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  transition: all .3s;
}

.card2 {
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
  transition: all .2s;
  text-align: center;
}

.story {
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, 0);
  opacity: 0;
}

.title {
  color: #f2f2f2;
  padding-top: 15px;
  opacity: 0;
}

h1 {
  font-size: 40px;
  line-height: 60px;
}

.main {
  width: 90vw;
  height: 300px;
  transition: all 2s ease 0s;
}
</style>
