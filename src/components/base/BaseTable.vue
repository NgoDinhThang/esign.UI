<template>
    <div class="table-content" style="margin:0px;padding:0px;">
          <div class="Home-view">
            <div class="table-nv">
              <table style="font-size:13px;">
                <!-- <div class="head"> -->
                <thead class="table-head">
                  <th class = "check" style="background-color:#785F91"><input class="checks" type="checkbox" id="parent-check" @click="ParentCheck()" /></th>
                  <th style="min-width:134px; text-align:center">Ngày đặt hàng</th>
                  <th style="min-width:150px" >Số đơn hàng</th>
                  <th style="min-width:95px" title="Trạng thái đơn hàng">TT đơn hàng</th>
                  <th class="date" style="min-width:106px;">Trạng thái hồ sơ</th>
                  <th style="min-width:132px" >Loại sản phẩm</th>
                  <th style="min-width:171px">Tổ chức/Cá nhân</th>
                  <th style="min-width:153px">Người liên hệ</th>
                  <th style="min-width:130px !important" >SĐT người liên hệ</th>
                  <th style="min-width:100px">Mã hồ sơ</th>
                  <th class="bank" style="min-width:186px">Trạng thái lưu hồ sơ</th>
                  <th style="min-width:100px">Đơn đăng ký CTS</th>
                  <th style="min-width:100px">Hồ sơ pháp lý</th>
                  <th style=" min-width: 80px;" class="right-colum right-head">Ghi chú/Lý do</th>
                </thead>
                <!-- </div> -->
                <tbody>
                  <tr class="table-row" >
                    <td class="check"><input type="checkbox" class="check-s checks"  /></td>
                    <td class="date">27/11/2000</td>
                    <td>Thu hồi chứng thư số</td>
                    <td class="status">Đã duyệt</td>
                    <td >USB token</td>
                    <td>CÔNG TY CỔ PHẦN MISA</td>
                    <td>0403403043</td>
                    <td>Ngô Đình Thắng</td>
                    <td>3423424242</td>
                    <td>Tổ chức</td>
                    <td >B24-0021</td>
                    <td></td>
                    <td></td>
                    <td class="right-colum">
                      Thu hồi chứng thư số
                    </td>

                  </tr>

                 
                </tbody>
              </table>
             
            </div>
            
          </div>
        </div>
</template>
<script>

export default ({
  methods: {
    ParentCheck(){
      var checkChilds = document.getElementsByClassName("check-s")
      if(event.currentTarget.checked == true){
        
        for (const checkChild of checkChilds) {
          checkChild.checked = true
        }
      }
      else{
        for (const checkChild of checkChilds) {
          checkChild.checked = false
        }

      }
    }
  },
  watch : {
  },
  data() {
    return {
    }
  },
})
</script>

<style scoped>
@import url(../../css/base/BaseTable.css);
</style>