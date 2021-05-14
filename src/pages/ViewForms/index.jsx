import React, { useEffect, useState } from 'react';
import { HiPlusSm } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { CgCopy } from 'react-icons/cg';
import { FaRegEdit } from 'react-icons/fa';
import { IoEyeOutline, IoShareSocial } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';

import TitleVerForms from '../../components/TitleVerForms';
import Button from '../../components/Button';
import ListForms from '../../components/ListForms';
import FormItem from '../../components/FormItem';
import api from '../../services/api';
import ContainerVerForms from '../../components/ContainerVerForms';
import StatusMessage from '../../components/StatusMessage';
import Snackbar from '../../components/Snackbar';
import Alert from '../../components/Alert';
import { getUserId } from '../../services/auth';
import { encode } from '../../services/id';
import ShareModal from '../../components/ShareModal';
import Search from '../../components/Search';

const ViewForms = () => {
  const [forms, setForms] = useState([]);
  const [filteredForms, setFilteredForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionsError, setActionsError] = useState('');
  const [actionsSuccess, setActionsSuccess] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);
  const [show, setShow] = useState(false);
  const [currentForm, setCurrentForm] = useState(0);
  useEffect(() => {
    api
      .get('/forms')
      .then((res) => res.data)
      .then((data) => {
        const jsonForm = data.map((form) => ({
          id: form.id,
          title: JSON.parse(form.question).hash.title,
          questions: JSON.parse(form.question).hash.questions,
        }));
        setForms(jsonForm);
        setFilteredForms(jsonForm);
        setLoading(false);
      })
      .catch(() => {
        setError('Não foi possível carregar os formulários');
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

  function duplicate(form) {
    api
      .post(`/forms`, {
        user_id: getUserId(),
        question: { title: `Cópia de ${form.title}`, questions: form.questions },
      })
      .then(() => {
        setRefreshKey((oldKey) => oldKey + 1);
        setActionsSuccess('Formulário duplicado');
      })
      .catch(() => {
        setActionsError('Não foi possível duplicar o formulário');
      });
  }

  function statusMessage() {
    if (loading) return <StatusMessage loading />;
    if (error) return <StatusMessage error>{error}</StatusMessage>;
    if (forms.length === 0) return <StatusMessage>Nenhum formulário foi criado</StatusMessage>;
    return <StatusMessage>Formulário não encontrado</StatusMessage>;
  }
  return (
    <>
      <ContainerVerForms>
        <div className="ContainerForms">
          <TitleVerForms>Todos os formulários</TitleVerForms>
          <div className="ButtonsContainer">
            <Button as={Link} to="/forms/create">
              <HiPlusSm size={30} />
              Criar novo formulário
            </Button>
          </div>
        </div>
        <Search searchIn={forms} setFiltered={setFilteredForms} />
        <ListForms>
          {filteredForms.length
            ? filteredForms.map((form) => (
                <FormItem key={form.id}>
                  <p>{form.title}</p>
                  <div>
                    {/* EU17 EU03 */}
                    <IoShareSocial
                      className="link"
                      title="Compartilhar formulário"
                      onClick={() => {
                        setCurrentForm(form.id);
                        setShow(true);
                      }}
                    />
                    <CgCopy
                      className="duplicate"
                      title="Duplicar formulário"
                      onClick={() => duplicate(form)}
                    />
                    <Link to={`/forms/${encode(form.id)}/view`} target="_blank">
                      <IoEyeOutline className="view" title="Visualizar formulário" />
                    </Link>
                    <Link to={`/forms/${encode(form.id)}/edit`}>
                      <FaRegEdit className="edit" title="Editar formulário." />
                    </Link>
                    {/* EU09 */}
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
      <ShareModal show={show} setShow={setShow} formId={currentForm} />
    </>
  );
};

export default ViewForms;
