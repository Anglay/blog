<template>
  <div class="header">
      <router-link to="/"><span>返回</span></router-link>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.header{
    height: 40px;
    padding: 0 10px;
    border-bottom:1px solid  #e1e4e8;
    span{
        display: inline-block;
        height: 40px;
        line-height: 40px;
        padding-left: 25px;
        color: #333;
        cursor: pointer;
        font-size: 14px;
        background: url(../../assets/icon_back.png) no-repeat center left;
    }
}
</style>
