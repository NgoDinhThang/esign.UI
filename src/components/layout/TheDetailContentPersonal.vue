<template>
<div class="detail" style="background-color:#E5E5E5">
    <div class="Detail-content">
        <div class="Detail-content-cerregist">
            <h5>ĐƠN ĐĂNG KÝ CHỨNG THƯ SỐ</h5>
            <div class="detail-content-cerregist-postfile">
                Tải file lên
                <div class="input" style="margin-right: 40px;">
                    <inputFile :withInputFile="500" :heightInputFile="32" :widthPreview="500" :heightPreview="400" :titleInputFile= "titleInputFile[0]" :indexFile="0"/>
                </div>
                
            </div>
        </div>
        <div class="Detail-content-hspl">
            <div style="margin-left:15px;border-bottom : 1px solid #ccc">
                <h5 style="color: #3d405c;margin-left:15px">HỒ SƠ PHÁP LÝ</h5>
                <div class="detail-content-hspl-detail" style="font-size: 13px;margin-left:15px">
                <span>Loại hồ sơ: <span style="color:red">*</span></span>
                <comboboxDetail v-bind:withCombobox="170" :bgrPosition="148" :state="0" :values= "values_lhs" :defaultValue= "defaultValue[0]"/>
                </div>
            </div>
            <div class="detail-content-hspl-info">
                <div style="width: 50%;border-right: 1px solid #ccc; display:flex">
                    <div class="detail-content-hspl-info-orgnization">
                    <h6>Cá nhân</h6>
                    <div class="" style="font-size: 13px;margin-top:20px">
                        <div class="detail-content-hspl-detail" >
                            <span>Giấy chứng thực: <span style="color:red">*</span></span>
                            <comboboxDetail v-bind:withCombobox="370" :bgrPosition="342" :withOption="375" :state="1"  :values= "value_gct"  :defaultValue= "defaultValue[1]"/>
                        </div>
                        <div class="detail-content-hspl-detail" >
                            <span>Ảnh chứng thực </span>
                            <div class="child">
                                Mặt trước
                                <inputFile :withInputFile="180" :heightInputFile="28" :widthPreview="170" :heightPreview="90" :titleInputFile= "titleInputFile[0]" style="margin-top:4px" :indexFile="1"/>
                            </div>

                             <div class="child" style="margin-left:10px">
                                Mặt sau
                                <inputFile :withInputFile="180" :heightInputFile="28" :widthPreview="170" :heightPreview="90" :titleInputFile= "titleInputFile[0]" style="margin-top:4px" :indexFile="2"/>
                            </div>
                        </div>
                        <div class="detail-content-hspl-detail" >
                            <span>Họ và tên: <span style="color:red">*</span></span>
                            <input type="text" class="taxcode" placeholder="Nhập họ và tên" style="width:370px" :value="detailRequest.personalInfo.personalName" >
                        </div>
                        <div class="detail-content-hspl-detail" >
                            <span>Số hiệu giấy tờ: <span style="color:red">*</span></span>
                            <input type="text" class="taxcode" placeholder="Nhập số hiệu giấy tờ" style="width:370px" :value="detailRequest.personalInfo.documentNumber" >
                        </div>

                        <div class="detail-content-hspl-detail"  >
                            <span>Ngày cấp: <span style="color:red">*</span></span>
                            <input type="date" class="input-date"  style="width:370px" :value="formatdate(detailRequest.personalInfo.documentFromDate)" >
                        </div>

                        <div class="detail-content-hspl-detail" >
                            <span>Có giá trị đến <span style="color:red">*</span></span>
                            <input type="date" class="input-date" style="width:370px"  :value="formatdate(detailRequest.personalInfo.documentToDate)" >
                        </div>
                        

                        
                    </div>

                    </div>
                <div class="detail-content-hepl-info-owner" style="font-size:13px">

                        <div class="detail-content-hspl-detail" style="margin-top:50px"  >
                            <span>Số điện thoại: <span style="color:red">*</span></span>
                            <input type="text" class="taxcode" style="width:365px" placeholder="Nhập trùng với SĐT chủ sở hữu chứng thư trên đơn đăng ký" :value="detailRequest.personalInfo.mobile" >
                        </div>

                        <div class="detail-content-hspl-detail"  >
                            <span>Email: <span style="color:red">*</span></span>
                            <input type="text" class="taxcode" style="width:365px" placeholder="Nhập trùng với Email chủ sở hữu chứng thư trên đơn đăng ký" :value="detailRequest.personalInfo.email"  >
                        </div>

            


                        <div class="detail-content-hspl-detail" >
                            <span>Tỉnh/thành phố: <span style="color:red">*</span></span>
                            <comboboxDetail id="province" @selectedValue= "selectedprovince" :withOption="365" v-bind:withCombobox="365" :bgrPosition="342" :state="2" :values= "valueProvince" :defaultValue= "defaultValue[2]" style="z-index:100;"/>
                        </div>

                        <div class="detail-content-hspl-detail" >
                            <span>Quận/huyện: <span style="color:red">*</span></span>
                            <comboboxDetail v-bind:withCombobox="365" :bgrPosition="342" :withOption="365" :state="3" :values= "valueDistrict" :defaultValue= "defaultValue[3]" style="z-index:99;"/>
                        </div>

                        <div class="detail-content-hspl-detail" >
                            <span>Địa chỉ: <span style="color:red">*</span></span>
                            <textarea class="text-area" style="width:365px" ></textarea>
                        </div>

                    </div>
                    
                        





                </div>
            </div>
            

        </div>
    </div>
    <div class="Detail-contact">
        <div class="account" style="font-size:13px">
            <h5 style="width:200px">THÔNG TIN TÀI KHOẢN</h5>
            <div style="width:650px !important">Hệ thống sẽ cấp chứng thư số cho tài khoản mà bạn khai báo, vui lòng nhập chính xác thông tin khách hàng. KHÔNG NHẬP THÔNG TIN CỦA NHÂN VIÊN KINH DOANH.</div>
        
        <div class="account-content">
            <div class="account-content-info">
                <div class="account-name">Tài khoản 1</div>
                <div>
                    <label>Họ và đệm:</label>
                    <input type="text" :value="defaultRequets(detailRequest.listUserRemoteSigning)[0].surname">
                </div>
                 <div>
                    <label>Tên:</label>
                    <input type="text" :value="defaultRequets(detailRequest.listUserRemoteSigning)[0].name">
                </div>
                 <div>
                    <label>Số điện thoại:</label>
                    <input type="text" :value="defaultRequets(detailRequest.listUserRemoteSigning)[0].phoneNumber">
                </div>
                 <div>
                    <label>Email:</label>
                    <input type="text" :value="defaultRequets(detailRequest.listUserRemoteSigning)[0].email">
                </div>
            </div>

            
        </div>
        
        </div>
    </div>
    <div class="detail-footer">
        <div class="detail-footer-first">
            <div class="detail-footer-note">
                <h5 style="width:200px">GHI CHÚ</h5>
                <baseButton title="Thêm"/>
            </div>
        </div>
        <div class="detail-footer-second">
            <div class="detail-footer-info">
                <h5 style="width:200px">THÔNG TIN LIÊN QUAN</h5>
                <baseButton title="Đánh trùng HS"/>
            </div>
        </div>

        <div class="detail-footer-third">
            <div class="detail-footer-file">
                <h5 style="width:200px">TỆP ĐÍNH KÈM</h5>
                <div class="icon-upload-attach" title="Tải tệp đính kèm" @click="uploadFile()">
                    
                </div>
                <input type="file" id="file-attach">
            </div>
        </div>
        
    </div>
