<template>
        <div class="m-combobox"  v-bind:style="{width:withCombobox+'px'}">
        <div class="m-combobox-value-default-detail" @click="ShowOption()" v-bind:style="{backgroundPosition:bgrPosition+'px center'}" >
            {{defaultValue}}
        </div>
        <div class="m-combobox-value-option-detail" v-show="isShow" v-bind:style="{width:withOption+'px'}">
            <div v-for="value in values " :key="value" @click="SelectValue()" >
                {{value}}
            </div>
        </div>
    </div>
</template>
<script>
export default ({
    props:
    ["withCombobox","bgrPosition","state","values","defaultValue","withOption"],
    data(){
        return {
            
        isShow:false
        
        }
        },
        methods:{
            ShowOption(){
            this.isShow = !this.isShow
            var me = this
            var comboboxs = document.getElementsByClassName("m-combobox-value-option-detail")
            for (let i = 0; i < comboboxs.length; i++) {
                if(i != me.state){
                    comboboxs[i].style.display = "none"
                }
                
            }

            
        },
         SelectValue(){
            var me = this
            document.getElementsByClassName("m-combobox-value-default-detail")[me.state].innerHTML = event.currentTarget.innerHTML
            this.$emit("selectedValue",event.currentTarget.innerHTML)

            this.isShow = false
        }
        }
        

})
</script>

<style  scoped>
.m-combobox {
    height: 32px;
    position: relative;
}

.m-combobox-value-option-detail {
    position: absolute;
    width: calc(100% + 70px);
    border: 1px solid rgb(224, 224, 224);
    margin-top: -28px;
    background-color: white;
    border-radius: 5px;
    font-size: 14px;
    max-height: 300px;
    overflow: scroll;
    
}

.m-combobox-value-option-detail div {
    border-bottom: 0.5px solid rgb(224, 224, 224);
    padding-left: 5px;
    height: 30px;
    line-height: 30px;
    /* display: inline-block; */
}

.m-combobox-value-option-detail div:hover {
    cursor: pointer;
        color: #258FFF;
    background: #efeff6;
}

.m-combobox-value-default-detail {
    border: 1px solid rgb(224, 224, 224);
    background-color: white;
    background-image: url(https://cdn-icons-png.flaticon.com/512/60/60995.png);
    background-size: 14px 14px;
    background-repeat: no-repeat;
    
    border-radius: 5px;
    font-size: 13px;
    line-height: 30px;
    height: 30px !important;
    padding-left: 5px;
    padding-right: 20px;
    text-overflow: ellipsis !important;
    overflow: hidden;
}

.m-combobox-value-default-detail:hover:hover {
    cursor: pointer;
}

</style>