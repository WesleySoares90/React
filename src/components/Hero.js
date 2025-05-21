import React from 'react';
import styled from 'styled-components';
import { FaCalendarAlt } from 'react-icons/fa';

const HeroSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #d0f4ff, #e1eef9);
  gap: 40px;
  justify-content: center;
`;

const TextBox = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 550px;
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.05);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2d82b7;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 24px;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: #06d6a0;
  color: white;
  padding: 14px 24px;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;

  &:hover {
    background-color: #029e74;
  }

  svg {
    margin-right: 8px;
  }
`;

const Image = styled.img`
  flex: 1;
  min-width: 280px;
  max-width: 380px;
  border-radius: 12px;
`;

export default function Hero() {
  return (
    <HeroSection>
      <TextBox>
        <Title>Suporte Especializado para Crianças com TEA</Title>
        <Subtitle>
          Acompanhamento psicológico e neuropsicológico para o bem-estar e desenvolvimento da criança.
        </Subtitle>
        <Button href="#contact">
          <FaCalendarAlt /> Agende uma Avaliação
        </Button>
      </TextBox>
      <Image src="/images/family2.jpg" alt="Família feliz" />
    </HeroSection>
  );
}
