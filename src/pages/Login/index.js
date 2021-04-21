import FormContainer from '../../components/FormContainer/styles';
import Main from '../../components/Main';
import FormTitle from '../../components/FormTitle/styles';
import { Title } from '../../components/Title/styles';
import FormInput from '../../components/FormInput/style';

function Login() {
  return (
    <Main>
      <Title>Crie formulários incríveis, de graça</Title>
      <FormContainer>
        <FormTitle>Faça login</FormTitle>
        <label htmlFor="email">
          E-mail
          <FormInput type="email" id="email" />
        </label>
        <label htmlFor="senha">
          Senha
          <FormInput type="password" id="senha" />
        </label>
      </FormContainer>
    </Main>
  );
}

export default Login;
