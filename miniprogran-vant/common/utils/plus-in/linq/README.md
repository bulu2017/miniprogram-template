## Linq

> 需要使用lamada方式查询的页面，可以通过引入linq.js 后通过以下方式调用

```js
var Select = require('../../common/utils/plusLib/linq/index.js');
var myList = [{
    Name: "Jim",
    Age: 20
  },
  {
    Name: "Kate",
    Age: 21
  },
  {
    Name: "Lilei",
    Age: 18
  },
  {
    Name: "John",
    Age: 14
  },
  {
    Name: "LinTao",
    Age: 25
  }
];
var arrRes = Select.from(myList).where(x=>x.Age>21).toArray();
// var arrRes = Select.from(myList).distinct(x=>x.Name).where(x=>x.Age>21).toArray();// 查询结果去重
// var arrRes = Select.from(myList).orderBy(x=>x.Age).toArray(); // 正序排序  
// var arrRes = Select.from(myList).orderByDescending(x=>x.Age).toArray(); // 倒序
// var arrRes = Select.from(myList).reverse().toArray(); // 颠倒输出
// var arrRes = Select.from(myList).shuffle().toArray(); // 随机洗牌

console.log(arrRes)
/**
[{
	Name: "LinTao",
    Age: 25
}]
**/
```

