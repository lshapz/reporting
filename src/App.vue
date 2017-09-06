<template>
  <div id="app">
  {{msg}}   
    <select-report></select-report>
    <br>
    <hr>
    <br>
<!--     <report-itself></report-itself>
 -->     <br>
    <hr>
    <br>
        <button @click="createWindow">Create Window</button>
  </div>


</template>

<script>
import Select from './Select.vue'
import Report from './Report.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: ''
    }
  },
  components: {
    selectReport: Select,
    reportItself: Report
  },
  methods: {
    createWindow: function(){
      new windowmanager.Window({url: "../report.html", width: 1000, height: 600, frame: false})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
