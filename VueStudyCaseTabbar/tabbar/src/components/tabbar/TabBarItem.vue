<template>
  <div class="tbItem" @click="chuangshow">
    <div class="tbItemImg" v-if="!isActive"><slot name="tbItemImg"></slot></div>
    <div class="tbItemImgActive" v-else>
      <slot name="tbItemImgActive"></slot>
    </div>
    <div class="tbItemText" :style="activeTextColor">
      <slot name="tbItemText"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: "orange"
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeTextColor() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    chuangshow() {
      console.log("事件触发");
      this.$router.push(this.path);
    }
  }
};
</script>
<style>
.tbItem {
  font-size: 12px;
}
.tbItemImg :first-child,
.tbItemImgActive :first-child {
  width: 25px;
}
.active {
  color: orange;
}
</style>
