<template>
    <div class="table-content" style="margin:0px;padding:0px;">
          <div class="Home-view">
            <div class="table-nv">
              <table style="font-size:13px;">
                <thead class="table-head">
                  <th class = "check" style="background-color:#785F91"><input class="checks" type="checkbox" id="parent-check" @click="ParentCheck()" /></th>
                  <th style="width:134px !important; text-align:center" class="date">Ngày đặt hàng</th>
                  <th style="width:100px !important;" >Số đơn hàng</th>
                  <th style="width:95px !important" title="Trạng thái đơn hàng">TT đơn hàng</th>
                  <th class="status" style="width:150px !important">Trạng thái hồ sơ</th>
                  <th class="status" style="width:150px !important">Loại hồ sơ</th>
                  <th style="width:132px !important" >Loại sản phẩm</th>
                  <th style="width:350px !important;" class="cerName">Tổ chức/Cá nhân</th>
                  <th style="width:160px !important">Người liên hệ</th>
                  <th style="width:150px !important" >SĐT người liên hệ</th>
                  <th style="width:100px !important">Mã hồ sơ</th>
                  <th class="bank" style="width:186px !important"> Bản cứng</th>
                  <th style="width:150px !important">Số chứng thư</th>
                </thead>
                <tbody>
                  <tr class="table-row" v-for="(request,index) in requests" :key="index" @dblclick="dblclickTableRow(request)"  >
                    <td class="check" ><input type="checkbox" class="check-s checks"  @click="checkChiled()"/></td>
                    <td class="date" style="width:134px !important;">{{ formatdate(request.createdDate)}} <br/><span style="font-size:10px;"> {{GetTimeInDate(request.createdDate)}}</span></td>
                    <td style="width:100px !important;">{{request.orderNo}}</td>
                    <td style="width:95px !important">{{fomatpaymentstate(request.paymentState)}}</td>
                    <td class="status" style="width:120px !important">{{formatrequestStatus(request.requestStatus)}}</td>
                    <td style="width:120px !important">{{serviceType[index]}}</td>
                    <td style="width:132px !important">{{formatcertype(request.requestCertType)}}</td>
                    <td  class="cerName">{{request.esignCerName}}</td>
                    <td style="width:160px !important">{{request.buyerName}}</td>
                    <td style="width:150px !important">{{request.buyerPhone}}</td>
                    <td style="width:100px !important">{{request.staffCode}}</td>
                    <td style="width:186px !important">{{formatIsReceivedProfile(request.isReceivedProfile)}}</td>
                    <td style="width:150px !important">{{request.certQuantity}} chứng thư</td>
                    

                  </tr>

                 
                </tbody>
              </table>
             
            </div>
            
          </div>
        </div>
