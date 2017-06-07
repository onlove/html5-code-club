/**
 * Created by DT274 on 2017/6/7.
 */
define(function (require, exports, module) { //参数固定，写法不变
   function tab() {
       alert(123);
   }
    /*
    * 对外的接口exports
    * */
   exports.tab = tab;
});