<template>
    <div class="m-button">
        <i class="fas fa-plus" style="padding-right:5px;"></i>
        {{title}}
    </div>

</template>
<script>

export default ({
    props:
    ["title"]
})
</script>
<style scoped>
.m-button{
    background-color: rgb(37, 143, 255);
    border-radius: 5px;
    min-width: 50px;
    height: 30px;
    display: flex;
    align-items: center;
    color: white;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 13px;
}
.fa-plus{
    font-size: 12px;
}
.m-button:hover{
    cursor:pointer
}
</style>
