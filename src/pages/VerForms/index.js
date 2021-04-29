import { HiPlusSm } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import ContainerVerForms from '../../components/ContainerVerForms';
import TitleVerForms from '../../components/TitleVerForms';
import Button from '../../components/Button';
import ListForms from '../../components/ListForms';
import FormItem from '../../components/FormItem';

function VerForms() {
  const forms = [
    { id: 1, title: 'Formulário sem título 1' },
    { id: 2, title: 'Formulário sem título 2' },
    { id: 3, title: 'Formulário sem título 3' },
  ];
  return (
    <ContainerVerForms>
      <div>
        <TitleVerForms>Meus formulários</TitleVerForms>
        <div className="ButtonsContainer">
          <Button>Compartilhados comigo</Button>
          <Button as={Link} to="/form/create">
            <HiPlusSm size={30} />
            Criar novo formulário
          </Button>
        </div>
      </div>
      <ListForms>
        {forms.map((form) => (
          <FormItem>{form.title}</FormItem>
        ))}
      </ListForms>
    </ContainerVerForms>
  );
}

export default VerForms;
