<template>
    <div class="feature">
        <div style="display:flex;">
            <button class="feature-create-request button accept isAccepted" disabled style="padding-right:20px !important;">
                Bàn giao
            </button>
            <button class="feature-accept-request button isAccepted accept" disabled style="padding-left:12px;">
                Nhận đủ hồ sơ
            </button>

            <button class="feature-denied-request button isAccepted KDDenied" disabled style="padding-left:12px">
                KD Huỷ đơn
            </button>
            <button class="feature-denied-request button isAccepted KTDenied" disabled style="padding-left:12px">
                KT Huỷ đơn
            </button>
            
        </div>
        

        <div class="feature-button" >
            <button class="feature-button-refresh" @click="refresh()">

            </button>
            <button class="feature-button-setting">
                
            </button>
            <button class="feature-button-export" style="margin-right:0px !important" @click="exportExcelFile()">
                
            </button>
        </div>
    </div>
</template>
<script>

export default ({
    methods:{
        refresh(){
            this.$emit("refresh",null)
        },
        exportExcelFile(){
        }
    }
})
</script>

<style scoped>
@import url(../../css/layout/TheFeature.css);
</style>