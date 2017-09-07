<template>
  <div id="app">

    <div v-if="location.includes('report')">

      <report-itself></report-itself>
    </div>

    <div v-else>
      <select-report></select-report>
      <div v-if="!created">
        <button @click="createWindow">Create Window</button>
      </div>
      <hr>  
    </div>
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
      created: '',
      location: window.location.href
    }
  },
  components: {
    selectReport: Select,
    reportItself: Report,
  },
  computed: {
    mySelectedReport: function(){
      return this.$store.getters.selectedReport
    }
  },
  methods: {
    createWindow: function(){
      new windowmanager.Window({url: "../report.html", width: 500, height: 600, frame: false})
      this.created = true
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
