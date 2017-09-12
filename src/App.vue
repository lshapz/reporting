<template>
  <div id="app">

    <div v-if="location.includes('report')">
      <report-itself></report-itself>
    </div>
    <div v-else>
      <select-report></select-report>
      <hr>  
    </div>
</div>

</template>

<script>
import Select from './Select.vue'
import Report from './Report.vue'
import {mapState} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      location: window.location.href,
    }
  },
  components: {
    selectReport: Select,
    reportItself: Report,
  },
  computed: mapState({
    created: state=>state.creation, 
    mySelectedReport: state=> state.selectedReport
  })

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
