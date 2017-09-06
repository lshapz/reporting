import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import App2 from './App2.vue'

Vue.use(Vuex)
var store = new Vuex.Store({
	state: {
	 	reports: [
			{value: "report1", text: 'this is the first report', image: 'http://1.bp.blogspot.com/-nzm908Pfunw/VqXgeRNp4LI/AAAAAAAACJI/wgeVntLSIT8/s1600/status-report.png'},
			{value: "report2", text: 'this is the second report', image: 'http://www.rescueghanamission.org/wp-content/uploads/2017/04/bao-cao.jpg'},
			{value: "report3", text: 'this is the third report', image: 'http://www.q4blog.com/wp-content/uploads/2015/10/1099-r.png'},
		],
		selected: ''
	},
	mutations: {
		updateSelection (state, value){
			state.selected = value
		}
	},
	getters: {
		selectedReport: state => {
			return state.reports.filter(item=> item.value === state.selected)[0]
		}
	}
})


var app = new Vue({
  el: '#app',
  render: h => h(App),
  store: store
})


// var app2 = new Vue({
//   el: '#app2',
//   render: h => h(App2),
//   store: store
// })

