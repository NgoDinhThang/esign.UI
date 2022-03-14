<template>
  <div id="app">
    <TheLayoutLeft/>
    <div v-show="isShow">
      <TheTitle/>
      <TheFeature/>
      <TheLayoutRight />
    </div>
    <Detail v-show="true"/>
    
  </div>
</template>

<script>

import TheLayoutLeft from "./components/layout/TheLayoutLeft.vue"
import TheTitle from "./components/layout/TheTitle.vue"
import TheFeature from "./components/layout/TheFeature.vue"
import TheLayoutRight from "./components/layout/TheLayoutRight.vue"
import Detail from "./components/view/Detail.vue"

export default {
  name: 'App',
  components: {
    TheLayoutLeft,TheTitle,TheFeature,TheLayoutRight, Detail
  },
  mounted() {
    var checks = document.getElementsByClassName("checks")
    var buttons = document.getElementsByClassName("isAccepted")
    for (const check of checks) {
      check.addEventListener("change",()=>{
        if(event.currentTarget.checked)
        {
          for (const button of buttons) {
            button.disabled =  false
          }
        }
      })
    }
  },
  data() {
    return {
      isShow:false
    }
  },
}
</script>

<style>
@import url(../src/assets/fontawesome-5.15.1/css/all.css);
#app{
  padding-right: 5px;
}

</style>
