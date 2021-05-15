// import { useParams, useHistory } from 'react-router-dom';
import React from 'react';
import Form from '../../components/FormComponents/Form';
import Title from '../../components/FormComponents/Title';
import Question from '../../components/ViewAnswer/Question';

function Responses({ formAnswers }) {
  console.log(formAnswers[0]);
  return (
    <Form>
      <Title value={formAnswers[0].title} />
      {formAnswers[0].answers?.map((answer, index) => (
        <Question form={formAnswers[0]} question={answer} questionId={index} value={answer.value} />
      ))}
    </Form>
  );
}

export default Responses;
