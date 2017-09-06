<template>
  <div id="app2">
{{msg}}    

<report-itself></report-itself>

  </div>
</template>

<script>
import Report from './Report.vue'

export default {
  name: 'app2',
  data () {
    return {
      msg: 'Part Duex',
    }
  },
  components: {
    reportItself: Report
  }
}
</script>
