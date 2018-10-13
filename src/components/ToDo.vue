<template>
  <div>
    <div class="center">
      <v-container>
      <h1 class="display-2 font-weight-black">{{ title }}</h1>
      <v-form @submit.prevent="addLink">
        <v-text-field label="Link" v-model="newLink" required>
        </v-text-field>
      </v-form>
      <v-list v-for="(link, index) in links" v-bind:key="index">
          {{ link }}
          <div
          style="padding: auto">
          <v-btn round color="teal" v-on:click="removeLinks(index)">Remove</v-btn>
          </div>
        </v-list>
      </v-container>
    </div>
    <div class="center">
      <Stats />
    </div>
  </div>  
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import Stats from './Stats.vue';
  
export default {
  name: "ToDo",
  data () {
    return{
      newLink: ''
    }
  },
  computed: {
    ...mapState([
      'title',
      'links'
  ]),
  },
  components: {
    Stats
  },
  methods: {
    ...mapMutations([
      'ADD_LINK'
    ]),
    ...mapActions([
      'removeLink',
      'removeStatus'
    ]),
    addLink: function () {
      this.ADD_LINK(this.newLink);
      this.newLink = '';
      this.removeStatus();
    },
    removeLinks: function (link)  {
      this.removeLink(link);   
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left{
  float: left;
  padding-left: 7vw;
}
.right{
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
