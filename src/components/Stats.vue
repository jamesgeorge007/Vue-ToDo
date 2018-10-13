<template>
    <div
    style="padding: top; margin: top"
    >
        <v-card color="blue-grey darken-2" class="white--text" >
        <h2 class="display-2 font-weight-bold">Status</h2>
        <p class="title">There are currently {{countLinks}} links</p>
        <v-btn round color="teal" v-on:click="removeAllLinks">Remove All</v-btn>
        <p>{{ msg }}</p>
        </v-card>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from 'vuex';

export default {
  name: 'Stats',  
  computed: {
      ...mapGetters([
        'countLinks'  
      ]),
      ...mapState([
          'msg'
      ])
    },
  methods: {
      ...mapMutations([
          'REMOVE_ALL'
      ]),
      ...mapActions([
          'removeAll',
          'updateStatus'
      ]),
      removeAllLinks(){
          this.removeAll().then(() => {
              // Something happens here
          });
          this.updateStatus();
      },
  }  

}
</script>

<style>

</style>

