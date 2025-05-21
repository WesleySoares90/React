import React from 'react';
import Header from '../components/Header';
import BannerCarousel from '../components/BannerCarousel';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import InfoTEA from '../components/InfoTEA'; 
import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f0f4f8;
  color: #0a2239;
`;

export default function Home() {
  return (
    <Container>
      <Header />
      <BannerCarousel />
      <Hero />
      <About />
      <InfoTEA /> 
      <Services />
      <Contact />
      <Footer />
    </Container>
  );
}