</template>
<script>
import axios from "axios"
export default ({
  props:
  ["indexPage","pageSize","requests"],
  watch:{
    showFeatureState(){
      this.$emit("showFeature",this.showFeatureState)
    }
  },
 
  updated(){
    //set color for text
    //arthor:NDThang(15/03/2022)
    var statuss = document.getElementsByClassName("status")
    for (const status of statuss) {
      if(status.innerHTML =='Chưa nộp' || status.innerHTML =='Duyệt yêu cầu'){
        status.style.color = "#1C941C"
      }
      if(status.innerHTML =='Cấp chứng thư thất bại' || status.innerHTML =='Từ chối yêu cầu'){
        status.style.color = "red"
      }
      if(status.innerHTML =='Xác nhận từ khách hàng' || status.innerHTML =='Chờ duyệt'){
        status.style.color = "rgb(27, 86, 181)"
      }
    }



    for (const request of this.requests) {
      if(request.serviceId)
      {
      
      var respond
      axios.get(`https://localhost:44309/api/v1/requests/service/${request.serviceId}`)
      .then((res)=>{
      
        respond = res.data
         switch (respond) {
        case 0:
          this.serviceType.push("Tổ chức")
          break;
          
        case 1:
          this.serviceType.push("Cá nhân")
          break;
          
        case 2:
          this.serviceType.push("Cá nhân thuộc tổ chức")
          break;
          
        default:
          this.serviceType.push(" ")
          break;
        }
      })
     
      }else{
        this.serviceType.push(" ")
        
      }
      
    }
  },
  created(){
    
    
  },
  methods: {
    //checkchild
    checkChiled(){
      var dem =0
      var checks =document.getElementsByClassName("checks")
      for (const check of checks) {
        if(check.checked){
          dem++
        }
      }
      if(dem > 0){
        this.showFeatureState =1
      }
      else{
        this.showFeatureState =0
      }
    },
    //doublecli'ck table row
    dblclickTableRow(request){
      
      var urlDetail

      axios.get(`https://localhost:44309/api/v1/requests/service/${request.serviceId}`)
      .then((res)=>{
        this.serviceState = res.data
        console.log(this.serviceState)
        switch (this.serviceState) {
        case 0:
          urlDetail = `http://localhost:8080/detail-orgnization?id=${request.requestId}`
          break;
        case 1:
          urlDetail = `http://localhost:8080/detail-personal?id=${request.requestId}`
          break;
        case 2:
          urlDetail = `http://localhost:8080/detail-personal-orgnization?id=${request.requestId}`
          break;
        default:
          break;
        }
        window.location.href = urlDetail
      
        

      })
      
      
      
    },
    
    
    //format trạng thái nộp bản cứng
    formatIsReceivedProfile(value)
    {
      switch (value) {
        case 2:
          value = "Đã nộp"
          break;
        case 3:
          value = "Đã nộp"
          break;
      
        default:
          value="Chưa nộp"
          break;
      }
      return value
    },
    //format trạng thái hồ sơ
    formatrequestStatus(value){
      switch (value) {
        case 0:
          value = "Chưa nộp"
          
          break;

          case 1:
          value = "Đang xử lý"
          
          break;

          case 2:
          value = "Chờ duyệt"
          
          break;

          case 3:
          value = "Duyệt yêu cầu"
          
          break;

          case 4:
          value = "Từ chối yêu cầu"
          
          break;

          case 5:
          value = "Xác nhận từ khách hàng"
          
          break;

          case 6:
          value = "Cấp chứng thư thành công"
          
          break;

          case 7:
          value = "Cấp chứng thư thất bại"
          
          break;

          case 8:
          value = "Đã thu hồi chứng thư"
          
          break;
      
        default:
          break;
      }
      return value

    },
    //format loại sản phẩm
    formatcertype(value){
      switch (value) {
        case 1:
          value ="Remote signing"
          break;

          case 2:
          value ="USB Token"
          break;
          case 0:
          value ="USB Token"
          break;
      
        default:
          break;
      }
      return value
    },
    //format trạng thái thanh toán
    fomatpaymentstate(value){
     if(value ==0)
     {
       return "Chưa thanh toán"
     }
     else{
       return "Đã thanh toán"
     }
    },
    //get time in date
    GetTimeInDate(value){
      var date = new Date(value)
      var hours = date.getHours()
      var minutes = date.getMinutes()
      if(hours<10){
        hours = "0" +hours
      }
      if(minutes<10){
        minutes = "0" +minutes
      }
      


      if(hours < 12){
        return `${hours}:${minutes} AM`
      }else{
        hours = hours - 12
        if(hours<10){
        hours = "0" +hours
      }
        return `${hours}:${minutes} PM`
      }
    },
    //format date
    formatdate(value){
      console.log(1)
      var date = new Date(value)
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      if(month <10){
        month = "0" + month
      }
      var day = date.getDate()
      if(day<10){
        day = "0" +day
      }
      
      return `${day}/${month}/${year}`
    },
    //custom check for parent check
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
      this.checkChiled()
    },
    

    
  },
  data() {
    return {
      showFeatureState:0,
      detailRequest:null,
      serviceState:0,
      serviceType:[],

    }
  }
})
</script>

<style scoped>
@import url(../../css/base/BaseTable.css);
</style>