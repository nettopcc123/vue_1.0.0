<template>

  <div class="swiper-container">
    <div class="swiper-wrapper"></div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
   mounted:function(){
    this.$nextTick(function(){
        var swiper03 = new swiper('.swiper-container', {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            virtual: {
                slides: (function () {
                var slides = [];
                for (var i = 0; i < 600; i += 1) {
                    slides.push('Slide ' + (i + 1));
                }
                return slides;
                }()),
            },
            });
            document.querySelector('.slide-1').addEventListener('click', function (e) {
            e.preventDefault();
            swiper.slideTo(0, 0);
            });
            document.querySelector('.slide-250').addEventListener('click', function (e) {
            e.preventDefault();
            swiper.slideTo(249, 0);
            });
            document.querySelector('.slide-500').addEventListener('click', function (e) {
            e.preventDefault();
            swiper.slideTo(499, 0);
            });

    })
  }
}
</script>
<style lang="scss">
@import "scss/base.scss";
 .swiper-container {
      width: 100%;
      height: 300px;
      margin: 20px auto;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    .append-buttons {
      text-align: center;
      margin-top: 20px;
    }
    .append-buttons a {
      display: inline-block;
      border: 1px solid #007aff;
      color: #007aff;
      text-decoration: none;
      padding: 4px 10px;
      border-radius: 4px;
      margin: 0 10px;
      font-size: 13px;
    }
</style>