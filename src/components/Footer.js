import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background: #ffffff;
  text-align: center;
  padding: 20px 10px;
  font-size: 14px;
  color: #777;
  border-top: 2px solid #ffd166;
`;

export default function Footer() {
  return (
    <FooterSection>
      © {new Date().getFullYear()} Neuropassos. Todos os direitos reservados.
    </FooterSection>
  );
}
