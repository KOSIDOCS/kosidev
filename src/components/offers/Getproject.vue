<template>
  <span class="card">
    <span class="card__content">
      <div>
        <div class="mentor_head">
          <h3 class="card__content-title">
            Get your project coded
          </h3>
          <uil-lightbulb-alt size="37px" color=" #8800ff" class="logo" />
        </div>
        <h4 class="card__content-subtitle">
          I write code that makes an impact. Whether its a Slack bot that
          automates your morning routine or a customized backend service to
          manage your workflow, I enjoy building products that let us spend our
          time doing what we love most. Code that I've written has been used by
          hundreds of thousands of individuals around the world. How many will
          your project reach? Email me with the link below and lets setup a
          project consultation.
        </h4>
        <div class="action_group">
          <Stitle>JavaScript</Stitle>
          <Stitle>TypeScript</Stitle>
          <Stitle>React.JS</Stitle>
          <Stitle>Node.JS</Stitle>
          <Stitle>Flutter</Stitle>
          <Stitle>Vue.JS</Stitle>
        </div>
        <Sbutton :href="link" target="_blank" rel="noopener" primary
          >Get In Touch</Sbutton
        >
      </div>
    </span>
  </span>
</template>

<script>
import { UilLightbulbAlt } from '@iconscout/vue-unicons'
import CButton from '@/components/shared/StyledRectangleBtn'
import CTitle from '@/components/shared/StyledTitle'

export default {
  components: {
    UilLightbulbAlt,
    Sbutton: CButton,
    Stitle: CTitle
  },
  data () {
    return {
      link: 'mailto:me.kosidocs@gmail.com'
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/variables.scss';
.card {
  display: block;
  padding: 2.1rem 2rem;
  border-radius: 0.5rem;
  background: white;
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.15);
  margin-bottom: 5.3rem;

  @media (min-width: $screenWidthMd) {
    &:hover &__image {
      transform: translateY(-1.625rem);
    }
  }
}

.mentor_head {
  display: flex;
  flex-direction: row;
  .card__content-title {
    margin-right: 10px;
  }
}

.card__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card__content-title {
  font-size: 2.25rem;
  font-weight: 800;
  text-transform: capitalize;
  text-decoration: none;
  margin-bottom: 0.745rem;
}

.card__content-subtitle {
  font-size: 1.175rem;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.29);
}

.card__content-button {
  font-size: 24px;
  border: 0;
  background: transparent;
  color: rgba(#905ef0, 0.69);
  padding: 0 1rem;
}

.action_group {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  @media (max-width: $screenWidthXs) {
    flex-direction: column;
  }
}
</style>
