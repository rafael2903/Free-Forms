import { NavLink } from 'react-router-dom';
import { Container } from './styles';

// EU05
function FormNav({ match }) {
  return (
    <Container>
      <NavLink exact activeClassName="active" to={`${match.url}/summary`}>
        Resumo
      </NavLink>
      <NavLink exact activeClassName="active" to={`${match.url}/individual`}>
        Individual
      </NavLink>
    </Container>
  );
}

export default FormNav;
