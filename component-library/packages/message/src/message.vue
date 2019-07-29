<template>
  <div class="message">
    <el-row class="message-test">
      <el-col :span="12" class="message-row"><p class="text">hello{{message}}</p></el-col>
      <el-col :span="6">
        <img src="./logo.png" alt="">
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name:'v-message',
  props:{
    message:String
  }
}
</script>

