$('#1').click(function() {
    if(($('div.five').hasClass('lift'))) {
        $('div').each(function(){
        $(this).removeClass('lift_2');
            });
        $('div.first2').addClass('lift_2');
    } 
    else if(($('div.four').hasClass('lift'))){
        $('div').each(function(){
            $(this).removeClass('lift_2');
        });
        $('div.first2').addClass('lift_2');
    } 
    else{
        $('div').each(function(){
            $(this).removeClass('lift');
        });
        $('div.first').addClass('lift');
    }
});

   $('#2').click(function() {

        if (($('div.five').hasClass('lift'))) {
            $('div').each(function(){
                $(this).removeClass('lift_2');
            });
            $('div.second2').addClass('lift_2');
     }  else 
    
        {
        $("div").each(function() {
            $(this).removeClass('lift');
            $('div.second').addClass('lift');
         
          }); 
          };
        });
      
   $('#3').click(function() {
       if(($('div.five').hasClass('lift')) && ($('div.second2').hasClass('lift_2'))){
        $('div').each(function(){
            $(this).removeClass('lift_2');
        });
        $('div.third2').addClass('lift_2');
       }
       else if(($('div.five').hasClass('lift')) && ($('div.four2').hasClass('lift_2'))){
        $('div').each(function(){
            $(this).removeClass('lift_2');
        });
        $('div.third2').addClass('lift_2');
    }
    else if(($('div.first').hasClass('lift')) && ($('div.four2').hasClass('lift_2'))){
        $('div').each(function(){
            $(this).removeClass('lift_2');
        });
        $('div.third2').addClass('lift_2');
    }
       else{$("div").each(function() {
        $(this).removeClass('lift');
      });
      $('div.third').addClass('lift');
    };
});
   
   
   $('#4').click(function() {
    if(($('div.second').hasClass('lift')) && ($('div.third2').hasClass('lift_2'))){
        $('div').each(function(){
            $(this).removeClass('lift_2');
        });
        $('div.four2').addClass('lift_2');
    } 
    else if(($('div.second').hasClass('lift')) && ($('div.five2').hasClass('lift_2'))){
        $('div').each(function(){
            $(this).removeClass('lift_2');
        });
        $('div.four2').addClass('lift_2');
    }
    else if(($('div.first').hasClass('lift')) && ($('div.five2').hasClass('lift_2'))){
        $('div').each(function(){
            $(this).removeClass('lift_2');
        });
        $('div.four2').addClass('lift_2');
    }
    else if(($('div.first').hasClass('lift')) && ($('div.third2').hasClass('lift_2'))){
        $('div').each(function(){
            $(this).removeClass('lift_2');
        });
        $('div.four2').addClass('lift_2');
    }
   
    else
    {
        $('div').each(function(){
            $(this).removeClass('lift');
        });
        $('div.four').addClass('lift');
    }
   
   
   });
   
   $('#5').click(function() {
        if(($('div.second').hasClass('lift')) && ($('div.third2').hasClass('lift_2'))){
            $('div').each(function(){
                $(this).removeClass('lift_2');
            });
            $('div.five2').addClass('lift_2');
        } 
        else if(($('div.second').hasClass('lift')) && ($('div.four2').hasClass('lift_2'))){
            $('div').each(function(){
                $(this).removeClass('lift_2');
            });
            $('div.five2').addClass('lift_2');
        }
        else if(($('div.first').hasClass('lift')) && ($('div.third2').hasClass('lift_2'))){
            $('div').each(function(){
                $(this).removeClass('lift_2');
            });
            $('div.five2').addClass('lift_2');
        }
        else if(($('div.first').hasClass('lift')) && ($('div.four2').hasClass('lift_2'))){
            $('div').each(function(){
                $(this).removeClass('lift_2');
            });
            $('div.five2').addClass('lift_2');
        }
        else
        {
            $('div').each(function(){
                $(this).removeClass('lift');
            });
            $('div.five').addClass('lift');
        }
       
   });