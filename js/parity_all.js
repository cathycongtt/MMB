$(function(){
    //获取上一个页面连接的Id
    var g = getUrlParam('categoryid');
    //渲染nav数据
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getcategorybyid',
        data: {
            categoryid:g,
        },
        dataType: 'json',
        success: function (info) {
            $('.parity-all .title').html(template('tmp_parity_tit',{list:info.result[0]}));
        }

    });

    //渲染商品数据
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getproductlist',
        data: {
            categoryid:g,
            pageid:1
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $('.parity-all .content').html(template('tmp_parity_list',{list:info.result}));
        }

    });
})