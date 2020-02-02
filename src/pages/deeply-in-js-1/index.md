---
title: '深入JavaScript之变量对象'
date: '2020-02-02'
spoiler: Copy from 	mqyqingfeng's blog.
cta: JavaScript
---

执行上下文的代码会分成两个阶段进行处理：分析和执行，我们也可以叫做：

 1. 进入执行上下文
 2. 代码执行
 
 ### 进入执行上下文
 
 当进入执行上下文时，这时候还没有执行代码，
 
 变量对象会包括：
 
 1. 函数的所有形参 (如果是函数上下文)
 
    * 由名称和对应值组成的一个变量对象的属性被创建
    * 没有实参，属性值设为 undefined
 
 2. 函数声明
 
    * 由名称和对应值（函数对象(function-object)）组成一个变量对象的属性被创建
    * 如果变量对象已经存在相同名称的属性，则完全替换这个属性
    
 3. 变量声明
 
    * 由名称和对应值（undefined）组成一个变量对象的属性被创建；
    * 如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性

 举个例子：
 
 ```javascript
    function foo(a) {
      var b = 2;
      function c() {}
      var d = function() {};
    
      b = 3;
    
    }
    
    foo(1);
 ```

在进入执行上下文后，这时候的 AO 是：

```
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: undefined,
    c: reference to function c(){},
    d: undefined
}
```

 ### 代码执行
 
在代码执行阶段，会顺序执行代码，根据代码，修改变量对象的值

还是上面的例子，当代码执行完后，这时候的 AO 是：

```
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: 3,
    c: reference to function c(){},
    d: reference to FunctionExpression "d"
}
```

到这里变量对象的创建过程就介绍完了，让我们简洁的总结我们上述所说：

   1. 全局上下文的变量对象初始化是全局对象

   2. 函数上下文的变量对象初始化只包括 Arguments 对象

   3. 在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值
   
   4. 在代码执行阶段，会再次修改变量对象的属性值
 
 