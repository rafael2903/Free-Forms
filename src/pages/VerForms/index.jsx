/* eslint-disable no-unused-vars */

import { HiPlusSm } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { FiLink } from 'react-icons/fi';
import { CgCopy } from 'react-icons/cg';
import { FaRegEdit } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import TitleVerForms from '../../components/TitleVerForms';
import Button from '../../components/Button';
import ListForms from '../../components/ListForms';
import FormItem from '../../components/FormItem';
import api from '../../services/api';
import ContainerVerForms from '../../components/ContainerVerForms';
import StatusMessage from '../../components/StatusMessage';
import EditLink from '../../components/EditLink';
import Snackbar from '../../components/Snackbar';
import Alert from '../../components/Alert';

function VerForms() {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionsError, setActionsError] = useState('');
  const [actionsSuccess, setActionsSuccess] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    api
      .get('/forms')
      .then((res) => res.data)
      .then((data) => {
        const jsonForm = data.map((form) => ({
          id: form.id,
          title: JSON.parse(form.question).hash.title,
        }));
        setForms(jsonForm);
        setLoading(false);
      })
      .catch(() => {
        setError('Não foi possível carregar seus formulários');
        setLoading(false);
      });
  }, [refreshKey]);

  function destroy(id) {
    api
      .delete(`/forms/${id}`)
      .then(() => {
        setRefreshKey((oldKey) => oldKey + 1);
        setActionsSuccess('Formulário excluído');
      })
      .catch(() => {
        setActionsError('Não foi possível excluir o formulário');
      });
  }

  function statusMessage() {
    if (loading) return <StatusMessage loading />;
    if (error) return <StatusMessage error>{error}</StatusMessage>;
    return <StatusMessage>Você ainda não criou nenhum formulário</StatusMessage>;
  }

  return (
    <>
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
          {forms.length
            ? forms.map((form) => (
                <FormItem key={form.id}>
                  <EditLink to={`/forms/edit/${form.id}`}>{form.title}</EditLink>
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
            : statusMessage()}
        </ListForms>
      </ContainerVerForms>
      {actionsError && (
        <Snackbar setActions={setActionsError} autoHideDuration={2500}>
          <Alert error>{actionsError}</Alert>
        </Snackbar>
      )}
      {actionsSuccess && (
        <Snackbar setActions={setActionsSuccess} autoHideDuration={2500}>
          <Alert>{actionsSuccess}</Alert>
        </Snackbar>
      )}
    </>
  );
}

export default VerForms;
