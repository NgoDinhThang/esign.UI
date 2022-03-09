<template>
  <div id="app">
    <TheLayoutLeft/>
    <TheTitle/>
    <TheFeature/>
    <TheLayoutRight/>
  </div>
</template>

<script>

import TheLayoutLeft from "./components/layout/TheLayoutLeft.vue"
import TheTitle from "./components/layout/TheTitle.vue"
import TheFeature from "./components/layout/TheFeature.vue"
import TheLayoutRight from "./components/layout/TheLayoutRight.vue"

export default {
  name: 'App',
  components: {
    TheLayoutLeft,TheTitle,TheFeature,TheLayoutRight
  }
}
</script>

<style>
@import url(../src/assets/fontawesome-5.15.1/css/all.css);

</style>
