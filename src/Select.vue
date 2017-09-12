<template>

  <div>
  <form @submit="submitSelection">
    <select id="reporter" v-model="selected" @change="consoling">
     	<option value="" selected disabled>Choose A Report</option>
    	<option v-for="report in $store.state.reports" :value="report.value">
    		{{report.text}}
    	</option>
    </select>
    <br><button type="submit">View Report</button>
  </form>
  <br />
  </div>

</template>

<script>

import {store} from './main.js'
  export default {
    data: function(){
      return {
        selected: ''
      }
    },
    computed: {
      formatedReports: function(){
        this.$store.state.reports.map(item=>{
          item.formatted = item.value.replace(/(\d+)([a-z]+)/g,'$1 $2')
          return item
        })
      }
    },
    methods: {
      consoling: function(event){
        console.log(this.selected)
      },
      submitSelection: function(event){
        event.preventDefault()
    	  this.$store.commit('updateSelection', this.selected)
        var reportWindow = new windowmanager.Window({url: "../report.html", width: 500, height: 600, frame: false})
        reportWindow.setTitle(this.$store.getters.selectedReport.value)  
      }
     }
    }


</script>


<style>
</style>
