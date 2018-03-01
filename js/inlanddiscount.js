/**
 * Created by home on 2018/2/27.
 */

$(function(){
    //var p = getUrlParam('productid');
    //‰÷»ænav ˝æ›
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getinlanddiscount',
        data: {

        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $('.inland_discount ul').html(template('inland_discount', {list: info.result}));
        }

    });
})