<template>
    <div class="content">
        <v-header></v-header>
        project
    </div>
</template>
<script>
import header from "@/components/common/header"
export default {
    name: "project",
    components: {
        "v-header": header
    }
}
</script>
<style lang="less" scoped>
.content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 5px;
    background: #fff;
    border-radius: 3px;
    overflow: hidden;
}
</style>
