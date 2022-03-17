<template>
    <div class="layout-right">
        <div >
            <div class="layout-right-search">
                <div class="layout-right-search-filter" style="display:flex">
                    <div class="search-combobox-time " >
                    <div class="layout-right-search-text" style="margin-bottom:5px ; margin-left: 5px;">
                        Thời gian
                    </div>
                    <Combobox v-bind:values= "timeCombobox" v-bind:state="0" v-bind:defaultValue= "timeCombobox[0]"/>
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
                </div>
                

                <div class="search-second">
                    <div class="search-input-s">
                    <i class="fa fa-search" style=" font-size: 17px; color:#dddddd;"></i>
                    <input type="text"  class="second searchInput" placeholder="Tìm kiếm theo từ khoá:số đơn hàng,chủ sở hữu,số điện thoại..." title="Tìm kiếm theo từ khoá:số đơn hàng,chủ sở hữu,số điện thoại,...">
                </div>
            </div>
             
            
            
            </div>
            <div class="layout-right-table" style="margin-top:15px">
                <Table v-bind:indexPage= "indexPage" v-bind:pageSize="pageSize" v-bind:requests= "requests" @detailRequest = "detailRequest" @showFeature= "showFeature"/>
            </div>
                <TheFooter v-bind:indexPage= "indexPage" @pageIndexSelected = "pageIndexSelected" @changePageSize = "changePageSize" :coutnRequest = "countRequest"/>
        </div>
        
       
        
    </div>
</template>
<script>
import Combobox from "../base/BaseCombobox.vue"
import Table from "../base/BaseTable.vue"
import TheFooter from "./TheFooter.vue"
import axios from 'axios'

export default ({
    components:{
        Combobox,Table,TheFooter
    },
    props:
    [
        "searchOrderNo","refresh"
    ],
     created(){
    this.getdata()
    this.getcount()
  },
  watch:{
      searchOrderNo(){
          if(this.searchOrderNo)
          {
              
              this.searchWithOrderNo()
          }
          else
          {
              this.getdata()
          }
          
      },
      refresh(){
           this.getdata()
      }
  },
    methods: {
        searchWithOrderNo(){
            this.stateSearch =1
        var me = this
        axios.get(`https://localhost:44309/api/v1/requests/search/OrderNo/${me.indexPage}-${me.pageSize}/${this.searchOrderNo}`)
        .then((res)=>{
            me.requests = res.data
        })
        },
        showFeature(showFeatureState){
            this.$emit("showFeature",showFeatureState)
        },
        detailRequest(request){
            this.$emit("DetailRequest",request)

        },
        //select index page
        pageIndexSelected(indexPageSelected){
            this.indexPage = indexPageSelected
            if(this.stateSearch == 0)
            {
                this.getdata()
            }
            else{
                this.searchWithOrderNo()
            }
            
        },
        changePageSize(recordsPage){
            this.pageSize = recordsPage
            if(this.stateSearch == 0)
            {
                this.getdata()
            }
            else{
                this.searchWithOrderNo()
            }
        },
        //get data
    getdata(){
        this.stateSearch =0
      var me = this
      axios.get(`https://localhost:44309/pageinate/${me.indexPage}-${me.pageSize}`)
      .then((res)=>{
        me.requests = res.data
      })
    },
    getcount(){
         var me = this
        axios.get(`https://localhost:44309/api/v1/requests/All`)
        .then((res)=>{
            me.countRequest = res.data
        })
        
    
    },
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
            indexPage:1,
            pageSize:50,
            requests:null,
            countRequest:0,
            stateSearch:0
        }
    },

})
</script>
<style scoped>
@import url(../../css/layout/TheLayoutRight.css);
</style>
