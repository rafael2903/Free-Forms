import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Form from '../../components/FormComponents/Form';
import Title from '../../components/FormComponents/Title';
import Question from '../../components/CreateForm/Question';
import StatusMessage from '../../components/StatusMessage';
import api from '../../services/api';
import Button from '../../components/Button';
import ButtonsContainer from '../../components/FormComponents/ButtonsContainer';
import { getUserId } from '../../services/auth';
import { decode } from '../../services/id';
import TypeSelect from '../../components/FormComponents/TypeSelect';

function EditForm() {
  let { id } = useParams();
  [id] = decode(id);

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

          <TypeSelect form={form} setForm={setForm} />

          {(success || sendError) && statusMessage()}

          <ButtonsContainer className="actions">
            <Button as={Link} secondary bold to="/">
              Voltar
            </Button>
            <Button bold type="submit">
              Salvar
            </Button>
          </ButtonsContainer>
        </>
      )}
    </Form>
  );
}

export default EditForm;
