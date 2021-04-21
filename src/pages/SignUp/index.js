import { Container } from '../../components/FormContainer/styles';
import Main from '../../components/Main';
import FormTitle from '../../components/FormTitle/styles';
import { Title } from '../../components/Title/style';
import FormInput from '../../components/FormInput/style';

function SignUp() {
  return (
    <Main>
      <Title>Crie formulários incríveis, de graça</Title>
      <Container>
        <FormTitle>Cadastre-se</FormTitle>
        <FormInput type="email" />
        <FormInput type="password" />
        <FormInput type="password" />
      </Container>
    </Main>
  );
}

export default SignUp;
