# mysql-simple

## install

#### npm install mysql-simple


## Use

### simple

    var simple = require('mysql-simple');
    var options = {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'simple'
    }
    var connect = simple.createConnect(options);
        //sql: 'select * from example_table where example_key = "example_value" '
        connect.({key:'example_key', value: 'example_value', field: '*',table:'example_table'},function(err,result){
            if(err){
                throw err;
            }

            result.forEach(function(v,k){
                 console.log(k);
                 console.log(JSON.stringify(v));
            });

            connect.release();
        });

## Methods

### create 

连贯操作	作用	支持的参数类型
where	用于查询或者更新条件的定义	字符串、数组和对象
table	用于定义要操作的数据表名称	字符串和数组
alias	用于给当前数据表定义别名	字符串
field	用于定义要查询的字段（支持字段排除）	字符串和数组
order	用于对结果排序	字符串和数组
group	用于对查询的group支持	字符串
having	用于对查询的having支持	字符串
join	用于对查询的join支持	字符串和数组
union	用于对查询的union支持	字符串、数组和对象
distinct	用于查询的distinct支持	布尔值
lock	用于数据库的锁机制	布尔值
cache	用于查询缓存	支持多个参数
relation	用于关联查询（需要关联模型支持）	字符串
result	用于返回数据转换	字符串
scope	用于命名范围	字符串、数组
bind	用于数据绑定操作	数组
comment	用于SQL注释	字符串

### update

连贯操作	作用	支持的参数类型
where	用于查询或者更新条件的定义	字符串、数组和对象
table	用于定义要操作的数据表名称	字符串和数组
alias	用于给当前数据表定义别名	字符串
field	用于定义允许更新的字段	字符串和数组
order	用于对数据排序	字符串和数组
lock	用于数据库的锁机制	布尔值
relation	用于关联更新（需要关联模型支持）	字符串
scope	用于命名范围	字符串、数组
bind	用于数据绑定操作	数组
comment	用于SQL注释	字符串

### delete
连贯操作	作用	支持的参数类型
where	用于查询或者更新条件的定义	字符串、数组和对象
table	用于定义要操作的数据表名称	字符串和数组
alias	用于给当前数据表定义别名	字符串
order	用于对数据排序	字符串和数组
lock	用于数据库的锁机制	布尔值
relation	用于关联删除（需要关联模型支持）	字符串
scope	用于命名范围	字符串、数组
bind	用于数据绑定操作	数组
comment	用于SQL注释	字符串

### query


## License
The MIT License (MIT)

Copyright (c) 2014 jameslong

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Contributors

   jameslong
   closure
