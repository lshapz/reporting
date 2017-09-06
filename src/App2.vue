<template>
  <div id="app2">
{{msg}}    

<report-itselfs></report-itselfs>

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
    reportItselfs: Report
  }
}
</script>
