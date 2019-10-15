<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <div class="flex flex-column">
          <h1 class="display-2 font-weight-black mb-4">{{ title }}</h1>

          <v-list
            v-for="(task, index) in tasks"
            v-bind:key="index"
            v-if="!task.done"
            class="flex justify-content-between align-items-center"
          >
            <i class="far fa-square fa-2x checkbox" v-on:click="doneTasks(index, true)"></i>
            <span class="task-text">{{ task.text }}</span>
            <v-btn v-on:click="removeTasks(index)" class="align-self-end flex-shrink m-0">Remove</v-btn>
          </v-list>

          <v-form @submit.prevent="addTask">
            <v-text-field label="Task" v-model="newTask"></v-text-field>
          </v-form>
        </div>
      </div>
      <div class="col-4">
        <div class="flex flex-column">
          <h1 class="display-2 font-weight-black mb-4">Done</h1>

          <v-list
            v-for="(task, index) in tasks"
            v-bind:key="index"
            v-if="task.done"
            class="flex justify-content-between align-items-center"
          >
            <i class="far fa-square fa-2x checkbox" v-on:click="doneTasks(index, false)"></i>
            <span class="task-text">{{ task.text }}</span>
            <v-btn v-on:click="removeTasks(index)">Remove</v-btn>
          </v-list>
        </div>
      </div>
      <div class="col-4">
        <Stats />
      </div>
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

<style >
/** Simple grid **/
.container {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.row {
  position: relative;
  width: 100%;
}

.row [class^="col"] {
  float: left;
  margin: 0.5rem 2%;
  min-height: 0.125rem;
}

.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12 {
  width: 96%;
}

.col-1-sm {
  width: 4.33%;
}

.col-2-sm {
  width: 12.66%;
}

.col-3-sm {
  width: 21%;
}

.col-4-sm {
  width: 29.33%;
}

.col-5-sm {
  width: 37.66%;
}

.col-6-sm {
  width: 46%;
}

.col-7-sm {
  width: 54.33%;
}

.col-8-sm {
  width: 62.66%;
}

.col-9-sm {
  width: 71%;
}

.col-10-sm {
  width: 79.33%;
}

.col-11-sm {
  width: 87.66%;
}

.col-12-sm {
  width: 96%;
}

.row::after {
  content: "";
  display: table;
  clear: both;
}

.hidden-sm {
  display: none;
}

@media only screen and (min-width: 33.75em) {
  /* 540px */
  .container {
    width: 80%;
  }
}

@media only screen and (min-width: 45em) {
  /* 720px */
  .col-1 {
    width: 4.33%;
  }

  .col-2 {
    width: 12.66%;
  }

  .col-3 {
    width: 21%;
  }

  .col-4 {
    width: 29.33%;
  }

  .col-5 {
    width: 37.66%;
  }

  .col-6 {
    width: 46%;
  }

  .col-7 {
    width: 54.33%;
  }

  .col-8 {
    width: 62.66%;
  }

  .col-9 {
    width: 71%;
  }

  .col-10 {
    width: 79.33%;
  }

  .col-11 {
    width: 87.66%;
  }

  .col-12 {
    width: 96%;
  }

  .hidden-sm {
    display: block;
  }
}

@media only screen and (min-width: 60em) {
  /* 960px */
  .container {
    width: 75%;
  }
}
/** end simple grid **/

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

.flex {
  display: flex;
}

.justify-content-between {
  justify-content: space-between;
}

.align-items-center {
  align-items: center;
}

.align-self-end {
  align-self: flex-end;
}

.flex-column {
  flex-direction: column;
}

.flex-grow {
  flex-grow: 1;
}

.task-text {
  display: flex;
  font-size: 1.25rem;
  text-align: left;
  margin: auto 0.5rem;
}

.checkbox {
  padding: 0.25rem;
  flex-shrink: 1;
  align-self: flex-start;
}

.m-0 {
  margin: 0 !important;
}
</style>
