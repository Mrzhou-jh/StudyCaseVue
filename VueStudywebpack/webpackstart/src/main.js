require("./css/normal.css");
import App from "./vue/app.vue";
import Vue from "vue";
new Vue({
    el: "#app",
    template: "<App/>",
    components: {
        App,
    },
    data: {},
});
