import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

export const hero = () => ({
    open: false,
    init() {
        new Swiper('.swiper', {
            slidesPerView: 1,
        });
    }
});
