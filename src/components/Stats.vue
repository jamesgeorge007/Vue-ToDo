<template>
  <div>
    <h2 class="display-3 font-weight-bold">Status</h2>
    <p>There are currently {{ countTasks }} tasks</p>
    <v-btn v-on:click="removeAllTasks">Remove All</v-btn>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";

export default {
  name: "Stats",
  computed: {
    ...mapGetters(["countTasks"]),
    ...mapState(["msg"])
  },
  methods: {
    ...mapMutations(["REMOVE_ALL"]),
    ...mapActions(["removeAll", "updateStatus"]),
    async removeAllTasks() {
      await this.removeAll();
      this.updateStatus();
    }
  }
};
</script>

<style></style>
