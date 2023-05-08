
  $(document).ready(function(){
            if(!$("#myCanvas").tagcanvas({
                textColour:"#ffa500",
                outlineColour:"transparent",
                reverse:true,
                depth: 0.2,
                maxSpeed: 0.10,
                weight: true,
                infinity:true,


            }, "tags")){
                 $("#myCanvasContainer"); 
            }

        }) 


//Showing the first tab by default
$('.tabs-stage .tab-content').hide();
$('.tabs-stage .tab-content:first').show();
$('.tabs-nav li:first').addClass('tab-active');

//Change tab class and display content
$('.tabs-nav a').on('click',function(event){
event.preventDefault();
$('.tabs-nav li').removeClass('tab-active');
$(this).parent().addClass('tab-active');
$('.tabs-stage .tab-content').hide();
$($(this).attr('href')).show();

});


//Showing the first tab by default
$('.tabs-stage .tab-content').hide();
$('.tabs-stage .tab-content:first').show();
$('.tab-nav li:first').addClass('tab-active');

//Change tab class and display content
$('.tab-nav a').on('click',function(event){
event.preventDefault();
$('.tab-nav li').removeClass('tab-active');
$(this).parent().addClass('tab-active');
$('.tabs-stage .tab-content').hide();
$($(this).attr('href')).show();

});

function Utils() {}
Utils.prototype = {
  constructor: Utils,
  isElementInView: function (element, fullyInView) {
    var pageTop = $(window).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height();

    if (fullyInView === true) {
      return pageTop < elementTop && pageBottom > elementBottom;
    } else {
      return elementTop <= pageBottom && elementBottom >= pageTop;
    }
  }
};

var Utils = new Utils();
$(window).on("load", addFadeIn());

$(window).scroll(function () {
  addFadeIn(true);
});

function addFadeIn(repeat) {
  var classToFadeIn = ".will-fadeIn";

  $(classToFadeIn).each(function (index) {
    var isElementInView = Utils.isElementInView($(this), false);
    if (isElementInView) {
      if (!$(this).hasClass("fadeInRight") && !$(this).hasClass("fadeInLeft")) {
        if (index % 2 == 0) $(this).addClass("fadeInRight");
        else $(this).addClass("fadeInLeft");
      }
    } else if (repeat) {
      $(this).removeClass("fadeInRight");
      $(this).removeClass("fadeInLeft");
    }
  });
}
