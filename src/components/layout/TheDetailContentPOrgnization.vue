<template>
<div class="detail" style="background-color:#E5E5E5">
    <div class="Detail-content">
        <div class="Detail-content-cerregist">
            <h5>ĐƠN ĐĂNG KÝ CHỨNG THƯ SỐ</h5>
            <div class="detail-content-cerregist-postfile">
                Tải file lên
                <div class="input" style="margin-right: 40px;">
                    <inputFile :withInputFile="500" :heightInputFile="47" :titleInputFile= "titleInputFile[0]" :indexFile="0"/>
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
                <div style="width: 50%;border-right: 1px solid #ccc;">
                    <div class="detail-content-hspl-info-orgnization">
                    <h6>Tổ Chức</h6>
                    <div class="" style="font-size: 13px;margin-top:20px">
                        <div class="detail-content-hspl-detail" >
                            <span>Giấy chứng thực: <span style="color:red">*</span></span>
                            <comboboxDetail v-bind:withCombobox="390" :bgrPosition="352" :state="1" :values= "value_gct" :defaultValue= "defaultValue[1]"/>
                        </div>
                        <div class="detail-content-hspl-detail" >
                            <span>Ảnh chứng thực: <span style="color:red">*</span></span>
                            <inputFile :withInputFile="390" :heightInputFile="32" :titleInputFile= "titleInputFile[1]" :indexFile="1" />
                        </div>
                        <div class="detail-content-hspl-detail" >
                            <span>Mã số thuế: <span style="color:red">*</span></span>
                            <input type="text" class="taxcode" placeholder="Nhập mã số thuế hoặc mã QHNS" >
                        </div>
                        <div class="detail-content-hspl-detail" >
                            <span>Mã số thuế: <span style="color:red">*</span></span>
                            <textarea class="text-area"></textarea>
                        </div>

                        <div class="detail-content-hspl-detail" >
                            <span>Tỉnh/thành phố: <span style="color:red">*</span></span>
                            <comboboxDetail v-bind:withCombobox="390" :bgrPosition="352" :state="2" :values= "value_tp" :defaultValue= "defaultValue[2]"/>
                        </div>

                        <div class="detail-content-hspl-detail" >
                            <span>Quận/huyện: <span style="color:red">*</span></span>
                            <comboboxDetail v-bind:withCombobox="390" :bgrPosition="352" :state="3" :values= "value_tp" :defaultValue= "defaultValue[3]"/>
                        </div>

                        <div class="detail-content-hspl-detail" >
                            <span>Địa chỉ: <span style="color:red">*</span></span>
                            <input type="text" class="taxcode" placeholder="" value="Chọn quận/huyện, Chọn tỉnh/thành phố, Việt Nam" >
                        </div>
                    </div>
                    
                    
                </div>
                
                </div>
                <div class="detail-content-hepl-info-owner" style="font-size:13px">
                        <h6 style="width:200px">Người sở hữu chứng thư</h6>
                        <div class="" style="margin-top:20px">
                            <div class="detail-content-hspl-detail" >
                            <span>Giấy chứng thực: <span style="color:red">*</span></span>
                            <comboboxDetail v-bind:withCombobox="365" :bgrPosition="340" :state="4" :values= "value_gct_right" :defaultValue= "defaultValue[4]" :withOption="365"/>
                        </div>
                        <div class="detail-content-hspl-detail" >
                            <span>Ảnh chứng thực </span>
                            <div class="child">
                                Mặt trước
                                <inputFile :withInputFile="177" :heightInputFile="28" :titleInputFile= "titleInputFile[1]" style="margin-top:4px" :indexFile="2"/>
                            </div>

                             <div class="child" style="margin-left:10px">
                                Mặt sau
                                <inputFile :withInputFile="177" :heightInputFile="28" :titleInputFile= "titleInputFile[1]" style="margin-top:4px" :indexFile="3"/>
                            </div>
                        </div>
                        <div class="detail-content-hspl-detail" style="margin-top:4px" >
                            <span>Số hiệu giấy tờ: <span style="color:red">*</span></span>
                            <input type="text" class="taxcode" style="width:365px" placeholder="Nhập số hiệu giấy tờ" >
                        </div>

                        <div class="detail-content-hspl-detail" >
                            <span>Ngày cấp: <span style="color:red">*</span></span>
                            <input type="date" class="input-date"  >
                        </div>

                        <div class="detail-content-hspl-detail" >
                            <span>Có giá trị đến <span style="color:red">*</span></span>
                            <input type="date" class="input-date"  >
                        </div>

                        <div class="detail-content-hspl-detail"  >
                            <span>Họ và tên: <span style="color:red">*</span></span>
                            <input type="text" class="taxcode" style="width:365px" placeholder="Nhập họ tên"  >
                        </div>

                        <div class="detail-content-hspl-detail"  >
                            <span>Số điện thoại: <span style="color:red">*</span></span>
                            <input type="text" class="taxcode" style="width:365px" placeholder="Nhập số điện thoại" >
                        </div>

                        <div class="detail-content-hspl-detail"  >
                            <span>Email: <span style="color:red">*</span></span>
                            <input type="text" class="taxcode" style="width:365px" placeholder="Nhập Email"  >
                        </div>

                        <div class="detail-content-hspl-detail"  >
                            <span>Chức danh: <span style="color:red">*</span></span>
                            <input type="text" class="taxcode" style="width:365px" placeholder="Nhập chức danh"  >
                        </div>

                        <div class="detail-content-hspl-detail"  >
                            <span style="padding-right:10px">Hình ảnh giấy bổ nhiệm, chứng thực chức vụ: <span style="color:red">*</span></span>
                            <inputFile :withInputFile="365" :heightInputFile="32" :titleInputFile= "titleInputFile[0]" style="margin-top:4px" :indexFile="4"/>
                        </div>

                        <div class="detail-content-hspl-detail"  >
                            <span style="padding-right:10px">Hình ảnh văn bản cấp chứng thư cho cá nhân: <span style="color:red">*</span></span>
                            <inputFile :withInputFile="365" :heightInputFile="32" :titleInputFile= "titleInputFile[0]" style="margin-top:4px" :indexFile="5"/>
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
                    <input type="text">
                </div>
                 <div>
                    <label>Tên:</label>
                    <input type="text">
                </div>
                 <div>
                    <label>Số điện thoại:</label>
                    <input type="text">
                </div>
                 <div>
                    <label>Email:</label>
                    <input type="text">
                </div>
            </div>

            <div class="account-content-info" >
                <div class="account-name">Tài khoản 2</div>
                <div>
                    <label>Họ và đệm:</label>
                    <input type="text">
                </div>
                 <div>
                    <label>Tên:</label>
                    <input type="text">
                </div>
                 <div>
                    <label>Số điện thoại:</label>
                    <input type="text">
                </div>
                 <div>
                    <label>Email:</label>
                    <input type="text">
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

export default ({
    components:{
        inputFile,comboboxDetail,baseButton
    },
    methods:{
        uploadFile(){
            document.getElementById("file-attach").click()
        }
    }
    ,
    data(){
        return {
            values_lhs:
            ["Bản cứng công chứng","Bản mềm"],
            value_gct:
            ["Giấy chứng nhận đăng ký tổ chức","Giấy chứng nhận đầu tư","Quyết định thành lập phòng ban","Quyết định quy định về chức năng,nhiệm vụ,quyền hạn,cơ cấu tổ chức"],
            defaultValue:
            ["--Không xác định--","Giấy chứng nhận đăng ký tổ chức","Chọn tỉnh/thành phố","Chọn quận/huyện","Chứng minh nhân dân"],
            titleInputFile:
            ["Click chọn hoặc kéo thả ảnh vào đây","Click để tải ảnh lên"],
            indexFile:0,
            value_gct_right:
            ["Chứng minh thư nhân dân","Thẻ căn cước","Hộ chiếu"]


        }
    }
})
</script>
<style scoped>
    @import url(../../css/layout/TheDetailContent.css);
</style>