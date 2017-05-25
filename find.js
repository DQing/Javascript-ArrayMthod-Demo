/*
 *find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
 * 参数：callback
 * 返回值：返回测试函数的第一个元素的值
 * */

var arr = [1, 2, 3, 4, 5, 6];
var result = arr.find(function (value) {
    return value > 4;
});

console.log(result); //5