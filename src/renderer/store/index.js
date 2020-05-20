import Vue from "vue";
import Vuex from "vuex";
import dedent from "dedent";

import { createPersistedState, createSharedMutations } from "vuex-electron";

// import modules from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  // modules,
  // plugins: [
  //   createPersistedState(),
  //   createSharedMutations()
  // ],
  // strict: process.env.NODE_ENV !== 'production'
  state: {
    code: dedent`
    int middle(double a, double b, double c)
    {
        if(((a<b)&&(b<c))||((c<b)&&(b<a)))
        {
            return b;
        }
        else if(((a<c)&&(c<b))||((b<c)&&(c<a)))
        {
            return c;
        }
        else if(((b<a)&&(a<c))||((c<a)&&(a<b)))
        {
            return a;
        }
        else
        {
            return;
        }
    }
  `,
  },
  mutations: {
    setCode(state, newCode) {
      state.code = newCode;
    },
  },
});
