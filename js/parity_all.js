$(function(){
    //��ȡ��һ��ҳ�����ӵ�Id
    var g = getUrlParam('categoryid');
    //��Ⱦnav����
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

    //��Ⱦ��Ʒ����
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