//下面这部分来自mysql
var mysql = require('mysql');

exports.createConnection = function(config){
    return mysql.createConnection(config);
};

exports.createPool = function(config){
    return mysql.createPool(config);
};

exports.createPoolCluster = function(config){
    return mysql.createPoolCluster(config);
};

exports.createQuery = mysql.createQuery;

exports.Types    = mysql.Types;
exports.escape   = mysql.escape;
exports.escapeId = mysql.escapeId;
exports.format   = mysql.format;

//mysql部分终
//功能与node-mysql完全一样,做的只是对node-mysql的完全引用


//以下部分使用mysql query创建
//module.exports = function(options){
//  return new Simple(options);
//};

//以下功能将在后续版本中完善

//创建
//var Create = require('./create');
//删除
//var Delete = require('./delete');
//更新
//var Update = require('./update');
//查询
//var Query  = require('./query');

//根据表名创建对象，所有操作都是对这个对象的实例的操作
//function Simple(options){
//    if(!options || typeof options !== 'object'){
//        throw new Error('must be a json format object');
//    }
//}
