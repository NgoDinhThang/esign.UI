<template>
  <div id="app" @click="clickApp()">
    <TheLayoutLeft/>
    <router-view></router-view>
    
  </div>
</template>

<script>

import TheLayoutLeft from "./components/layout/TheLayoutLeft.vue"
export default {
  name: 'App',
  components: {
    TheLayoutLeft
  },
  methods:{
    refresh(){
      this.refreshState = ! this.refreshState
      var inputs = document.getElementsByClassName("searchInput")
      for (const input of inputs) {

        input.value = ""
        
      }
    },
    searchWithOrderNo(searchWithOrderNo){
      this.searchOrderNo = searchWithOrderNo
    },
    showFeature(showFeatureState){
      var buttons = document.getElementsByClassName("isAccepted")
      if(showFeatureState ==1){
        
        for (const button of buttons) {
            button.disabled =  false
          }
      }
      else{
        
        for (const button of buttons) {
            button.disabled =  true
          }
      }
    },
    clickApp(){
      
    },
    DetailRequest(request){
      this.isHomeShow = false;
      this.isDetailSHow = true;
      this.detailRequest = request
    },
    previous(){
      this.isHomeShow = true;
      this.isDetailSHow = false;
    },
  },
  watch:{
    
  },
  mounted() {

    
    //custom check 
    // var checks = document.getElementsByClassName("checks")
    // var buttons = document.getElementsByClassName("isAccepted")
    // for (const check of checks) {
    //   check.addEventListener("change",()=>{
    //     if(event.currentTarget.checked)
    //     {
    //       for (const button of buttons) {
    //         button.disabled =  false
    //       }
    //     }
    //   })
    // }
  },
  data() {
    return {
      detailRequest: null,
      searchOrderNo:null,
      refreshState: false
    }
  },
}
</script>

<style>
@import url(../src/assets/fontawesome-5.15.1/css/all.css);
#app{
  padding-right: 5px;
  /* scrollbar-width: thin; */
  height: 100%;
  
}
::-webkit-scrollbar{
  width:5px;
  height: 5px;
}
::-webkit-scrollbar-thumb {
  background: #ccc; 
  border-radius: 10px;
}
::-webkit-scrollbar-track {
  width: 5px;
}
button:hover{
  cursor: pointer;
}

</style>
