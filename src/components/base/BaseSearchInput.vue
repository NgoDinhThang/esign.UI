<template>
    <div class="search-input">
            <i class="fa fa-search" style=" font-size: 17px; color:#dddddd;"></i>
        <input type="text" placeholder="Tìm kiếm theo số đơn hàng" title="Tìm kiếm theo số đơn hàng" id="searchWithOrderNo" class="searchInput" v-on:keyup.enter="onEnter()">
    </div>
</template>
<script>
export default ({
    methods:{
        onEnter(){
            var searchText = document.getElementById("searchWithOrderNo").value

            this.searchTextOrderNo = searchText
            
            this.$emit("searchWithOrderNo",this.searchTextOrderNo)
        }
    },
    data(){
        return {
            searchTextOrderNo: null
        }
    }
})
</script>

<style scoped>
    @import url(../../css/base/BaseSearch.css);
</style>