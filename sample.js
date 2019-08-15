$(function(){
  $('.item-image').hover(
    function(){
      $('.text2').fadeIn();
      
    },
    function(){
      $('.text2').fadeOut();
    });
    $('.item-image').hover(
      function(){
        $('.text1').css('color','green');
        
      },
      function(){
        $('.text1').css('color','black');
      });
  
      $('.explain').hover(
        function(){
        $(this).css('color','green');
        },
        function(){
        $(this).css('color','black');
      });
});
