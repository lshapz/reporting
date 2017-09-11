<template>
<div>
          <table> 
            <tr>
              <th v-for="item in theSelectedReport.data.columns">{{item}}</th>
            </tr>
            <tbody>
            <tr v-for="item in theSelectedReport.data.rows">
              <td v-for="subItem in item">{{subItem}}</td>
            </tr>
            </tbody>
          </table>

</div>

</template>

<script>
export default {
    data: function(){
        return{
            
        }
    },
    props: ['theSelectedReport']
}

</script>


<style>
table {
  position: relative;
  left:30%;
  border: 1px dashed black;
}

th, td {
    border: 1px dashed black;

}
</style>
