<template>
  <div id="app2">
{{msg}}    
<counter></counter>
<report-itselfs></report-itselfs>
{{selectedReport}}
  </div>

</template>

<script>
import Report from './Report.vue'
import Counter from './Counter.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'app2',
  data () {
    return {
      msg: 'Part Duex',
    }
  },
  components: {
    reportItselfs: Report,
    counter: Counter
  },
  computed: mapGetters(['selectedReport'])


}
</script>
