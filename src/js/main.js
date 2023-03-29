import Alpine from 'alpinejs';
import AlpineI18n from "alpinejs-i18n";
import { copyLink } from './vendor/copyLink';
import { injuredSwiper } from "./components/injuredSwiper";
import { popUp } from "./components/popUp";
import { stickyButton } from "./components/sticky-button";
import './_vendor';

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

Alpine.data("copyLink", copyLink);
Alpine.data("popUp", popUp);
Alpine.data("stickyButton", stickyButton);
window.Alpine = Alpine;
Alpine.plugin(AlpineI18n);
Alpine.start();
injuredSwiper();
