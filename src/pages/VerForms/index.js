import { HiPlusSm } from 'react-icons/hi';
import { FiLink } from 'react-icons/fi';
import { CgCopy } from 'react-icons/cg';
import { FaRegEdit } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';
import ContainerVerForms from '../../components/ContainerVerForms';
import TitleVerForms from '../../components/TitleVerForms';
import HeaderButton from '../../components/HeaderButton';
import ListForms from '../../components/ListForms';
import FormItem from '../../components/FormItem';
import api from '../../services/api';

function VerForms() {
  const forms = [
    { id: 1, title: 'titulo' },
    { id: 2, title: 'titulo' },
    { id: 3, title: 'titulo' },
  ];
  function destroy(id) {
    api.delete(`/forms/${id}`);
  }
  return (
    <ContainerVerForms>
      <div className="ContainerForms">
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
          <FormItem key={form.id}>
            <p>{form.title}</p>
            <div>
              <FiLink size={20} color="white" title="Copiar link" />
              <CgCopy size={20} color="white" title="Duplicar formulário" />
              <IoEyeOutline size={20} color="white" title="Visualizar formulário" />
              <FaRegEdit size={20} color="white" title="Editar formulário" />
              <RiDeleteBin6Line
                size={20}
                color="white"
                title="Excluir formulário"
                onClick={() => destroy(form.id)}
              />
            </div>
          </FormItem>
        ))}
      </ListForms>
    </ContainerVerForms>
  );
}

export default VerForms;
