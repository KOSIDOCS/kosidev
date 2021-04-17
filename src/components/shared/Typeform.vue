<template>
  <a
    class="typeform-share button"
    href="https://form.typeform.com/to/KIPObGQm?typeform-medium=embed-snippet"
    data-mode="popup"
    data-size="100"
    target="_blank"
    >Contact
    <uil-arrow-right size="24px" color=" #8800ff" class="logo" />
  </a>
</template>

<script>
import { UilArrowRight } from '@iconscout/vue-unicons'

export default {
  components: {
    UilArrowRight
  },
  mounted: function () {
    var qs
    var js
    var q
    var s
    var d = document
    var gi = d.getElementById
    var ce = d.createElement
    var gt = d.getElementsByTagName
    var id = 'typef_orm_share'
    var b = 'https://embed.typeform.com/'
    if (!gi.call(d, id)) {
      js = ce.call(d, 'script')
      js.id = id
      js.src = b + 'embed.js'
      q = gt.call(d, 'script')[0]
      q.parentNode.insertBefore(js, q)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables.scss";

.button {
  display: inline-block;
  padding: 0.3rem 0;
  margin-top: 1.3rem;
  font-size: 1.2rem !important;
  width: 9rem;
  height: 2.7rem;
  border: 2px solid white;
  text-decoration: none;
  text-align: center;
  background: transparent;
  color: white;
  border: 2px solid $colorBrand;
  transition: background 0.6s ease-in-out;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    background: $colorBrand;
    color: white;
    .logo {
        color: white;
    }
 }
}
.logo {
    position: relative;
    top: 3px;
}
</style>
