import FormContainer from '../../components/FormContainer';
import Main from '../../components/Main';
import FormTitle from '../../components/FormTitle';
import Title from '../../components/Title';
import FormInput from '../../components/FormInput';

function SignUp() {
  return (
    <Main>
      <Title>Crie formulários incríveis, de graça</Title>
      <FormContainer>
        <FormTitle>Cadastre-se</FormTitle>
        <FormInput type="email" />
        <FormInput type="password" />
        <FormInput type="password" />
      </Container>
    </Main>
  );
}

export default SignUp;
