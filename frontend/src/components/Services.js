import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 60px 40px;
  background: #ffffff;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 28px;
  color: #2d82b7;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: #f0f4f8;
  padding: 25px 20px;
  border-radius: 8px;
  width: 300px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }
`;

const Icon = styled.div`
  font-size: 42px;
  margin-bottom: 15px;
`;

const CardTitle = styled.h4`
  font-size: 22px;
  color: #f25c54;
  margin-bottom: 15px;
`;

const CardText = styled.p`
  font-size: 15px;
  color: #555;
`;

export default function Services() {
  return (
    <ServicesSection id="services">
      <Title>Nossos Serviços</Title>
      <Grid>
        <Card>
          <Icon>🧩</Icon>
          <CardTitle>Avaliação do Espectro Autista</CardTitle>
          <CardText>Diagnóstico detalhado com apoio profissional e humanizado.</CardText>
        </Card>
        <Card>
          <Icon>🧠</Icon>
          <CardTitle>Terapia Comportamental</CardTitle>
          <CardText>Desenvolvimento de habilidades sociais e emocionais.</CardText>
        </Card>
        <Card>
          <Icon>🤝</Icon>
          <CardTitle>Apoio às Famílias</CardTitle>
          <CardText>Orientação para pais e cuidadores em todas as fases.</CardText>
        </Card>
      </Grid>
    </ServicesSection>
  );
}
