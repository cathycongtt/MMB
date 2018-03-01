/**
 * Created by home on 2018/2/27.
 */
$(function(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getmoneyctrl',
        dataType:'json',
        data:{
            pageid:1,
        },
        success:function(info){
            console.log(info);
            $('.thrifty .goods').html(template('tmp_moneyctrl', {list:info.result}));
        },
    })
})