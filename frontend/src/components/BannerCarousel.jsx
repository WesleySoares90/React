import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styled, { keyframes } from 'styled-components';

const BannerWrapper = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  overflow: hidden;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  } 
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MessageOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  padding: 20px 40px;
  border-radius: 10px;
  text-align: center;
  z-index: 10;
  max-width: 90vw;

  animation: ${fadeIn} 1.2s ease forwards;
`;

const MessageText = styled.h2`
  font-size: 36px; /* fonte maior */
  color: white;
  margin: 0 0 20px 0;
  text-shadow: 0 0 10px rgba(45, 130, 183, 0.9);
`;

const Button = styled.button`
  padding: 12px 28px;
  font-size: 18px;
  color: #2d82b7;
  border: 2px solid #2d82b7;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  animation: ${fadeIn} 1.6s ease forwards;

  &:hover {
    background: #2d82b7;
    color: white;
  }
`;

export default function BannerCarousel() {
  return (
    <BannerWrapper>
      <MessageOverlay>
        <MessageText>Encontre especialistas e orientação</MessageText>
        <Button>Saiba Mais</Button>
      </MessageOverlay>

      <StyledSwiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        loop
      >
        <SwiperSlide>
          <SlideImage src="/images/banner1.jpg" alt="Banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage src="/images/banner2.jpg" alt="Banner 2" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage src="/images/banner1.jpg" alt="Banner 3" />
        </SwiperSlide>
      </StyledSwiper>
    </BannerWrapper>
  );
}
