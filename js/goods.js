$(function() {
    //��ȡ��һ��ҳ�����ӵ�Id
    var p = getUrlParam('productid');
    //��Ⱦnav����
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getproduct',
        data: {
            productid:p,
        },
        dataType: 'json',
        success: function (info) {
            //console.log(info);
            $('.parity-all .goods-item').html(template('tmp_goods', {list: info.result[0]}));
        }

    });

    //��ȡ����
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getproductcom',
        data: {
            productid:p,
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $('.evaluation_list ul').html(template('tmp_goods_evaluate', {list: info.result}));
        }

    });

})
