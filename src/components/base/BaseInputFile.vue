<template>
<div class="">
    <div class="input-file" v-bind:style="{width:withInputFile+'px',height:heightInputFile+'px'} " @click="MClick()" v-show="isinputfileShow">
        
        <div class="input-file-icon" >
            {{titleInputFile}}
        </div>
        <input type="file" class="m-file-attach" @change="onChangeInputFile" accept="image/*" >

       
        
    </div>
     <div id="preview" >
            <img v-if="url" :src="url" v-show="isPreviewShow" v-bind:style="{width:widthPreview+'px',height:heightPreview+'px'} " />
        </div>
</div>
    
</template>
<script>
export default {
    props:
    ["withInputFile","heightInputFile","titleInputFile","indexFile","widthPreview","heightPreview","objectID"],
    methods:{
        
        MClick(){
            document.getElementsByClassName("m-file-attach")[this.indexFile].click()
        },
        onChangeInputFile(){
            const file = document.getElementsByClassName("m-file-attach")[this.indexFile].files[0]
            this.url = URL.createObjectURL(file);
            this.isPreviewShow = true,
            this.isinputfileShow = false
        },
        
    },
    watch:{
        objectID(){
            if(this.objectID){
                this.url = `https://localhost:44309/api/v1/files/${this.objectID}`;
                this.isPreviewShow = true,
                this.isinputfileShow = false
            }
        }
    },
    data(){
        return{
            url:null,
            isPreviewShow:false,
            isinputfileShow:true
        }
    }
    
}
</script>
<style scoped>
@import url(../../css/base/BaseInputFile.css);
#preview{
    position: relative;
}
</style>