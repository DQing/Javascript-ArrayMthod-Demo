/*
 *forEach() 方法对数组的每个元素执行一次提供的函数。
 * 参数：callback
 * 返回值：undefined
 * */

var arr = [1, 2, 3, 4, 5, 6];
var result = arr.forEach(function (value, index, arr) {
    console.log(++value);
    return value > 2;
});
console.log(result);