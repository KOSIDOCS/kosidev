<template>
  <div class="footer-wrapper">
    <div class="container">
      <div class="row">
        <div class="offset-md-2 col-md-8">
          <div class="row">
            <div class="col-md-4">
              <div class="footer__header">
                About
              </div>
              <div class="footer__text">
                Handcrafted with Vue, TypeScript, SCSS, and Styled Component.
                <br /><br />
                © kosidev 2021
              </div>
            </div>
            <div
              v-scroll-spy-link="{ offset: -1 }"
              class="offset-md-1 col-md-3"
            >
              <div class="footer__header">
                Explore
              </div>
              <div class="footer__text">
                <a class="footer__link">
                  Home
                </a>
                <a class="footer__link">
                  About
                </a>
                <a class="footer__link">
                  Portfolio
                </a>
                <a class="footer__link">
                  Services
                </a>
              </div>
            </div>
            <div class="col-md-3">
              <div class="footer__header">
                Follow
              </div>
              <div class="footer__iconList">
                <a
                  href="https://github.com/KOSIDOCS"
                  target="_blank"
                  class="footer__icon"
                >
                  <uil-github size="34px" class="logo" />
                </a>
                <a
                  href="https://www.instagram.com/kosidocs/"
                  target="_blank"
                  class="footer__icon"
                >
                  <uil-instagram size="34px" class="logo" />
                </a>
                <a
                  href="https://twitter.com/21_kp_"
                  target="_blank"
                  class="footer__icon"
                >
                  <uil-twitter-alt size="36px" class="logo" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kosisochukwu-precious-b7883314a/"
                  target="_blank"
                  class="footer__icon"
                >
                  <uil-linkedin-alt size="32px" class="logo" />
                </a>
              </div>
              <Typeform />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UilGithub, UilInstagram, UilLinkedinAlt, UilTwitterAlt } from '@iconscout/vue-unicons'
import Typeform from '../shared/Typeform'

export default {
  components: {
    UilGithub,
    UilInstagram,
    UilTwitterAlt,
    UilLinkedinAlt,
    Typeform
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables.scss";
.footer-wrapper {
  position: relative;
  overflow: hidden;
  padding: 5rem 0;
  background: #171717;
}

.footer__header {
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: $screenWidthMd) {
    text-align: left;
  }
}

.footer__text {
  font-size: 14px;
  line-height: 1.35;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 auto 2rem;
  width: 60%;
  text-align: center;

  @media (min-width: $screenWidthMd) {
    margin-bottom: 0;
    width: auto;
    text-align: left;
  }
}

.footer__link {
  display: block;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.35;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.5rem;
  transition: color 0.35s;

  &:hover {
    color: rgba(255, 255, 255, 0.85);
  }
}

.footer__copyright {
  padding: 0;
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  font-size: 13px;
}

.footer__iconList {
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: $screenWidthMd) {
    justify-content: flex-start;
  }
}

.footer__icon {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  font-size: 30px;
  color: rgba(255, 255, 255, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: color 0.35s;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: rgba(255, 255, 255, 0.85);
  }
}
</style>
