<template>
<div class="action_wrapper">
<MatIcon class="action_icon">{{icon}}</MatIcon>
<div class="action_title">
    {{title}}
</div>
</div>
</template>

<script>
import MatIcon from './MatIcon'

export default {
  props: {
    icon: String,
    title: String
  },
  components: {
    MatIcon
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables.scss";

.action_wrapper {
    margin-right: 20px;
    display: flex;
    flex-direction: row;
   & > i {
    font-size: 1.2rem;
    color: $colorPrimary !important;
  }
}

.action_title {
    margin-left: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    color: rgba($colorText, 0.29);
}
</style>
