<template>
    <div class="m-combobox"  >
        <div class="m-combobox-value-default" @click="ShowOption()" >
            {{defaultValue}}
        </div>
        <div class="m-combobox-value-option" v-show="isShow" >
            <div v-for="value in values " :key="value" @click="SelectValue()" >
                {{value}}
            </div>
        </div>
    </div>
</template>
<script scope>

export default ({
    props:[
        "values","state","defaultValue"
    ],
    mounted(){


    
},
      
    methods: {
        ShowOption(){
            this.isShow = !this.isShow
            var me = this
            var comboboxs = document.getElementsByClassName("m-combobox-value-option")
            for (let i = 0; i < comboboxs.length; i++) {
                if(i != me.state){
                    comboboxs[i].style.display = "none"
                }
                
            }

            
        },
        SelectValue(){
            var me = this
            document.getElementsByClassName("m-combobox-value-default")[me.state].innerHTML = event.currentTarget.innerHTML
            this.isShow = false
        }
    },
    data() {
        return {
            isShow:false,
            
        }
    },
})
</script>

<style scoped>
@import url(../../css/base/BaseCombobox.css);
</style>