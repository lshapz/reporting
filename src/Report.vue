<template>

<div>
    <div v-if="selectedReport" style="text-align:center;" class="window-drag">
      <h1>{{selectedReport.text}}</h1>
      <img :src="selectedReport.image" style="width:100%;max-width:500px;">
    </div>

</div>

</div>

</template>
<script>
export default {
    computed: {
      selectedReport: function(){
        var myreport
        console.log(this.$store.state)
        if (this.$store.state.selected){
          myreport = this.$store.state.reports.filter(item=>{return item.value === this.$store.state.selected})[0]
        }
        return myreport
      }
    }
}

</script>


<style>
</style>
