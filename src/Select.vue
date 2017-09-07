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

	methods: {updateStore: function(event){
		this.$store.commit('updateSelection', event.target.value)
	}}
   //  data: function(){
   //      return{
   //          reports: [
			// 	{value: "report1", text: 'this is the first report', image: 'http://1.bp.blogspot.com/-nzm908Pfunw/VqXgeRNp4LI/AAAAAAAACJI/wgeVntLSIT8/s1600/status-report.png'},
			// 	{value: "report2", text: 'this is the second report', image: 'http://www.rescueghanamission.org/wp-content/uploads/2017/04/bao-cao.jpg'},
			// 	{value: "report3", text: 'this is the third report', image: 'http://www.q4blog.com/wp-content/uploads/2015/10/1099-r.png'},
			// 	],
			// selected: ''
	  //    }
   //  },

   //  updated: function(){
   //  		console.log(this.selected)
   //  	},
   //  watch: function(){
   //  	selected: function(){

   //  	}
   //  }
}

</script>


<style>
</style>
