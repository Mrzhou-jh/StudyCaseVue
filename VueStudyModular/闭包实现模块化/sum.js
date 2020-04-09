var info = "哈哈哈";
var msg = "嘿嘿嘿";
var sumobj = (function () {
    var obj = {};
    obj.msg = "hahaha";
    obj.sum = function (num1, num2) {
        return num1 + num2;
    };
    return obj;
})();
