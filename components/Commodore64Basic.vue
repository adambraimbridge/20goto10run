
<template>
  <video
    ref="video"
    class="my-20"
    autoplay
    src="/video/Commodore64Basic.mp4"
    poster="/img/Commodore64Basic.webp"
  >
    Sorry, your browser doesn't support embedded videos. You can
    <a href="/video/Commodore64Basic.mp4">download it here</a>.
  </video>
</template>

<!-- Autoplay in edge browser -->
<script>
  export default {
    mounted() {
      this.$nextTick(() => {
        this.$refs.video.play();
      });
    },
  };
</script>