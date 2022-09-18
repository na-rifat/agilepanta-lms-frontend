import "slick-carousel";

const parent = $(`.testimonials`);
const slider = parent.find(`.items .inner`);
const btnPrev = parent.find(`.btn-prev`);
const btnNext = parent.find(`.btn-next`);

slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    arrows: false,
});

btnPrev.on(`click`, function (e) {
    slider.slick(`slickPrev`);
});
btnNext.on(`click`, function (e) {
    slider.slick(`slickNext`);
});
