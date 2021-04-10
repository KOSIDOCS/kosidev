<template>
  <div>
    <Topbar />
    <div v-scroll-spy="{ offset: 0, allowNoActive: true }">
      <section>
        <HomeWallpaper />
      </section>
      <section>
        <About />
      </section>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>
import Topbar from '@/components/topbar/Topbar'
import HomeWallpaper from '@/components/home/HomeWallpaper'
import About from '@/components/about/About'

export default {
  components: {
    Topbar,
    HomeWallpaper,
    About
  }
  // mounted () {
  //   setTimeout(() => {
  //     const preloader = document.getElementById('preloader')
  //     preloader.classList.toggle('loaded')
  //   }, 500)
  // }
}
</script>

<style lang="scss">

</style>
