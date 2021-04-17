<template>
  <div
    id="navmenu"
    class="nav-menu"
    v-scroll-spy-active
    v-scroll-spy-link="{ offset: 72 }"
  >
    <a :style="{ color: getFontColor }" class="nav-button">Home</a>
    <a :style="{ color: getFontColor }" class="nav-button">About</a>
    <a :style="{ color: getFontColor }" class="nav-button">Portfolio</a>
    <a :style="{ color: getFontColor }" class="nav-button">Services</a>
  </div>
</template>

<script>
import { rgba } from 'polished'

export default {
  name: 'NavMenu',
  props: {
    fontColor: String
  },
  computed: {
    getFontColor () {
      return rgba(this.fontColor, 0.75)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables.scss";
.nav-menu {
  height: 100%;
  display: none;
  @media (min-width: $screenWidthMd) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.nav-button {
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background: transparent;
  border: 0;
  padding: 0 0.5rem;
  margin: 0;
  font-size: 0.875rem;
  font-family: Poppins;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  transition: color 0.25s;
  &.active {
    color: $colorPrimary !important;
  }
  &:last-child {
    margin: 0;
  }
  &:hover {
    color: $colorPrimary;
  }
}
</style>
