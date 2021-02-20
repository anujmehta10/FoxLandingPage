$(document).ready(function(){
    $(".flip").click(function(){
      $(".panel").slideToggle("slow");
    });
    $(".nav--hasChild > a").click(function(){
        $('.nav--hasChild .navbar_menu').slideUp();
        $(this).siblings('ul').slideToggle("slow");
      });
});
// owl change name
$('.featureslider').owlCarousel({
    items:4,
    loop:false,
    center:true,
    margin:10,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
});

$('.featureslider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$('.screenshots').owlCarousel({
    items:4,
    loop:false,
    center:true,
    margin:10,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
});

$('.screenshots').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$('.brands').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// var contactform=$(this);
// var ancAtt=$(contactform.attr('href'));
// $('html,body').animate({
//     scrollTop:ancAtt.offset().top
// },1000);
// e.preventDefault();
// $('.').click(function(e){
//     $(document).scrollTop(1000)
// });
$("a").click(function(){
    var abc = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(abc).offset().top }, 1000);
  });

  $('.modal').hide();
$('.play_btn').click(function(){
    $('.modal').show();
});

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    $('.modal').hide();
  }

