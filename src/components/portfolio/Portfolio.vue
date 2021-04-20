<template>
  <div class="portfolio-wrapper">
    <div class="container">
      <div class="row">
        <div class="offset-md-2 col-md-8">
          <SectionTitle
            title="Portfolio"
            :style="{ marginBottom: '5rem' }"
            description="Most recent work"
          />

          <div class="portfolio-row" :style="{ marginBottom: '8rem' }">
            <TiltCard
              class="portfolio-img"
              :imagePath="require('@/assets/images/mi-cro.png')"
            />
            <div class="portfolio-text portfolio-text--right">
              <h3 class="portfolio-h3">Micro Interactions</h3>
              <p class="portfolio-p">
                Written in Vue, React, and Styled Components.
              </p>
              <a
                class="portfolio-link"
                target="_blank"
                href="http://mi.frontendjoe.com"
                >Interactive Demo</a
              >
            </div>
          </div>
          <div class="portfolio-row needs-reverse">
            <div class="portfolio-text portfolio-text--left">
              <h3 class="portfolio-h3">Works</h3>
              <p class="portfolio-p">
                Written in React, Vue, Flutter and Styled Components, this is a
                portfolio page that features my works.
              </p>
              <a
                class="portfolio-link"
                target="_blank"
                href="http://vooze.vuezythemes.com"
                >Interactive Demo</a
              >
            </div>
            <TiltCard
              class="portfolio-img"
              :imagePath="require('@/assets/images/mi-cro2.png')"
            />
          </div>

          <div class="portfolio-row" :style="{ marginTop: '8rem' }">
            <TiltCard
              class="portfolio-img"
              :imagePath="require('@/assets/images/meow2.png')"
            />
            <div class="portfolio-text portfolio-text--right">
              <h3 class="portfolio-h3">Meow</h3>
              <p class="portfolio-p">
                This is a Job platform for software developers Written in React,
                Redux, Polished and Styled Components.
              </p>
              <a
                class="portfolio-link"
                target="_blank"
                href="https://meowjobapp.herokuapp.com/"
                >Interactive Demo</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '../shared/SectionTitle'
// import CoolButton from '../shared/CoolButton'
import TiltCard from '../shared/TiltCard'

export default {
  name: 'Portfolio',
  components: {
    SectionTitle,
    // CoolButton,
    TiltCard
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/variables.scss';

.portfolio-wrapper {
  background: #f7f4ff;
  padding: 7rem 0;
}

.portfolio-row {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: $screenWidthLg) {
    &.needs-reverse {
      flex-direction: column-reverse;
    }
  }

  @media (min-width: $screenWidthLg) {
    flex-direction: row;
  }
}

.portfolio-img {
  width: 60%;
  margin-bottom: 3rem;

  @media (min-width: $screenWidthLg) {
    margin-bottom: 0;
    flex: 1 1 auto;
    width: 55%;
  }
}

.portfolio-text {
  flex: 1 1 auto;
  text-align: center;
  width: 60%;

  @media (min-width: $screenWidthLg) {
    width: 45%;
    text-align: left;

    &--left {
      padding-right: 60px;
    }

    &--right {
      padding-left: 60px;
    }
  }
}

.portfolio-h3 {
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: $colorText;
}

.portfolio-link {
  color: #9273ce;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
}

.portfolio-p {
  color: rgba(#000, 0.65);
  line-height: 1.625;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.portfolio-card {
  // padding-top: 2rem;
  // display: inline-block;
  // margin: 0 auto;
  //
  //   &:hover &-img {
  //     transform: translateY(-0.5rem);
  //     box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.08),
  //       0 6px 30px 5px rgba(0, 0, 0, 0.08), 0 36px 30px -7px rgba(0, 0, 0, 0.1);
  //   }
  // }
}

.portfolio-card-img {
  width: 68%;
  border-radius: 1rem;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.08),
    0 6px 30px 5px rgba(0, 0, 0, 0.08), 0 8px 10px -7px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.25s, transform 0.25s;

  @media (min-width: $screenWidthMd) {
    width: 540px;
  }
}

.portfolio-card-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: $colorText;
  text-align: center;
  margin-bottom: 1rem;
}

.portfolio-card-subtitle {
  color: $colorSubtitle;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 2.5rem;
}

.animate {
  transition-delay: 0.5s;
  transition-duration: 0.25s;
  transition-timing-function: ease-in;
}

.slide-up {
  opacity: 0;
}

.slide-up.animate-active {
  opacity: 1;
}

.cs-top {
  margin-top: 3rem;
}
</style>
