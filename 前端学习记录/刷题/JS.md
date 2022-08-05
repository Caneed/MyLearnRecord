# JS刷题



[TOC]

### 此程序用于输出字符串中出现最多的字符

```
var str = 'acdaecad';
var obj = {};
for (var i = 0;i<str.length;i++){
            if (obj[str.charAt(i)]){ //判断是obj里是否有str里面某个字母的属性
                obj[str.charAt(i)]++;//如果有，给那个属性++
            }
            else {
                obj[str.charAt(i)] = 1;      //如果没有，给obj添加那个属性
        }
        }
var val1;
var val2 = 0;
for (var k in obj) { //for in 循环遍历对象，k是键（也就是对象的属性名) obj就是原对象
            if (obj[k] > val2){  如果obj的属性值大于val2    里面a出现的最多。++次数最多，也就是3
                val2 = obj[k];   //val2等于obj的属性值 
                val1 = k;  //最后将属性名赋予  
            }
}
console.log(val1);所以最后输出a
```

**解析：**首先定义了一个字符串`str`和一个对象`obj`之后进入循环，循环的次数是字符串的长度，第一个判断`obj[str.charAt(i)]`指判断`obj`中是否有`str`的某个字符的属性,如果有的话给这个属性`++`如果没有则添加此属性，并赋值为1。然后又一个循环，在`obj`中循环，如果`obj`中属性值(字符串中出现的次数)大于判断条件`val2`（初始值为0）的话，就让`val2`等于此属性值(记录当前最大的属性值)，然后将属性名赋予`val1`然后执行下一次循环，这样可以找到数值最大的属性，也就是在字符串中出现最多的属性



****



### 数组的排序

##### **冒泡排序**：

```
for (var i = 0;i<arr.length-1;i++){
    for (var j = 0;j < arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log(arr);
```

##### **选择排序：**

```
var minIndex;
var temp;
for(let i = 1; i < arr.length; i++) {
    minIndex = i - 1;
    for(let j = i; j <arr.length; j++) {
        if(arr[j] < arr[minIndex]) minIndex = j;
    }
    if(minIndex != i-1) {
        temp = arr[i-1];
        arr[i-1] = arr[minIndex];
        arr[minIndex] = temp;
    }
}
console.log(arr);
```

##### **插入排序：**

```
for(let i = 1; i < arr.length; i ++) {
    for(let j = i - 1; j>=0 && arr[j] > arr[j+1]; j --) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
    }
}
console.log(arr);
```

##### **数组自身的sort()方法:**

```
arr.sort((a,b)=>b-a);
console.log(arr);
```

其中`b-a`是降序排列`a-b`为升序排列