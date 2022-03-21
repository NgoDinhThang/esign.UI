<template>
    <div class="input-file" v-bind:style="{width:withInputFile+'px',height:heightInputFile+'px'} " @click="MClick()">
        
        <div class="input-file-icon">
            {{titleInputFile}}
        </div>
        <input type="file" class="m-file-attach" >
        
    </div>
</template>
<script>
export default {
    props:
    ["withInputFile","heightInputFile","titleInputFile","indexFile"],
    methods:{
        MClick(){
            document.getElementsByClassName("m-file-attach")[this.indexFile].click()
        }
    }
    
}
</script>
<style scoped>
@import url(../../css/base/BaseInputFile.css);
</style>