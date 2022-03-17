<template>
    <div class="title" >
        <div class="title-text">
            HỒ SƠ CHỜ XỬ LÝ
        </div>
        
        <div style="display:flex">
            <div class="title-search">
            <Search @searchWithOrderNo= "searchWithOrderNo"/>
            </div>
            <div class="title-user">
                <div class="title-user-avt">
                    <img src="https://testesignwebsiteadminrd.misa.com.vn/icon/1x/Ico-User.png" style="width:28px;height:28px" alt="">
                </div>
                <span style="font-size:12px;color:#656464;margin-left:5px">Xin chào, <span style="color:#268FFB">B24-0037</span></span>
                <i class="fa fa-angle-down fs-12 user-icon"></i>
            </div>
        </div>
       
        
        
    </div>
</template>
<style scoped>
@import url(../../css/layout/TheTitle.css);
</style>
<script>
    import Search from "../base/BaseSearchInput.vue"
export default ({
    components:{
        Search
    },
    methods:{
        searchWithOrderNo(searchWithOrderNo){
            this.$emit("searchWithOrderNo",searchWithOrderNo)
        }
    }
})
</script>
