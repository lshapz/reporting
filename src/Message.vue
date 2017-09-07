<template>

<div>
    {{msg + ", sir!"}}
    <span id="theMessage"></span>
    <span id="reportName"></span>
</div>

</div>

</div>

</template>
<script>
export default {
  data: function(){
    return {
      msg: "show me the carfax"
    }
  },
  methods: {
    placeMessage: function(event){  
        let showplace = document.getElementById('theMessage')
        let p = document.createElement('p')
        p.textContent = event
        showplace.appendChild(p)
        console.log(event)
      }
  },
  mounted(){
    let vue = this
    window.windowmanager.onReady(function(vue){
      console.log(window.windowmanager)
      window.windowmanager.messagebus.on('msg', function(event, vue){  
        let showplace = document.getElementById('theMessage')
        let p = document.createElement('p')
        p.textContent = event
        showplace.appendChild(p)
        console.log(event)
      })
      window.windowmanager.messagebus.on('report-selected', function(event, vue){
        let showplace = document.getElementById('reportName')
        let p = document.createElement('p')
        p.textContent = event
        showplace.appendChild(p)
        console.log(event)
        self.App.$store.commit('updateSelection', event)
      })
    })
  }
}

</script>


<style>
</style>