</div>
    

</template>
<script>
import baseButton from "../base/BaseButton.vue"
import inputFile from "../base/BaseInputFile.vue"
import comboboxDetail from "../base/BaseComboboxDetail.vue"
import axios from "axios"

export default ({
    components:{
        inputFile,comboboxDetail,baseButton
    },
    methods:{
        selectedprovince(keyword){
            for (const province of this.objectProvince) {
                if(`"${keyword}"`==`" ${province.name} "`)
                {
                    this.valueDistrict = province.districts.map(obj=>obj.name)
                }
            }
        },
        uploadFile(){
            document.getElementById("file-attach").click()
        },
        defaultRequets(value){
            if(!value){
                return ["Default"]
            }else{
                return value
            }
        },
        formatdate(value){
            var date = new Date(value)
            var month = date.getMonth()+1
            if(month < 10){
                month = "0" + month
            }
            var day = date.getDay()
            if(day < 10){
                day = "0" + day
            }
            return date.getFullYear()+'-'+month+'-'+day;
        }
    },
    created(){
        axios.get(`https://provinces.open-api.vn/api/?depth=2`)
      .then((respond)=>{
          this.objectProvince = respond.data
          this.valueProvince = this.objectProvince.map(obj=>obj.name)
      })
        var id = window.location.search.substring(1).slice(3)
        axios.get(`https://localhost:44309/api/v1/requests/detail/${id}`)
      .then((res)=>{
        this.detailRequest = res.data
        if(this.detailRequest.personalInfo)
        {
            this.defaultValue[2] = this.detailRequest.personalInfo.provinceName
            
            this.defaultValue[3] = this.detailRequest.personalInfo.districtName
        
        }
        else{
            this.detailRequest.enterPriseInfo = " "
        }
        this.isHaveAccountRemote = this.detailRequest.isHaveAccountRemote
        
        this.$emit("Account",this.detailRequest.caUserName)

      })
      .catch((err)=>{
          console.log(err)
          alert("Hồ sơ này chưa được hoàn thành")
      })
    }
    ,
    data(){
        return {
            values_lhs:
            ["Bản cứng công chứng","Bản mềm"],
            value_gct:
            ["Chứng minh thư nhân dân","Căn cước công dân","Hộ chiếu"],
            defaultValue:
            ["--Chưa xác định--","Chứng minh thư nhân dân","Chọn tỉnh/thành phố","Chọn quận/huyện","Chứng minh nhân dân"],
            titleInputFile:
            ["Click để tải ảnh lên"],
            indexFile:0,
            ispreviewShow:false,
            url:null,
            value_tp:null,
            detailRequest:null,
            isHaveAccountRemote:true,
            valueProvince:null,
            valueDistrict:null,
            objectProvince:null


        }
    }
})
</script>
<style scoped>
    @import url(../../css/layout/TheDetailContent.css);
</style>