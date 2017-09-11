<template>

  <div>
    <select id="reporter" @change="updateStore">
     	<option value="" selected disabled>Choose A Report</option>
    	<option v-for="report in $store.state.reports" :value="report.value">
    		{{report.text}}
    	</option>
    </select>
  </div>

</template>

<script>

import {store} from './main.js'
  export default {

    methods: {
      updateStore: function(event){
    	 this.$store.commit('updateSelection', event.target.value)
      }
     }
    }


</script>


<style>
</style>
