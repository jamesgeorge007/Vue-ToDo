import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: 'Tasks',
        msg: '',
        links: [
            'Learn stuff',
            'Hit gym',
            'Code'
        ]
    },

    getters: {
        countLinks: state => {
            return state.links.length;
        }
    },

    mutations: {
        ADD_LINK: (state, link) => {
            state.links.push(link);
        },
        REMOVE_LINK: (state, link) => {
            state.links.splice(link, 1);
            state.msg = 'It has been removed!';
        },
        REMOVE_ALL: (state) => {
            state.links = [];
        },
        REMOVE_STATUS: (state) => {
            state.msg = '';
        },
        UPDATE_STATUS: (state) => {
            state.msg = 'They have been removed!';
        }
    },

    actions: {
        removeLink: (context, link) => {
            context.commit('REMOVE_LINK', link);
        },
        removeAll({
            commit
        }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('REMOVE_ALL');
                    resolve();
                }, 100);
            })
        },
        removeStatus: (context) => {
            context.commit('REMOVE_STATUS');
        },
        updateStatus: (context) => {
            context.commit('UPDATE_STATUS');
        }
    }
});