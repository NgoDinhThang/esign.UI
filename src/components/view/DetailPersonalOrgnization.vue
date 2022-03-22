<template>
<div class="detail-file">
    <div class="">
        <TheDetailTitle :certType="titleDetail" :userName="userName"/>
        <DetailPersonalOrgnization @Account="account"/>
    </div>
</div>
    
</template>
<script>
import TheDetailTitle from "../layout/TheDetailTitle.vue"
import DetailPersonalOrgnization from "../layout/TheDetailContentPOrgnization.vue"

export default ({
    components:{
        TheDetailTitle,DetailPersonalOrgnization
    },
    methods:{
        account(caUserName){
            this.userName = caUserName
        }
    },
    data(){
        return{
            titleDetail:"Cá nhân thuộc tổ chức",
            userName:null
        }
    }
})
</script>
<style scoped>
@import url(../../css/Detail.css);
</style>
