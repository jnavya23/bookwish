$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY> 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });

    $('.btn-menu').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.btn-menu i').toggleClass("active");
    });

    var typed = new Typed(".typing",{
        strings: ["The little red book", "Harry Potter", "Goosebumps", "Diary of Wimpy kids"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    // owl carousel

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autplayTimeOut:2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items: 3,
                nav:false
            }
    }

    });
});

let itms = 6; // itemsPerPage
let stpg = 1; // startPage
let pltd = 4; // pageLinksToDisplay
let winw = window.innerWidth; 

function optionsByWindowSize() {
	winw = window.innerWidth;
	if (winw > 1600) { itms = 6; stpg = 1; pltd = 4; }
	else if (winw > 1230) { itms = 5; stpg = 2; pltd = 4; }
	else if (winw > 980) { itms = 4; stpg = 3; pltd = 4; }
	else if (winw > 750) { itms = 3; stpg = 4; pltd = 4; }
	else if (winw > 510) { itms = 2; stpg = 5; pltd = 4; }
	else { itms = 1; stpg = 6; pltd = 1; }
}

function reportWindowSize() {
	optionsByWindowSize();
	//purePajination Script - START
	if (document.readyState === "complete") {
		var gall = new purePajinate({ 
			containerSelector: '.items', 
			itemSelector: '.items > div', 
			navigationSelector: '.pagination',
			/*wrapAround: true,*/ 
			pageLinksToDisplay: pltd,
			showFirstLast: true,
			navLabelPrev: '&nbsp;&nbsp;&nbsp;',
			navLabelNext: '&nbsp;&nbsp;&nbsp;',
			navLabelFirst: '&nbsp;&nbsp;&nbsp;',
			navLabelLast: '&nbsp;&nbsp;&nbsp;',
			itemsPerPage: itms,
			startPage: stpg
		});
	} //purePajination Script - END
}

document.onreadystatechange = reportWindowSize;				
window.onresize = reportWindowSize;