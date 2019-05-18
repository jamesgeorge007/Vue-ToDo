<template>
  <div>
    <div class="left">
      <v-container>
        <h1 class="display-2 font-weight-black">{{ title }}</h1>
        <v-form @submit.prevent="addTask">
          <v-text-field label="Task" v-model="newTask"> </v-text-field>
        </v-form>
        <v-list
          v-for="(task, index) in tasks"
          v-bind:key="index"
          v-if="!task.done"
        >
          <i
            class="far fa-square fa-2x"
            v-on:click="doneTasks(index, true)"
          ></i>
          {{ task.text }}
          <v-btn v-on:click="removeTasks(index)">Remove</v-btn>
        </v-list>
      </v-container>
    </div>
    <div class="center">
      <v-container>
        <h1 class="display-2 font-weight-black">Done</h1>
        <v-list
          v-for="(task, index) in tasks"
          v-bind:key="index"
          v-if="task.done"
        >
          <i
            class="far fa-check-square fa-2x"
            v-on:click="doneTasks(index, false)"
          ></i>
          {{ task.text }}
          <v-btn v-on:click="removeTasks(index)">Remove</v-btn>
        </v-list>
      </v-container>
    </div>
    <div class="right">
      <Stats />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Stats from "./Stats.vue";

export default {
  name: "ToDo",
  data() {
    return {
      newTask: ""
    };
  },
  computed: {
    ...mapState(["title", "tasks"])
  },
  components: {
    Stats
  },
  methods: {
    ...mapMutations(["ADD_TASK", "DONE_TASK"]),
    ...mapActions(["removeTask", "removeStatus"]),
    addTask: function() {
      if (!this.newTask) {
        alert("Kindly provide a task");
        return;
      }
      this.ADD_TASK(this.newTask);
      this.newTask = "";
      this.removeStatus();
    },
    removeTasks: function(task) {
      this.removeTask(task);
    },
    doneTasks: function(index, done) {
      this.DONE_TASK({
        index,
        done
      });
      this.removeStatus();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left {
  float: left;
  padding-left: 7vw;
}
.right {
  float: right;
  padding-right: 7vw;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
i:hover {
  cursor: pointer;
}
</style>
