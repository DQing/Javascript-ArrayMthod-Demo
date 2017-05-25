/*
 * findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
 * 参数:(callback)
 * 返回值:符合数据的索引
 * */

var arr = [1, 2, 3, 4, 5, 6];
var result = arr.findIndex(function (value, index, arr) {
    return value > 5;
});

console.log(result); //5