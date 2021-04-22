import { Link } from 'react-router-dom';
import { useState } from 'react';
import FormContainer from '../../components/FormContainer';
import Main from '../../components/Main';
import FormTitle from '../../components/FormTitle';
import Title from '../../components/Title';
import FormInput from '../../components/FormInput';
import InputContainer from '../../components/InputContainer';
import FormButton from '../../components/FormButton';
import FormLink from '../../components/FormLink';
/* eslint-disable jsx-a11y/label-has-associated-control */
function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Main>
      <Title>Crie formulários incríveis, de graça</Title>
      <FormContainer>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </InputContainer>
        <FormButton type="submit">Criar conta</FormButton>
        <FormLink>
          Já tem conta? <Link to="/signup">Faça login</Link>
        </FormLink>
      </FormContainer>
    </Main>
  );
  j;
}

export default SignUp;
