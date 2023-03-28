import Alpine from 'alpinejs';
// import AlpineI18n from "alpinejs-i18n";
import './_vendor';
import { headerMenu } from './store/headerMenu';
import { hero } from './components/hero';
// import { content } from './vendor/content';

document.addEventListener('alpine:init', () => {
    // alpine store
    Alpine.store('headerMenu', headerMenu)
    // alpine store end

    // alpine data
    Alpine.data('hero', hero);
})

// document.addEventListener("alpine-i18n:ready", function () {
//     let locale = "en";
//     window.AlpineI18n.create(locale, content);
// });

window.Alpine = Alpine
// Alpine.plugin(AlpineI18n);

Alpine.start()
