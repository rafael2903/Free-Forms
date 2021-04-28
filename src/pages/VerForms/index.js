import { HiPlusSm } from 'react-icons/hi';
import ContainerVerForms from '../../components/ContainerVerForms';
import TitleVerForms from '../../components/TitleVerForms';
import HeaderButton from '../../components/HeaderButton';
import ListForms from '../../components/ListForms';
import FormItem from '../../components/FormItem';

function VerForms() {
  const forms = [
    { id: 1, title: 'titulo' },
    { id: 2, title: 'titulo' },
    { id: 3, title: 'titulo' },
  ];
  return (
    <ContainerVerForms>
      <div>
        <TitleVerForms>Meus formulários</TitleVerForms>
        <div className="ButtonsContainer">
          <HeaderButton>Compartilhados comigo</HeaderButton>
          <HeaderButton>
            <HiPlusSm size={30} />
            Criar novo formulário
          </HeaderButton>
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
