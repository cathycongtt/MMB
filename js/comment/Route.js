/**
 * Created by home on 2018/2/25.
 */
;(function(window){
    var Route= {
        //接口地址
        baseUrl: 'http://127.0.0.1:9090',
        //首页导航栏
        getindexmenu: getindexmenu,
    };

    //{
    //    "__v":0,
    //    "_id":"580831702bcccb2c22ed477c",
    //    "img":"<img src="images/ic_mall.png" alt="商城导航">",
    //    "indexmenuId":10,
    //    "name":"商城导航",
    //    "titlehref":"sitenav.html"
    //},

    //获取首页nav
    function getindexmenu(callback){
    var url= Route.baseUrl+'/api/getindexmenu';
    $.get(url,function(res){
        callback && callback(res);
    },'json');

    };

    //获取首页折扣

    function getmoneyctrl (callback){
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getmoneyctrl',
            data:'',
            dataType:'json',
            success:function(info){
                console.log(info);
                $('.discount .goods').html(template('tem_recommend',{list:info.result}));
            }
        })
    }

    window.Route=Route;
})(window);