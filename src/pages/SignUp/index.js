import FormContainer from '../../components/FormContainer';
import Main from '../../components/Main';
import FormTitle from '../../components/FormTitle';
import Title from '../../components/Title';
import FormInput from '../../components/FormInput';
/* eslint-disable jsx-a11y/label-has-associated-control */

function SignUp() {
  return (
    <Main>
      <Title>Crie formulários incríveis, de graça</Title>
      <FormContainer>
        <FormTitle>Cadastre-se</FormTitle>
        <label htmlFor="email">
          E-mail
          <FormInput type="email" id="email" />
        </label>
        <label htmlFor="senha">
          Senha
          <FormInput type="password" id="senha" />
        </label>
        <label htmlFor="confirmaSenha">
          Confirme sua senha
          <FormInput type="password" id="confirmaSenha" />
        </label>
      </FormContainer>
    </Main>
  );
}

export default SignUp;
