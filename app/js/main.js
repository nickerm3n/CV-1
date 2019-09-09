'use strict';

(function($){
	$(document).ready(function() {
		
	});
})(jQuery);
// StickyHeader variables
var navigationBar = document.getElementById('navigation__bar'),
sticky = navigationBar.offsetTop;
$(window).resize(function() {
	var heightDifference =  $(window).height() - sticky;
	sticky = sticky + heightDifference;
});
// StickyHeader events
window.onscroll = stickyHeader;
window.onload =  stickyHeader;
//Windows variables and events
var showCertificateBtn = document.getElementsByClassName("education__button")[0],
	showModal = document.getElementsByClassName("skills__open")[0],
	hideModal = document.getElementsByClassName("modal__close")[0],	
	hideCertificateBtn = document.getElementsByClassName("education__window-close")[0];
	showCertificateBtn.addEventListener('click',showCertificate);
	showCertificateBtn.addEventListener('click',hideHeader);
	hideCertificateBtn.addEventListener('click',showHeader);
	hideCertificateBtn.addEventListener('click',hideCertificate);
	showModal.addEventListener('click',hideHeaderLeft);
	hideModal.addEventListener('click',showHeaderLeft);
// functions

function stickyHeader() {
	if (window.pageYOffset > sticky) {
		navigationBar.classList.add("navigation__bar--fixed");
	} else {
		navigationBar.classList.remove("navigation__bar--fixed");
	}
};

function showCertificate() {
	var shadow = document.getElementsByClassName("education__shadow")[0];
		shadow.classList.remove("education__shadow--hidden");
		$('.education__shadow').animate({opacity: '1'},400);
		setTimeout(addMargins, 300);
		setTimeout(function(){
 			$('.education__window').removeClass('education__window-hidden');
 			$('.education__window').animate({top: '5vh'},200);
		}, 300);
};

function hideCertificate() {
	
	$('.education__window').animate({top:'105vh'},200);
	setTimeout(function() {
		$('.education__window').addClass('education__window-hidden');
		$('.education__shadow').animate({opacity: '0'},200);
	setTimeout(function() {
		$('.education__shadow').addClass('education__shadow--hidden');
	},250);
	}, 250);
	setTimeout(removeMargins, 500);
	
}

function hideHeader() {
	$('.navigation__bar').animate({top: '-250px'},200);
	
}
function hideHeaderLeft() {
	$('.navigation__bar').addClass('navigation__bar--notransition');
	$('.navigation__bar').animate({right: '-120vw', opacity: '0' },500);
}
function showHeaderLeft() {
	$('.navigation__bar').removeClass('navigation__bar--notransition');
	// setTimeout(function() {
		$('.navigation__bar').animate({right: '0vw', opacity: '1' },500);
	// },300);
	
}
function showHeader() {
	$('.navigation__bar').animate({top: '0px'},200);
}
function headerJumpFix() {
	$('.navigation__bar').addClass('navigation__bar--margin');
	setTimeout(function() {
		$('.navigation__bar').removeClass('navigation__bar--margin');
	}, 300);
}

function addMargins() {
// adding margins 
		document.body.classList.add("scroll-disabled");  
		document.getElementsByClassName("skills")[0].classList.add("skills--margin");
		document.getElementsByClassName("education")[0].classList.add("education--margin");
		// document.getElementsByClassName("portfolio")[0].classList.add("portfolio--margin");

}
function removeMargins() {
// removing margins 
		document.body.classList.remove("scroll-disabled");  
		document.getElementsByClassName("skills")[0].classList.remove("skills--margin");
		document.getElementsByClassName("education")[0].classList.remove("education--margin");
		// document.getElementsByClassName("portfolio")[0].classList.remove("portfolio--margin");

}

