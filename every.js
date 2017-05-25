/*
 * every() 方法测试数组的所有元素是否都通过了指定函数的测试。
 * 参数：(callback[value,index,arr])
 * 返回值：true/false
 * */

var arr = [1, 2, 3, 4, 5, 6];
var flag = arr.every(function (value, index, arr) {
    // return value > 0;  true
    return value > 4;  //false

});
console.log(flag);