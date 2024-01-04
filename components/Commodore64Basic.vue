<template>
  <video-player :options="videoOptions" />
</template>

<script>
import { defineComponent } from 'vue'
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

export default defineComponent({
  components: { VideoPlayer },
  data: () => ({
    videoOptions: {
      autoplay: true,
      controls: false,
      fluid: true,
      sources: [
        {
          src: '/video/20goto10run.mp4',
          poster: '/img/20goto10run.jpg',
          type: 'video/mp4',
        }
      ]
    }
  })
})
</script>
