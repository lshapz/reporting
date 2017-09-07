<template>

<div class="window-drag">
    <div v-if="mySelectedReport" style="text-align:center;" class="window-drag">
      <h1 class="window-drag">{{mySelectedReport.text}}</h1>
      <img class="window-drag" :src="mySelectedReport.image" style="width:100%;max-width:450px;">
    </div>
</div>

</div>

</template>
<script>
export default {
  data: function(){
    return {
    }
  },
    computed: {
    mySelectedReport: function(){
      return this.$store.getters.selectedReport
    }
  },
  mounted(){
      window.windowmanager.onReady(function(){
        window.windowmanager.messagebus.on('report-selected', function(event){
          self.App.$store.commit('updateSelection', event)
        })
      })

  }
  
}

</script>


<style>
</style>
