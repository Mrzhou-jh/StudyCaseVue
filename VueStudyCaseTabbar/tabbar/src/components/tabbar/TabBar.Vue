<template>
  <div id="tabbar">
    <div id="tabbarItem">
      <slot>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBar"
};
</script>
<style>
#tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background-color: rgb(214, 213, 213);
}
#tabbarItem {
  display: flex;
}
#tabbarItem div {
  flex: 1;
  text-align: center;
}
</style>
