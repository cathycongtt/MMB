$(function(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcategorytitle',
        data:'',
        dataType:'json',
        success:function(info){
            console.log(info);
            // 渲染数据
            $('.parity .row').html(template('tmp_parity_title',{list:info.result}));

            //给title点击事件,获取列表
            $('.parity .parity_item').on('click', function(){
                var titleid=$(this).attr('data-id');
                //在事件函数里this指的是事件元素
                var that =$(this);
                console.log(titleid);
                $.ajax({
                    type:'get',
                    url:'http://127.0.0.1:9090/api/getcategory',
                    data:{
                        titleid:titleid,
                    },
                    dataType:'json',
                    success:function(info){
                        //在普通函数里this指的是window
                        //在事件函数里指向事件元素
                        //在构造函数里
                        //在上下文函数里
                        //console.log(info);
                        console.log($(this).children());
                        that.children("ul").html(template('tmp_parity_list',{list:info.result}));

                    }
                });
            })
        }
    });

})

