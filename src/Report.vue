<template>

<div class="window-drag">

  <div class="headerDiv window-drag"><span class="window-drag">{{reportTitle}}</span>
  <span class="headerNav window-drag"><span class="fa fa-window-maximize" @click="maximizeWindow"></span>
  <span class="fa fa-window-close-o"  @click="closeWindow"></span></span></div>
    <div v-if="mySelectedReport" style="text-align:center;" class="window-drag">
      <h1 class="window-drag">{{mySelectedReport.text}}</h1>

      <div v-if="mySelectedReport.data"> 
        <data-table :theSelectedReport="mySelectedReport"></data-table>
      </div>

      <div v-else> 
        <img :src="mySelectedReport.image" style="width:100%;max-width:450px;">
      </div>
    </div>

</div>

</div>

</template>
<script>
import DataTable from './DataTable.vue'

export default {
  data: function(){
    return {
      reportWindow: window.windowmanager.Window.getCurrent(),
      reportTitle: "Reporting"
    }
  },
  components: {dataTable: DataTable},

  computed: {
    mySelectedReport: function(){
      return this.$store.getters.selectedReport
    }
  },
  mounted(){
      // window.windowmanager.onReady(function(){
      //   window.windowmanager.messagebus.on('report-selected', function(event){
      //     self.App.$store.commit('updateSelection', event)
      //   }) 
      // })
      var firstTitle = window.windowmanager.Window.getCurrent().getTitle()
      this.$store.commit('updateSelection', firstTitle)
  },
  methods: {
    closeWindow: function(){
        this.reportWindow.close();
    },
    maximizeWindow: function() {
      if (this.reportWindow.isMaximized())
          this.reportWindow.restore();
      else
          this.reportWindow.maximize();
    }
  }
  
}

</script>


<style>
.headerDiv {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px dotted black;
  font-weight: bold;
}
.headerNav{
  width: 100%;
  left: 45%; 
  position:absolute;
}

</style>
