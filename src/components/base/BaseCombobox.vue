<template>
    <div class="m-combobox">
        <div class="m-combobox-value-default" @click="ShowOption()">
            Tất cả
        </div>
        <div class="m-combobox-value-option" v-show="isShow" >
            <div v-for="value in values " :key="value" @click="SelectValue()" >
                <span>{{value}}</span>
            </div>
        </div>
    </div>
</template>
<script scope>

export default ({
    props:[
        "values","state"
    ],
    methods: {
        ShowOption(){
            this.isShow = !this.isShow
        },
        SelectValue(){
            var me = this
            document.getElementsByClassName("m-combobox-value-default")[me.state].innerHTML = event.currentTarget.innerHTML
            this.isShow = false
        }
    },
    data() {
        return {
            isShow:false
            
        }
    },
})
</script>

<style scoped>
@import url(../../css/base/BaseCombobox.css);
</style>>