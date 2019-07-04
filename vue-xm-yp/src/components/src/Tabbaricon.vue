<template>
    <!-- TaBarIcon.vue -->
    <div class="page-foot">
        <img :src="focused?selectedImage:normalImage" alt="" class="imgstyle">
    </div>
</template>
<script>
export default {
    props:{
        focused:false,
        selectedImage:{default:""},
        normalImage:{default:""}
    }
}
</script>
<style>
    .imgstyle{
        height:30px;
    }
</style>
