<template>
  <div class="container">
    <div class="row">
      <div class="offset-md-2 col-md-8">
        <div class="wallpapers-wrapper">
          <SectionTitle
            :style="{ marginBottom: '5rem' }"
            title="Services"
            description="Offers Project development, Mentorship and also available to work."
          />
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Getproject />
              <Mentorship />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '../shared/SectionTitle'
import Mentorship from './Mentorship'
import Getproject from './Getproject'

export default {
  name: 'Offers',
  components: {
    SectionTitle,
    Mentorship,
    Getproject
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables.scss";

.wallpapers-wrapper {
  padding: 7rem 0;

  @media (max-width: $screenWidthSm) {
    width: 60%;
    margin: 0 auto;
  }
}
</style>
