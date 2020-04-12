<template>
  <div>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <img slot="tbItemImg" src="./assets/img/sun-smile-glasses-icon_128.png" alt="">
      <img slot="tbItemImgActive" src="./assets/img/logo_h.png" alt="">
      <div slot="tbItemText">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category"> 
      <img slot="tbItemImg" src="./assets/img/sun-smile-glasses-icon_128.png" alt="">
      <img slot="tbItemImgActive" src="./assets/img/logo_h.png" alt="">
      <div slot="tbItemText">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart"> 
      <img slot="tbItemImg" src="./assets/img/sun-smile-glasses-icon_128.png" alt="">
      <img slot="tbItemImgActive" src="./assets/img/logo_h.png" alt="">
      <div slot="tbItemText">购物车</div></tab-bar-item>
    <tab-bar-item path="/profile"> 
      <img slot="tbItemImg" src="./assets/img/sun-smile-glasses-icon_128.png" alt="">
      <img slot="tbItemImgActive" src="./assets/img/logo_h.png" alt="">
      <div slot="tbItemText">我的</div>
    </tab-bar-item>
  </tab-bar>
  <router-view></router-view>
</div>
</template>
  <script>
    import TabBar from "./components/tabbar/TabBar.vue";
    import TabBarItem from "./components/tabbar/TabBarItem.vue";
    export default {
      name: "App",
      components: { TabBar,TabBarItem }
    };
  </script>
  <style>
    @import "./assets/css/base.css";
  </style>
</template>
