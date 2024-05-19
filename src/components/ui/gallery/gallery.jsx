import React, { useState, useRef } from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import 'swiper/css';
import LeftArrow from '../../../assets/left-arrow.svg?react';

import {
  SliderWrapper,
  StyledSwiper,
  StyledSwiperMini,
  StyleSlide,
  StyleSlideMini,
  StyledButtonLeft,
  StyledButtonRight,
  RightArrow
} from "./styles";

function Gallery({
  slides = [] // список слайдов, каждый слайд — это src картинки и alt
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return slides?.length ? (
    <>

      <StyledSwiper
        modules={[Thumbs]}
        onSlideChange={(slider) => setActiveSlide(slider.realIndex)}
        spaceBetween={20}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        loop
      >

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <StyleSlide
              src={slide.src}
              alt={slide.alt}
              width={728}
              height={408}
            />
          </SwiperSlide>
        ))}

      </StyledSwiper>

      <SliderWrapper>

      <StyledSwiperMini
          modules={[Navigation]}
          onSwiper={(e) => {
            setThumbsSwiper(e);
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          onInit={(swiper) => {
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          spaceBetween={20}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          loop
          navigation={{
            enabled: true,
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <StyleSlideMini
                $active={activeSlide === index}
                src={slide.src}
                alt={slide.alt}
              />
            </SwiperSlide>
          ))}
        </StyledSwiperMini>

        <StyledButtonLeft ref={ navigationPrevRef }>
          <LeftArrow />
        </StyledButtonLeft>

        <StyledButtonRight ref={ navigationNextRef }>
          <RightArrow />
        </StyledButtonRight>

      </SliderWrapper>

    </>
  ) : null;
}

export default Gallery;
