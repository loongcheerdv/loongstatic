$(function() {
    $("#Game").addClass('active');
    $("#feature_game_first").click(function(){
        $('#feature_first').css('display','flex');
        $('#feature_second').css('display','none');
        $('#feature_third').css('display','none');
    });
    $("#feature_game_second").click(function(){
        $('#feature_first').css('display','none');
        $('#feature_second').css('display','flex');
        $('#feature_third').css('display','none');
    
    });
    $("#feature_game_third").click(function(){
        $('#feature_first').css('display','none');
        $('#feature_second').css('display','none');
        $('#feature_third').css('display','flex');
    });
    $("#more").click(function(){
        $('#gmae_list_1, #gmae_list_3, #game_list_4, #game_list_5, #game_list_6, #gmae_list_7').css('display', 'block');
        $('#card_more').remove();
    });
});