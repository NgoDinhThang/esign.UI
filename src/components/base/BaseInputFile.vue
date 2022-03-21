<template>
    <div class="input-file" v-bind:style="{width:withInputFile+'px',height:heightInputFile+'px'} " @click="MClick()">
        
        <div class="input-file-icon">
            {{titleInputFile}}
        </div>
        <input type="file" class="m-file-attach" @change="onChangeInputFile" >

        <div id="preview">
            <img v-if="url" :src="url" v-show="isPreviewShow" />
        </div>
        
    </div>
</template>
<script>
export default {
    props:
    ["withInputFile","heightInputFile","titleInputFile","indexFile"],
    methods:{
        MClick(){
            document.getElementsByClassName("m-file-attach")[this.indexFile].click()
        },
        onChangeInputFile(){
            const file = document.getElementsByClassName("m-file-attach")[this.indexFile].files[0]
            this.url = URL.createObjectURL(file);
            this.isPreviewShow = true
        }
    },
    data(){
        return{
            url:null,
            isPreviewShow:false
        }
    }
    
}
</script>
<style scoped>
@import url(../../css/base/BaseInputFile.css);
</style>