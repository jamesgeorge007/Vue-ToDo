<template>
    <div>
        <h2 class="display-3 font-weight-bold">Status</h2>
        <p>There are currently {{countLinks}} links</p>
        <v-btn v-on:click="removeAllLinks">Remove All</v-btn>
        <p>{{ msg }}</p>
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

