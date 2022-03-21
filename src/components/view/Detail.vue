<template>
<div class="detail-file">
    <div class="">
        <TheDetailTitle/>
        <DetailPersonal/>
    </div>
</div>
    
</template>
<script>
import TheDetailTitle from "../layout/TheDetailTitle.vue"
import DetailPersonal from "../layout/TheDetailContentPersonal.vue"

export default ({
    components:{
        TheDetailTitle,DetailPersonal
    }
})
</script>
<style scoped>
@import url(../../css/Detail.css);
</style>
