/* eslint-disable no-unused-vars */
import { useParams, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Form from '../../components/FormComponents/Form';
import FormHeader from '../../components/FormComponents/FormHeader';
import Main from '../../components/Main';
import Title from '../../components/FormComponents/Title';
import Question from '../../components/CreateForm/Question';
import StatusMessage from '../../components/StatusMessage';
import api from '../../services/api';
import Button from '../../components/Button';
import ButtonsContainer from '../../components/FormComponents/ButtonsContainer';
import { getUserId } from '../../services/auth';
import { decode } from '../../services/id';

function EditForm() {
  let { id } = useParams();
  [id] = decode(id);

  const history = useHistory();
  const [type, setType] = useState('text');
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() => {
    api
      .get(`/forms/${id}`)
      .then((res) => res.data)
      .then((data) => {
        const jsonForm = JSON.parse(data.question).hash;
        setForm(jsonForm);
        setLoading(false);
      })
      .catch(() => {
        setFetchError(true);
        setLoading(false);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    api
      .put(`/forms/${id}`, { user_id: getUserId(), question: form })
      .then(() => setSuccess(true))
      .catch(() => {
        setSendError(true);
        setLoading(false);
      });
  }

  function statusMessage() {
    if (loading) return <StatusMessage loading />;
    if (success) return <StatusMessage success>Formulário modificado com sucesso!</StatusMessage>;
    if (sendError) return <StatusMessage error>Não foi possível enviar o formulário</StatusMessage>;
    return <StatusMessage error>Não foi possível carregar o formulário</StatusMessage>;
  }

  return (
    <Main>
      <FormHeader />
      <Form onSubmit={handleSubmit}>
        {loading || fetchError ? (
          statusMessage()
        ) : (
          <>
            <Title
              value={form.title}
              onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
            />
            {form.questions?.map((question, index) => (
              <Question form={form} setForm={setForm} question={question} questionId={index} />
            ))}
            <ButtonsContainer className="select-type">
              <Button bold onClick={history.goBack}>
                Adicionar pergunta
              </Button>
              <Button
                as="select"
                value={type}
                onChange={(e) => setType(e.target.value)}
                secondary
                bold
              >
                <option value="text">Texto</option>
                <option value="radio">Múltipla escolha</option>
                <option value="checkbox">Caixas de seleção</option>
              </Button>
            </ButtonsContainer>

            {(success || sendError) && statusMessage()}

            <ButtonsContainer className="actions">
              <Button secondary bold onClick={history.goBack}>
                Cancelar
              </Button>
              <Button bold type="submit">
                Salvar
              </Button>
            </ButtonsContainer>
          </>
        )}
      </Form>
    </Main>
  );
}

export default EditForm;
