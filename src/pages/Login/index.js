import { Link } from 'react-router-dom';
import { useState } from 'react';
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

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    api
      .post('/user/auth', { email, password })
      .then((response) => response.data)
      .then((data) => login(data.id, data.is_admin))
      .catch(() => {});
  }

  return (
    <Main>
      <Title>Crie formulários incríveis, de graça</Title>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>Faça login</FormTitle>
        <InputContainer>
          <label htmlFor="email">
            E-mail
            <FormInput
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </InputContainer>
        <InputContainer>
          <label htmlFor="senha">
            Senha
            <FormInput
              type="password"
              id="senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </InputContainer>
        <FormButton type="submit">Entrar</FormButton>
        <FormLink>
          Ainda não tem conta? <Link to="/signup">Criar conta</Link>
        </FormLink>
      </FormContainer>
    </Main>
  );
}

export default Login;
