import Alpine from 'alpinejs';
import AlpineI18n from "alpinejs-i18n";
import { locales } from './vendor/locales';
import { copyLink } from './vendor/copyLink';
import { injuredSwiper } from "./components/injuredSwiper";
// import 'swiper/css';
import { popUp } from "./components/popUp";
import { stickyButton } from "./components/sticky-button";
import './_vendor';
import { headerMenu } from './store/headerMenu';
import { hero } from './components/hero';

let locale = "en";
let country = "en";

function checkLocale() {
	if (locale === 'be') {
		locale = 'fr';
		country = 'be';
		return;
	}
	if (!locales[`${locale}`]) {
		locale = "en";
	}
	country = locale;
}
  
function setLanguage() {
	let params = new URL(document.location).searchParams;
	let searchLang = params.get("lang");

	if (searchLang) {
		locale = searchLang;
		checkLocale();
		return
	}

	if(!window.localStorage.getItem("location")) {
		$.get(
		"https://ipinfo.io?token=9b63d6ffe0f230",
		function (response) {
				if (response.country) {
				window.localStorage.setItem("location",response.country.toLowerCase());
				}
				document.location.reload();
		},
		"jsonp"
		);
	}

	if (window.localStorage.getItem("location")) locale = window.localStorage.getItem("location").toLowerCase() || "en";
	checkLocale();
}

// function setVideoSrc() {
//   const videoSourse = document.querySelector("#superhumans-video source");
//   locale == "ua"
//     ? videoSourse.setAttribute(
//         "src",
//         "https://cdn.shopify.com/videos/c/o/v/058a5bc5d00b49bcabcf2b725f07834a.mp4"
//       )
//     : videoSourse.setAttribute(
//         "src",
//         "https://cdn.shopify.com/videos/c/o/v/df4d06d8752246f19007ea4d7fe74229.mp4"
//       );

//   document.querySelector("#superhumans-video").load();
// }

setLanguage();
// setVideoSrc();

jQuery.fn.clickToggle = function (a, b) {
  return this.on("click", function (ev) {
    [b, a][(this.$_io ^= 1)].call(this, ev);
  });
};

$("#superhumans-video").clickToggle(
  function (e) {
    e.preventDefault();
    $(this)[0].webkitExitFullscreen();
    $(this)[0].pause();
  },
  function (e) {
    e.preventDefault();
    $(this)[0].webkitEnterFullscreen();
    $(this)[0].play();
  },
);

$("#video-play-btn").on("click", function (e) {
  e.preventDefault();
  $("#superhumans-video")[0].webkitEnterFullscreen();
  $("#superhumans-video")[0].play();
  $("#superhumans-video").removeClass("superhumans-video");  
});

document.addEventListener("alpine-i18n:ready", function () {
  window.AlpineI18n.create(locale, locales);
});

Alpine.store("language", { lang: country });
Alpine.data("copyLink", copyLink);
Alpine.data("popUp", popUp);
Alpine.data("stickyButton", stickyButton);
window.Alpine = Alpine;
Alpine.plugin(AlpineI18n);
Alpine.start();
injuredSwiper();
