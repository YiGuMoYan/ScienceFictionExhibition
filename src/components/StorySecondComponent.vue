<template>
  <div class="textHtml" id="textHtml"></div>
</template>

<script>
import eventManger from '@/EventManger'

export default {
  name: 'StorySecondComponent',
  created () {
    this.calcHeight()
    this.show()
  },
  data () {
    return {
      textList: [
        '123',
        '321',
        '123',
        '321',
        '123',
        '321',
        '123',
        '321',
        '123',
        '321',
        '123',
        '321',
        '123',
        '321',
        '123',
        '321'
      ],
      textHtml: ''
    }
  },
  methods: {
    sleep (d) {
      return new Promise((resolve) => setTimeout(resolve, d))
    },
    async show () {
      let id = 0
      await this.sleep(2200)
      for (const text of this.textList) {
        const str = document.createElement('div')
        str.innerText = text
        str.setAttribute('id', id.toString())
        this.$(document).ready(() => {
          document.getElementById('textHtml').append(str)
          this.$('#' + id).css('opacity', 0)
          this.$('#' + id).fadeTo(1000, 1)
        })
        await this.sleep(1000)
        id++
      }
      this.$('#button').fadeTo(1000, 1)
    },
    calcHeight () {
      const num = this.textList.length * 40 + 75 + 80
      eventManger.$emit('calcHeight', num)
    }
  }
}
</script>

<style scoped>
.textHtml {
  color: #f2f2f2;
  line-height: 40px;
  font-size: 20px;
  transition: all .1s;
}
</style>
