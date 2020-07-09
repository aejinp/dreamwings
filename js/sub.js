 $(function(){
    $('.tabSet').each(function(){
        var anchors = $(this).find('.tabs a');
        var panelDivs = $(this).find('.panel');
        var lastAnchor;
        var lastPanel;
        
        anchors.show();//
        lastAnchor = anchors.filter('.on');
        lastPanel = $(lastAnchor.attr('href'));
        
        panelDivs.hide();
        lastPanel.show();
        
        anchors.click(function(){
          var currentAnchor = $(this);
          var currentPanel = $(currentAnchor.attr('href'));
            
           currentAnchor.addClass('on');
           lastAnchor.removeClass('on');
            
           lastAnchor =  currentAnchor;
            
           currentPanel.show();
           lastPanel.hide(); 
            
           lastPanel = currentPanel;
        })
        
    });
      $('.mainMenu > li').each(function(){
           var sub = $(this).find('.subMenu');
           
           $(this).hover(function(){
               sub.stop().slideDown();
           },function(){
               //없어짐
               sub.stop().slideUp();
           })  //hover
       }) //nav li each
        
      $(window).scroll(function(){
          if ($(document).scrollTop() >= 300) {
             $('header').css({background:'rgba(0,0,0,0.5)'});
              
          }else {
               $('header').css({background:'rgba(0,0,0,0)'});
          }
      });
   
     
           $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
  })