<template>
  <div class="dislike" @click.prevent="dislike">
    <span class="icon"></span>
  </div>
</template>
<script>
import rateMixin from '@/mixins/rate';

export default {
  mixins: [rateMixin],
};
</script>
<style lang="scss">
  .dislike {
    border-radius: 50%;
    background: #dfdfdf;
    padding: 15px;
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 0 20px;
    text-align: center;
    & .icon {
      background: url("../assets/close-cross.png") no-repeat;
      width: 30px;
      height: 30px;
      display: block;
      background-size: 100%;
    }
  }
</style>
