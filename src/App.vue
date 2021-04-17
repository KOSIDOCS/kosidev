<template>
  <div>
    <Preloader />
    <Topbar />
    <div v-scroll-spy="{ offset: 0, allowNoActive: true }">
      <section>
        <HomeWallpaper />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Portfolio />
      </section>
      <section>
        <Offers />
      </section>
      <!-- <section>
        <Wallpapers />
      </section> -->
    </div>
     <WebsiteFooter />
  </div>
</template>

<script>
import Topbar from '@/components/topbar/Topbar'
import HomeWallpaper from '@/components/home/HomeWallpaper'
import About from '@/components/about/About'
import Portfolio from '@/components/portfolio/Portfolio'
// import Wallpapers from '@/components/wallpapers/Wallpapers'
import WebsiteFooter from '@/components/footer/WebsiteFooter'
import Preloader from '@/components/preloader/Preloader'
import Offers from '@/components/offers/Offers '

export default {
  components: {
    Topbar,
    HomeWallpaper,
    About,
    Portfolio,
    // Wallpapers,
    WebsiteFooter,
    Preloader,
    Offers
  },
  mounted () {
    setTimeout(() => {
      const preloader = document.getElementById('preloader')
      preloader.classList.toggle('loaded')
    }, 500)
  }
}
</script>

<style lang="scss">

</style>
