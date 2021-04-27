## 搜索插入位置

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    // if (nums.indexOf(target) > -1) {
    //     return nums.indexOf(target) // 数组有值，直接返回结果。
    // } else {
    //     nums.push(target) // 将不存在数值加入数组
    //     for (var m = 0; m < nums.length; m++) { // 冒泡排序，将数值放到顺序位置。
    //         for (var n = 0; n <  v.length - m - 1; n++) {
    //             if (nums[n] > nums[n + 1]) {
    //                 var temp = nums[n + 1];
    //                 nums[n + 1] = nums[n];
    //                 nums[n] = temp
    //             }
    //         }
    //     }
    //     return nums.indexOf(target)
    // }
    
    // 666~ 
    for (var i = 0; target > nums[i]; i++) {

    }
    return i
};
```

