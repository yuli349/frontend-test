<template>
  <div>
    <div v-if="candidate.loading">
      <img src="../assets/loader.gif" alt="">
    </div>
    <div v-else>
      <div v-if="candidate.unvaluedList.length > 0">
        <candidate></candidate>
        <like-button></like-button>
        <dislike-button></dislike-button>
      </div>
      <div v-else>
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
