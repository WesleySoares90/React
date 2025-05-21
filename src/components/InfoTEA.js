import React from 'react';
import styled from 'styled-components';

const InfoSection = styled.section`
  background: #d0f4ff;
  padding: 60px 30px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #2d82b7;
  margin-bottom: 24px;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const Card = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  max-width: 300px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.05);
  text-align: left;
  border-left: 6px solid ${props => props.color || '#2d82b7'};
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
  object-fit: cover;
`;

const CardTitle = styled.h4`
  font-size: 20px;
  color: #0a2239;
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: #444;
  font-size: 14px;
`;

export default function InfoTEA() {
  const cards = [
    {
      color: '#3da5d9',
      title: 'O que é TEA?',
      text: 'O Transtorno do Espectro Autista é uma condição do neurodesenvolvimento que afeta a comunicação, comportamento e interação social.',
      img: '/images/tea-overview.jpg',
      alt: 'Ilustração sobre TEA'
    },
    {
      color: '#f25c54',
      title: 'Sinais Precoces',
      text: 'Evita contato visual, atraso na fala, interesse restrito por objetos ou atividades são sinais comuns a serem observados.',
      img: '/images/tea-signs.jpg',
      alt: 'Representação de sinais precoces'
    },
    {
      color: '#06d6a0',
      title: 'Importância do Diagnóstico',
      text: 'O diagnóstico precoce permite intervenções terapêuticas que promovem mais autonomia e qualidade de vida.',
      img: '/images/tea-diagnosis.jpg',
      alt: 'Ilustração de diagnóstico'
    },
    {
      color: '#ffd166',
      title: 'Como Ajudar?',
      text: 'Compreensão, empatia e acolhimento são essenciais para a inclusão e desenvolvimento de pessoas com TEA.',
      img: '/images/tea-support.jpg',
      alt: 'Suporte e empatia'
    }
  ];

  return (
    <InfoSection id="info">
      <Title>Entendendo o TEA</Title>
      <Content>
        {cards.map(({ color, title, text, img, alt }) => (
          <Card key={title} color={color}>
            <CardImage src={img} alt={alt} />
            <CardTitle>{title}</CardTitle>
            <Text>{text}</Text>
          </Card>
        ))}
      </Content>
    </InfoSection>
  );
}
