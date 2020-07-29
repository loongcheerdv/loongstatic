$(function() {
    $("#News").addClass('active');
    $("#news_title_1").hover(function() {
        $("#new_content_1").css('display', 'block');
        $("#new_content_2").css('display', 'none');
        $("#new_content_3").css('display', 'none');
        $("#new_content_4").css('display', 'none');
        $("#news_title_1").addClass("select");
        $("#news_title_2").removeClass("select");
        $("#news_title_3").removeClass("select");
        $("#news_title_4").removeClass("select");
        // get_page();
    });
    $("#news_title_2").hover(function() {
        $("#new_content_1").css('display', 'none');
        $("#new_content_2").css('display', 'block');
        $("#new_content_3").css('display', 'none');
        $("#new_content_4").css('display', 'none');
        $("#news_title_1").removeClass("select");
        $("#news_title_2").addClass("select");
        $("#news_title_3").removeClass("select");
        $("#news_title_4").removeClass("select");
    });
    $("#news_title_3").hover(function() {
        $("#new_content_1").css('display', 'none');
        $("#new_content_2").css('display', 'none');
        $("#new_content_3").css('display', 'block');
        $("#new_content_4").css('display', 'none');
        $("#news_title_1").removeClass("select");
        $("#news_title_2").removeClass("select");
        $("#news_title_3").addClass("select");
        $("#news_title_4").removeClass("select");
    });
    $("#news_title_4").hover(function() {
        $("#new_content_1").css('display', 'none');
        $("#new_content_2").css('display', 'none');
        $("#new_content_3").css('display', 'none');
        $("#new_content_4").css('display', 'block');
        $("#news_title_1").removeClass("select");
        $("#news_title_2").removeClass("select");
        $("#news_title_3").removeClass("select");
        $("#news_title_4").addClass("select");
    });

});