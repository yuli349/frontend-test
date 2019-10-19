<template>
  <div>
    <div class="loading" v-if="candidate.loading">
      <img src="../assets/loader.gif" alt="">
    </div>
    <div v-else>
      <div v-if="candidate.unvaluedList.length > 0">
        <candidate></candidate>
        <div class="btn-block">
          <like-button></like-button>
          <dislike-button></dislike-button>
        </div>
      </div>
      <div class="empty" v-else>
        Извините, больше совпадений не найдено
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import Candidate from '@/components/Candidate';
import LikeButton from '@/components/LikeButton';
import DislikeButton from '@/components/DislikeButton';

export default {
  components: {
    Candidate,
    LikeButton,
    DislikeButton,
  },
  mounted() {
    this.getCandidates();
  },
  computed: {
    ...mapState({
      candidate: state => state.candidate,
    }),
  },
  methods: {
    ...mapActions('candidate', ['getCandidates']),
  },
};
</script>
<style lang="scss">
  .empty {
    position: absolute;
    text-align: center;
    color: #00b0ff;
    width: 300px;
    font-size: 20px;
    padding: 10px;
    font-family: sans-serif;
    top: 50%;
    left: 50%;
    margin-left: -160px;
    margin-top: -33px;
  }
  .loading {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    & img {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -32px;
      margin-left: -32px;
    }
  }
  .btn-block {
    text-align: center;
    position: absolute;
    height: 13%;
    width: 96%;
    bottom: 1%;
    left: 2%;
  }
</style>
