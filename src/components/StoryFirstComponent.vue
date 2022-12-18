<template>
  <div>
    <div v-html="titleHtml" class="titleHtml" id="titleHtml">
    </div>
    <story-start-button-component id="button"/>
  </div>
</template>

<script>
import StoryStartButtonComponent from '@/components/StoryStartButtonComponent.vue'

export default {
  name: 'StoryFirstComponent',
  components: { StoryStartButtonComponent },
  created () {
    this.$(document).ready(() => {
      this.show()
    })
  },
  data () {
    return {
      textList: [
        'Glad to meet you here in this way！',
        'xxx'
      ],
      titleHtml: ''
    }
  },
  methods: {
    sleep (d) {
      return new Promise((resolve) => setTimeout(resolve, d))
    },
    async show () {
      let id = 0
      await this.sleep(3200)
      for (const text of this.textList) {
        const str = document.createElement('div')
        str.innerText = text
        str.classList.add('text')
        str.setAttribute('id', id.toString())
        document.getElementById('titleHtml').append(str)
        this.$('#' + id).css('opacity', 0)
        this.$('#' + id).fadeTo(1000, 1)
        await this.sleep(1000)
        id++
      }
      this.$('#button').fadeTo(1000, 1)
    }
  }
}
</script>

<style scoped>

.titleHtml {
  color: #f2f2f2;
  line-height: 40px;
  font-size: 20px;
  transition: all .1s;
}

#button {
  opacity: 0;
}

</style>
