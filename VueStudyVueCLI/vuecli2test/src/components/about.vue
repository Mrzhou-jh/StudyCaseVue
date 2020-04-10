<template>
  <div>
    <div>{{ msg }}</div>
    <button @click="tz">点击跳转</button>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return { msg: "这是关于我的组件-哈哈哈" };
  },
  methods: {
    tz() {
      this.$router.push("/");
    }
  }
};
</script>
