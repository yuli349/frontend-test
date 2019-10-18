<template>
  <div class="like" @click.prevent="like">
    like
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
    border: 1px solid green;
    padding: 10px;
  }
</style>
