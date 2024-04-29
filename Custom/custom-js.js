// jQuery scroll-to plugin
!function(o,e,t){"undefined"!=typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):e[o]=t()}("jquery-scrollto",this,function(){var o,e,t;return o=e=window.jQuery||require("jquery"),e.propHooks.scrollTop=e.propHooks.scrollLeft={get:function(o,e){var t=null;return("HTML"===o.tagName||"BODY"===o.tagName)&&("scrollLeft"===e?t=window.scrollX:"scrollTop"===e&&(t=window.scrollY)),null==t&&(t=o[e]),t}},e.Tween.propHooks.scrollTop=e.Tween.propHooks.scrollLeft={get:function(o){return e.propHooks.scrollTop.get(o.elem,o.prop)},set:function(o){"HTML"===o.elem.tagName||"BODY"===o.elem.tagName?(o.options.bodyScrollLeft=o.options.bodyScrollLeft||window.scrollX,o.options.bodyScrollTop=o.options.bodyScrollTop||window.scrollY,"scrollLeft"===o.prop?o.options.bodyScrollLeft=Math.round(o.now):"scrollTop"===o.prop&&(o.options.bodyScrollTop=Math.round(o.now)),window.scrollTo(o.options.bodyScrollLeft,o.options.bodyScrollTop)):o.elem.nodeType&&o.elem.parentNode&&(o.elem[o.prop]=o.now)}},t={config:{duration:400,easing:"swing",callback:void 0,durationMode:"each",offsetTop:0,offsetLeft:0},configure:function(o){return e.extend(t.config,o||{}),this},scroll:function(o,l){var r,n,s,i,p,c,f,a,d,u,g,h,T,w,m,y,L,b;return r=o.pop(),n=r.$container,s=r.$target,c=n.prop("tagName"),i=e("<span/>").css({position:"absolute",top:"0px",left:"0px"}),p=n.css("position"),n.css({position:"relative"}),i.appendTo(n),g=i.offset().top,h=s.offset().top,T=h-g-parseInt(l.offsetTop,10),w=i.offset().left,m=s.offset().left,y=m-w-parseInt(l.offsetLeft,10),f=n.prop("scrollTop"),a=n.prop("scrollLeft"),i.remove(),n.css({position:p}),L={},b=function(){return 0===o.length?"function"==typeof l.callback&&l.callback():t.scroll(o,l),!0},l.onlyIfOutside&&(d=f+n.height(),u=a+n.width(),T>f&&d>T&&(T=f),y>a&&u>y&&(y=a)),T!==f&&(L.scrollTop=T),y!==a&&(L.scrollLeft=y),n.prop("scrollHeight")===n.width()&&delete L.scrollTop,n.prop("scrollWidth")===n.width()&&delete L.scrollLeft,null!=L.scrollTop||null!=L.scrollLeft?n.animate(L,{duration:l.duration,easing:l.easing,complete:b}):b(),!0},fn:function(o){var l,r,n,s;l=[];var i=e(this);if(0===i.length)return this;for(r=e.extend({},t.config,o),n=i.parent(),s=n.get(0);1===n.length&&s!==document.body&&s!==document;){var p,c;p="visible"!==n.css("overflow-y")&&s.scrollHeight!==s.clientHeight,c="visible"!==n.css("overflow-x")&&s.scrollWidth!==s.clientWidth,(p||c)&&(l.push({$container:n,$target:i}),i=n),n=n.parent(),s=n.get(0)}return l.push({$container:e("html"),$target:i}),"all"===r.durationMode&&(r.duration/=l.length),t.scroll(l,r),this}},e.ScrollTo=e.ScrollTo||t,e.fn.ScrollTo=e.fn.ScrollTo||t.fn,t});


!function(a){function b(){var b=window.innerHeight,c=document.compatMode;return!c&&a.support.boxModel||(b="CSS1Compat"==c?document.documentElement.clientHeight:document.body.clientHeight),b}a(window).scroll(function(){var c=b(),d=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop,e=[];a.each(a.cache,function(){this.events&&this.events.inview&&e.push(this.handle.elem)}),e.length&&a(e).each(function(){var b=a(this),e=b.offset().top,f=b.height(),g=b.data("inview")||!1;d>e+f||d+c<e?g&&(b.data("inview",!1),b.trigger("inview",[!1])):d<e+f&&(g||(b.data("inview",!0),b.trigger("inview",[!0])))})}),a(function(){a(window).scroll()})}(jQuery);


