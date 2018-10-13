import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: 'Tasks',
        msg: '',
        links: [{
            text: 'Learn stuff',
            done: false
        }, {
            text: 'Hit gym',
            done: false
        }, {
            text: 'Code',
            done: true
        }]
    },

    getters: {
        countLinks: state => {
            return state.links.length;
        }
    },

    mutations: {
        ADD_LINK: (state, link) => {
            state.links.push({
                text: link,
                done: false
            });
        },
        REMOVE_LINK: (state, link) => {
            state.links.splice(link, 1);
        },
        REMOVE_ALL: (state) => {
            state.links = [];
        },
        REMOVE_STATUS: (state) => {
            state.msg = '';
        },
        UPDATE_STATUS: (state) => {
            state.msg = 'They have been removed!';
        },
        DONE_LINK: (state, obj) => {
            state.links[obj.index].done = obj.done;
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