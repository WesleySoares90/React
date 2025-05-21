import React, { useState, useEffect } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Arial', sans-serif;
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: padding 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  z-index: 1000;

  ${props => props.scrolled && css`
    padding: 12px 40px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    background: rgba(255,255,255,0.95);
  `}
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #2d82b7;
  font-weight: bold;
`;

const Menu = styled.div`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: #0a2239;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: #f25c54;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 15px;
`;

const AuthLink = styled.button`
  background: transparent;
  padding: 8px 16px;
  border: 2px solid #2d82b7;
  border-radius: 8px;
  color: #2d82b7;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2d82b7;
    color: white;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  position: relative;
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  color: #999;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  padding: 14px;
  background: #2d82b7;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #266f9d;
  }
`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 👉 Login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const senha = e.target[1].value;

    try {
      const res = await fetch("http://localhost:8080/api/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const isValid = await res.json();

      if (isValid) {
        alert("Login bem-sucedido!");
        setShowLogin(false);
      } else {
        alert("Email ou senha incorretos.");
      }
    } catch (err) {
      console.error("Erro ao fazer login:", err);
      alert("Erro ao conectar com o servidor.");
    }
  };

  // 👉 Cadastro
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const nome = e.target[0].value;
    const email = e.target[1].value;
    const senha = e.target[2].value;

    try {
      const res = await fetch("http://localhost:8080/api/usuarios/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
      });

      if (res.ok) {
        alert("Cadastro realizado com sucesso!");
        setShowRegister(false);
      } else {
        alert("Erro ao cadastrar.");
      }
    } catch (err) {
      console.error("Erro ao cadastrar:", err);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <>
      <GlobalStyle />
      <Nav scrolled={scrolled}>
        <Logo>Neuropassos</Logo>
        <Menu>
          <MenuItem href="#">Início</MenuItem>
          <MenuItem href="#about">Sobre</MenuItem>
          <MenuItem href="#services">Serviços</MenuItem>
          <MenuItem href="#contact">Contato</MenuItem>
        </Menu>
        <AuthButtons>
          <AuthLink onClick={() => setShowLogin(true)}>Login</AuthLink>
          <AuthLink onClick={() => setShowRegister(true)}>Cadastro</AuthLink>
        </AuthButtons>
      </Nav>

      {/* Modal de Login */}
      {showLogin && (
        <ModalOverlay onClick={() => setShowLogin(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseIcon size={20} onClick={() => setShowLogin(false)} />
            <h2>Login</h2>
            <Form onSubmit={handleLoginSubmit}>
              <Input type="email" placeholder="E-mail" required />
              <Input type="password" placeholder="Senha" required />
              <SubmitButton type="submit">Entrar</SubmitButton>
            </Form>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Modal de Cadastro */}
      {showRegister && (
        <ModalOverlay onClick={() => setShowRegister(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseIcon size={20} onClick={() => setShowRegister(false)} />
            <h2>Cadastro</h2>
            <Form onSubmit={handleRegisterSubmit}>
              <Input type="text" placeholder="Nome Completo" required />
              <Input type="email" placeholder="E-mail" required />
              <Input type="password" placeholder="Senha" required />
              <SubmitButton type="submit">Cadastrar</SubmitButton>
            </Form>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}
