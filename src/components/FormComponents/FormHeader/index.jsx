import { NavLink } from 'react-router-dom';
import { Container } from './styles';

// EU05
function FormHeader({ match }) {
  return (
    <Container>
      <NavLink id="questions" exact to={`${match.url}/edit`}>
        Perguntas
      </NavLink>
      <NavLink
        id="answers"
        exact
        to={`${match.url}/answers/summary`}
        isActive={(match2, location) => location?.pathname.includes('answers')}
      >
        Respostas
      </NavLink>
    </Container>
  );
}

export default FormHeader;
