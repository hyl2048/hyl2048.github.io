<<<<<<< HEAD
$(function () {
    /**
     * 添加文章卡片hover效果.
     */
    let articleCardHover = function () {
        let animateClass = 'animated pulse';
        $('article .article').hover(function () {
            $(this).addClass(animateClass);
        }, function () {
            $(this).removeClass(animateClass);
        });
    };
    articleCardHover();

    /*菜单切换*/
    $('.sidenav').sidenav();

    /* 修复文章卡片 div 的宽度. */
    let fixPostCardWidth = function (srcId, targetId) {
        let srcDiv = $('#' + srcId);
        if (srcDiv.length === 0) {
            return;
        }

        let w = srcDiv.width();
        if (w >= 450) {
            w = w + 21;
        } else if (w >= 350 && w < 450) {
            w = w + 18;
        } else if (w >= 300 && w < 350) {
            w = w + 16;
        } else {
            w = w + 14;
        }
        $('#' + targetId).width(w);
    };

    /**
     * 修复footer部分的位置，使得在内容比较少时，footer也会在底部.
     */
    let fixFooterPosition = function () {
        $('.content').css('min-height', window.innerHeight - 165);
    };

    /**
     * 修复样式.
     */
    let fixStyles = function () {
        fixPostCardWidth('navContainer');
        fixPostCardWidth('artDetail', 'prenext-posts');
        fixFooterPosition();
    };
    fixStyles();

    /*调整屏幕宽度时重新设置文章列的宽度，修复小间距问题*/
    $(window).resize(function () {
        fixStyles();
    });

    /*初始化瀑布流布局*/
    $('#articles').masonry({
        itemSelector: '.article'
    });

    AOS.init({
        easing: 'ease-in-out-sine',
        duration: 700,
        delay: 100
    });

    /*文章内容详情的一些初始化特性*/
    let articleInit = function () {
        $('#articleContent a').attr('target', '_blank');

        $('#articleContent img').each(function () {
            let imgPath = $(this).attr('src');
            $(this).wrap('<div class="img-item" data-src="' + imgPath + '" data-sub-html=".caption"></div>');
            // 图片添加阴影
            $(this).addClass("img-shadow img-margin");
            // 图片添加字幕
            let alt = $(this).attr('alt');
            let title = $(this).attr('title');
            let captionText = "";
            // 如果alt为空，title来替
            if (alt === undefined || alt === "") {
                if (title !== undefined && title !== "") {
                    captionText = title;
                }
            } else {
                captionText = alt;
            }
            // 字幕不空，添加之
            if (captionText !== "") {
                let captionDiv = document.createElement('div');
                captionDiv.className = 'caption';
                let captionEle = document.createElement('b');
                captionEle.className = 'center-caption';
                captionEle.innerText = captionText;
                captionDiv.appendChild(captionEle);
                this.insertAdjacentElement('afterend', captionDiv)
            }
        });
        $('#articleContent, #myGallery').lightGallery({
            selector: '.img-item',
            // 启用字幕
            subHtmlSelectorRelative: true
        });

        // progress bar init
        const progressElement = window.document.querySelector('.progress-bar');
        if (progressElement) {
            new ScrollProgress((x, y) => {
                progressElement.style.width = y * 100 + '%';
            });
        }
    };
    articleInit();

    $('.modal').modal();

    /*回到顶部*/
    $('#backTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 400);
        return false;
    });

    /*监听滚动条位置*/
    let $nav = $('#headNav');
    let $backTop = $('.top-scroll');
    // 当页面处于文章中部的时候刷新页面，因为此时无滚动，所以需要判断位置,给导航加上绿色。
    showOrHideNavBg($(window).scrollTop());
    $(window).scroll(function () {
        /* 回到顶部按钮根据滚动条的位置的显示和隐藏.*/
        let scroll = $(window).scrollTop();
        showOrHideNavBg(scroll);
    });

    function showOrHideNavBg(position) {
        let showPosition = 100;
        if (position < showPosition) {
            $nav.addClass('nav-transparent');
            $backTop.slideUp(300);
        } else {
            $nav.removeClass('nav-transparent');
            $backTop.slideDown(300);
        }
    }

    	
	$(".nav-menu>li").hover(function(){
		$(this).children('ul').stop(true,true).show();
		 $(this).addClass('nav-show').siblings('li').removeClass('nav-show');
		
	},function(){
		$(this).children('ul').stop(true,true).hide();
		$('.nav-item.nav-show').removeClass('nav-show');
	})
	
    $('.m-nav-item>a').on('click',function(){
            if ($(this).next('ul').css('display') == "none") {
                $('.m-nav-item').children('ul').slideUp(300);
                $(this).next('ul').slideDown(100);
                $(this).parent('li').addClass('m-nav-show').siblings('li').removeClass('m-nav-show');
            }else{
                $(this).next('ul').slideUp(100);
                $('.m-nav-item.m-nav-show').removeClass('m-nav-show');
            }
    });
});
=======
"use strict";$(function(){var t;t="animated pulse",$("article .article").hover(function(){$(this).addClass(t)},function(){$(this).removeClass(t)}),$(".sidenav").sidenav();function e(t,e){var n=$("#"+t);if(0!==n.length){var i=n.width();i+=450<=i?21:350<=i&&i<450?18:300<=i&&i<350?16:14,$("#"+e).width(i)}}function n(){e("navContainer"),e("artDetail","prenext-posts"),$(".content").css("min-height",window.innerHeight-165)}n(),$(window).resize(function(){n()}),$("#articles").masonry({itemSelector:".article"}),AOS.init({easing:"ease-in-out-sine",duration:700,delay:100});!function(){$("#articleContent a").attr("target","_blank"),$("#articleContent img").each(function(){var t=$(this).attr("src");$(this).wrap('<div class="img-item" data-src="'+t+'" data-sub-html=".caption"></div>'),$(this).addClass("img-shadow img-margin");var e=$(this).attr("alt"),n=$(this).attr("title"),i="";if(void 0===e||""===e?void 0!==n&&""!==n&&(i=n):i=e,""!==i){var a=document.createElement("div");a.className="caption";var s=document.createElement("b");s.className="center-caption",s.innerText=i,a.appendChild(s),this.insertAdjacentElement("afterend",a)}}),$("#articleContent, #myGallery").lightGallery({selector:".img-item",subHtmlSelectorRelative:!0});var n=window.document.querySelector(".progress-bar");n&&new ScrollProgress(function(t,e){n.style.width=100*e+"%"})}(),$(".modal").modal(),$("#backTop").click(function(){return $("body,html").animate({scrollTop:0},400),!1});var i=$("#headNav"),a=$(".top-scroll");function s(t){t<100?(i.addClass("nav-transparent"),a.slideUp(300)):(i.removeClass("nav-transparent"),a.slideDown(300))}s($(window).scrollTop()),$(window).scroll(function(){s($(window).scrollTop())}),$(".nav-menu>li").hover(function(){$(this).children("ul").stop(!0,!0).show(),$(this).addClass("nav-show").siblings("li").removeClass("nav-show")},function(){$(this).children("ul").stop(!0,!0).hide(),$(".nav-item.nav-show").removeClass("nav-show")}),$(".m-nav-item>a").on("click",function(){"none"==$(this).next("ul").css("display")?($(".m-nav-item").children("ul").slideUp(300),$(this).next("ul").slideDown(100),$(this).parent("li").addClass("m-nav-show").siblings("li").removeClass("m-nav-show")):($(this).next("ul").slideUp(100),$(".m-nav-item.m-nav-show").removeClass("m-nav-show"))})});
>>>>>>> 4cdc97bc2c9e84186cc4c0b205967907208d5e4c
