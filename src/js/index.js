import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

Swiper.use([Pagination, Autoplay]);

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
});
