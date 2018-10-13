import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: 'Tasks',
        msg: '',
        tasks: [{
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
        countTasks: state => {
            return state.tasks.length;
        }
    },

    mutations: {
        ADD_TASK: (state, task) => {
            state.tasks.push({
                text: task,
                done: false
            });
        },
        REMOVE_TASK: (state, task) => {
            state.tasks.splice(task, 1);
            state.msg = 'It has been removed!';
        },
        REMOVE_ALL: (state) => {
            state.tasks = [];
        },
        REMOVE_STATUS: (state) => {
            state.msg = '';
        },
        UPDATE_STATUS: (state) => {
            state.msg = 'They have been removed!';
        },
        DONE_TASK: (state, obj) => {
            state.tasks[obj.index].done = obj.done;
        }
    },

    actions: {
        removeTask: (context, task) => {
            context.commit('REMOVE_TASK', task);
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