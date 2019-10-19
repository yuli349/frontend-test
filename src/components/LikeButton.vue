<template>
  <div class="like" @click.prevent="like">
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
  .like {
    border-radius: 50%;
    background: #dfdfdf;
    padding: 15px;
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 0 20px;
    text-align: center;
    & .icon {
      background: url("../assets/like22.svg") no-repeat;
      width: 30px;
      height: 30px;
      display: block;
      background-size: 100%;
    }
  }
</style>
