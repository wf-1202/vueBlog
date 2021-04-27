## 删除有序数组中的重复项

给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
// 仅想到去重，返回长度，发现不对。看评论发现，还需要赋给原数组才行。
var removeDuplicates = function (nums) {
    const a = new Set(nums); // ES6 Set去重
    const b = [...a];
    b.forEach((item, i) => (nums[i] = b[i])); // 去重的结果返给nums
    return b.length; // 返回去重后的数组长度
}
```

