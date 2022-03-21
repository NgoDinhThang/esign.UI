<template>
    <div class="">
        <TheTitle/>
        <TheFeature/>
        <TheLayoutRight/>

    </div>
</template>
<script>
import TheTitle from "../layout/TheTitle.vue"
import TheFeature from "../layout/TheFeature.vue"
import TheLayoutRight from "../layout/TheLayoutRight.vue"

export default ({
    components:{
        TheTitle,TheFeature,TheLayoutRight
    }
})
</script>
