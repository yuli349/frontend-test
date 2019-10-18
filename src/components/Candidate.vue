<template>
  <div class="candidate-block"
       v-if="candidate.current.name"
       v-touch:swipe.left="like"
       v-touch:swipe.right="dislike">
    <div class="img-block">
      <img :src="candidate.current.img" alt="">
    </div>
    <p>Name: {{ candidate.current.name }}</p>
    <p>Age: {{ candidate.current.age }}</p>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import rateMixin from '@/mixins/rate';

export default {
  mixins: [rateMixin],
  computed: {
    ...mapState({
      candidate: state => state.candidate,
    }),
  },
};
</script>
<style lang="scss">
  .candidate-block {
    margin: auto;
    border: 1px solid;
    width: 220px;
    height: 300px;
    & .img-block {
      width: 100%;
      height: 220px;
      & img {
        max-height: 220px;
        display: block;
        margin: auto;
        width: 100%;
      }
    }
  }
</style>