jQuery(document).ready(function($) {

    ( function( $ ) {
    
        // Setup variables
        $window = $(window);
        winH = $window.height();
        $slide = $('.evo-slide');
        $slideTall = $('.evo-slide-double');
        $slideTall2 = $('.evo-slide-triple');
        $body = $('body');

        $('.evo-menu').css("height",winH);
        $slide.css("height",winH);
        $slideTall.css("height",winH*2);
        $slideTall2.css("height",winH*3);
        
        //FadeIn all sections   
        $body.imagesLoaded( function() {
            setTimeout(function() {
                  
                  // Resize sections
                  initiateSkrollr();
                  
                  // Fade in sections
                  $body.removeClass('evo-loading').addClass('evo-loaded');
                  
            }, 800);
        });


        function initiateSkrollr(){

            // Get window size
            winH = $window.height();

            if($(window).width() > 899) {

                skrollr.init().destroy();

                var s = skrollr.init({
                    render: function(data) {
                        console.log(data.curTop);
                    }
                });

                $slide.css("height",winH);
                $slideTall.css("height",winH*2);
                $slideTall2.css("height",winH*3);

                if(winH > 600) {
                    $('.evo-tall-img').css('max-height',winH-120);
                }

            } else if ($(window).width() <= 899) {

                $slide.css("height","auto");
                $slideTall.css("height","auto");
                $slideTall2.css("height","auto");
                $('.evo-intro').css("height",winH);

            }
            
        }

        $(window).on('resize', function () {
            initiateSkrollr();
            if ($(window).width() > 767 && $(window).width() <= 899) {
                skrollr.init().destroy();
            }
        });
            
    } )( jQuery );


    $('.evo-menu-1').click(function() {
        if($(window).width() > 899) {
            $('.evo-1').ScrollTo({ duration: 0, offsetTop: -900 });
        } else {
            $('.evo-1').ScrollTo({ duration: 0, offsetTop: 48 });
        }
    });
    $('.evo-menu-2').click(function() {
        if($(window).width() > 899) {
            $('.evo-2').ScrollTo({ duration: 0, offsetTop: -900 });
        } else {
            $('.evo-2').ScrollTo({ duration: 0, offsetTop: 48 });
        }
    });
    $('.evo-menu-3').click(function() {
        if($(window).width() > 899) {
            $('.evo-3').ScrollTo({ duration: 0, offsetTop: -900 });
        } else {
            $('.evo-3').ScrollTo({ duration: 0, offsetTop: 48 });
        }
    });
    $('.evo-menu-4').click(function() {
        if($(window).width() > 899) {
            $('.evo-4').ScrollTo({ duration: 0, offsetTop: -900 });
        } else {
            $('.evo-4').ScrollTo({ duration: 0, offsetTop: 48 });
        }
    });

    $('.evo-menu li').click(function() {
        $('.evo-menu-toggle').removeClass('active');
        $('.evo-menu').removeClass('active');
        $('.evo-menu-toggle .fa').toggleClass('fa-bars');
        $('.evo-menu-toggle .fa').toggleClass('fa-times');
    });

    $('.evo-menu-toggle').click(function() {
        $(this).toggleClass('active');
        $('.evo-menu').toggleClass('active');
        $('.evo-menu-toggle .fa').toggleClass('fa-bars');
        $('.evo-menu-toggle .fa').toggleClass('fa-times');
    });


    // Back to top
    $("#back-top").hide();
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
    });
    /*$("#back-top").click(function() {
        $("html, body").animate({
        scrollTop: $("html").offset().top
        }, 0);
    });*/

    $('.fade-in, .slide-up, .slide-down').bind('inview', function (event, visible) {
      if (visible == true) {
        // element is now visible in the viewport
       $(this).addClass('visible');
      } else {
        // element has gone out of viewport
        //$(this).removeClass('visible');
      }
    });


    var fbName = "How Life Has Changed In The Past 100 Years | SunLife";
    var fbDesc = "How far have we come in the last 100 years? Find out more...";

    $(".evo-fb").attr("href", "https://www.facebook.com/dialog/feed?app_id=1154421021274132&display=popup&name="+fbName+"&description="+fbDesc+"&caption=www.sunlife.co.uk&link=https://www.sunlife.co.uk/life-cover/over-50-life-insurance/how-life-has-changed&picture=https://www.sunlife.co.uk/life-cover/over-50-life-insurance/how-life-has-changed/images/evo-fb-dialog.jpg&redirect_uri=https://www.sunlife.co.uk/life-cover/over-50-life-insurance/how-life-has-changed");

    // Make Facebook/Twitter buttons open in popup window
    $('.evo-fb, .evo-tweet').click(function (event) {
        if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
        window.open($(this).attr("href"), "popupWindow", "width=600,height=600,scrollbars=yes");
    });

});