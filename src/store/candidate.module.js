/**
 * функция получения списка кандидатов вынесена в отдельный сервис
 * для того, чтобы можно было легко подменить способ получения кандидатов,
 * не меняя при этом логику приложения
 */
import { getCandidates } from '@/services/candidate.service';

const initialState = {
  unvaluedList: [], // список еще не оцененных кандидатов
  likedList: [], // список лайкнутых кандидатов
  dislikedList: [], // список дизлайкнутых кандидатов
  current: {}, // текущий кандидат
  loading: true, // индикатор загрузки
};

const actions = {
  /**
   * получение кандидатов начинается с включения прелоадера
   * кандидаты подгружаются пачками
   * сразу же после подгрузки кандидатов выставляется кандидат для "лайков"
   */
  getCandidates({ commit, dispatch }) {
    commit('startLoading');
    const candidates = getCandidates();
    commit('setUnvaluedList', candidates);

    if (candidates.length > 0) {
      dispatch('setNext');
    }
    commit('endLoading');
  },
  /**
   * выбор следующего кандидата
   * по умолачанию берется следующий кандидат из неоцененных
   * если кандидаты в пачке кончились, пробуем получить следующую пачку
   */
  setNext({ commit, dispatch, state }) {
    const currentIndex = state.unvaluedList.findIndex(item => item.id === state.current.id);
    const nextIndex = currentIndex === -1 ? 0 : currentIndex + 1;

    if (nextIndex < state.unvaluedList.length) {
      commit('setCurrentCandidate', state.unvaluedList[nextIndex]);
    } else {
      // кончился список подходяших людей
      dispatch('getCandidates');
    }
  },
};

const mutations = {
  setUnvaluedList(state, candidates) {
    state.unvaluedList = candidates;
  },
  setCurrentCandidate(state, candidate) {
    state.current = Object.assign({}, candidate);
  },
  likeCurrent(state) {
    state.likedList.push(state.current);
  },
  dislikeCurrent(state) {
    state.dislikedList.push(state.current);
  },
  startLoading(state) {
    state.loading = true;
  },
  endLoading(state) {
    // эмуляция загрузки
    setTimeout(() => {
      state.loading = false;
    }, 2000);
  },
};

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
};
