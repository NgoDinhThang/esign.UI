<template>
    <div class="layout-right">
        <div class="layout-right-search">
            <div class="search-combobox-time combobox">
                <div class="layout-right-search-text" style="margin-bottom:5px">
                    Thời gian
                </div>
                <Combobox v-bind:values= "timeCombobox" v-bind:state="0"/>
            </div>

            <div class="search-combobox-typerequest combobox">
                <div class="layout-right-search-text" style="margin-bottom:5px">
                    Loại yêu cầu
                </div>
                <Combobox v-bind:values= "TypeRequest" v-bind:state="1" />
            </div>

            <div class="search-combobox-statusrequest combobox" style="margin-right:10px !important;">
                <div class="layout-right-search-text" style="margin-bottom:5px;">
                    Trạng thái yêu cầu
                </div>
                <Combobox v-bind:values= "StatusRequest" v-bind:state="2"/>
            </div>
            <div class="search-getdata">
                Lấy dữ liệu
            </div>

            <div class="search-second">
                <div class="search-input-s">
                <i class="fa fa-search" style=" font-size: 17px; color:#dddddd;"></i>
                <input type="text" placeholder="Tìm kiếm theo từ khoá:mã số thuế,..." title="Tìm kiếm theo từ khoá:mã số thuế,căn cước công dân,chứng minh thư,...">
            </div>
            </div>
             
            
            
        </div>
    </div>
</template>
<script>
import Combobox from "../base/BaseCombobox.vue"

export default ({
    components:{
        Combobox
    },
    data() {
        return {
            timeCombobox:
                [   
                    "Tất cả","Hôm nay","Tuần này","Tuần trước","Tháng này","Tháng trước","Quý 1","Quý 2","Quý 3","Quý 4","Năm nay","Năm trước"
                ],
            TypeRequest:
                [
                    "Tất cả","Thu hồi chứng thư số","Thay đổi thông tin","Khoá USB","Mở khoá USB","Cấp lại chứng thư","Thay đổi thông tin liên hệ"
                ],
            StatusRequest:
                [
                    "Tất cả","Chờ duyệt","Từ chối","Đã duyệt"
                ]
        }
    },

})
</script>
<style scoped>
@import url(../../css/layout/TheLayoutRight.css);
</style>
