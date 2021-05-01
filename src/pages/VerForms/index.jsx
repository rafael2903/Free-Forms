/* eslint-disable no-unused-vars */

import { HiPlusSm } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { FiLink } from 'react-icons/fi';
import { CgCopy } from 'react-icons/cg';
import { FaRegEdit } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useState } from 'react';
import TitleVerForms from '../../components/TitleVerForms';
import Button from '../../components/Button';
import ListForms from '../../components/ListForms';
import FormItem from '../../components/FormItem';
import api from '../../services/api';
import ContainerVerForms from '../../components/ContainerVerForms';
import StatusMessage from '../../components/StatusMessage';

function VerForms() {
  const forms = [
    { id: 1, title: 'Formulário sem título 1' },
    { id: 2, title: 'Formulário sem título 2' },
    { id: 3, title: 'Formulário sem título 3' },
  ];

  // const [forms, setForms] = useState([]);

  function destroy(id) {
    api.delete(`/forms/${id}`);
  }
  return (
    <ContainerVerForms>
      <div className="ContainerForms">
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
        {forms.length ? (
          forms.map((form) => (
            <FormItem key={form.id} to={`/forms/edit/${form.id}`}>
              <p>{form.title}</p>
              <div>
                <FiLink className="link" title="Copiar link" />
                <CgCopy className="duplicate" title="Duplicar formulário" />
                <IoEyeOutline className="view" title="Visualizar formulário" />
                <FaRegEdit className="edit" title="Editar formulário" />
                <RiDeleteBin6Line
                  className="delete"
                  title="Excluir formulário"
                  onClick={() => destroy(form.id)}
                />
              </div>
            </FormItem>
          ))
        ) : (
          <StatusMessage>Você ainda não criou nenhum formulário</StatusMessage>
        )}
      </ListForms>
    </ContainerVerForms>
  );
}

export default VerForms;
