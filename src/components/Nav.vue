<template>
  <div class="me-nav">
    <el-row type="flex" :gutter="20" justify="center">
      <el-col :span="2">
        <div class="brand">
          <a href="#"><img src="../assets/me.png" height="61px"></a>
        </div>
      </el-col>
      <el-col :span="16">
        <el-menu :default-active="activeIndex" mode="horizontal">
          <el-menu-item index="1">Home</el-menu-item>
          <el-menu-item index="2">Post</el-menu-item>
          <el-menu-item index="3">About me</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  name: 'Test',
  data () {
    return {
      activeIndex: '1'
    }
  }
}
</script>

<style>
 .me-nav {
   min-width: 800px;
 }
</style>
