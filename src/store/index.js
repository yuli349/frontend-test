import Vue from 'vue';
import Vuex from 'vuex';

import candidate from './candidate.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    candidate,
  },
});
