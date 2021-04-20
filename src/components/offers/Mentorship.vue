<template>
  <span class="card">
    <span class="card__content">
      <div>
        <div class="mentor_head">
          <h3 class="card__content-title">
            Book a mentoring session
          </h3>
          <uil-desktop size="37px" color=" #8800ff" class="logo" />
        </div>
        <h4 class="card__content-subtitle">
          What's next for you? Are you considering switching careers to become a
          software developer? Want to get started with programming but not sure
          if it's for you? Schedule a one-on-one mentorship session with me, and
          we'll strategize what makes sense for you. I'll share my insights &
          experience from working in the industry and discuss my honest thoughts
          about the space. We'll schedule a one-on-one Zoom and a follow-up at a
          date and time that works with your schedule. Let's strategize together
          and set goals that make sense for you during a personalized mentorship
          session! Mentorship sessions are available to book now!
        </h4>
        <div class="action_group">
          <TakeActions icon="laptop_mac" title="1:1 experience" />
          <TakeActions icon="favorite" title="Tailored for you" />
          <TakeActions icon="bolt" title="Actionable advice" />
        </div>
        <Sbutton :href="link" target="_blank" rel="noopener" primary
          >Learn More</Sbutton
        >
      </div>
    </span>
  </span>
</template>

<script>
import { UilDesktop } from '@iconscout/vue-unicons'
import TakeActions from '../shared/TakeActions'
import CButton from '@/components/shared/StyledRectangleBtn'

export default {
  components: {
    UilDesktop,
    TakeActions,
    Sbutton: CButton
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
