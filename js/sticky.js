$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>145){
            $(".indeex").css({"position":"fixed","top":0,
            "box-shadow":"inset -1px 0 1.5px #000","margin-left":"-1px","margin-bottom":"1px",
            "z-index":"2"});
        }else{
            $(".indeex").css({"position":"relative","top":"50px",
            "box-shadow":"inset 0 0 0 #000"});
        }
    });
});


