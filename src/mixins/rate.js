/**
 * Чтобы не дублировать функционал
 * при свайпе и при нажатии кнопки лайка или дизлайка
 * используется один и тот же миксин
 */
import { mapMutations, mapActions } from 'vuex';

export default {
  methods: {
    ...mapMutations('candidate', ['likeCurrent', 'dislikeCurrent']),
    ...mapActions('candidate', ['setNext']),
    like() {
      this.likeCurrent();
      this.setNext();
    },
    dislike() {
      this.dislikeCurrent();
      this.setNext();
    },
  },
};
