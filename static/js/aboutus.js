// $(function() {
//     var tran_y = 0;
//     $("#text_pre").click(function(){
//         if(tran_y<70){
//             tran_y = tran_y + 40;
//             let translate_y = 'translateY(' + tran_y + 'px)';
//             $('#about_us_text').css('transform', translate_y)
//         }
//     });
//     $("#text_next").click(function(){
//         if(tran_y<500){
//             tran_y = tran_y - 40;
//             let translate_y = 'translateY(' + tran_y + 'px)';
//             $('#about_us_text').css('transform', translate_y)
//         }
//     });
//
// });

$(function() {
    $("#AboutUs").addClass('active');
    $("#img_11_1, #img_11_2").hover(function() {
        $("#img_11_1").attr('src', '/static/pro_img/about_us/double/11-1.jpg');
        $("#img_11_2").attr('src', '/static/pro_img/about_us/double/11-2.jpg');
        timer = setTimeout(function(){
            $("#img_11_1").attr('src', '/static/pro_img/about_us/double/10-1.jpg');
            $("#img_11_2").attr('src', '/static/pro_img/about_us/double/10-2.jpg');
        },2000);
    }, function() {
        $("#img_11_1").attr('src', '/static/pro_img/about_us/single/11-1.jpg');
        $("#img_11_2").attr('src', '/static/pro_img/about_us/single/11-2.jpg');
        clearTimeout(timer);
    });
    $("#img_3_1, #img_3_2").hover(function() {
        $("#img_3_1").attr('src', '/static/pro_img/about_us/double/3-1.jpg');
        $("#img_3_2").attr('src', '/static/pro_img/about_us/double/3-2.jpg');
    }, function() {
        $("#img_3_1").attr('src', '/static/pro_img/about_us/single/3-1.jpg');
        $("#img_3_2").attr('src', '/static/pro_img/about_us/single/3-2.jpg');
    });
    $("#img_7_1, #img_7_2").hover(function() {
        $("#img_7_1").attr('src', '/static/pro_img/about_us/double/7-1.jpg');
        $("#img_7_2").attr('src', '/static/pro_img/about_us/double/7-2.jpg');
    }, function() {
        $("#img_7_1").attr('src', '/static/pro_img/about_us/single/7-1.jpg');
        $("#img_7_2").attr('src', '/static/pro_img/about_us/single/7-2.jpg');
    });
    $("#img_8_1, #img_8_2").hover(function() {
        $("#img_8_1").attr('src', '/static/pro_img/about_us/double/8-1.jpg');
        $("#img_8_2").attr('src', '/static/pro_img/about_us/double/8-2.jpg');
    }, function() {
        $("#img_8_1").attr('src', '/static/pro_img/about_us/single/8-1.jpg');
        $("#img_8_2").attr('src', '/static/pro_img/about_us/single/8-2.jpg');
    });
    $("#img_6_1, #img_6_2").hover(function() {
        $("#img_6_1").attr('src', '/static/pro_img/about_us/double/6-1.jpg');
        $("#img_6_2").attr('src', '/static/pro_img/about_us/double/6-2.jpg');
    }, function() {
        $("#img_6_1").attr('src', '/static/pro_img/about_us/single/6-1.jpg');
        $("#img_6_2").attr('src', '/static/pro_img/about_us/single/6-2.jpg');
    });
    $("#img_12_1, #img_12_2").hover(function() {
        $("#img_12_1").attr('src', '/static/pro_img/about_us/double/12-1.jpg');
        $("#img_12_2").attr('src', '/static/pro_img/about_us/double/12-2.jpg');
    }, function() {
        $("#img_12_1").attr('src', '/static/pro_img/about_us/single/12-1.jpg');
        $("#img_12_2").attr('src', '/static/pro_img/about_us/single/12-2.jpg');
    });
    $("#img_18_1, #img_18_2, #img_18_3").hover(function() {
        $("#img_18_1").attr('src', '/static/pro_img/about_us/double/18-1.jpg');
        $("#img_18_2").attr('src', '/static/pro_img/about_us/double/18-2.jpg');
        $("#img_18_3").attr('src', '/static/pro_img/about_us/double/18-3.jpg');
    }, function() {
        $("#img_18_1").attr('src', '/static/pro_img/about_us/single/18-1.jpg');
        $("#img_18_2").attr('src', '/static/pro_img/about_us/single/18-2.jpg');
        $("#img_18_3").attr('src', '/static/pro_img/about_us/single/18-3.jpg');
    });
    $("#img_14_1, #img_14_2, #img_14_3").hover(function() {
        $("#img_14_1").attr('src', '/static/pro_img/about_us/double/14-1.jpg');
        $("#img_14_2").attr('src', '/static/pro_img/about_us/double/14-2.jpg');
        $("#img_14_3").attr('src', '/static/pro_img/about_us/double/14-3.jpg');
    }, function() {
        $("#img_14_1").attr('src', '/static/pro_img/about_us/single/14-1.jpg');
        $("#img_14_2").attr('src', '/static/pro_img/about_us/single/14-2.jpg');
        $("#img_14_3").attr('src', '/static/pro_img/about_us/single/14-3.jpg');
    });
    $("#img_15_1, #img_15_2, #img_15_3").hover(function() {
        $("#img_15_1").attr('src', '/static/pro_img/about_us/double/15-1.jpg');
        $("#img_15_2").attr('src', '/static/pro_img/about_us/double/15-2.jpg');
        $("#img_15_3").attr('src', '/static/pro_img/about_us/double/15-3.jpg');
    }, function() {
        $("#img_15_1").attr('src', '/static/pro_img/about_us/single/15-1.jpg');
        $("#img_15_2").attr('src', '/static/pro_img/about_us/single/15-2.jpg');
        $("#img_15_3").attr('src', '/static/pro_img/about_us/single/15-3.jpg');
    });
    $("#img_17_1, #img_17_2, #img_17_3").hover(function() {
        $("#img_17_1").attr('src', '/static/pro_img/about_us/double/17-1.jpg');
        $("#img_17_2").attr('src', '/static/pro_img/about_us/double/17-2.jpg');
        $("#img_17_3").attr('src', '/static/pro_img/about_us/double/17-3.jpg');
    }, function() {
        $("#img_17_1").attr('src', '/static/pro_img/about_us/single/17-1.jpg');
        $("#img_17_2").attr('src', '/static/pro_img/about_us/single/17-2.jpg');
        $("#img_17_3").attr('src', '/static/pro_img/about_us/single/17-3.jpg');
    });
    $("#img_4_1").hover(function() {
        $("#img_4_1").attr('src', '/static/pro_img/about_us/double/4-1.jpg');
        $("#img_4_2").attr('src', '/static/pro_img/about_us/double/4-2.jpg');
        $("#img_5_1").attr('src', '/static/pro_img/about_us/single/5-1.jpg');
    }, function() {
        $("#img_4_1").attr('src', '/static/pro_img/about_us/single/4-1.jpg');
        $("#img_4_2").attr('src', '/static/pro_img/about_us/single/4-5-2.jpg');
        $("#img_5_1").attr('src', '/static/pro_img/about_us/single/5-1.jpg');
    });
    $("#img_5_1").hover(function() {
        $("#img_5_1").attr('src', '/static/pro_img/about_us/double/5-2.jpg');
        $("#img_4_2").attr('src', '/static/pro_img/about_us/double/5-1.jpg');
    }, function() {
        $("#img_4_2").attr('src', '/static/pro_img/about_us/single/4-5-2.jpg');
        $("#img_5_1").attr('src', '/static/pro_img/about_us/single/5-1.jpg');
    });

});

$(window).bind("scroll",function(){
    var top=$(this).scrollTop();
    var about_text= $("#about-text").offset().top-$("#about-text").height();
    if(top>about_text){
        $("#about-us-text").css({'animation':'fadeIn 1s', '-webkit-animation':'fadeIn 1s', 'visibility':'visible'})
    }

});
