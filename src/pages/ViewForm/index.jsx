/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Form from '../../components/FormComponents/Form';
import Main from '../../components/Main';
import Title from '../../components/FormComponents/Title';
import Question from '../../components/ViewForm/Question';
import api from '../../services/api';
import Button from '../../components/Button';
import StatusMessage from '../../components/StatusMessage';
import ButtonsContainer from '../../components/FormComponents/ButtonsContainer';
import { getUserId } from '../../services/auth';
import { decode } from '../../services/id';

// EU05
function ViewForm() {
  let { id } = useParams();
  [id] = decode(id);

  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [success, setSuccess] = useState(false);

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
      .post('/form_answers', { user_id: getUserId(), form_id: id, answers: form })
      .then(() => setSuccess(true))
      .catch(() => {
        setSendError(true);
        setLoading(false);
      });
  }

  function statusMessage() {
    if (loading) return <StatusMessage loading />;
    if (success) return <StatusMessage success>Formulário enviado com sucesso!</StatusMessage>;
    if (sendError) return <StatusMessage error>Não foi possível enviar o formulário</StatusMessage>;
    return <StatusMessage error>Não foi possível carregar o formulário</StatusMessage>;
  }

  return (
    <Main>
      <Form onSubmit={handleSubmit}>
        {loading || fetchError ? (
          statusMessage()
        ) : (
          <>
            <Title
              value={form.title}
              onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
              autoFocus
              onFocus={(e) => e.target.select()}
              disabled
            />

            {form.questions?.map((question, index) => (
              <Question form={form} setForm={setForm} question={question} questionId={index} />
            ))}

            {(success || sendError) && statusMessage()}

            <ButtonsContainer className="actions">
              <Button bold type="submit">
                Enviar
              </Button>
            </ButtonsContainer>
          </>
        )}
      </Form>
    </Main>
  );
}

export default ViewForm;
