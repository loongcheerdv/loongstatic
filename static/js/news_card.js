$(function() {
    $("#News").addClass('active');
    let select = window.location.search.match('news_type=(.*)&')[1];
    if(select==="Company"){
        $("#news_title_1").removeClass("select");
        $("#news_title_2").addClass("select");
        $("#news_title_3").removeClass("select");
        $("#news_title_4").removeClass("select");
    }
    else if(select==="Industry"){
        $("#news_title_1").removeClass("select");
        $("#news_title_2").removeClass("select");
        $("#news_title_3").addClass("select");
        $("#news_title_4").removeClass("select");
    }
    else if(select==="Media"){
        $("#news_title_1").removeClass("select");
        $("#news_title_2").removeClass("select");
        $("#news_title_3").removeClass("select");
        $("#news_title_4").addClass("select");
    }
    else{
        $("#news_title_1").addClass("select");
        $("#news_title_2").removeClass("select");
        $("#news_title_3").removeClass("select");
        $("#news_title_4").removeClass("select");
    }
});