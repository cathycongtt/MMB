/**
 * Created by home on 2018/2/25.
 */
;(function(window){
    var Route= {
        //�ӿڵ�ַ
        baseUrl: 'http://127.0.0.1:9090',
        //��ҳ������
        getindexmenu: getindexmenu,
    };

    //{
    //    "__v":0,
    //    "_id":"580831702bcccb2c22ed477c",
    //    "img":"<img src="images/ic_mall.png" alt="�̳ǵ���">",
    //    "indexmenuId":10,
    //    "name":"�̳ǵ���",
    //    "titlehref":"sitenav.html"
    //},

    //��ȡ��ҳnav
    function getindexmenu(callback){
    var url= Route.baseUrl+'/api/getindexmenu';
    $.get(url,function(res){
        callback && callback(res);
    },'json');

    };

    //��ȡ��ҳ�ۿ�

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