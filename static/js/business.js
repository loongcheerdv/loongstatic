$(function() {
    $("#Business").addClass('active');
    $('#floatingBarsG').hide();


});

function message_form() {
   $('#floatingBarsG').show();
    $("#formBusiness").ajaxSubmit(function(data){
           if(data.code == 'OK'){
                // $('#load-form').css('display', 'none');
               swal('Thanks for your message','We will reply you as soon as possible','success');
               $('#floatingBarsG').hide();

           }
           else{
               // $('#load-form').css('display', 'none');
               swal('Net work error','Please try again','error')
                $('#floatingBarsG').hide();

           }
       });
   return false;

}



