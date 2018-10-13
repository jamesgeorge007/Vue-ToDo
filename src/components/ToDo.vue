<template>
  <div>
    <div class="left">
      <v-container>
      <h1 class="display-2 font-weight-black">{{ title }}</h1>
      <v-form @submit.prevent="addLink">
        <v-text-field label="Link" v-model="newLink" required>
        </v-text-field>
      </v-form>
      <v-list v-for="(link, index) in links" v-bind:key="index" v-if="!link.done">
          <i class="far fa-square fa-2x" v-on:click="doneLinks(index,true)"></i>
          {{ link.text }}
          <v-btn v-on:click="removeLinks(index)">Remove</v-btn>
      </v-list>
      </v-container>
    </div>
    <div class="center">

      <v-container>
      <h1 class="display-2 font-weight-black">Done</h1>
            <v-list v-for="(link, index) in links" v-bind:key="index" v-if="link.done">
          <i class="far fa-check-square fa-2x onho" v-on:click="doneLinks(index,false)"></i>
          {{ link.text }}
          <v-btn v-on:click="removeLinks(index)">Remove</v-btn>
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
      newLink: ""
    };
  },
  computed: {
    ...mapState(["title", "links"])
  },
  components: {
    Stats
  },
  methods: {
    ...mapMutations(["ADD_LINK", "DONE_LINK"]),
    ...mapActions(["removeLink", "removeStatus"]),
    addLink: function() {
      this.ADD_LINK(this.newLink);
      this.newLink = "";
      this.removeStatus();
    },
    removeLinks: function(link) {
      this.removeLink(link);
    },
    doneLinks: function(index, done) {
      this.DONE_LINK({
        index: index,
        done: done
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
i:hover {
  cursor: pointer;
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
</style>
