import { BiErrorCircle } from 'react-icons/bi';
import { FiCheckCircle } from 'react-icons/fi';
import { Container } from './styles';

function Alert({ error, children }) {
  if (error) {
    return (
      <Container error>
        <BiErrorCircle className="error-circle" />
        <p>{children}</p>
      </Container>
    );
  }
  return (
    <Container>
      <FiCheckCircle />
      <p>{children}</p>
    </Container>
  );
}

export default Alert;
