<template>
<div class="detail-file">
    <DetailTitle :detailRequest= "detailRequest" @previous= "previous()"/>
</div>
    
</template>
<script>
import DetailTitle from "../layout/TheDetailTitle.vue"
export default ({
    components:{
        DetailTitle
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
