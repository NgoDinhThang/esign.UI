<template>
    <div class="Detail-title">
        <div class="Detail-title-right">
            <div class="Detail-title-text-previous"></div>
        <div class="Detail-title-text">
            
            <div class="Detail-title-text-title" style="font-size:18px">
                CHI TIẾT HỒ SƠ
            </div>
            <div class="Detail-title-text-info-user" style="font-size:13px">
                <div class="account" style="">
                    Tài khoản: <b>Ngô Đình Thắng</b>
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
</template>
<style scoped>
.Detail-title-text-previous{
    height: 60px;
    width: 35px;
    background-image: url(https://testesignwebsiteadminrd.misa.com.vn/icon/2x/ico-right@2x.png);
    background-repeat: no-repeat;
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
.Detail-title-text{
    margin-left: 0px;
    display: grid;
}
.Detail-title-text-info-user{
    display: flex;
}
.Detail-title{
    height: 60px;
    display: flex;
    justify-content: space-between;
}
.Detail-title-user{
    display: flex;
    align-items: center;
}
</style>
<script>
export default ({
    components:{
    }
})
</script>