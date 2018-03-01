/**
 * Created by home on 2018/2/27.
 */
$(function(){
    //var ipId = getUrlParam('productid');
    //БъЬт
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getbaicaijiatitle',
        data: {

        },
        dataType: 'json',
        success: function (info) {
            //console.log(info);
            $('.baicai_cheap .cheap_nav ul').html(template('baicaijia_title', {list: info.result}));
        }

    });
})