import Types from "@/state/Types";
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default  new Vuex.Store({
    state: {
        [Types.store.GUITAR_CONFIG]: {
            realFretSpacing: true,
            isVertical: true,
            showSideMenu: false,
            fretCount: 22,
        }
    },
    mutations: {
        [Types.mutations.SET_GUITAR_CONFIG]: function(state, config) {
            state.guitarConfig = config;
        }
    }
});