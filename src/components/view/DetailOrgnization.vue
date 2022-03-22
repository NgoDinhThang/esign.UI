<template>
<div class="detail-file">
    <div class="">
        <TheDetailTitle :certType="titleDetail" :userName="userName"/>
        <DetailOr @Account="account"/>
    </div>
</div>
    
</template>
<script>
import TheDetailTitle from "../layout/TheDetailTitle.vue"
import DetailOr from "../layout/TheDetailOrgnization.vue"

export default ({
    components:{
        TheDetailTitle,DetailOr
    },
    methods:{
        account(caUserName){
            this.userName = caUserName
        }
    },
    data(){
        return{
            url_data:null,
            titleDetail:"Tổ chức",
            userName:null
        }
    }
})
</script>
<style scoped>
@import url(../../css/Detail.css);
</style>
