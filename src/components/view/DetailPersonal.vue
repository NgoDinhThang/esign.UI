<template>
<div class="detail-file">
    <div class="">
        <TheDetailTitle :certType="titleDetail" :userName="userName"/>
        <DetailPersonal @Account="account"/>
    </div>
</div>
    
</template>
<script>
import TheDetailTitle from "../layout/TheDetailTitle.vue"
import DetailPersonal from "../layout/TheDetailContentPersonal.vue"

export default ({
    components:{
        TheDetailTitle,DetailPersonal
    },
    methods:{
        account(caUserName){
            this.userName = caUserName
        }
    },
    data(){
        return{
            titleDetail:"Cá nhân",
            userName:null

        }
    }
})
</script>
<style scoped>
@import url(../../css/Detail.css);
</style>