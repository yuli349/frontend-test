<template>
  <div class="dislike" @click.prevent="dislike">
    dislike
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
    border: 1px solid red;
    padding: 10px;
  }
</style>
