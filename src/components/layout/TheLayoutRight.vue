<template>
    <div class="layout-right">
        <div >
            <div class="layout-right-search">

            <div class="search-combobox-time ">
                <div class="layout-right-search-text" style="margin-bottom:5px ; margin-left: 5px;">
                    Thời gian
                </div>
                <Combobox v-bind:values= "timeCombobox" v-bind:state="0" v-bind:defaultValue= "timeCombobox[4]"/>
            </div>

            <div class="search-combobox-typerequest combobox">
                <div class="layout-right-search-text" style="margin-bottom:5px ; margin-left: 5px ;">
                    Trạng thái đơn hàng
                </div>
                <Combobox v-bind:values= "OrderStatus" v-bind:state="1" v-bind:defaultValue= "OrderStatus[0]" />
            </div>

            <div class="search-combobox-statusrequest combobox" >
                <div class="layout-right-search-text" style="margin-bottom:5px; margin-left: 5px ;">
                    Trạng thái hồ sơ
                </div>
                <Combobox v-bind:values= "FileStatus" v-bind:state="2" v-bind:defaultValue= "FileStatus[0]" />
            </div>

            <div class="search-combobox-statusrequest combobox" >
                <div class="layout-right-search-text" style="margin-bottom:5px; margin-left: 5px ;">
                    Loại sản phẩm
                </div>
                <Combobox v-bind:values= "TypeProduct" v-bind:state="3" v-bind:defaultValue= "TypeProduct[0]" />
            </div>

            <div class="search-combobox-statusrequest combobox" >
                <div class="layout-right-search-text" style="margin-bottom:5px; margin-left: 5px ;">
                    Loại, trạng thái ĐĐK
                </div>
                <Combobox v-bind:values= "TypeStatusDDK" v-bind:state="4" v-bind:defaultValue= "TypeStatusDDK[0]" />
            </div>

            <div class="search-combobox-statusrequest combobox" >
                <div class="layout-right-search-text" style="margin-bottom:5px; margin-left: 5px ;">
                    Loại, trạng thái HSPL
                </div>
                <Combobox v-bind:values= "TypeStatusHSPL" v-bind:state="5" v-bind:defaultValue= "TypeStatusHSPL[0]" />
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
            <div class="layout-right-table" style="margin-top:15px">
                <Table/>
            </div>
                <TheFooter/>
        </div>
        
       
        
    </div>
</template>
<script>
import Combobox from "../base/BaseCombobox.vue"
import Table from "../base/BaseTable.vue"
import TheFooter from "./TheFooter.vue"

export default ({
    components:{
        Combobox,Table,TheFooter
    },

    data() {
        return {
            timeCombobox:
                [   
                    "Tất cả","Hôm nay","Tuần này","Tuần trước","Tháng này","Tháng trước","Quý 1","Quý 2","Quý 3","Quý 4","Năm nay","Năm trước"
                ],
            OrderStatus:
                [
                    "Tất cả","Chưa thanh toán","Đã thanh toán","Đã huỷ đơn hàng"
                ],
            FileStatus:
                [
                    "Tất cả","Chưa nộp hồ sơ","Đã nộp","Chờ duyệt","Từ chối","Đã duyệt","Cấp CT thất bại","Đã cấp chứng thư","Cập nhật hồ sơ"
                ],
            TypeProduct:
            ["Tất cả","USB Token","RemoteSigning"],
            TypeStatusDDK:
            ["Tất cả","Ký tay chưa nhận","Ký tay đã nhận","Ký số"],
            TypeStatusHSPL:
            ["Tất cả","Công chứng chưa nhận","Công chứng đã nhận","Bản mềm"],

            isCheck: false,
        }
    },

})
</script>
<style scoped>
@import url(../../css/layout/TheLayoutRight.css);
</style>
