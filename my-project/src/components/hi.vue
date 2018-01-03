<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if='isLogin'>hello Vue</div>
    <div v-else>bye Vue</div>
    <div v-show='isLogin'>哈哈哈</div>
    <span v-bind:title="msg">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hi Vue'+ new Date().toLocaleString(),
      isLogin:true,

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
