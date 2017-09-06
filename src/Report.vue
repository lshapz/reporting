<template>

<div>
{{test}}
    <div v-if="mySelectedReport" style="text-align:center;" class="window-drag">
    {{test + ", sir!"}}
      <h1>{{mySelectedReport.text}}</h1>
      <img :src="mySelectedReport.image" style="width:100%;max-width:500px;">
    </div>

</div>

</div>

</template>
<script>
export default {
  data: function(){
    return {
      test: "REPORTING for duty"
    }

  },
    computed: {
      mySelectedReport: function(){
        if (this.$store.getters.selectedReport){
          console.log(this.$store.getters.selectedReport)
        return this.$store.getters.selectedReport
        }
      }
    }
}

</script>


<style>
</style>
