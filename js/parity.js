$(function(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcategorytitle',
        data:'',
        dataType:'json',
        success:function(info){
            console.log(info);
            // ��Ⱦ����
            $('.parity .row').html(template('tmp_parity_title',{list:info.result}));

            //��title����¼�,��ȡ�б�
            $('.parity .parity_item').on('click', function(){
                var titleid=$(this).attr('data-id');
                //���¼�������thisָ�����¼�Ԫ��
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
                        //����ͨ������thisָ����window
                        //���¼�������ָ���¼�Ԫ��
                        //�ڹ��캯����
                        //�������ĺ�����
                        //console.log(info);
                        console.log($(this).children());
                        that.children("ul").html(template('tmp_parity_list',{list:info.result}));

                    }
                });
            })
        }
    });

})

