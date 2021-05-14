import { HiPlusSm } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import TitleVerForms from '../TitleVerForms';
import Button from '../Button';

function ListHeader({ title, createForm }) {
  return (
    <Container>
      <TitleVerForms>{title}</TitleVerForms>
      {createForm && (
        <div className="ButtonsContainer">
          <Button as={Link} to="/forms/create">
            <HiPlusSm size={30} />
            Criar novo formulário
          </Button>
        </div>
      )}
    </Container>
  );
}

export default ListHeader;
