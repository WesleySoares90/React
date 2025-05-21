import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 60px 40px;
  background: #f0f4f8;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 28px;
  color: #2d82b7;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 16px;
  max-width: 800px;
  margin: 0 auto;
  color: #444;
`;

export default function About() {
  return (
    <AboutSection id="about">
      <Title>Sobre Nós</Title>
      <Text>
        Somos uma equipe especializada em apoiar crianças com TEA e suas famílias. Oferecemos cuidado psicológico e neuropsicológico para promover autonomia e qualidade de vida.
      </Text>
    </AboutSection>
  );
}
