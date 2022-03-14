<template>
    <div class="footer">
        <div class="footer-pagesize">
            Hiển thị 7/50 trang
        </div>
        <div class="footer-select-pagesize">
            <input type="text" class="select-page-size" value="Hiển thị 50 dòng/trang" @click="ShowOption()">
            <div class="footer-select-pagesize-options" v-show="isOptionShow" >
                <div class="pagesize-option" v-for="PageSize in PageSizes" :key="PageSize" @click="SelectPageSize()"> {{PageSize}} </div>
                
            </div>
        </div>
        <div class="footer-paging">
            Phân trang
        </div>
    </div>
</template>
<script>
export default ({
    components:{
    },
    data() {
        return {
            isOptionShow:false,
            PageSizes:
            ["Hiển thị 30 dòng/trang","Hiển thị 50 dòng/trang","Hiển thị 100 dòng/trang"]
        }
    },
    methods: {
        ShowOption(){
            this.isOptionShow = ! this.isOptionShow
        },
        SelectPageSize(){
            document.getElementsByClassName("select-page-size")[0].value = event.currentTarget.innerHTML
            this.isOptionShow = false
        }
    },
})
</script>
<style scoped>
@import url(../../css/layout/TheFooter.css);
</style>
