<template>
    <div class="footer">
        <div class="footer-pagesize">
            Hiển thị <span style="font-weight:bold;">{{recordsPage}}/{{coutnRequest}} </span> Hồ sơ
        </div>
        <div class="footer-select-pagesize">
            <input type="text" class="select-page-size" value="Hiển thị 50 dòng/trang" @click="ShowOption()">
            <div class="footer-select-pagesize-options" v-show="isOptionShow" >
                <div class="pagesize-option"  @click="SelectPageSize()" pageSize="30">Hiển thị 30 dòng/trang</div>
                <div class="pagesize-option"  @click="SelectPageSize()" pageSize="50">Hiển thị 50 dòng/trang</div>
                <div class="pagesize-option"  @click="SelectPageSize()" pageSize="100">Hiển thị 100 dòng/trang</div>
                
            </div>
        </div>
        <div class="footer-paging">
            <button class="footer-paging-previous" @click="perviousPage()">

            </button>
            <div class="footer-paging-page">
                <button class="footer-paging-pageindex" v-for="page in pages" :key="page" @click="selectedPage()">
                    {{page}}
                </button>
                
            </div>
            <button class="footer-paging-next" @click="nextPage()">

            </button>
        </div>
    </div>
</template>
<script>
export default ({
    components:{
    },
    mounted(){
        var me = this
        var indexPages = document.getElementsByClassName("footer-paging-pageindex")
        console.log(indexPages)
        for (const indexPage of indexPages) {
            if(indexPage.innerHTML == parseInt(me.indexPage)){
                indexPage.style.backgroundColor = "#A286BF"
                indexPage.style.color = "white"
            } 
            
        }
    },
    props:
    ["indexPage","coutnRequest"],
    watch:{
        recordsPage(){
            this.$emit("changePageSize",this.recordsPage)
        },
        indexPageSelected(){
            var indexPages = document.getElementsByClassName("footer-paging-pageindex")
            for (const indexPage of indexPages) {
                indexPage.style.backgroundColor = "unset"
                indexPage.style.color = "black"
                if(parseInt(indexPage.innerHTML) == this.indexPageSelected){
                    indexPage.style.backgroundColor = "#A286BF"
                indexPage.style.color = "white"
                }

            }
            //gọi lên component cha để lấy ra dữ liệu của trang vừa chọn
            this.$emit("pageIndexSelected",this.indexPageSelected)
        }

    },
    data() {
        return {
            isOptionShow:false,
            recordsPage: 50,
            pages:["1","2","3","4"],
            indexPageSelected: 1
        }
    },
    methods: {
        //previous page
        perviousPage(){
            if(this.indexPageSelected > 1){
                this.indexPageSelected = this.indexPageSelected - 1
            }
        },
        nextPage(){
             if(this.indexPageSelected < 4){
                this.indexPageSelected = this.indexPageSelected +1
            }
        },
        //event click to select page
        selectedPage(){
            //xóa style của button page  hiện tại
            // var indexPages = document.getElementsByClassName("footer-paging-pageindex")
            // for (const indexPage of indexPages) {
            //     indexPage.style.backgroundColor = "unset"
            //     indexPage.style.color = "black"

            // }
            //     //đặt style cho button page vừa chọn
            //     event.currentTarget.style.backgroundColor = "#A286BF"
            //     event.currentTarget.style.color = "white"

            this.indexPageSelected = parseInt(event.currentTarget.innerHTML)
            
            
        },

        //show option pagesize
        ShowOption(){
            this.isOptionShow = ! this.isOptionShow
        },
        SelectPageSize(){
            document.getElementsByClassName("select-page-size")[0].value = event.currentTarget.innerHTML
             this.recordsPage = event.currentTarget.getAttribute("pageSize")
            this.isOptionShow = false
        }
    },
})
</script>
<style scoped>
@import url(../../css/layout/TheFooter.css);
</style>
