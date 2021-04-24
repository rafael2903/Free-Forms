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

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Main>
      <Title>Crie formulários incríveis, de graça</Title>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>Cadastre-se</FormTitle>
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
        <InputContainer>
          <label htmlFor="confirmaSenha">
            Confirme sua senha
            <FormInput
              type="password"
              id="confirmaSenha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        </InputContainer>
        <FormButton type="submit">Criar conta</FormButton>
        <FormLink>
          Já tem conta? <Link to="/login">Faça login</Link>
        </FormLink>
      </FormContainer>
    </Main>
  );
}

export default SignUp;
