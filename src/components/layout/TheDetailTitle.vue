<template>
<div>
    <div class="Detail-title">
        <div class="Detail-title-right">
            <div class="Detail-title-text-previous" @click="previousHome()"></div>
        <div class="Detail-title-text">
            
            <div class="Detail-title-text-title" style="font-size:18px">
                CHI TIẾT HỒ SƠ
            </div>
            <div class="Detail-title-text-info-user" style="font-size:13px">
                <div class="account" style="">
                    Tài khoản: <b>{{detailRequest.buyerName}}</b>
                </div>
                <div class="detail-status">Chưa nộp hồ sơ</div>
            </div>
        </div>
        </div>
        
        <div class="Detail-title-user">
            <div class="Detail-title-user-avt">
                <img src="https://testesignwebsiteadminrd.misa.com.vn/icon/1x/Ico-User.png" style="width:28px;height:28px" alt="">
            </div>
            <span style="font-size:12px;color:#656464;margin-left:5px">Xin chào, <span style="color:#268FFB">B24-0037</span></span>
            <i class="fa fa-angle-down fs-12 user-icon" style="margin-top:0px"></i>
        </div>
        
    </div>
    <div class="detail-header">
        <div class="detail-header-text" >
            <div class="detail-header-text-producttype">
                Loại sản phẩm:<span>Remote signing</span>
            </div>

            <div class="detail-header-text-producttype" style="margin-left:15px">
                Loại chứng thư:<span>Chứng thư số</span>
            </div>


        </div>
        <div class="detail-header-button">
            <button class="edit-fast">
                Sửa nhanh
            </button>
            <button class="edit">
                Sửa
            </button>
            <button class="sign white-color">
                Ký số
            </button>
            <button class="confirm white-color">
                Xác minh
            </button>
        </div>

    </div>
    <div class="detail-navbar">
        
        <div class="navbar-requestInfo">
            Thông tin hồ sơ
        </div>
        <div class="navbar-contact">
            Thông tin thuê bao
        </div>  
        <div class="navbar-history">
            Lịch sử
        </div>

    </div>
</div>
</template>
<script>
export default ({
    components:{
    },
    props:
    ["detailRequest"],
    methods:{
        previousHome(){
            console.log("detailtitle")
            this.$emit("previous",null)
        }
    }
})
</script>
<style scoped>
.detail-navbar div{
    background-color: #F1F1F1;
    font-size: 14px;
    height: 38px;
    margin-right: 5px;
    padding-left: 80px;
    padding-right: 80px;
    border-radius: 5px 5px 0px 0px;
    line-height: 38px;
    font-weight: 700;
}
.navbar-requestInfo{
    background-color: white !important;
    color: rgb(91, 20, 155);
    
}
.detail-navbar{
    height: 50px;
    background-color: #E5E5E5;
    border-bottom: 1px solid #ccc;
    display: flex;
    padding-top: 10px;
}
.confirm{
    background-color: rgb(46, 197, 81) !important;
    border: 1px solid rgb(46, 197, 81) !important;
}
.sign{
    background-color: rgb(37, 143, 255) !important;
    border: 1px solid rgb(37, 143, 255) !important;
}
.white-color{
    color: white;
    padding-left: 10px;
    padding-right: 10px;
}

.edit-fast{
    color: rgb(107, 12, 205);
}
.detail-header-text-producttype span{
    font-weight: 700;
}
.detail-header-text{
    display: flex;
    font-size: 15px;
    font-weight: 500;
    color: #61576B;
}
.detail-header-button button{
    border: 1px solid #E6E6F2;
    background-color: white;
    margin-left: 8px;
    border-radius: 5px;
    
}
.detail-header{
    height: 70px;
    border-bottom: 1px solid rgb(36, 36, 36);
    padding: 10px 0px 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.Detail-title-text-previous{
    height: 60px;
    width: 35px;
    background-image: url(https://testesignwebsiteadminrd.misa.com.vn/icon/2x/ico-right@2x.png);
    background-repeat: no-repeat;
    background-position: center center;
    margin-left: 25px;
    background-size: 60%;
}
.account{
    border-right:1px solid rgb(162, 134, 191);
    height:20px;
    line-height: 20px;
    padding-right: 8px;
}
.Detail-title-right{
    display: flex;
}
.detail-status{
    height:20px;
    line-height: 20px;
    padding-left: 12px;
    color: rgb(11, 195, 57);
}
.Detail-title-text-title{
    color: #212121;
    font-weight: 700;
}
.Detail-title-text{
    margin-left: 5px;
    display: grid;
}
.Detail-title-text-info-user{
    display: flex;
}
.Detail-title{
    height: 60px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #E6E6F2;
}
.Detail-title-user{
    display: flex;
    align-items: center;
}
.Detail-title-text-previous:hover{
    cursor: pointer;
}
</style>
