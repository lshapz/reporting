import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.debug = true; Vue.config.devtools = true

var store = new Vuex.Store({
	state: {
		selected: '', 
	 	reports: [
			{value: "report1", text: 'this is the first report', image: 'http://1.bp.blogspot.com/-nzm908Pfunw/VqXgeRNp4LI/AAAAAAAACJI/wgeVntLSIT8/s1600/status-report.png'},
			{value: "report2", text: 'this is the second report', image: 'http://www.rescueghanamission.org/wp-content/uploads/2017/04/bao-cao.jpg'},
			{value: "report3", text: 'this is the third report', 
			data: {columns: ['', 'price', 'value', 'sold'], rows: [["client 1", '$20', '$50', "true"], ["client 2", '$30', '$40', "false"], ["client 3", '$60', '$150', "true"], ["client 4", '$250', '$30', "true"]]}},
			{value: "report4", text: 'this is the fourth report', 
			data: {columns: ['', 'different', 'column', 'names'], rows: [["client 1", '$22', '$150', "false"], ["client 2", '$33', '$44', "true"], ["client 3", '$66', '$50', "false"], ["client 4", '$25', '$33', "false"]]}}
		],
	},

	mutations: {
		updateSelection (state, value){
			window.windowmanager.messagebus.send('report-selected', value)
			state.selected = value
		},
	},
	getters: {
		selectedReport: state => {
			return state.reports.filter(item=> item.value === state.selected)[0]
		},
	}
})


var app = new Vue({
  el: '#app',
  render: h => h(App),
  store: store
})

window.App = app
