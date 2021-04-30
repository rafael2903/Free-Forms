/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Form } from '../../components/Form/Form/styles';
import FormHeader from '../../components/Form/FormHeader';
import Main from '../../components/Main';
import Title from '../../components/Form/Title';
import Question from '../../components/Form/Question';

function CreateForm() {
  const [form, setForm] = useState(() => ({
    id: 1,
    title: 'Formulário sem título 1',
    questions: [
      { id: 1, title: 'Qual é o seu nome', type: 'text' },
      {
        id: 2,
        title: 'Você gosta de chocolate?',
        type: 'radio',
        options: ['sim', 'não', 'talvez'],
      },
      {
        id: 3,
        title: 'Selecione suas frutas preferidas',
        type: 'checkbox',
        options: ['Maçã', 'Banana', 'Laranja', 'Melancia', 'Mamão'],
      },
    ],
  }));

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Main>
      <FormHeader />
      <Form onSubmit={handleSubmit}>
        <Title
          value={form.title}
          onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
        />
        {form.questions?.map((question) => (
          <Question form={form} setForm={setForm} question={question} />
        ))}
      </Form>
    </Main>
  );
}

export default CreateForm;
