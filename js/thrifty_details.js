/**
 * Created by home on 2018/2/27.
 */
$(function(){
    var pId = getUrlParam('productid');
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getmoneyctrlproduct',
        data:{
            productid:pId
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            $('.thrifty_details .content').html(template('thrifty_details',{list:info.result[0]}));
        },
    })
})
