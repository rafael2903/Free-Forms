import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import FormContainer from '../../components/Authentication/FormContainer';
import Main from '../../components/Authentication/Main';
import FormTitle from '../../components/Authentication/FormTitle';
import Title from '../../components/Authentication/Title';
import FormInput from '../../components/Authentication/FormInput';
import InputContainer from '../../components/Authentication/InputContainer';
import FormButton from '../../components/Authentication/FormButton';
import FormLink from '../../components/Authentication/FormLink';
import api from '../../services/api';
import { login } from '../../services/auth';
import FormError from '../../components/Authentication/FormError';

// EU02 EU06
function Login({ setLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    api
      .post('/user/auth', { email, password })
      .then((response) => response.data)
      .then((data) => {
        login(data.id, data.is_admin);
        setLoggedIn(true);
      })
      .catch(() => setError(true));
  }

  return (
    <Main>
      <Title>Crie formulários incríveis, de graça</Title>
      <FormContainer onSubmit={handleSubmit} data-testid="form">
        <FormTitle>Faça login</FormTitle>
        <InputContainer>
          <label htmlFor="email">
            Email
            <FormInput
              type="email"
              id="email"
              alt="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">
            Senha
            <FormInput
              type="password"
              id="password"
              alt="senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </InputContainer>
        {error && <FormError>Email ou senha inválidos</FormError>}
        <FormButton type="submit">Entrar</FormButton>
        <FormLink>
          Ainda não tem conta? <Link to="/signup">Criar conta</Link>
        </FormLink>
      </FormContainer>
    </Main>
  );
}

export default Login;
