import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 60px 40px;
  background: #e1eef9;
`;

const Title = styled.h3`
  font-size: 28px;
  text-align: center;
  color: #2d82b7;
  margin-bottom: 40px;
`;

const List = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  min-width: 250px;
`;

const Icon = styled.span`
  font-size: 24px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #333;
`;

export default function Contact() {
  return (
    <ContactSection id="contact">
      <Title>Contato</Title>
      <List>
        <Item>
          <Icon>📍</Icon>
          <Text>Rua Exemplar, 123, Cidade - RJ</Text>
        </Item>
        <Item>
          <Icon>✉️</Icon>
          <Text>contato@neuropassos.com</Text>
        </Item>
        <Item>
          <Icon>📞</Icon>
          <Text>+55 21 99999-9999</Text>
        </Item>
      </List>
    </ContactSection>
  );
}
