import React, { useState } from 'react';
import Form from '../../components/FormComponents/Form';
import Title from '../../components/FormComponents/Title';
import Question from '../../components/ViewAnswer/Question';
import SelectAnswer from '../../components/ViewAnswer/SelectAnswer';

// [EU11] [EU10]
function Responses({ formAnswers }) {
  const [index, setIndex] = useState(0);

  return (
    <Form>
      {formAnswers.length ? (
        <>
          <SelectAnswer formAnswers={formAnswers} setIndex={setIndex} index={index} />
          <Title value={formAnswers[index].title} />
          {formAnswers[index].answers?.map((answer, idx) => (
            <Question
              form={formAnswers[index]}
              question={answer}
              questionId={idx}
              value={answer.value}
            />
          ))}
        </>
      ) : (
        <p>Ainda não há respostas</p>
      )}
    </Form>
  );
}

export default Responses;
