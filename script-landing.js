//movie desc;
var titles = {
    0: {
        title: "it ends",
        subTitle: "Horror-Drama movie",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, praesentium impedit labore corrupti odio accusamus delectus libero, perspiciatis numquam iste similique laboriosam tenetur quo nulla.",
        videoURL: "it.mp4"
    },
    1: {
        title: "Loki",
        subTitle: "Television series",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, praesentium impedit labore corrupti odio accusamus delectus libero, perspiciatis numquam iste similique laboriosam tenetur quo nulla.",
        videoURL: "loki.mp4"
    },
    2: {
        title: "Kong Skull Island",
        subTitle: "Action/Adventure",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, praesentium impedit labore corrupti odio accusamus delectus libero, perspiciatis numquam iste similique laboriosam tenetur quo nulla.",
        videoURL: "Kong.mp4"
    },
    3: {
        title: "Godzilla the King of Monsters",
        subTitle: "Action/Adventure",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, praesentium impedit labore corrupti odio accusamus delectus libero, perspiciatis numquam iste similique laboriosam tenetur quo nulla.",
        videoURL: "Godzilla.mp4"
    },
    4: {
        title: "Iron Man",
        subTitle: "Action/Adventure",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, praesentium impedit labore corrupti odio accusamus delectus libero, perspiciatis numquam iste similique laboriosam tenetur quo nulla.",
        videoURL: "Ironman.mp4"
    },
    5: {
        title: "The Witcher",
        subTitle: "Action/Adventure/Television series",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, praesentium impedit labore corrupti odio accusamus delectus libero, perspiciatis numquam iste similique laboriosam tenetur quo nulla.",
        videoURL: "Wtcher.mp4"
    }
}

//swiper
//create thumbs swiper
var thumbsSwiper = new Swiper(".thumbsSwiper",{
    // spaceBetween: 10,
    slidesPerView: 5,
    breakpoints:{
        200:{
            slidesPerView: 1.5
        },
        400:{
            slidesPerView: 1.5
        },
        600:{
            slidesPerView: 3
        },
        1100:{
            slidesPerView: 5
        },
    },
    freeMode: true,
    watchSlidesProgress: true,
});

const swiper = new Swiper(".bannerSwiper", {

    spaceBetween: 0,
    effect:"fade",

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    //make thumbs slider works as thumbs for the banner slider
    thumbs:{
        swiper: thumbsSwiper
    }
});