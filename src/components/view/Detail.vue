<template>
<div class="detail-file">
    <DetailTitle :detailRequest= "detailRequest" @previous= "previous()"/>
    <DetailContentOrg/>
</div>
    
</template>
<script>
import DetailTitle from "../layout/TheDetailTitle.vue"
// import DetailContentPO from "../layout/TheDetailContentPOrgnization.vue"
import DetailContentOrg from "../layout/TheDetailContentOrgnization.vue"
export default ({
    components:{
        DetailTitle,DetailContentOrg
    },
    props:
    ["detailRequest"],
    methods:{
        previous(){
            console.log("detailtitle")
            this.$emit("previous",null)
        }
    }
})
</script>
<style scoped>
@import url(../../css/Detail.css);
</style>
