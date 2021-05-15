import React, { useState } from 'react';
import Form from '../../components/FormComponents/Form';
import Title from '../../components/FormComponents/Title';
import Question from '../../components/ViewAnswer/Question';
import SelectAnswer from '../../components/ViewAnswer/SelectAnswer';

function Responses({ formAnswers }) {
  const [index, setIndex] = useState(0);

  function nextAnswer() {
    if (index !== formAnswers.length - 1) setIndex((idx) => idx + 1);
  }

  function previousAnswer() {
    if (index !== 0) setIndex((idx) => idx - 1);
  }

  return (
    <Form>
      <SelectAnswer
        email={formAnswers[index].user_email}
        currentAnswer={index + 1}
        totalAnswers={formAnswers.length}
        rightButtonClick={() => nextAnswer()}
        leftButtonClick={() => previousAnswer()}
      />
      <Title value={formAnswers[index].title} />
      {formAnswers[index].answers?.map((answer, idx) => (
        <Question
          form={formAnswers[index]}
          question={answer}
          questionId={idx}
          value={answer.value}
        />
      ))}
    </Form>
  );
}

export default Responses;
