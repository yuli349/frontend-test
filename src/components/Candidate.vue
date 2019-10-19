<template>
  <div class="candidate-block"
       v-if="candidate.current.name"
       >
    <div
      class="img-block"
      v-touch:swipe.left="like"
      v-touch:swipe.right="dislike"
    >
      <span v-bind:style="{ backgroundImage: 'url(' + candidate.current.img + ')' }"></span>
      <div class="info-block">
        <p class="name">{{ candidate.current.name }}</p>
        <p class="age">{{ candidate.current.age }}</p>
      </div>
    </div>
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
    position: absolute;
    height: 85%;
    width: 96%;
    top: 1%;
    left: 2%;
    & .img-block {
      width: 100%;
      height: 100%;
      position: relative;
      & span {
        display: block;
        margin: auto;
        height: 100%;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
      & .info-block {
        position: absolute;
        text-align: left;
        color: #00b0ff;
        bottom: 0;
        width: 100%;
        width: -webkit-calc(100% - 20px);
        width: -moz-calc(100% - 20px);
        width: calc(100% - 20px);
        font-size: 20px;
        padding: 0 10px;
        font-family: sans-serif;
        & p {
          display: inline-block;
          margin: 10px 0;
        }
        & .name {
          font-weight: bold;
        }
      }
    }
  }
</style>
