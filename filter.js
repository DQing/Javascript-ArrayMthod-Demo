/*
 * filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
 * 参数:(callback)
 * 返回值：符合要求的数组
 * */

var arr = [1, 2, 3, 4, 5, 6];
var result = arr.filter(function (value) {
    return value > 3;
});

console.log(result); //[4,5,6]