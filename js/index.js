/**
 * Created by home on 2018/2/25.
 */
$(function(){
    setNav($('.container .nav ul'));
    setdiscount($('.discount .goods'));

    function setNav(ele) {
        //最后四个
        var $lastFour;
        //获取导航数据并渲染
        Route.getindexmenu(function(res){
            var data= res.result;
            var navHtml="";
            data.forEach(function(ele,index){
                navHtml+='<li class="nav_item">'
                        +'<a href="' + ele.titlehref + '">'
                        +ele.img
                        +'<p>'+ele.name+'</p>'
                        +'</a>'
                        +'</li>'
            });
            $(ele).html(navHtml);

            //隐藏最后四个数据
            $lastFour=$(ele).children('.nav_item:nth-last-child(-n+4)');
            $lastFour.addClass('hide');

            more($(ele).find('.nav_item:nth-child(8)>a'));
        })
        //更多 点击隐藏显示最后四个
        function more(ele){
            $(ele).on('click',function(){
                $lastFour.toggleClass('hide');
            })
        }
    }

});
