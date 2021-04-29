import { Container, Tab } from './styles';

function FormHeader() {
  return (
    <Container>
      <Tab>Perguntas</Tab>
      <Tab active>Respostas</Tab>
    </Container>
  );
}

export default FormHeader;
